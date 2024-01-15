const { z } = require("zod");

// creating an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is reqiured" })
    .trim()
    .min(3, { message: "Name must atleast of 3  characters" })
    .max(255, "Name must not be more than 200 characters"),
  email: z
    .string({ required_error: "email is reqiured" })
    .trim()
    .min(3, { message: "Name must atleast of 3  characters" })
    .max(50, "Name must not be more than 200 characters"),
  phone: z
    .string({ required_error: "Phone is reqiured" })
    .trim()
    .min(10, { message: "Phone number must be of 10 digits" })
    .max(10, "Phone number must not be more than 10 digits"),
  password: z
    .string({ required_error: "Password is reqiured" })
    .trim()
    .min(3, { message: "Password must atleast of 3  characters" })
    .max(255, "Password must not be more than 20 characters"),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "Email must be proper" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "PLease enter password correctly" }),
});
module.exports = { signupSchema, loginSchema };
