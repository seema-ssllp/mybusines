import React from 'react';
import shameemImg from '../assets/pr6.jpg';
import pankajImg from '../assets/v6.JPG';
import shahnawazImg from '../assets/v6.JPG';
import bg from '../assets/pr6.jpg';
import ring from '../assets/pr5.jpg';
import invite from '../assets/about.jpg';
import dance from '../assets/meet.jpg';
import danceBg from '../assets/pr.jpg';

// ✅ Features used in all product cards
const features = [
  "Aida dere",
  "Nec feugiat nisl",
  "Nulla at volutpat dola",
  "Pharetra massa",
  "Massa ultricies mi",
];

// ✅ Team members list
const teamMembers = [
  {
    name: 'Shameem Hussain',
    title: 'Sr Manager Technical',
    team: 'Technical Team',
    image: shameemImg,
  },
  {
    name: 'Pankaj Sanga',
    title: 'Manager Operations',
    team: 'Operations Team',
    image: pankajImg,
  },
  {
    name: 'Shahnawaz',
    title: 'Finance Manager',
    team: 'Finance Team',
    image: shahnawazImg,
  },
];

// ✅ Product list
const products = [
  { title: "Static Website", price: "5999 Rs", featured: false },
  { title: "Dynamic Website", price: "9999 Rs", featured: true },
  { title: "E-commerce", price: "19999 Rs", featured: false },
  { title: "MLM Software", price: "69999 Rs", featured: false },
  { title: "Nidhi Software", price: "15999 Rs", featured: false },
  { title: "Colour Game", price: "24999 Rs", featured: false },
  { title: "Social Promotion", price: "9999 Rs", featured: false },
  { title: "Adds Promotion", price: "15999 Rs", featured: false },
];

// ✅ Section 1 - Hero / Header
const WeddingSection1 = () => (
  <section
    className="relative h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="bg-white/20 p-10 rounded-xl text-center shadow-2xl">
      <h1
        className="text-6xl font-extrabold text-white tracking-widest"
        style={{ textShadow: '3px 3px #ff69b4' }}
      >
        Products Offer
      </h1>
      <p className="text-white mt-4 text-xl font-medium animate-pulse">
        "Time-Bound Delivery with 24/7 Trusted Service – Only at SG Coder!"
      </p>
    </div>
  </section>
);

// ✅ Section 2 - Stats
const WeddingSection2 = () => (
  <section
    className="relative h-screen w-full bg-fixed bg-center bg-cover flex items-center justify-center overflow-hidden"
    style={{ backgroundImage: `url(${ring})` }}
  >
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-400 text-3xl animate-floating-heart"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          💗
        </span>
      ))}
    </div>

    <div className="relative z-10 bg-white/10 backdrop-blur-sm p-12 px-20 rounded-3xl border border-white/30 shadow-[0_10px_60px_rgba(255,105,180,0.4)] animate-fade-glow">
      <div className="text-center space-y-6">
        <h2
          className="text-xl md:text-3xl font-extrabold text-white tracking-wide"
          style={{ textShadow: '2px 2px 8px rgba(255,192,203,0.9)' }}
        >
          "30+ Projects Successfully Completed and Delivered"
        </h2>
        <p className="text-2xl md:text-xl font-medium text-white">
          Explore our portfolio to see the quality and diversity of our delivered projects.
        </p>
      </div>
    </div>
  </section>
);

// ✅ Section 3 - Pricing Cards
const WeddingSection3 = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center gap-16 p-10 overflow-hidden bg-white">
    {/* Background hearts */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-300 text-8xl animate-floating-heart"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          💖
        </span>
      ))}
    </div>

    {/* Pricing cards */}
    <div className="min-h-screen w-full bg-gray-900 text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Products</h2>
        <p className="text-lg mt-2 text-gray-400">Check our Pricing</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-2xl shadow-lg bg-black bg-opacity-40 backdrop-blur-md border border-white/10 ${product.featured ? "ring-2 ring-pink-500 scale-105" : ""
              }`}
            style={{
              backgroundImage: `url(https://source.unsplash.com/400x300/?technology,code&sig=${index})`,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold">{product.title}</h3>
              <p className="text-xl text-pink-400 font-bold my-3">
                {product.price}
              </p>
              <ul className="space-y-1 text-sm text-gray-200">
                {features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-xl font-semibold transition duration-300">
                Buy Now
              </button>
              {product.featured && (
                <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Featured
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ✅ Section 4 - Dance Event
const WeddingSection4 = () => (
  <section
    className="relative h-screen w-full flex flex-col lg:flex-row items-center justify-between px-10 bg-center bg-cover bg-no-repeat bg-fixed"
    style={{
      backgroundImage: `url(${danceBg})`,
      opacity: 0.95,
    }}
  >
    <div className="absolute inset-0 bg-black/20 z-0" />

    <div className="relative z-10 max-w-lg animate-slide-up text-white drop-shadow-lg overflow-hidden">
      <h2
        className="text-3xl font-extrabold leading-snug"
        style={{ textShadow: '3px 3px #ff69b4' }}
      >
        "Fast Delivery, Trusted by 30+ Clients — Only at SG Coder!"
      </h2>
      <p className="text-md font-semibold  mt-4 text-white">
        At SG Coder, we craft professional websites and deliver them faster than you expect. With the trust of over 30 happy clients, we take pride in offering reliable, high-quality digital solutions. Whether it's a simple static site or a powerful custom application, SG Coder delivers excellence—every time.✨
      </p>

    </div>

    <div className="relative z-10 animate-spin-in mt-10 lg:mt-0">
      <img
        src={dance}
        alt="Dance Hero"
        className="h-80 rounded-3xl border-4 border-white/80 shadow-2xl object-cover"
      />
    </div>
  </section>
);

// ✅ Main Team Component
const Team = () => {
  return (
    <div className="overflow-x-hidden">
      <WeddingSection1 />
      <WeddingSection2 />
      <WeddingSection3 />
      <WeddingSection4 />

      {/* ✅ Team Cards */}

    </div>
  );
};

export default Team;
