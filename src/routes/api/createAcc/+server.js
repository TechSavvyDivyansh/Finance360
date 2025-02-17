import { connectToDatabase } from "$lib/db";
import { User_db } from "$lib/models/user_model";
import bcrypt from "bcryptjs";


export async function POST({request}){
    const formData = await request.json();

    await connectToDatabase();

    const existingUser=await User_db.findOne({email:formData.email});

    if(existingUser){
        return new Response(
            JSON.stringify({ message: 'Email already exists. Try logging in.' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
          );
    }

    const hashedPass=await bcrypt.hash(formData.password,10)

    try {
        
        const user_doc=new User_db({
            ...formData,
            password:hashedPass
        })

        await user_doc.save()

        return new Response(
            JSON.stringify({ message: 'User created successfully' }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
          );

    } catch (error) {
        console.error('Error creating user:', error);
        return new Response(
            JSON.stringify({ error: 'Server error, please try again later' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
          );
    }
}