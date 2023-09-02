import Image from "next/image";
import Logo from "/public/Logolr.png";
import Link from "next/link";
export const Header = () => {
  return (
    <div>
      <div className="flex flex-row  items-center pl-40 pt-4">
        <div className="flex  flex-row ">
          <button className="flex-1 w-8">Home</button>
          <button className="flex-1 w-12">About</button>
          <button className="flex-1 w-32">
            Projects
            {/* <div className="dropdown">
              <ul className="dropdown-menu">
                <li className="dropdown-item">Option 1</li>
                <li className="dropdown-item">Option 2</li>
                <li className="dropdown-item">Option 3</li>
              </ul>
            </div> */}
          </button>
        </div>
        <div className="flex pl-10">
          <Image src={Logo} alt="logo" width={80} height={80} />
        </div>
        <div className="flex-initial w-[700px]  font-bold pl-5">
          Hospitality and Leisure Interior Design
        </div>
        <Link href={"/contact-us"}>
          <button className="flex transition duration-500  w-24 h-10 text-black bg-white border-black border hover:bg-black hover:text-white text-sm justify-center items-center ">
            Contact
          </button>
        </Link>

        <div></div>
      </div>
    </div>
  );
};
