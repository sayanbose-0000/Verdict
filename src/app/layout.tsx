import { archivo } from "@/fonts/font";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verdict- Home",
  description: "Share opinion about anything"
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en">
      <body className={`${archivo.className}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;