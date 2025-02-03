import { archivo } from "@/fonts/font";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verdict",
  description: "Share your opinions on anything"
};

const IdLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html>
      <body className={archivo.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default IdLayout;