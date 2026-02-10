import localFont from "next/font/local";

export const prompt = localFont({
  src: "../../public/fonts/Poppins-Regular.ttf",
  // src: "/public/assets/fonts/Poppins-Regular.ttf",
  variable: "--font-prompt", // optional (ใช้กับ Tailwind)
  display: "swap",
});
export const promptBold = localFont({
  src: "../../public/fonts/Poppins-Bold.ttf",
  variable: "--font-prompt-bold", // optional (ใช้กับ Tailwind)
  display: "swap",
});