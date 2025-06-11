// lib/fonts.ts
import { Prompt, Poppins } from "next/font/google";

export const prompt = Prompt({
  subsets: ["thai"],
  weight: ["400", "500", "700"],
  variable: "--font-prompt",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
});
