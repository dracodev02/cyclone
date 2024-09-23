"use client";
import { useInView } from "react-intersection-observer";
// import KeyFeatures from "@/components/Home/KeyFeatures";
import Operational from "@/components/Home/Operational";
import Rewards from "@/components/Home/Rewards";
import WhyDifferent from "@/components/Home/WhyDifferent";
import WhyUs from "@/components/Home/WhyUs";
import Model from "@/components/Home/Model";
import PrivacyMatters from "@/components/Home/PrivacyMatters";
import Involved from "@/components/Home/Involved";

function SectionWrapper({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
        <Rewards />
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
        <PrivacyMatters />
      </SectionWrapper>
      {/* <SectionWrapper>
        <KeyFeatures />
      </SectionWrapper> */}
      <SectionWrapper>
        <WhyDifferent />
      </SectionWrapper>
      <SectionWrapper>
        <Involved />
      </SectionWrapper>
    </div>
  );
}
