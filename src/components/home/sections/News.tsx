import Heading from "../../general/Heading";

import { punch, tech, user1, user2, user3 } from "../../../utils/image/index";
import ReviewItem from "../ReviewItem";
import Banner from "../Banner";

const News = () => {
  return (
    <section id="news" className="bg-[#f5f1f1] w-full h-full py-20 ">
      <div className="md:mx-[100px] mx-4 ">
        <div>
          <div className="text-center mb-[80px]">
            <Heading text1="news" text2="" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between items-center">
            {" "}
            <div className="bg-white p-4 rounded-lg">
              <div className="flex flex-col gap-6 justify-between items-center">
                <div className="bg-[#AAA] w-full h-72 md:h-[445px] flex justify-center items-center rounded-lg ">
                  <img
                    src={punch}
                    alt="punch"
                    className="w-fit h-fit rounded-lg"
                    // width={40}
                    // height={20}
                  />
                </div>
                <h3 className="uppercase font-semibold font-mont text-lg underline text-[#161925]">
                  Prophix Expands Service Coverage, Now Available in Cities
                  Nationwide!
                </h3>
                <p className="mb-5">
                  Prophix, the leading handyman service, is excited to announce
                  its recent service expansion into major cities across the
                  country. With this expansion, Prophix aims to provide reliable
                  and convenient services to a larger customer base
                </p>
                <a href="" className="underline self-start text-main font-bold">
                  Read News
                </a>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex flex-col gap-6 justify-between items-center">
                <div className="bg-[#AAA] w-full  h-72 md:h-[445px] flex justify-center items-center rounded-lg ">
                  <img
                    src={tech}
                    alt="Prophix Logo"
                    className="w-fit h-fit rounded-lg p-6 md:p-0"
                    // width={40}
                    // height={20}
                  />
                </div>
                <h3 className="uppercase font-semibold font-mont text-lg underline text-[#161925]">
                  ntroducing Prophix+: Exclusive Benefits for Homeowners and
                  Service Providers.
                </h3>
                <p className="mb-5">
                  Prophix is thrilled to announce the launch of its new rewards
                  program, designed to show appreciation to its loyal customers.
                  As part of the program, passengers can earn exciting rewards
                  and exclusive benefits with every ride
                </p>
                <a href="" className="underline self-start text-main font-bold">
                  Read News
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* customer reviews */}
        <div className="">
          <div className="text-center my-[80px]">
            <Heading text1="Customer" text2=" Reviews" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start justify-between gap-8 border-gray-950">
            <ReviewItem
              comment={`" The platform connected me with a skilled
professional who completed the job with
precision and efficiency. The transparent
pricing and easy communication ensured
a smooth experience from start to finish.
Highly recommended!
"`}
              photo={user3}
              name="Kowthar. A"
              role="CEO Amirah Wigs"
            />
            <ReviewItem
              comment={`"I used Prophix to find a handyman for a
minor repair, and I was impressed with
the quality of service. The service provider
arrived on time, was courteous, and did an
excellent job. Nonetheless, I will definitely
use Prophix again for future projects.
"`}
              photo={user1}
              name="Mike. b"
              role="driver, beta test"
            />
            <ReviewItem
              comment={`"I recently used Prophix to find a painter
for my home, and I m satisfied with the
service I received. The painter I hired was
meticulous and completed the job on
time. My only suggestion would be to
improve the response time of customer
support.
"`}
              photo={user2}
              name="Miller. w"
              role="CEO Mills transport"
            />
          </div>
        </div>
        <div className="mt-[80px]">
          <Banner />
        </div>
      </div>
    </section>
  );
};

export default News;
