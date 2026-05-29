import type { Metadata } from "next";

import "./globals.css";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    default: "NOTESBUDDY",
    template: "%s | NOTESBUDDY",
  },
  description: "A NOTES SHARING PLATFROM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ClerkProvider>
          <header >
           
            
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
