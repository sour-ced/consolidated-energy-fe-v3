export type Office = {
  code: string;
  state: string;
  tag?: string;
  city: string;
  address: [string, string];
  phone: string;
  email: string;
  position: [number, number];
};

export const OFFICES: Office[] = [
  {
    code: "VIC",
    state: "Victoria",
    tag: "National Head Office",
    city: "Melbourne",
    address: ["102 Indian Drive", "Keysborough VIC 3173"],
    phone: "(03) 9794 8250",
    email: "vic@consolidatedenergy.com.au",
    position: [-37.9908, 145.1546],
  },
  {
    code: "WA",
    state: "Western Australia",
    city: "Perth",
    address: ["11 Cressall Rd", "Balcatta WA 6021"],
    phone: "(08) 6270 6400",
    email: "WA@consolidatedenergy.com.au",
    position: [-31.8747, 115.8236],
  },
  {
    code: "QLD",
    state: "Queensland",
    city: "Brisbane",
    address: ["1/58 Meakin Road", "Meadowbrook QLD 4131"],
    phone: "(07) 3271 4070",
    email: "QLD@consolidatedenergy.com.au",
    position: [-27.6373, 153.1198],
  },
  {
    code: "ACT",
    state: "Australian Capital Territory",
    city: "Canberra",
    address: ["Unit 1, 70 Sheppard Street", "Hume ACT 2620"],
    phone: "(02) 6260 1455",
    email: "ACT@consolidatedenergy.com.au",
    position: [-35.3833, 149.2167],
  },
];
