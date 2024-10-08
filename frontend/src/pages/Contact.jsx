import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-20 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">54709 Rue Notre-Dame O <br /> Montreal, QC</p>
          <p className="text-gray-500">Tel: 514-123-4567 <br />Email:contact@fabrica.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers at Fabrica</p>
          <p className="text-gray-500">Learn more about our team and job opportunities</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;