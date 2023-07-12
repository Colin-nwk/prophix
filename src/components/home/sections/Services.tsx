import Button from "../../general/Button";
import Heading from "../../general/Heading";

import { worker } from "../../../utils/image/index";

import AboutItem from "../AboutItem";

const Services = () => {
  return (
    <section id="services" className="bg-[#f5f1f1] w-full h-full py-20">
      <div className="flex flex-col justify-between items-center gap-[80px] mx-auto px-4 md:mx-[100px]">
        <div className="flex justify-center items-center gap-[24px]">
          <Button text="SERVICE PROVIDER" type="secondary" />
          <Button text="HIRE HANDYMAN" type="tertiary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-[40px]">
          <div className=" place-self-center">
            <img src={worker} alt="Prophix Logo" className="w-full h-full " />
          </div>
          <div className="">
            {" "}
            <Heading text1="Earn More" text2="At Prophix" />
            <div className="flex flex-col gap-6 space-between mb-6 mt-[40px] ">
              <AboutItem
                title="Expanding Your Reach"
                content=" Our platform connects you directly with a vast customer base
                    actively seeking your expertise. Expand your reach and
                    maximize your earning potential by tapping into a network of
                    Users eager to hire skilled professionals like yourself"
                digit="1"
              />
              <AboutItem
                title="Join Prophix and Earn"
                content="With Prophix, you no longer have to worry about chasing payments
or dealing with delayed transactions. Our secure payment system
ensures that you receive prompt and hassle-free payments for your
services."
                digit="2"
              />
              <AboutItem
                title="Trust and Credibility"
                content="Stand out from the competition with a compelling profile that
showcases your skills, experience, and customer reviews. Prophix
offers you a dedicated platform to highlight your unique expertise,
allowing potential customers to easily discover and choose you for
their home improvement projects"
                digit="3"
              />
              <AboutItem
                title="Dedicated Support"
                content=" Prophix is more than just a platform; we re your partner in success.
Our dedicated support team is here to assist you every step of the
way. From onboarding to troubleshooting, we provide personalized
support to help you thrive in your business"
                digit="4"
              />
            </div>
            <Button text="HIRE A HANDYMAN" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
