import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import decor1 from "@/public/assets/decor1.png";
import decor2 from "@/public/assets/decor2.png";

const Rewards = () => {
  return (
    <div className="mt-10 relative">
      <div className="absolute w-screen h-full z-[-1]">
        <ImageComp
          src={decor1.src}
          className="absolute right-0 max-md:blur-sm max-md:brightness-75"
        />
        <ImageComp
          src={decor2.src}
          className="absolute top-[400px] left-0 max-md:blur-sm max-md:brightness-75 max-md:hidden"
        />
      </div>
      <div className="max-w-desktop px-4 mx-auto">
        <div className="max-w-[690px] md:h-screen">
          <p className="capitalize text-[64px] max-md:text-[36px] max-w-[545px] font-oswald">
            revolutionizing staking with{" "}
            <span className="text-[#E0228C]">lottery rewards</span>
          </p>
          <p className="text-2xl max-md:text-base">
            Stake your tokens, earn lottery tickets, and stand a chance to win
            valuable prizes—staking has never been this exciting
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
