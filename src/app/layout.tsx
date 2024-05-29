import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SignInAuth from "@/components/SignInAuth";

import { ApolloWrapper } from "./ApolloWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monluminati",
  description: "Monluminati"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <SessionProvider basePath="/api/auth">
            <div className="root--skeleton">
              <SignInAuth />
              <Header />
              {children}
              <Footer />
            </div>
          </SessionProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
