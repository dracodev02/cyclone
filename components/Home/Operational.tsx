import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import decor3 from "@/public/assets/decor3.png";

const Operational = () => {
  return (
    <div className="relative max-md:mt-20 md:h-screen">
      <div className="absolute -z-[1] w-screen h-full">
        <ImageComp
          src={decor3.src}
          className="absolute right-0 top-20 max-md:blur-sm max-md:brightness-75"
        />
      </div>
      <div className="max-w-desktop px-4 mx-auto">
        <p className="text-title text-white/25 max-md:text-white/50 max-md:text-center max-w-[832px] uppercase">
          operational mechanism
        </p>
        <div className="flex flex-col gap-4 max-w-[900px] mt-[52px]">
          <div className="flex gap-4 flex-wrap">
            <div className="px-8 py-6 border border-primary bg-primary/35 rounded-lg flex-1">
              <p className="capitalize text-2xl max-md:text-base font-bold">
                Withdraw anytime
              </p>
              <p className="mt-2">{`Don’t want to participate anymore? You can withdraw your assets at any time without penalties.`}</p>
            </div>
            <div className="px-8 py-6 border border-primary bg-primary/35 rounded-lg basis-full md:basis-[286px]">
              <p className="capitalize text-2xl max-md:text-base font-bold">
                Withdraw anytime
              </p>
              <p className="mt-2">{`Select a pool and stake your tokens to receive lottery tickets.`}</p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="px-8 py-6 border border-primary bg-primary/35 rounded-lg flex-1">
              <p className="capitalize text-2xl max-md:text-base font-bold">
                Withdraw anytime
              </p>
              <p className="mt-2">{`Don’t want to participate anymore? You can withdraw your assets at any time without penalties.`}</p>
            </div>
            <div className="px-8 py-6 border border-primary bg-primary/35 rounded-lg basis-full md:basis-[387px]">
              <p className="capitalize text-2xl max-md:text-base font-bold">
                Withdraw anytime
              </p>
              <p className="mt-2">{`Select a pool and stake your tokens to receive lottery tickets.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operational;
