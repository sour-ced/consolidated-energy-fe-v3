import Reveal from "./Reveal";

const OFFICES = [
  {
    state: "Victoria",
    tag: "National Head Office",
    city: "Melbourne",
    address: ["102 Indian Drive", "Keysborough VIC 3173"],
    phone: "(03) 9794 8250",
    email: "vic@consolidatedenergy.com.au",
  },
  {
    state: "Western Australia",
    city: "Perth",
    address: ["11 Cressall Rd", "Balcatta WA 6021"],
    phone: "(08) 6270 6400",
    email: "WA@consolidatedenergy.com.au",
  },
  {
    state: "Queensland",
    city: "Brisbane",
    address: ["1/58 Meakin Road", "Meadowbrook QLD 4131"],
    phone: "(07) 3271 4070",
    email: "QLD@consolidatedenergy.com.au",
  },
  {
    state: "Australian Capital Territory",
    city: "Canberra",
    address: ["Unit 1, 70 Sheppard Street", "Hume ACT 2620"],
    phone: "(02) 6260 1455",
    email: "ACT@consolidatedenergy.com.au",
  },
];

export default function OfficeLocations() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
          Our Offices
        </p>
        <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-xl mb-12">
          Speak to your local team.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFICES.map((office, i) => (
            <Reveal
              key={office.state}
              delay={i * 100}
              className="bg-section p-6 flex flex-col"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/40 mb-2">
                {office.state}
              </p>
              {office.tag && (
                <p className="text-[11px] font-bold uppercase tracking-wide text-brand-green-dark mb-3">
                  {office.tag}
                </p>
              )}
              <h3 className="font-display text-lg text-ink mb-1.5">
                {office.city}
              </h3>
              <p className="text-[14px] text-ink/60 leading-relaxed">
                {office.address[0]}
                <br />
                {office.address[1]}
              </p>
              <div className="mt-4 pt-4 border-t border-ink/10 flex flex-col gap-1.5">
                <a
                  href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                  className="text-[14px] text-ink hover:text-brand-green-dark transition-colors"
                >
                  {office.phone}
                </a>
                <a
                  href={`mailto:${office.email}`}
                  className="text-[14px] text-brand-green-dark hover:underline break-all"
                >
                  {office.email}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-[13px] text-ink/50">
          Business hours: Monday&ndash;Friday 9am&ndash;4pm &middot;
          Saturday &amp; Sunday closed
        </p>
      </div>
    </section>
  );
}
