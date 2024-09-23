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
              on-chain privacy
            </p>
            <p className="mt-2">{`Transactions become difficult to trace, protecting your financial data.`}</p>
          </div>
          <div className="px-8 py-6 border border-darkPrimary bg-darkPrimary/35 rounded-lg basis-full md:basis-[487px]">
            <p className="capitalize text-2xl max-md:text-base font-bold">
              Fast & secure
            </p>
            <p className="mt-2">{`Cyclone ensures swift transactions while keeping your identity protected.`}</p>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="px-8 py-6 border border-darkPrimary bg-darkPrimary/35 rounded-lg basis-full md:basis-[487px]">
            <p className="capitalize text-2xl max-md:text-base font-bold">
              Built on StarkNet
            </p>
            <p className="mt-2">{`Benefit from Starknet’s scalability and low fees while staying anonymous.`}</p>
          </div>
          <div className="px-8 py-6 border border-darkPrimary bg-darkPrimary/35 rounded-lg flex-1">
            <p className="capitalize text-2xl max-md:text-base font-bold">
              Easy to use
            </p>
            <p className="mt-2">{`Simple, user-friendly interface to protect your privacy with just a few clicks.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
