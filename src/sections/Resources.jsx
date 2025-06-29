
import backgroundImg from "../assets/a5.jpg";
import bgImage from "../assets/a5.jpg";
import topimg from "../assets/a5.jpg";

import generationImg from "../assets/a5.jpg";
import transmissionImg from "../assets/a5.jpg";
import distributionImg from "../assets/a5.jpg";
import maintenanceImg from "../assets/a5.jpg";
import sustainabilityImg from "../assets/a5.jpg";

const sections = [
  {
    title: "1. Electricity Generation",
    image: generationImg,
    content: `The first step in the process is generating the electricity. Power supply companies use various sources to create electricity,
    including fossil fuels (coal, gas), nuclear power, and renewable energy sources like wind, solar, and hydro.`,
  },
  {
    title: "2. Transmission",
    image: transmissionImg,
    content: `Once the electricity is generated, it must travel over long distances to reach consumers. High-voltage transmission lines help
    minimize energy loss as the electricity travels from the power plants to local substations.`,
  },
  {
    title: "3. Distribution",
    image: distributionImg,
    content: `At the substation, the high-voltage electricity is stepped down to a lower voltage suitable for everyday use.
    The distribution network then carries the electricity to homes, businesses, and industries.`,
  },
  {
    title: "4. Maintenance & Monitoring",
    image: maintenanceImg,
    content: `Ensuring a steady supply of electricity requires constant monitoring. Power supply companies monitor the grid, respond to emergencies,
    and perform maintenance to prevent disruptions.`,
  },
  {
    title: "5. Sustainability & Future Challenges",
    image: sustainabilityImg,
    content: `Electricity companies are investing more in renewable energy sources like solar and wind. Challenges such as aging infrastructure,
    rising demand, and the need for smarter grids remain crucial.`,
  },
];

const Resources = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-white text-center p-6 md:p-12 max-w-3xl bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Blogs</h1>
          <p className="text-lg md:text-xl mb-6">
            Stay updated with the latest announcements, press releases, and expert insights from the industry.
          </p>
          <a
            href="https://www.indiatoday.in/business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-green-600 transition"
          >
            🟢 Today News
          </a>
          <div className="mt-6 text-sm text-gray-300">
            Updated: {new Date().toDateString()}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-lg text-gray-800">
          <div className="flex justify-center mb-6">
            <img
              src={topimg}
              alt="Blog banner"
              className="rounded-lg w-60 h-60 object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
            Electricity Power Supply: The Backbone of Modern Life
          </h1>

          <p className="text-lg mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            Electricity is something most of us rely on daily, yet we rarely think about how it reaches us. Behind every light bulb,
            phone charger, and computer is a complex network powered by electricity supply companies. Let’s take a look at how this vital service works.
          </p>

          <div className="space-y-16">
            {sections.map((sec, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                  } items-center gap-8`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="rounded-xl shadow-md w-full object-cover h-64 md:h-80"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                    {sec.title}
                  </h2>
                  <p className="text-justify text-gray-700 leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">
              Conclusion: A Constantly Evolving Industry
            </h2>
            <p className="text-justify text-gray-700 leading-relaxed">
              Electricity power supply is an invisible but vital part of daily life.
              The companies behind this essential service are continually adapting to new challenges,
              ensuring that we have the energy we need to power everything from our homes to the industries that drive economies.
              The future of electricity is not just about keeping the lights on—it’s about creating a sustainable,
              efficient, and resilient energy system for generations to come.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div
        className="relative bg-cover bg-center h-[600px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1
          className="text-4xl absolute top-28 left-[12%] transform -translate-y-1/2 text-white max-w-xl shadow-sm"
          style={{ fontFamily: "sans-serif" }}
        >
          Blog Content
        </h1>
        <div className="absolute top-1/2 left-[7%] transform -translate-y-1/2 text-white max-w-xl">
          <p className="text-lg leading-relaxed text-center" style={{ fontFamily: "sans-serif" }}>
            Electricity is something most of us rely on daily, yet we rarely think about how it reaches us.
            Behind every light bulb, phone charger, and computer is a complex network of systems powered by electricity supply companies.
            These companies manage the entire process—generation, transmission, distribution, and maintenance—to ensure a constant, reliable flow of electricity.
          </p>
        </div>
      </div>
    </>
  );
};

export default Resources;
