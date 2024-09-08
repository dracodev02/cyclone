import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import decor4 from "@/public/assets/decor4.png";

type ItemsProps = {
  title: string;
  description: string;
};

const KeyFeatures = () => {
  const items: ItemsProps[] = [
    {
      title: "Lottery-Based Rewards",
      description: "A chance to win big with each draw.",
    },
    {
      title: "Prize scaling",
      description: "The more you stake, the bigger your potential rewards.",
    },
    {
      title: "Flexible Staking Options",
      description: "Stake as much or as little as you want, with no lock-up.",
    },
    {
      title: "Instant withdrawals",
      description: "Withdraw your tokens anytime, no penalties.",
    },
  ];

  return (
    <div className="bg-[#3A1AA359] relative max-md:mt-20 py-20">
      <div className="absolute w-screen h-full -z-[1]">
        <ImageComp
          src={decor4.src}
          className="absolute left-0 top-0 max-md:blur-sm max-md:brightness-75"
        />
      </div>
      <div className="max-w-desktop px-4 mx-auto">
        <p className="uppercase text-title text-center text-primary">
          key features
        </p>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 mt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="px-8 py-6 border border-[#3A1AA3] bg-[#3A1AA380] rounded-lg flex-1"
            >
              <p className="capitalize text-2xl max-md:text-base font-bold">
                {item.title}
              </p>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
