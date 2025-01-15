import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../Schema/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables.");
}

const validateInput = (user: {
  username: string | null;
  email: string | null;
  password: string;
}): string | null => {
  if (!user.username && !user.email) {
    return "Username/Email is required";
  }
  if (!user.password) {
    return "Password is required";
  }
  return null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { username, email, password } = req.body;

  const validationError = validateInput({ username, email, password });

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const { data, error } = await supabase
      .from("user")
      .select("id,password,username")
      .eq(username ? "username" : "email", username ? username : email)
      .single();

    if (error || !data) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, data.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: data.id, username: data.username },
      JWT_SECRET!,
      { expiresIn: "7d" }
    );

    return res
      .status(200)
      .json({ success: true, message: "Login Successful", token });
  } catch (error: any) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
