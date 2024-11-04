import React, { ReactNode } from "react";
import "./globals.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
      <div className="min-h-screen">
        <header className="flex items-center justify-center h-14">
          <h1 className="text-4xl font-bold text-blue-500">header</h1>
        </header>
        <main>{children}</main>
        <footer className="min-h-14">
        </footer>
      </div>
  );
}

export default Layout;



