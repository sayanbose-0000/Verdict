import NavbarComp from "@/components/navbar/NavbarComp";
import { archivo } from "@/fonts/font";

const DashBoardLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en">
      <body className={`${archivo.className}`}>
        <NavbarComp />
        {children}
      </body>
    </html>
  );
};

export default DashBoardLayout;