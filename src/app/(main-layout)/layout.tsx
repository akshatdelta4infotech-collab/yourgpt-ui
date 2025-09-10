import { Metadata } from "next";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "YourGPT UI",
  description:
    "An open-source UI component library and design system used by YourGPT.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto border border-dotted border-t-0 border-b-0 flex-1">
          {children}
        </div>
      </main>
    </>
  );
}
