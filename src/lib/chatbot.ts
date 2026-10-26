import { OFFICES } from "./offices";

const GENERAL_EMAIL = "info@consolidatedenergy.com.au";

const ABOUT_REPLY =
  "Consolidated Energy is one of Australia's leading suppliers of residential and commercial building home energy products. We supply and install products for builders nationally, servicing over 500 builder customers from six office and warehouse locations across Australia. We're also the largest independent distributor of insulation in the country.";

const SERVICES_REPLY =
  "We supply and install six product ranges: Insulation (ceiling, acoustic, wall, wraps, sarking, stone/mineral wool), Heat Pump Hot Water (Enviroheat), Continuous Gas Hot Water (Takagi), Air Conditioning (ducted & split), Solar Power, and Ceilings (Precision Ceilings, WA only). Ask me about any of these for more detail.";

const CONTACT_REPLY =
  `You can reach our team at ${GENERAL_EMAIL}, or via the "Send an Enquiry" form on our Contact page. We're open Monday-Friday, 9am-4pm. We also have offices in Victoria (National Head Office), Western Australia, Queensland and the ACT - ask me about a specific state if you'd like those details.`;

type Rule = {
  test: (msg: string) => boolean;
  reply: string;
};

function officeReply(officeIndex: number): string {
  const office = OFFICES[officeIndex];
  return `Our ${office.state} office (${office.city}) is at ${office.address[0]}, ${office.address[1]}. Phone: ${office.phone}. Email: ${office.email}.`;
}

const RULES: Rule[] = [
  {
    test: (m) => /\b(hi|hello|hey|g'?day|yo)\b/.test(m) && m.length < 20,
    reply:
      "Hi there! I can answer questions about Consolidated Energy, our products and services, or how to get in touch. What would you like to know?",
  },
  {
    test: (m) => /\b(thank|thanks|cheers|ta)\b/.test(m),
    reply: "You're welcome! Let me know if there's anything else I can help with.",
  },
  // Specific office / state lookups
  {
    test: (m) => /\b(melbourne|victoria|\bvic\b|head office)\b/.test(m),
    reply: officeReply(0),
  },
  {
    test: (m) => /\b(perth|western australia|\bwa\b)\b/.test(m),
    reply: officeReply(1),
  },
  {
    test: (m) => /\b(brisbane|queensland|\bqld\b)\b/.test(m),
    reply: officeReply(2),
  },
  {
    test: (m) => /\b(canberra|australian capital territory|\bact\b)\b/.test(m),
    reply: officeReply(3),
  },
  // General contact
  {
    test: (m) =>
      /\b(contact|phone|email|call|reach|address|office|location|get in touch|enquir)/.test(m),
    reply: CONTACT_REPLY,
  },
  // Insulation (covers all sub-categories)
  {
    test: (m) =>
      /\b(insulat|ceiling insulation|acoustic|wall wrap|sarking|rockwool|mineral wool|glasswool)/.test(m),
    reply:
      "We're the largest independent insulation distributor in Australia, covering ceiling insulation, acoustic insulation, external wall insulation, wall wraps, roof sarking, and stone/mineral wool. Visit our Insulation page for the full range, or ask about a specific type.",
  },
  {
    test: (m) => /\b(heat pump|enviroheat)/.test(m),
    reply:
      "Our Heat Pump Hot Water range is Enviroheat heat pump hot water systems, an energy-efficient alternative to conventional electric water heating. Check out the Heat Pump Hot Water page for details.",
  },
  {
    test: (m) => /\b(gas hot water|takagi|continuous flow|hot water)/.test(m),
    reply:
      "We supply Takagi continuous flow gas hot water units, available wall-mounted or internal. We also offer Enviroheat heat pump hot water systems if you'd like an electric option - just ask.",
  },
  {
    test: (m) => /\b(air ?con|air conditioning|ducted|split system)/.test(m),
    reply:
      "We supply and install leading brand air conditioning, including ducted, split and multi-split systems. See the Air Conditioning page for an overview, or the Ducted Air Conditioning and Split & Multi-Split Systems pages for more detail.",
  },
  {
    test: (m) => /\bsolar/.test(m),
    reply:
      "We supply solar power solutions designed around the energy requirements of new and existing homes and commercial properties. See the Solar Power page for details.",
  },
  {
    test: (m) => /\b(ceiling|precision ceiling)/.test(m),
    reply:
      "Precision Ceilings is our ceilings service, available in Western Australia only. See the Ceilings page for more.",
  },
  // About
  {
    test: (m) =>
      /\b(what is consolidated energy|who are you|about (us|consolidated)|who is consolidated energy|company|business)/.test(m),
    reply: ABOUT_REPLY,
  },
  {
    test: (m) => /\b(service|product|offer|sell|supply|range|what do you do)/.test(m),
    reply: SERVICES_REPLY,
  },
];

const FALLBACK_REPLY =
  `I'm not sure about that one - I can help with what Consolidated Energy is, our products and services, or how to contact us. For anything else, reach the team at ${GENERAL_EMAIL} or via the Contact page.`;

export function getChatReply(userMessage: string): string {
  const normalized = userMessage.toLowerCase().trim();
  if (!normalized) return FALLBACK_REPLY;

  for (const rule of RULES) {
    if (rule.test(normalized)) return rule.reply;
  }

  return FALLBACK_REPLY;
}
