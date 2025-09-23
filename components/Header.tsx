import Link from "next/link";
import Image from "next/image";
import { headerLinks } from "@/constants/layout";

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full bg-transparent z-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-between py-[4rem] border-b-1'>
        {/* Logo */}
        <Link href='/' className='text-white text-2xl font-light tracking-widest'>
          <Image src='/logo.svg' alt='DeliArt Logo' width={120} height={40} />
        </Link>

        {/* Navigation */}
        <nav className='hidden md:flex text-sm space-x-8'>
          {headerLinks.map((link) => (
            <Link key={link.href} href={link.href} className='text-white hover:text-gray-300 transition-colors'>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
