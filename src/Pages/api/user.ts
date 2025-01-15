import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { supabase } from "../../Schema/db";

const validateInput = (user: {
  username: string;
  password: string;
  email: string;
}): string | null => {
  if (!user.username || !user.password || !user.email) {
    return "All fields are required.";
  }
  if (!/\S+@\S+\.\S+/.test(user.email)) {
    return "Invalid email format.";
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

  const { username, password, email } = req.body;

  // Validate input
  const validationError = validateInput({ username, password, email });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into Supabase
    const { error } = await supabase.from("user").insert([
      {
        username,
        password: hashedPassword,
        email,
        last_login: new Date(),
      },
    ]);

    if (error) {
      throw new Error(error.message);
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
