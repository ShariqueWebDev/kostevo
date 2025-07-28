import { frontendURL } from "./contants";

export const menuItem = [
  {
    name: `Home`,
    url: `${frontendURL}`,
  },
  {
    name: `About`,
    url: `#`,
    dropdown: [
      { name: `Company`, url: `${frontendURL}/about/company` },
      {
        name: `Infrastructure`,
        url: `${frontendURL}/about/infrastructure`,
      },
    ],
  },
  {
    name: `Quality`,
    url: `${frontendURL}/quality`,
  },
  {
    name: `Products`,
    url: `#`,
    dropdown: [
      {
        name: `Butterfly Valve`,
        url: `${frontendURL}/product/butterfly-valve`,
      },
      {
        name: `Forged Steel Valve`,
        url: `${frontendURL}/product/forged-steel-valve`,
      },
      {
        name: `Cast Steel Valve`,
        url: `${frontendURL}/product/cast-steel-valve`,
      },
      { name: `Choke Valves`, url: `${frontendURL}/product/choke-valves` },
      {
        name: `Ball Valves`,
        url: `#`,
        subMenuItem: [
          {
            name: `Forged Ball Valve`,
            url: `#`,
            nestedSubMenuItem: [
              {
                name: `Forged Flanged End Ball Valves`,
                url: `${frontendURL}/product/forged-flanged-end-ball-valves`,
              },
              {
                name: `Forged Bolted Screwed Ball Valves`,
                url: `${frontendURL}/product/forged-bolted-screwed-ball-valves`,
              },
            ],
          },
          {
            name: `Industrial Process Floating Ball Valves`,
            url: `${frontendURL}/product/industrial-process-floating-ball-valves`,
          },
          {
            name: `Jacketed Ball Valves`,
            url: `${frontendURL}/product/jacketed-ball-valves`,
          },
          {
            name: `Instrumentation Ball Valve`,
            url: `${frontendURL}/product/screwed-ball-valves`,
          },
        ],
      },
      {
        name: `Double Block & Bleed Valves`,
        url: `${frontendURL}/product/double-block-bleed-valves`,
      },
      {
        name: `Injection Quills & Sampling Probes For DBB Valves`,
        url: `${frontendURL}/product/injection-quills-sampling-probes-for-dbb-valves`,
      },
      {
        name: `Monoflange Valves`,
        url: `${frontendURL}/product/monoflange-valve`,
      },
      {
        name: `Needle Valve`,
        url: `#`,
        subMenuItem: [
          {
            name: `6000 PSI Needle Valves`,
            url: `${frontendURL}/product/needle-valves`,
          },
          {
            name: `High Pressure Needle Valves`,
            url: `${frontendURL}/product/high-pressure-needle-valves`,
          },
        ],
      },
      {
        name: `Safety Relief Valve`,
        url: `${frontendURL}/safety-relief-valve`,
      },
    ],
  },
  {
    name: `Advantages`,
    url: `${frontendURL}/advantages`,
  },
  {
    name: `Technical`,
    url: `${frontendURL}/technical`,
  },
  // {
  //   name: `Catalogue`,
  //   url: `${frontendURL}/catalogue`,
  // },
  {
    name: `Contact`,
    url: `${frontendURL}/contact`,
  },
  {
    name: `Blog`,
    url: `${frontendURL}/blog`,
  },
];
