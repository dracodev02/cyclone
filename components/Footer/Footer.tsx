import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import logo_cyclone from "@/public/assets/cyclone_logo_header.svg";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  const Separate = () => {
    return <div className="h-6 w-[1px] min-w-[1px] bg-[#D5A2FE]"></div>;
  };

  return (
    <div>
      <div className="max-w-desktop px-4 mx-auto pt-10 pb-[72px] flex flex-col gap-6 justify-center items-center">
        <ImageComp src={logo_cyclone.src} className="h-full w-fit" />
        <div className="flex gap-8 items-center">
          <BsTwitterX className="text-2xl" />
          <Separate />
          <FaDiscord className="text-2xl" />
          <Separate />
          <FaTelegram className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
