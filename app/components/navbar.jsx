"use client";
import Link from "next/link";
import Image from "next/image";

function Navbar() {

  return (
    <nav className="bg-transparent relative z-50">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={20}
        className="absolute top-0 -z-10"
      />
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-4xl font-bold">
            <Image
              src="/image/logo.png"
              alt="Hero"
              width={130}
              height={70}
            />
          </Link>
        </div>
        <ul
          className="font-poppins mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <a
              className="block px-4 py-2 no-underline font-bold hover:no-underline"
              href="#about"
            >
              <div className="text-sm transition-colors duration-300 hover:text-pink-600">
                About
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline font-bold hover:no-underline"
              href="#education"
            >
              <div className="text-sm transition-colors duration-300 hover:text-pink-600">
                Education
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline font-bold hover:no-underline"
              href="#experience"
            >
              <div className="text-sm transition-colors duration-300 hover:text-pink-600">
                Experience
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline font-bold hover:no-underline"
              href="#projects"
            >
              <div className="text-sm transition-colors duration-300 hover:text-pink-600">
                Projects
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline font-bold hover:no-underline"
              href="#skills"
            >
              <div className="text-sm transition-colors duration-300 hover:text-pink-600">
                Skills
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline font-bold hover:no-underline"
              href="#contact"
            >
              <div className="text-sm transition-colors duration-300 hover:text-pink-600">
                Contact
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;