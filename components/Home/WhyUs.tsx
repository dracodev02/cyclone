const WhyUs = () => {
  return (
    <div className="max-w-desktop px-4 mx-auto flex flex-col md:items-end max-md:mt-20 md:h-screen">
      <p className="text-title text-white/25 max-md:text-white/50 text-center uppercase md:text-end">
        Why us
      </p>
      <div className="flex flex-col gap-4 mt-[52px] w-full md:pl-20">
        <div className="flex gap-4 flex-wrap">
          <div className="px-8 py-6 border border-darkPrimary bg-darkPrimary/35 rounded-lg flex-1">
            <p className="capitalize text-2xl max-md:text-base font-bold">
              Increased Rewards
            </p>
            <p className="mt-2">{`The more you stake and the longer you stay, the higher your reward potential.`}</p>
          </div>
          <div className="px-8 py-6 border border-darkPrimary bg-darkPrimary/35 rounded-lg basis-full md:basis-[487px]">
            <p className="capitalize text-2xl max-md:text-base font-bold">
              Exciting Lottery Rewards
            </p>
            <p className="mt-2">{`Win valuable gifts instead of earning fixed interest rates.`}</p>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="px-8 py-6 border border-darkPrimary bg-darkPrimary/35 rounded-lg basis-full md:basis-[487px]">
            <p className="capitalize text-2xl max-md:text-base font-bold">
              Built on StarkNet
            </p>
            <p className="mt-2">{`Built on Starknet technology for transparency and security.`}</p>
          </div>
          <div className="px-8 py-6 border border-darkPrimary bg-darkPrimary/35 rounded-lg flex-1">
            <p className="capitalize text-2xl max-md:text-base font-bold">
              Flexible staking
            </p>
            <p className="mt-2">{`No lock-up periods. Stake, earn, and withdraw whenever you want.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
