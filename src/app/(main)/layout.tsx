import { archivo } from "@/fonts/font";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Verdict- Register",
  description: "Start your journey in to the world of anonymous opinions"
};

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html>
      <body className={`${archivo.className}`}>
        {children}
      </body>
    </html>
  );
};

export default HomeLayout;