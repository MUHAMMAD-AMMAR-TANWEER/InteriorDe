import Image from "next/image";
import PrivacyImage from "/public/PrivacyImage.jpg";
import PrivacyText from "/public/privacytext.jpg";
import Hotel1 from "/public/Hotel1.jpg";
import Hotel2 from "/public/Hotel2.jpg";
import Hotel3 from "/public/Hotel3.jpg";
export default function Home() {
  return (
    <div>
      <div className="flex flex-row  pl-44 pt-16 bg-lyellow justify-between">
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex text-3xl font-bold text-lbrown">
              GORSE HILL HOTEL
            </div>

            <div className="flex justify-between ">
              <div className=" text-xl font-bold pt-10">
                PROJECT TYPE
                <p className="pt-3 text-sm font-light">Hotel</p>
              </div>
              <div className=" text-xl font-bold pt-10 ">
                LOCATION
                <p className="pt-3 text-sm font-light">Surry , UK</p>
              </div>
            </div>

            <div className="flex pb-20">
              <div className=" text-xl font-bold pt-10">
                STYLE
                <p className="pt-3 text-sm font-light">Art Deco Inspired</p>
              </div>
              <div className=" text-xl font-bold pt-10 pl-60">
                YEAR
                <p className="pt-3 text-sm font-light">2018</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <p className="pt-48 pl-40 line-clamp-3">
            This Victorian Mansion House has now been given the interior it
            deserves. Using all the existing features and highlighting them with
            fresh yet sensitive design.
          </p>
        </div>
      </div>
      <Image src={Hotel1} alt="Hotel One" className="px-72" />
      <Image src={Hotel2} alt="Hotel One" className="px-72" />
      <Image src={Hotel3} alt="Hotel One" className="px-72" />
    </div>
  );
}
