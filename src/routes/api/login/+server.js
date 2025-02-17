import { connectToDatabase } from "$lib/db";
import { User_db } from "$lib/models/user_model";
import bcrypt from "bcryptjs";


export async function POST({request}){
    const {username,password} = await request.json();

    await connectToDatabase();

    const existingUser=await User_db.findOne({email:username});

    if(!existingUser){
        return new Response(
            JSON.stringify({ message: 'User not Found Please create a new account' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
          );
    }

    const isPasswordValid=await bcrypt.compare(password,existingUser.password)

    if (!isPasswordValid) {
        return new Response(
            JSON.stringify({ error: "Invalid email or password." }),
            { status: 401, headers: { "Content-Type": "application/json" } }
        );
    }

    
    
    const { password: _, ...userData } = existingUser.toObject()
    

    // If authentication is successful, return success response
    return new Response(
        JSON.stringify({ message: "Login successful", userData: userData }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
}