"use client";

import Header from "@/components/module/Header";
import Footer from "@/components/module/Footer";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import AuthModal from "@/components/module/auth/AuthModal";

const vazir = localFont({
  src: [
    {
      path: "../public/fonts/Vazirmatn-Regular.woff2",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <html lang="en">
      <body className={vazir.className}>
        <Header setShowModal={setShowModal} />
        {children}
        <Toaster position="top-center" />
        {showModal && <AuthModal onClose={() => setShowModal(false)} />}
        <Footer />
      </body>
    </html>
  );
}
