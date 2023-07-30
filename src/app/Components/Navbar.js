import Image from "next/image";
import Link from "next/link";

const Navbar = () => (
  <header className="bg-transparent border-white-200 mx-[10rem]">
    <div className="container mx-auto flex items-center justify-between py-4">
      <Link href="/">
        <Image src={"/images/logo.png"} width={194} height={32} alt=""></Image>
      </Link>

      <nav>
        <ul className="flex items-center space-x-8">
          <li>
            <Link href="/">
              <p className="text-white font-semibold">Home</p>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <p className="text-white font-semibold">Chat</p>
            </Link>
          </li>
          {/* <li>
            <Link href="/contact">
              <p className="text-black-900 hover:text-gray-600">
                Contact Us
              </p>
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
