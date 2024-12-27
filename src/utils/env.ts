import dotenv from "dotenv";

dotenv.config();

export const CLOUDINARY_API_KEY: string = process.env.CLOUDINARY_API_KEY || "";
export const CLOUDINARY_API_SECRET: string =
  process.env.CLOUDINARY_API_SECRET || "";
export const CLOUDINARY_CLOUD_NAME: string =
  process.env.CLOUDINARY_CLOUD_NAME || "";
export const DATABASE_URL: string = process.env.DATABASE_URL || "";

export let SECRET: string = process.env.SECRET || "secret";
SECRET="37c7efa3a2f357f28d76589086da0286"