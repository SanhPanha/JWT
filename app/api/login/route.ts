import { serialize } from "cookie";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    // Parse the request body to get the email and password
    const body = await req.json();
    const { email, password } = body;

    // Make a POST request to the Our API
    const response = await fetch(
        `${process.env.DJANGO_API_URL}/api/user/login/`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: "", password: ""}),
        });
    
    const data = await response.json();
    console.log(data);

}
    