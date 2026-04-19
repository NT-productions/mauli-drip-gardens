import grommet from "@/assets/product-grommet.jpeg";
import connector from "@/assets/product-connector.jpeg";
import emitters from "@/assets/product-emitters.jpeg";
import dripper from "@/assets/product-dripper.jpeg";
import valveYellow from "@/assets/product-valve-yellow.jpeg";
import valveBlack from "@/assets/product-valve-black.jpeg";
import endcap from "@/assets/product-endcap.jpeg";
import ballvalve from "@/assets/product-ballvalve.jpeg";

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
};

export const products: Product[] = [
  {
    id: "pc-emitters",
    name: "Pressure Compensating Emitters",
    category: "Emitters",
    image: emitters,
    description:
      "Self-cleaning PC and NPC emitters delivering uniform discharge across the entire lateral length, even on undulating terrain.",
    specs: ["NPC & PC types", "2, 4, 8 LPH options", "Self-flushing turbulent flow", "Anti-clog labyrinth"],
  },
  {
    id: "online-dripper",
    name: "Online Click-Lock Dripper",
    category: "Drippers",
    image: dripper,
    description:
      "Heavy-duty single-outlet online dripper with click-lock barb. Ideal for orchards, vineyards and high-value crops.",
    specs: ["4 / 8 / 14 LPH", "UV stabilized", "Quick fit / removable", "Wide pressure range"],
  },
  {
    id: "grommet-takeoff",
    name: "Rubber Grommet & Take-off",
    category: "Fittings",
    image: grommet,
    description:
      "Precision moulded grommets that ensure leak-proof take-off connections between mainline and laterals.",
    specs: ["12–32 mm sizes", "Virgin rubber + PP", "Leak-proof seal", "Re-usable"],
  },
  {
    id: "barb-connector",
    name: "Barbed Joiner Connector",
    category: "Fittings",
    image: connector,
    description:
      "Barbed straight joiner for joining drip laterals firmly without clamps. Engineered for long-term holding power.",
    specs: ["12 / 16 / 20 mm", "High pull-out strength", "Virgin polymer", "UV resistant"],
  },
  {
    id: "mini-valve",
    name: "Mini Lateral Valve (Yellow Knob)",
    category: "Valves",
    image: valveYellow,
    description:
      "Compact in-line shut-off valve for controlling water flow at lateral level. Smooth knob operation.",
    specs: ["16 / 20 mm barbed", "Quarter-turn shut-off", "Ergonomic knob", "Low pressure drop"],
  },
  {
    id: "inline-valve",
    name: "In-line Hose Valve",
    category: "Valves",
    image: valveBlack,
    description:
      "Robust inline hose valve for sub-main control with easy on/off operation in field conditions.",
    specs: ["Heavy-duty body", "Smooth flow path", "Field serviceable", "Yellow handle"],
  },
  {
    id: "end-cap",
    name: "Lateral End Cap with Loop",
    category: "Fittings",
    image: endcap,
    description:
      "End-of-line lateral closure with built-in loop handle for quick flushing and maintenance.",
    specs: ["12–20 mm laterals", "Quick flush design", "Re-usable", "UV stable"],
  },
  {
    id: "ball-valve",
    name: "HDPE Ball Valve",
    category: "Valves",
    image: ballvalve,
    description:
      "High-pressure HDPE ball valve for mainline isolation. Tested for trouble-free operation.",
    specs: ["63 / 75 / 90 mm", "Full-bore flow", "OK Tested", "Long-lasting seals"],
  },
];
