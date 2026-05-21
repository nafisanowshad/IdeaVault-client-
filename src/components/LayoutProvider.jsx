'use client';

import { usePathname } from 'next/navigation';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutProvider({ children }) {
  const pathname = usePathname();

  const disableNavbarFooter = ['/login', '/register']; 
  const shouldHide = disableNavbarFooter.includes(pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      <main>{children}</main>
      {!shouldHide && <Footer />}
    </>
  );
}