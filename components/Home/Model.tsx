const Model = () => {
  return (
    <div className="w-full flex flex-col md:items-end md:text-end md:h-screen max-md:mt-20">
      <p className="uppercase text-white/25 max-md:text-white/50 text-center text-title font-semibold">
        new model
      </p>
      <div className="max-w-[990px] mt-[52px]">
        <p className="text-[32px] capitalize max-md:text-2xl">
          Pioneering innovation
        </p>
        <p className="text-2xl max-md:text-base mt-6">
          MagikPool is a groundbreaking crypto project that redefines the
          staking experience. Instead of receiving fixed interest rates, users
          can stake their tokens in our pools to earn lottery tickets.
          <br />
          <br />
          The longer and more you stake, the better your chances of winning
          valuable rewards in our periodic prize draw. Plus, you can withdraw
          your assets anytime — no strings attached.
        </p>
      </div>
    </div>
  );
};

export default Model;
