import React from 'react';

const DeveloperPage = () => {
  console.log('developer page');

  return (
    <main
      className="min-h-screen w-full"
      style={{
        background:
          'radial-gradient(1200px 600px at 10% -10%, rgba(12,40,90,0.55), rgba(6,22,48,0)),' +
          'radial-gradient(1000px 500px at 110% 20%, rgba(0,112,235,0.20), rgba(4,18,38,0)),' +
          'linear-gradient(180deg, #0A1530 0%, #0B1020 100%)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 sm:h-20" />

        <header className="text-center">
          <h1
            className="tracking-tight"
            style={{
              fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)',
              color: 'rgba(235,243,255,0.95)',
              textShadow: '0 1px 0 rgba(0,0,0,0.2)',
            }}
          >
            About The Developer
          </h1>
          <p
            className="mx-auto mt-2 max-w-2xl"
            style={{
              color: 'rgba(200,220,255,0.7)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
            }}
          >
            Building secure, human‑centered communication experiences with precision and care.
          </p>
        </header>

        <section
          className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-stretch"
          aria-label="Developer profile"
        >
          {/* Left: Profile card */}
          <div className="lg:col-span-2">
            <article
              className="relative rounded-2xl overflow-hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(17,34,64,0.75) 0%, rgba(10,20,40,0.75) 100%)',
                boxShadow:
                  '0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
                border: '1px solid rgba(90,130,200,0.18)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(600px 200px at -10% 0%, rgba(40,120,255,0.15), rgba(0,0,0,0))',
                }}
              />
              <figure className="relative">
                <img
                  style={{
                    width: '100%',
                    aspectRatio: '4 / 5',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    filter: 'saturate(1.05) contrast(1.05)',
                  }}
                  src="https://res.cloudinary.com/dadapse5k/image/upload/v1759377580/akshay4_k1qqtn.png"
                  alt="Developer avatar illustration"
                />
              </figure>
              <div className="px-5 py-4">
                <h2
                  className="text-center"
                  style={{
                    fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)',
                    color: 'rgba(235,243,255,0.95)',
                  }}
                >
                  Akshay Kireet
                </h2>
                <p
                  className="mt-1 text-center"
                  style={{ color: 'rgba(200,220,255,0.65)', fontSize: '0.95rem' }}
                >
                  Ex-Microsoft Intern| Ex-Web Development Lead @GDG Oncampus CMRIT | Full-Stack & AI Developer | MERN, LangChain, Azure AI | Python & Data Analysis Enthusiast|
                </p>
              </div>
            </article>
          </div>

          {/* Right: Content cards */}
          <div className="lg:col-span-3 space-y-6 md:space-y-7">
            {/* Mission */}
            <article
              className="rounded-2xl p-5 md:p-6"
              style={{
                background:
                  'linear-gradient(180deg, rgba(16,30,60,0.75) 0%, rgba(8,16,34,0.7) 100%)',
                border: '1px solid rgba(90,130,200,0.18)',
                boxShadow:
                  '0 8px 24px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.04)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <h3
                className="card-title"
                style={{
                  color: 'rgba(210,228,255,0.95)',
                  fontSize: 'clamp(1.05rem, 1.5vw, 1.15rem)',
                }}
              >
                Mission
              </h3>
              <p className="mt-2" style={{ color: 'rgba(200,220,255,0.75)' }}>
                My mission is to develop a chat application that delivers seamless and secure communication, empowering users to connect effortlessly and meaningfully, regardless of distance. This project reflects my dedication to creating a platform that prioritizes user experience, privacy, and innovation.
              </p>
            </article>

            {/* Vision */}
            <article
              className="rounded-2xl p-5 md:p-6"
              style={{
                background:
                  'linear-gradient(180deg, rgba(16,30,60,0.75) 0%, rgba(8,16,34,0.7) 100%)',
                border: '1px solid rgba(90,130,200,0.18)',
                boxShadow:
                  '0 8px 24px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.04)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <h3
                className="card-title"
                style={{
                  color: 'rgba(210,228,255,0.95)',
                  fontSize: 'clamp(1.05rem, 1.5vw, 1.15rem)',
                }}
              >
                Vision
              </h3>
              <p className="mt-2" style={{ color: 'rgba(200,220,255,0.75)' }}>
                My vision is to establish this application as a trusted and versatile communication tool, setting a benchmark for accessibility, reliability, and security. As a solo developer, I aim to continuously refine and innovate the platform, ensuring it grows to meet the ever‑evolving needs of its users.
              </p>
            </article>

            {/* Security */}
            <article
              className="rounded-2xl p-5 md:p-6"
              style={{
                background:
                  'linear-gradient(180deg, rgba(16,30,60,0.75) 0%, rgba(8,16,34,0.7) 100%)',
                border: '1px solid rgba(90,130,200,0.18)',
                boxShadow:
                  '0 8px 24px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.04)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <h3
                className="card-title"
                style={{
                  color: 'rgba(210,228,255,0.95)',
                  fontSize: 'clamp(1.05rem, 1.5vw, 1.15rem)',
                }}
              >
                Commitment to Security and Privacy
              </h3>
              <p className="mt-2" style={{ color: 'rgba(200,220,255,0.75)' }}>
                Security and privacy are paramount, and this application is designed to protect user data at every layer with a defense‑in‑depth approach.
              </p>
              <ul className="mt-3 space-y-3">
                <li style={{ color: 'rgba(210,228,255,0.9)' }}>
                  <span style={{ color: '#A9C6FF', fontWeight: 600 }}>End‑to‑End Encryption: </span>
                  All messages and chats are encrypted so conversations remain private and accessible only to intended recipients.
                </li>
                <li style={{ color: 'rgba(210,228,255,0.9)' }}>
                  <span style={{ color: '#A9C6FF', fontWeight: 600 }}>Secure Account Features: </span>
                  Multi‑factor authentication and strong cryptographic protocols safeguard accounts against unauthorized access.
                </li>
                <li style={{ color: 'rgba(210,228,255,0.9)' }}>
                  <span style={{ color: '#A9C6FF', fontWeight: 600 }}>Data Minimization: </span>
                  Only essential information is collected, and data is never shared with third parties without explicit consent.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <footer className="py-10" />
      </div>

      {/* Subtle animated glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: '-20%',
          background:
            'radial-gradient(40% 25% at 15% 10%, rgba(0,112,235,0.10), rgba(0,0,0,0)),' +
            'radial-gradient(35% 20% at 90% 15%, rgba(0,180,255,0.08), rgba(0,0,0,0))',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          animation: 'pulseGlow 8s ease-in-out infinite',
          opacity: 0.8,
        }}
      />
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.65; transform: translateY(0px); }
          50% { opacity: 0.9; transform: translateY(-6px); }
        }
      `}</style>
    </main>
  );
};

export default DeveloperPage;
