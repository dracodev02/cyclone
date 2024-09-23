const Model = () => {
  return (
    <div className="max-w-desktop px-4 mx-auto">
      <div className="w-full flex flex-col md:items-end md:text-end md:h-screen max-md:mt-20">
        <p className="uppercase text-white/25 max-md:text-white/50 text-center text-title font-semibold">
          new model
        </p>
        <div className="max-w-[990px] mt-[52px]">
          <p className="text-[32px] capitalize max-md:text-2xl">
            What is Cyclone?
          </p>
          <p className="text-2xl max-md:text-base mt-6 font-normal">
            {`Cyclone is a powerful coin mixer protocol built on Starknet, designed to enhance privacy and security by making your transactions anonymous and difficult to trace. Our protocol mixes your cash flows with others' on-chain, obscuring the origin and destination of your funds, ensuring ultimate privacy.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Model;
