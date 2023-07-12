import FaqItem from "../FaqItem";

const Faq = () => {
  return (
    <section id="" className="mx-4 md:mx-[100px] py-[80px] font-mont">
      <div className="max-w-[569px]">
        <h4 className="text-main text-base mb-10">
          FREQUENTLY ASKED QUESTIONS
        </h4>
        <h3 className="font-semibold text-xl md:text-[40px] tracking-tighter mb-5">
          Everything you need to know
        </h3>
        <p className="text-base mb-10 tracking-tighter">
          If you have any other questions you want to ask, feel free to{" "}
          <span className="text-main">reach out to us</span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center gap-8">
        <FaqItem
          title="What is Prophix"
          content=" Whether you require repairs, renovations, or various handyman
            services, Prophix simplifies the process by providing a trusted
            network of service providers, streamlined scheduling, transparent
            pricing, and a seamless user experience"
        />
        <FaqItem
          title="Can I trust the service providers on Prophix?"
          content="Absolutely! Trust is a fundamental aspect of our
platform. We carefully screen and verify all
service providers before they join Prophix.
Additionally, our user review system allows users
to provide feedback and rate their experiences,
promoting transparency and accountability."
        />
        <FaqItem
          title="What types of services are available on Prophix?"
          content="Prophix offers a wide range of services to cater
to your t needs. Our platform includes skilled
professionals in areas such as repairs,
renovations, plumbing, electrical work, painting,
carpentry, cleaning, and much more?"
        />
        <FaqItem
          title="How do I book a service provider on Prophix?"
          content="Simply create an account, browse through the
available professionals, and select the one that
matches your requirements. Once you ve
chosen a service provider, you can conveniently
schedule the service and communicate directly
through our platform. It s a seamless process
designed to make your life simpler."
        />
        <FaqItem
          title="What if I'm not satisfied with the service
provided?"
          content="Your satisfaction is our priority. If you re not
completely satisfied with the service you
received, please reach out to our customer
support team. We have a resolution process in
place to address any concerns and ensure that
you are happy with the outcome."
        />
        <FaqItem
          title="How are pricing and payments handled on
Prophix?"
          content="Prophix promotes transparency and fair pricing.
Service providers on our platform set their own
rates, which are clearly displayed on their
profiles. When booking a service, you will see the
total cost upfront, so there are no surprises"
        />
      </div>
    </section>
  );
};

export default Faq;
