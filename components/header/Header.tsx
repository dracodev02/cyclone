import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import logo_cyclone from "@/public/assets/cyclone_logo_header.svg";

const Header = () => {
  return (
    <div className="max-w-desktop px-4 mx-auto h-[72px]">
      <ImageComp src={logo_cyclone.src} className="h-full w-fit" />
    </div>
  );
};

export default Header;
