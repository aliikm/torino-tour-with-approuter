"use client";

import Header from "@/components/module/Header";
import Footer from "@/components/module/Footer";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import AuthModal from "@/components/module/auth/AuthModal";
import { AuthContext, AuthProvider } from "@/app/authcontext/AuthContext";
import Providers from "./utils/Providers";
import "./globals.css";

// const vazir = localFont({
//   src: [
//     {
//       path: "/fonts/Vazirmatn-Regular.woff2",
//       style: "normal",
//     },
//   ],
// });

// export const metadada =
// {
//   metadataBase: new URL("http://localhost:3000"),

//   title :{
//     "default": "تورینو",
//     template :" %s| تورینو"
//   } ,

//   description : "مجری بهترین تورهای داخلی و خارجی"
// }

/* <meta name="viewport" content="width=device-width, initial-scale=1" />; */

export default function RootLayout({ children }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <html lang="fa">
      <body>
        <AuthProvider>
          <Providers>
            <Header setShowModal={setShowModal} />
            {children}
            <Toaster position="top-center" />
            {showModal && <AuthModal onClose={() => setShowModal(false)} />}
            <Footer />
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
