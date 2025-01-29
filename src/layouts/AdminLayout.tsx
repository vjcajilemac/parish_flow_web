import { Footer } from "@/components/admin/Footer";
import Header from "@/components/admin/Header";
import { SideBar } from "@/components/admin/SideBar";
import React from "react";

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-screen min-w-screen flex flex-row 0">
      {/* Sidebar content */}

      <aside className="w-[15%] bg-gray-800 bg-white shadow-md text-white p-4">
        <SideBar />
      </aside>
      <div className="flex flex-col bg-white shadow h-[100vh] w-[85%] ">
        {/* Header content */}
        <header className="flex flex-col h-[8%] w-[100%]">
          <Header/>
        </header>

        {/* Main content */}
        <main className="flex flex-col justify-center items-center h-[87%] w-[100%]  ">
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
};
