import ImageComp from "@/package/@ui-kit/Image/ImageComp";

const PrivacyMatters = () => {
  return (
    <div className="bg-[#3A1AA359] py-[84px] relative overflow-hidden max-md:mt-20">
      <div className="absolute h-full -z-[1] w-1/2 top-0">
        <ImageComp
          src={"/assets/decor4.png"}
          className="absolute left-0 top-0 max-md:blur-sm max-md:brightness-75"
        />
      </div>
      <div className="max-w-desktop px-4 mx-auto">
        <p className="uppercase text-title !text-[72px] max-md:!text-[60px] text-center text-[#7851FA]">
          privacy matters
        </p>
        <p className="text-center max-w-[890px] mx-auto mt-3">
          {`In a world where transparency is paramount, privacy is often overlooked. Cyclone ensures that your transactions remain confidential, giving you full control over your financial data. Whether you're protecting your assets or value privacy, Cyclone offers a solution built for you.`}
        </p>
      </div>
    </div>
  );
};

export default PrivacyMatters;
