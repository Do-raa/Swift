"use server"

import { connectDB } from "@/app/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

import * as z from "zod"
import { SignUpFormSchema } from "@/schemas/index"

export const Register = async (values: z.infer<typeof SignUpFormSchema>) => {
  try {
    // Validate input fields using Zod schema
    const validatedFields = SignUpFormSchema.safeParse(values);

    if (!validatedFields.success) {
      return {
        errors: "Invalid fields",
      };
    }

    const { email, password, name } = values;

    // Connect to the database
    await connectDB();

    // Check if the user already exists
    const userFound = await User.findOne({ email });

    if (userFound) {
      return {
        error: "Email already exists!",
      };
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    return { success: "Account created successfully!" };

  } catch (e) {
    console.log(e);
  }
}


