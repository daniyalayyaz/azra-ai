import Image from "next/image";
import Link from "next/link";

const Navbar = () => (
  <header className="bg-transparent border-white-200 mx-[6rem]">
    <div className="container mx-auto">
      <div className=" flex items-center justify-between py-[50px] ">
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            width={194}
            height={32}
            alt=""
          ></Image>
        </Link>

        <nav>
          <ul className="flex items-center space-x-8 pt-[13px] pb-[20px] text-white semiboldfont">
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>

            <li>
              <Link href="/chatbot">
                <p>Chat</p>
              </Link>
            </li>
            {/* <li>
            <Link href="/contact">
              <p>
                Contact Us
              </p>
            </Link>
          </li> */}
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Navbar;
