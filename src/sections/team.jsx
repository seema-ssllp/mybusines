import React from 'react';
import shameemImg from '../assets/v6.jpg';
import pankajImg from '../assets/v6.jpg';
import shahnawazImg from '../assets/v6.jpg';
import bg from '../assets/v5.jpg';
import ring from '../assets/v6.jpg';
import invite from '../assets/v6.jpg';
import dance from '../assets/v6.jpg';
import danceBg from '../assets/v2.jpg';
// import invite from "../assets/v5.jpg";
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
        💍 Seema & Rajat
      </h1>
      <p className="text-white mt-4 text-xl font-medium animate-pulse">
        Two hearts, one journey
      </p>
    </div>
  </section>
);

// 💖 NEWLY DESIGNED ENGAGEMENT CEREMONY SECTION
const WeddingSection2 = () => (
  <section
    className="relative h-screen w-full bg-fixed bg-center bg-cover flex items-center justify-center overflow-hidden"
    style={{ backgroundImage: `url(${ring})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-tr " />

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
          className="text-6xl md:text-7xl font-extrabold text-white tracking-wide"
          style={{ textShadow: '2px 2px 8px rgba(255,192,203,0.9)' }}
        >
          💍 Engagement Ceremony
        </h2>
        <p className="text-2xl md:text-3xl font-medium text-white">
          📅 Save the Date: <span className="text-yellow-300 font-bold">12th Dec 2025</span>
        </p>
        <p className="text-xl md:text-2xl text-white">
          📍 Venue: <span className="text-pink-200 font-semibold">Taj Mahal Palace</span>
        </p>
      </div>
    </div>
  </section>
);

const WeddingSection3 = () => (
  <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 p-10 overflow-hidden bg-gradient-to-br from-purple-900    ">
    {/* ✨ Animated Background Elements */}
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

    {/* 🎁 3D Animated Box (Flip Style with Glow) */}
    <div className="group relative w-[22rem] h-[28rem] perspective z-10">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-pink-200 to-rose-300 blur-2xl opacity-30 animate-pulse -z-10" />
      <div className="relative w-full h-full transition-transform duration-[2000ms] transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden border-4 border-white/30 rounded-3xl shadow-[0_10px_60px_rgba(255,105,180,0.3)] overflow-hidden">
          <img
            src={invite}
            alt="Invite Front"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Back Face */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white/90 backdrop-blur-2xl border-4 border-rose-200 rounded-3xl flex flex-col justify-center items-center shadow-xl p-8">
          <h3 className="text-3xl font-bold text-pink-700 mb-4">You're Invited!</h3>
          <p className="text-lg text-gray-600 text-center">
            Join us for a magical celebration of love, laughter and forever.
          </p>
        </div>
      </div>
    </div>

    {/* 📜 Text Area with Shine & Glassmorphism */}
    <div className="z-10 max-w-lg bg-white/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/40 shadow-[0_10px_50px_rgba(255,192,203,0.3)] animate-fade-in-up">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600 animate-shimmer tracking-wide">
        💌 Wedding Invitation
      </h2>
      <p className="mt-6 text-lg text-gray-800 leading-relaxed">
        With joy in our hearts, we invite you to join us in celebrating the beginning of our forever.
        Let’s make unforgettable memories together.
      </p>
    </div>
  </section>
);


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
        className="text-7xl font-extrabold leading-snug"
        style={{ textShadow: '3px 3px #ff69b4' }}
      >
        Let’s Dance!
      </h2>
      <p className="text-2xl font-semibold italic mt-4 text-white">
        Celebrate under the stars ✨
      </p>
      <div className="mt-6 text-white text-lg leading-relaxed max-w-md">
        <p>Join us for an unforgettable night of music, movement, and magic. 💃🕺</p>
        <p className="mt-2">Dress Code: Sparkle & Shine ✨</p>
        <p className="mt-2">DJ starts at 8PM sharp!</p>
      </div>
    </div>

    <div className="relative z-10 animate-spin-in mt-10 lg:mt-0">
      <img
        src={dance}
        alt="Dance Hero"
        className="h-96 rounded-3xl border-4 border-white/80 shadow-2xl object-cover"
      />
    </div>
  </section>
);

const Team = () => {
  return (
    <div className="overflow-x-hidden">
      <WeddingSection1 />
      <WeddingSection2 />
      <WeddingSection3 />
      <WeddingSection4 />

      <section className="py-16 bg-gradient-to-tr from-white to-pink-50">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-pink-700">Event Organizing Team</h2>
          <p className="text-lg text-gray-500">Meet the dedicated team behind the celebration</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 text-center transform hover:scale-105 transition duration-500"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-pink-300"
              />
              <h3 className="text-xl font-bold mt-4 text-pink-700">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
              <p className="text-sm text-gray-400">{member.team}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
