import { Box } from "@/components/Element";
import logo from "@/assets/logo.svg";
import vHead1 from "@/assets/vhead-1.svg";
import vHead2 from "@/assets/vhead-2.svg";
import vContent1 from "@/assets/vcontent-1.svg";
import vContent2 from "@/assets/vcontent-2.svg";
import vContent3 from "@/assets/vcontent-3.svg";
import vContent4 from "@/assets/vcontent-4.svg";
import { Typewriter } from "react-simple-typewriter";

const TaskTwo = () => {
  return (
    <Box col className="overflow-x-hidden relative">
      <img src={vHead1} className="absolute left-0 -z-10" alt="" />
      <img
        src={vHead2}
        className="absolute -right-20 top-[calc(30vh)] -z-10 max-w-[50%]"
        alt=""
      />

      <Box className="absolute -z-30 bottom-0 right-[-200px] overflow-hidden">
        <img
          src={vContent3}
          className="mb-[-750px] opacity-20 scale-x-[-1]"
          alt=""
        />
      </Box>

      <Box className="absolute left-0 top-0 -z-20 w-full h-60 bg-gradient-to-t to-sky-100 from-white" />
      <Box className="absolute bottom-0   -z-20 w-full h-60 bg-gradient-to-t from-sky-600/40 to-transparent" />
      <Box col className="max-w-7xl self-center w-full px-6 relative">
        <Header />
        <Intro />
        <Pricing />
        <Subscribe />
        <Footer />
      </Box>
    </Box>
  );
};

const Header = () => {
  return (
    <Box
      className="px-3 py-5 text-2xl gap-2 font-semibold tracking-wide"
      itemCenter
    >
      <Box itemCenter className="gap-4 text-white">
        <img src={logo} className="h-10" alt="log" />
        <Box as="h1">{"Home"}</Box>
      </Box>
      <Box className="text-slate-800 flex-1 pr-4" justEnd>
        {["About", "Pricing", "Contact"].map((title) => (
          <Box
            key={title}
            as="a"
            href="/"
            className="px-7 rounded py-1.5 hover:bg-sky-200/50 cursor-pointer"
          >
            {title}
          </Box>
        ))}
      </Box>
      <Box
        as="a"
        href="/?one"
        className="px-10 text-lg tracking-wider rounded-lg py-1.5 hover:bg-sky-200/50 cursor-pointer border-2 border-sky-600/60 text-sky-600 "
      >
        {"Sign In"}
      </Box>
    </Box>
  );
};

const Intro = () => {
  return (
    <Box col className="gap-6 min-h-[calc(100vh-200px)] justify-around">
      <Box
        as="h1"
        className="self-end max-w-3xl py-3 text-3xl text-center pr-7 font-extralight tracking-wide"
      >
        {
          "A startup has built a web-based ERP to help entrepreneurs track inventory, record transactions, and calculate daily profits—all in real time for smarter, more efficient decision-making."
        }
      </Box>
      <Box col className="gap-10 max-w-3xl self-start">
        <img src={vContent1} className="max-w-xl" alt="" />
        <Box className="italic font-light tracking-wider text-xl">
          <Typewriter
            words={[
              "Smart Digital Solutions for the Future of Your Business",
              "Turning Innovation into Reality, Optimizing Potential",
              "Reliable Technology, More Efficient Business",
              "Digital Transformation Starts Here",
              "We Develop Software, You Focus on Your Business",
              "The Digital Future Begins with Great Code",
              "From Concept to Digital Product, We Are the Experts!",
              "High-Quality Software, Maximum Performance",
              "Digital Solutions Designed to Grow with You",
              "Building the Future with Advanced Technology",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={35}
            deleteSpeed={15}
            delaySpeed={3500}
          />
        </Box>
      </Box>
    </Box>
  );
};

const Pricing = () => {
  return (
    <Box col>
      <Box className="min-h-[400px] gap-4 items-start mt-[80px] w-full flex-wrap max-md:flex-col">
        <PricingInfo
          title="Entrepreneur"
          desc={[
            "Record incoming and outgoing goods",
            "Track profits",
            "Analyze sales results with CHART",
            "24/7 support",
            "Export data to Excel",
            "AI income prediction",
          ]}
        />

        <PricingInfo
          title="Business"
          desc={[
            "Record incoming and outgoing goods",
            "Track profits",
            "Analyze sales results with CHART",
            "24/7 support",
          ]}
        />
        <PricingInfo
          title="Basic"
          desc={[
            "Record incoming goods",
            "Record outgoing goods",
            "Track profits",
          ]}
        />
      </Box>

      <Box justBetween className="max-md:flex-col">
        <Box flex1 justCenter>
          <Box className=" !block text-2xl font-light tracking-wider max-w-[300px] text-center pt-10 min-h-[200px]">
            <Typewriter
              words={[
                "Flexible Plans for Every Business Need",
                "Choose the Right Plan for Your Growth",
                "Simple, Transparent, and Affordable Pricing",
                "Tailored Solutions for Entrepreneurs and Businesses",
                "Find the Perfect Plan to Scale Your Business",
                "Empowering Your Business with the Right Tools",
                "Affordable Pricing, Maximum Impact",
                "Plans That Fit Your Business Needs",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={35}
              deleteSpeed={15}
              delaySpeed={3500}
            />
          </Box>
        </Box>
        <Box flex1>
          <img src={vContent2} className="max-w-xl" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

const PricingInfo = (props: { title: string; desc: string[] }) => {
  return (
    <Box
      col
      flex1
      className="w-full px-10 py-8 gap-2 bg-sky-100/60 rounded-2xl hover:bg-sky-50/80 cursor-pointer hover:shadow-xl hover:translate-y-0.5 hover:outline-4 outline-sky-500"
    >
      <Box
        as="h2"
        className="text-3xl border-b border-sky-400/20 pb-4 mb-2 tracking-wider"
      >
        {props.title}
      </Box>
      <Box col className="gap-2 font-light pb-4">
        {props.desc.map((desc) => (
          <Box key={desc}>{desc}</Box>
        ))}
      </Box>
    </Box>
  );
};

const Subscribe = () => {
  return (
    <Box
      className="gap-5 pt-14 py-12 px-8 border-b-2 border-l-2 rounded-bl-2xl border-sky-100/70 mt-10 "
      itemCenter
    >
      <Box className="text-4xl max-w-xs">
        {"Get access to the latest and best information from us!"}
      </Box>
      <Box col className="text-xl gap-3">
        {
          "Sign up to receive updates on our Way of Working, inspiring case studies, and much more that will surely help your business grow."
        }
        <Box className="gap-4 flex-wrap" itemCenter>
          <Box
            as="input"
            type="text"
            placeholder="Your email"
            className="outline-2 w-full max-w-sm outline-sky-300 bg-sky-50/50 hover:outline-sky-500 rounded-lg px-4 py-2"
          />
          <Box
            as="a"
            href="/"
            className="py-2 bg-sky-400 rounded-lg px-4 outline outline-sky-400  text-white"
          >
            {"Subscribe"}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box col className="pb-5 px-5 pt-20 relative">
      <Box justCenter>
        <img src={vContent4} className="max-w-lg" alt="" />
      </Box>

      <Box className="pt-[200px]">
        {`Copyright © ${new Date().getFullYear()} - Razif Affandi`}
      </Box>
    </Box>
  );
};

export default TaskTwo;
