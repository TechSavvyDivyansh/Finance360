import { connectToDatabase } from "$lib/db";
import { User_db } from "$lib/models/user_model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST({ request,cookies }) {
    const { username, password } = await request.json();

    await connectToDatabase();

    const existingUser = await User_db.findOne({ email: username });

    if (!existingUser) {
        return new Response(
            JSON.stringify({ message: "User not Found. Please create a new account." }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
        return new Response(
            JSON.stringify({ error: "Invalid email or password." }),
            { status: 401, headers: { "Content-Type": "application/json" } }
        );
    }

    // Generate JWT Token
    const token = jwt.sign(
        { userId: existingUser._id },
        JWT_SECRET,
        { expiresIn: "7d" }
    );

    // Remove password before sending user data
    const { password: _, ...userData } = existingUser.toObject();


    // ✅ Store JWT token securely using SvelteKit's cookies API
    cookies.set("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 // 7 days
    });

    return new Response(
        JSON.stringify({ message: "Login successful", CurrentUser: userData }),
        { status: 200 }
    );
}
