"use client";
import { useInView } from "react-intersection-observer";
import KeyFeatures from "@/components/Home/KeyFeatures";
import Operational from "@/components/Home/Operational";
import RewardsAndModel from "@/components/Home/RewardsAndModel";
import WhyDifferent from "@/components/Home/WhyDifferent";
import WhyUs from "@/components/Home/WhyUs";
import Model from "@/components/Home/Model";

function SectionWrapper({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Hiện chỉ một lần khi người dùng scroll tới
    threshold: 0.2, // Phần trăm của phần tử cần xuất hiện trước khi kích hoạt
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <SectionWrapper>
        <RewardsAndModel />
      </SectionWrapper>
      <SectionWrapper>
        <Model />
      </SectionWrapper>
      <SectionWrapper>
        <Operational />
      </SectionWrapper>
      <SectionWrapper>
        <WhyUs />
      </SectionWrapper>
      <SectionWrapper>
        <KeyFeatures />
      </SectionWrapper>
      <SectionWrapper>
        <WhyDifferent />
      </SectionWrapper>
    </div>
  );
}
