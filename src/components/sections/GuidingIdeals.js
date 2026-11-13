import { Reveal } from "../motion";
import { User } from "lucide-react";

const IDEALS = [
  { key: "ramakrishna", name: "Sri Ramakrishna Paramahamsa",
    bio: "A God-realised mystic of nineteenth-century Bengal whose life demonstrated the harmony of all faiths and the direct experience of the Divine through simple, wholehearted love." },
  { key: "sarada", name: "Sri Sharada Devi",
    bio: "The consort of Sri Ramakrishna, revered as the Holy Mother — an embodiment of quiet strength, motherly compassion and unshakeable equanimity." },
  { key: "vivekananda", name: "Swami Vivekananda",
    bio: "Foremost disciple of Sri Ramakrishna, who carried the message of Vedanta to the world and awakened India with the ideal that service to all beings is the highest worship." },
  { key: "ranganathananda", name: "Swami Ranganathananda",
    bio: "The thirteenth President of the Ramakrishna Order — a luminous orator and scholar who reinterpreted Vedanta for the modern age with clarity, dignity and universal appeal. Through his inspiring lectures and profound writings, he awakened spiritual insight and demonstrated the timeless relevance of India's spiritual heritage to people across the world." },
  { key: "purushottamananda", name: "Swami Purushottamananda",
    bio: "A revered monk of the Ramakrishna Order who served with quiet devotion at the Ramakrishna Math branches of Basavanagudi, Ponnampet and Belagavi, guiding countless devotees on the spiritual path. He was also a gifted and soulful singer, whose melodious voice and devotional singing touched the hearts of all who had the privilege of listening to him." },
];

// Portrait per ideal key
const PHOTOS = {
  ramakrishna: { url: "/images/SriRamakrishna.jpeg" },
  sarada: { url: "/images/Sharadadevi.jpeg" },
  vivekananda: { url: "/images/SwamiVivekananda.jpeg" },
  ranganathananda: { url: "/images/SwamiRanganathanandaji.jpeg" },
  purushottamananda: { url: "/images/SwamiPurushottamanandaji.jpeg" },
};

const GuidingIdeals = () => {
  const ideals = IDEALS;
  const photoByKey = PHOTOS;

  return (
    <section id="ideals" data-testid="ideals" className="py-28 md:py-40" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="label-eyebrow mb-6">Our Guiding Ideals</div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tighter max-w-4xl" style={{ color: "var(--text-primary)" }}>
            The masters who <span className="italic" style={{ color: "var(--accent-saffron)" }}>light our path.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {ideals.map((p, i) => {
            const ph = photoByKey[p.key];
            return (
              <Reveal key={p.key} delay={(i % 3) * 0.05}>
                <article data-testid={`ideal-${p.key}`} className="group">
                  <div className="relative overflow-hidden mb-5" style={{ background: "var(--bg-secondary)", aspectRatio: "3 / 4" }}>
                    {ph ? (
                      <img src={ph.url} alt={p.name} loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2" style={{ color: "var(--text-secondary)" }}>
                        <User size={40} strokeWidth={1.2} style={{ color: "var(--accent-saffron)" }} />
                        <span className="label-eyebrow">Photo coming soon</span>
                      </div>
                    )}
                    <span className="absolute top-4 left-4 font-serif text-3xl" style={{ color: ph ? "var(--text-inverse)" : "var(--accent-saffron)", textShadow: ph ? "0 2px 8px rgba(0,0,0,0.6)" : "none" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl" style={{ color: "var(--text-primary)" }}>{p.name}</h3>
                  <p className="mt-3 font-sans text-sm md:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {p.bio}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuidingIdeals;
