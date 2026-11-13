import { Reveal } from "../motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { Dot } from "lucide-react";

const GROUPS = [
  { key: "spiritual", title: "Spiritual Activities",
    intro: "The living heart of the ashrama — worship, meditation and study.",
    subgroups: ["Daily Pooja, Sandhyarati and Bhajans", "Weekly Discourses", "Homa on special days like Jayantis of Divine Trio, Durgashtami etc.", "Japa Yajnas and Dhyana Shibiras", "Spiritual Satsangs and Shibiras", "Festival celebrations like Ramanavami, Janmashtami, Navaratri, Shivaratri etc."] },
  { key: "values", title: "'Excellence Through Values' Programmes for students, youth and teachers",
    intro: "Character-building and value education for students and youth.",
    subgroups: ["Value education classes and annual camps for children", "Conventions, seminars and camps for youth", "Conventions and workshops for teachers", "Parent Enrichment Programmes"] },
  { key: "service", title: "Service Projects",
    intro: "Serving the Divine in all beings through compassionate action.",
    subgroups: ["Educational Support & Scholarship Programme", "Clothing & Blanket Distribution Programme", "Student Coaching Initiative", "Public Awareness & Cleanliness Drive", "Tree Plantation & Environmental Awareness Programme"] },
  { key: "tribal", title: "Tribal Welfare Project",
    intro: "Since 2022, our Tribal Welfare Project has been serving tribal communities in the remote settlements of Magadi Taluk, where many families face challenging living conditions. Through this initiative, we provide essential support, including books, school bags, stationery, blankets, tarpaulins, clothing, utensils, and provisions, helping improve their quality of life and promote education and well-being.",
    subgroups: [] },
];

const img = (name) => ({ id: name, url: `/images/${name}.jpeg` });

// Activity photos (group key -> images)
const PHOTOS = {
  spiritual: ["Aarati", "Bhajans", "Deepotsava", "DurgaHoma", "KrishnaJanmashtami", "PujaAbhisheka", "SaraswatiPuja", "PandurangaVittala", "MaaChowdeshwari"].map(img),
  values: [1, 2, 3, 4, 5, 6].map((n) => img(`ExcellenceThroughValues${n}`)),
  service: ["EducationalSupport", "ServiceActivities", "GroceriesDistrrbution", "GroceriesDistrrbution1"].map(img),
  tribal: [1, 2, 3, 4, 5].map((n) => img(`TribalWelfareProject${n}`)),
};

const Activities = () => {
  const groups = GROUPS;
  const photos = PHOTOS;

  return (
    <section id="activities" data-testid="activities" className="py-28 md:py-40" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="label-eyebrow mb-6">Our Activities</div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tighter max-w-3xl" style={{ color: "var(--text-inverse)" }}>
            Devotion expressed as <span className="italic" style={{ color: "var(--accent-saffron)" }}>daily practice.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible defaultValue="spiritual" className="mt-14"
            data-testid="activities-accordion">
            {groups.map((g, i) => {
              const imgs = photos[g.key] || [];
              return (
                <AccordionItem key={g.key} value={g.key} data-testid={`activity-group-${g.key}`}
                  style={{ borderColor: "var(--border-dark)" }}>
                  <AccordionTrigger data-testid={`activity-trigger-${g.key}`}
                    className="hover:no-underline py-7 [&>svg]:text-[var(--accent-saffron)] [&>svg]:w-6 [&>svg]:h-6">
                    <div className="flex items-baseline gap-5 text-left">
                      <span className="font-serif text-2xl" style={{ color: "var(--accent-saffron)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-2xl md:text-4xl" style={{ color: "var(--text-inverse)" }}>
                        {g.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-10">
                    <div className="md:pl-14 grid lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-5">
                        {g.intro && (
                          <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#C9BEB2" }}>{g.intro}</p>
                        )}
                        <ul className="space-y-2">
                          {(g.subgroups || []).map((s) => (
                            <li key={s} className="flex items-center font-sans text-sm" style={{ color: "#E8DAD2" }}>
                              <Dot style={{ color: "var(--accent-saffron)" }} /> {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="lg:col-span-7">
                        {imgs.length === 0 ? (
                          <div className="h-40 flex items-center justify-center border font-sans text-sm"
                            style={{ borderColor: "var(--border-dark)", color: "#8A8078" }}>
                            Photos coming soon
                          </div>
                        ) : (
                          <div className="columns-2 sm:columns-3 gap-3 [&>*]:mb-3">
                            {imgs.slice(0, 9).map((im) => (
                              <figure key={im.id} data-testid={`activity-photo-${im.id}`} className="group overflow-hidden break-inside-avoid">
                                <img src={im.url} alt={im.caption || g.title} loading="lazy"
                                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
                                {im.caption && (
                                  <figcaption className="mt-1 font-sans text-xs" style={{ color: "#8A8078" }}>{im.caption}</figcaption>
                                )}
                              </figure>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};

export default Activities;
