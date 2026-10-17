import type { Planets } from "./Esoteric";

type NumogramZoneName = `Zone ${NumogramZone}`;

export interface Zone {
  id: number;
  name: NumogramZoneName;
  planet: Planets & string;
  region: TimeSystem;
  demon: NumogramDemon;
  lore: string;
  pos: { x: number; y: number };
}

/**
 * The ten base digits that comprise the Numogram Zones.
 */
export type NumogramZone = (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9) & number;

/**
 * The three autonomous regions defined by the Numogram currents.
 */
export type TimeSystem =
  | "Plex (Outside Time)" // Outside Time (Zones 0, 9)
  | "Time-Circuit (Torque)" // The Torque / Chronic Time (Zones 1, 2, 4, 5, 7, 8)
  | "Warp (Outside Time)"; // The Ulterior Vortex / Outside Time (Zones 3, 6)

/**
 * Occult classification based on the Demon's relation to the Time-System.
 */
export type DemonClass =
  | "Amphidemon" // Denizens of the Gates and boundaries (e.g., Duoddod)
  | "Chronodemon" // Denizens of the Time-Circuit (Torque)
  | "Xenodemon"; // Denizens of the Outside (Plex and Warp)

/**
 * The specific numerical coordinate of a demon, formatted as `Phase::Imp`.
 * The Phase is the primary zone, and the Imp is the sub-entity index.
 */
export type DemonPitch = `${NumogramZone}::${NumogramZone}`;

export type Syzygy = `9::0` | `8::1` | `7::2` | `6::3` | `5::4`;

/**
 * The unique identifier in the Pandemonium Matrix (1 through 45).
 */
export type MatrixID = `M#${number}`;

/**
 * Represents a single Demon (Lemur) within the 45-entity Pandemonium System.
 */
export interface NumogramDemon {
  /** The unique Matrix catalog number (e.g., 'M#14') */
  matrixId: MatrixID;

  /** The esoteric name of the entity (e.g., 'Katak', 'Uttunul') */
  name: string;

  /** The exact decimal coordinate (e.g., '5::4') */
  pitch: DemonPitch;

  /** The Phase (0-9) this demon belongs to, corresponding to its primary Zone */
  phase: NumogramZone;

  /** The Imp degree, representing its secondary numerical root */
  imp: NumogramZone;

  /** The macro-region of the Numogram this demon prowls */
  region: TimeSystem;

  /** The specific demonological classification */
  classification: DemonClass;

  /** True if this demon sits on one of the 5 primary 9-sum twin axes */
  isSyzygetic: boolean;

  /** The Sarkonian Mesh-Tag of its primary Phase/Zone for bitmask filtering */
  meshTagHex: string;

  /** Lore, attributes, and temporal functions assigned to this entity */
  lore: string;
}

interface CurrentPath {
  id: Syzygy;
  path: string;
  grad: string;
}

export const getMeshTagData = (zoneId: number) => {
  const n = zoneId;
  const exactVal = Math.pow(2, n) - 1;
  const hex = `0x${Math.max(0, exactVal).toString(16).toUpperCase().padStart(4, "0")}`;
  const bin = Math.max(0, exactVal)
    .toString(2)
    .padStart(16, "0")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  let role = "";
  switch (n) {
    case 0:
      role = "Null State / Uninitialized Buffer";
      break;
    case 1:
      role = "1-Bit Latch / Primordial Click (Idle/Boot)";
      break;
    case 2:
      role = "2-Bit Quarantine Gate (Negotiating 1-2)";
      break;
    case 3:
      role = "3-Bit Warp Loop (Connecting 1-3)";
      break;
    case 4:
      role = "4-Bit Nibble Register / Completed Quaternary Mask";
      break;
    case 5:
      role = "Terminal Node / Hyperborea";
      break;
    case 6:
      role = "6-Bit Hex / Rotational Twin Register";
      break;
    case 7:
      role = "Surge Tractor (7-bit full byte)";
      break;
    case 8:
      role = "8-Bit Byte Register (Operational Dedicated TSCH)";
      break;
    case 9:
      role = "9-Bit Abyssal Limit / Full Pandemonium Array";
      break;
  }
  return { val: Math.max(0, exactVal), hex, bin, role, formula: `2^${n} - 1` };
};

// --- EXAMPLES OF INSTANTIATED DEMONS ---

/**
 * Example 1: KATAK (5::4 Syzygy)
 * The demon of the Pandemonium Gate, generating the Sink Current.
 */
// export const KATAK: NumogramDemon = {
//   matrixId: "M#14",
//   name: "Katak",
//   pitch: "5::4",
//   phase: 5,
//   imp: 4,
//   region: "Time-Circuit (Torque)",
//   classification: "Chronodemon",
//   isSyzygetic: true,
//   meshTagHex: "0x001F", // 2^5 - 1 = 31
//   lore: "The Sink Current. Cataclysmically unstable. Hunts amongst the raging storms. Generates the primary flow tearing downward into the hub of Zone 1."
// };

/**
 * Example 2: TCHU (6::0)
 * A Xenodemon of the Warp, initiating the Sixth Phase.
 */
export const TCHU: NumogramDemon = {
  matrixId: "M#15",
  name: "Tchu",
  pitch: "6::0",
  phase: 6,
  imp: 0,
  region: "Warp (Outside Time)",
  classification: "Xenodemon",
  isSyzygetic: false,
  meshTagHex: "0x003F", // 2^6 - 1 = 63
  lore: "Initiates the Sixth Phase. Primordially associated with shocking disappearances and the Ulterior Vortex of Outer-Time.",
};

/**
 * KATAK (5::4 Syzygy)
 * The demon of the Pandemonium Gate, generating the Sink Current.
 */
export const KATAK: NumogramDemon = {
  matrixId: "M#14",
  name: "Katak",
  pitch: "5::4",
  phase: 5,
  imp: 4,
  region: "Time-Circuit (Torque)",
  classification: "Chronodemon",
  isSyzygetic: true,
  meshTagHex: "0x001F", // 2^5 - 1 = 31
  lore: "The Sink Current. Cataclysmically unstable. Hunts amongst the raging storms. Generates the primary flow tearing downward into the hub of Zone 1.",
};

/**
 * DJYNXX (6::3 Syzygy)
 * The demon of the Warp, maintaining the Ulterior Vortex.
 */
export const DJYNXX: NumogramDemon = {
  matrixId: "M#18",
  name: "Djynxx",
  pitch: "6::3",
  phase: 6,
  imp: 3,
  region: "Warp (Outside Time)",
  classification: "Xenodemon",
  isSyzygetic: true,
  meshTagHex: "0x003F", // 2^6 - 1 = 63
  lore: "Draws the 'Ulterior Vortex' of Outer-Time. Folds time aggressively within the Outside region, feeding back into itself.",
};

/**
 * ODDUBB (7::2 Syzygy)
 * The demon of the Hold Current, linked to Lemurian Time-Sorcery.
 */
export const ODDUBB: NumogramDemon = {
  matrixId: "M#23",
  name: "Oddubb",
  pitch: "7::2",
  phase: 7,
  imp: 2,
  region: "Time-Circuit (Torque)",
  classification: "Chronodemon",
  isSyzygetic: true,
  meshTagHex: "0x007F", // 2^7 - 1 = 127
  lore: "The Hold Current. Intrinsically tied to the Time-Circuit and Lemurian Time-Sorcery. Its associations with hyperstitious doublings reinforce its twin character.",
};

/**
 * MURMUR (8::1 Syzygy)
 * The demon of the Surge Current, the nethermost denizen of time.
 */
export const MURMUR: NumogramDemon = {
  matrixId: "M#29",
  name: "Murmur",
  pitch: "8::1",
  phase: 8,
  imp: 1,
  region: "Time-Circuit (Torque)",
  classification: "Chronodemon",
  isSyzygetic: true,
  meshTagHex: "0x00FF", // 2^8 - 1 = 255
  lore: "The Surge Current. The nethermost denizen of time. Propels a massive current upward from the lower Time-Circuit toward the apocalyptic Zone 7.",
};

/**
 * UTTUNUL (9::0 Syzygy)
 * The demon of the Plex, executing flatline loss of signal.
 */
export const UTTUNUL: NumogramDemon = {
  matrixId: "M#36",
  name: "Uttunul",
  pitch: "9::0",
  phase: 9,
  imp: 0,
  region: "Plex (Outside Time)",
  classification: "Xenodemon",
  isSyzygetic: true,
  meshTagHex: "0x01FF", // 2^9 - 1 = 511
  lore: "The Plex Current. The Seething Void. Executes a feedback of absolute Atonality and flatline loss of signal. Draws the outermost curve of the Barker-spiral.",
};

// Mapping positions to match the iconic SVG perfectly (1000x1200 viewBox)
const NODE_COORDS = {
  1: { x: 500, y: 550 },
  2: { x: 750, y: 250 },
  3: { x: 420, y: 180 },
  4: { x: 120, y: 480 },
  5: { x: 250, y: 350 },
  6: { x: 580, y: 180 },
  7: { x: 820, y: 350 },
  8: { x: 500, y: 730 },
  9: { x: 500, y: 900 },
  0: { x: 500, y: 1070 },
};
export interface ColorConfig {
  gateCol: string;
  numColor: string;
  fillCol: string;
  strokeCol: string;
  currentsCol: string;
}
// Pandemonium Lore Database
const ZONES_DATA: Record<NumogramZone, Zone> = {
  0: {
    id: 0,
    name: "Zone 0",
    planet: "Sun",
    region: "Plex (Outside Time)",
    demon: UTTUNUL,
    lore: "The Absolute Abstraction. The closed circle, bindu, or decimal point. It constitutes a nominal or virtual multitude; the ultimate boundary of the Plex region, leading to absolute zero degrees Kelvin. It tolerates no populations of any kind.",
    pos: { x: 500, y: 1070 },
  },
  1: {
    id: 1,
    name: "Zone 1",
    planet: "Mercury",
    region: "Time-Circuit (Torque)",
    demon: MURMUR,
    lore: "The Phallic Unity. The active principle, ego, isolation, and rulership. Represents the digital signal, the electronic 'on'. It is the central hub and terminus for three Torque-channels.",
    pos: { x: 500, y: 550 },
  },
  2: {
    id: 2,
    name: "Zone 2",
    planet: "Venus",
    region: "Time-Circuit (Torque)",
    demon: ODDUBB,
    lore: "The Binary Schism. Initiates the Second Phase of Pandemonium. Invoked by K-goth cults as the 'Main Lo-Way' into the Crypt.",
    pos: { x: 750, y: 250 },
  },
  3: {
    id: 3,
    name: "Zone 3",
    planet: "Earth",
    region: "Warp (Outside Time)",
    demon: DJYNXX,
    lore: "The Triadic Diagonal. A pure vortex with no stable basin. Marks an intricate progression of compressive folding, leading into the Ulterior Vortex of Outer-Time.",
    pos: { x: 420, y: 180 },
  },
  4: {
    id: 4,
    name: "Zone 4",
    planet: "Mars",
    region: "Time-Circuit (Torque)",
    demon: KATAK,
    lore: "The Pandemonium Gate. The infernal nexus and Time-Delta, described in the Kurtz-mythos as 'the worst place in the world'. Cataclysmically unstable.",
    pos: { x: 120, y: 480 },
  },
  5: {
    id: 5,
    name: "Zone 5",
    planet: "Jupiter",
    region: "Time-Circuit (Torque)",
    demon: KATAK,
    lore: "The Innermost Curve. Central node or 'inner-eye' of the Barker-spiral. Deeply associated with the 5::4 syzygy and the ultimate Gate of Pandemonium.",
    pos: { x: 250, y: 350 },
  },
  6: {
    id: 6,
    name: "Zone 6",
    planet: "Saturn",
    region: "Warp (Outside Time)",
    demon: DJYNXX,
    lore: "The Hexagrammatic Gate. Associated with the I Ching, Ur-Oriyan Yoginis, and shocking disappearances through the Sixth Door (Undu).",
    pos: { x: 580, y: 180 },
  },
  7: {
    id: 7,
    name: "Zone 7",
    planet: "Uranus",
    region: "Time-Circuit (Torque)",
    demon: ODDUBB,
    lore: "The Lightning Stroke. Number of cyclic completeness and apocalyptic destruction. Its syzygetic gate (7::2) is explicitly linked to Lemurian Time-Sorcery and alternate chronologies.",
    pos: { x: 820, y: 350 },
  },
  8: {
    id: 8,
    name: "Zone 8",
    planet: "Neptune",
    region: "Time-Circuit (Torque)",
    demon: MURMUR,
    lore: "The Serpentine Infinity. Nethermost denizen of time, Moebian strip, and byte structural base. The Eighth Door offers the sole escape from the Time-Circuit into the Plex.",
    pos: { x: 500, y: 730 },
  },
  9: {
    id: 9,
    name: "Zone 9",
    planet: "Pluto",
    region: "Plex (Outside Time)",
    demon: UTTUNUL,
    lore: "The Ultimate Anomaly. Operates as a positive zero (9 = 0). Initiates the Ninth Phase of Pandemonium. Executes a feedback of absolute atonality, routing existence directly into the cosmic hypermatrix.",
    pos: { x: 500, y: 900 },
  },
};

export interface Current {
  syzygy: DemonPitch;
  demon: NumogramDemon;
  diff: number;
  lore: string;
  path: CurrentPath;
}
// Precise pathing for Currents (thick arrows)
const CURRENTS_PATHS: CurrentPath[] = [
  { id: "5::4", path: "M 200 400 Q 350 450 450 530", grad: "grad-5-4" },
  { id: "8::1", path: "M 540 570 Q 750 500 780 390", grad: "grad-8-1" },
  { id: "7::2", path: "M 780 340 Q 550 340 300 350", grad: "grad-7-2" },
  { id: "6::3", path: "M 540 180 Q 500 230 460 180", grad: "grad-6-3" },
  { id: "9::0", path: "M 460 1050 Q 420 980 470 930", grad: "grad-9-0" },
];
const CURRENTS_DATA: Record<Syzygy, Current> = {
  "5::4": {
    syzygy: "5::4",
    demon: KATAK,
    diff: 1,
    lore: "The 'Sink' Current. The arithmetical difference of 5 and 4 is 1. This generates a primary flow tearing downward into the hub of Zone 1.",
    path: { id: "5::4", path: "M 200 400 Q 350 450 450 530", grad: "grad-5-4" },
  },
  "8::1": {
    syzygy: "8::1",
    demon: MURMUR,
    diff: 7,
    lore: "The 'Surge' Current. The difference of 8 and 1 is 7. Propels a massive current upward from the lower Time-Circuit toward the apocalyptic Zone 7.",
    path: { id: "8::1", path: "M 540 570 Q 750 500 780 390", grad: "grad-8-1" },
  },
  "7::2": {
    syzygy: "7::2",
    demon: ODDUBB,
    diff: 5,
    lore: "The 'Hold' Current. The difference of 7 and 2 is 5. Connects the Lemurian Time-Sorcery gate directly across to the inner-eye of Zone 5.",
    path: { id: "7::2", path: "M 780 340 Q 550 340 300 350", grad: "grad-7-2" },
  },
  "6::3": {
    syzygy: "6::3",
    demon: DJYNXX,
    diff: 3,
    lore: "The Warp Vortex. The difference of 6 and 3 is 3. Folds time aggressively within the Outside region, feeding back into itself.",
    path: { id: "6::3", path: "M 540 180 Q 500 230 460 180", grad: "grad-6-3" },
  },
  "9::0": {
    syzygy: "9::0",
    demon: UTTUNUL,
    diff: 9,
    lore: "The Plex Current. The difference of 9 and 0 is 9. A deep abyssal feedback loop executing a flatline loss of signal.",
    path: {
      id: "9::0",
      path: "M 460 1050 Q 420 980 470 930",
      grad: "grad-9-0",
    },
  },
};
type Channel = { id: number; path: string };
interface NumogramData {
  Currents: Record<Syzygy, Current>;
  Zones: Record<number, Zone>;
  CurrentsPaths: CurrentPath[];
  Gates: Record<number, Gate>;
  NodeCoords: Record<number, { x: number; y: number }>;
  Channels: Channel[];
  GatesPaths: Record<number, { x: number; y: number }>;
}

export interface Gate {
  value: number;
  zone: Zone;
  reduces: number;
  lore: string;
  pos: { x: number; y: number };
}

const GATE_COORDS = {
  1: { x: 550, y: 470 },
  3: { x: 350, y: 260 },
  6: { x: 500, y: 80 },
  10: { x: 310, y: 560 },
  15: { x: 570, y: 40 },
  21: { x: 480, y: 260 },
  28: { x: 670, y: 500 },
  36: { x: 600, y: 815 },
  45: { x: 390, y: 880 },
};

// Precise pathing for Channels (thin lines)
const CHANNELS_PATHS: Channel[] = [
  { id: 1, path: "M 500 515 C 550 450, 600 550, 535 550" }, // 1 to 1
  { id: 3, path: "M 715 265 Q 550 350 455 200" }, // 2 to 3
  { id: 6, path: "M 445 155 Q 500 50 565 155" }, // 3 to 6
  { id: 10, path: "M 155 495 Q 250 650 465 570" }, // 4 to 1
  { id: 15, path: "M 260 315 C 200 0, 750 0, 605 160" }, // 5 to 6
  { id: 21, path: "M 555 205 Q 500 300 445 205" }, // 6 to 3
  { id: 28, path: "M 785 365 Q 650 550 535 550" }, // 7 to 1
  { id: 36, path: "M 525 755 Q 650 815 530 890" }, // 8 to 9
  { id: 45, path: "M 465 890 C 350 830, 350 970, 465 910" }, // 9 to 9
];
const GATES_DATA: Record<number, Gate> = {
  1: {
    value: 1,
    zone: ZONES_DATA["1"],
    reduces: 1,
    lore: "Cumulation of 1. Digital reduction stabilizes at 1, looping the channel infinitely on Zone 1.",
    pos: { x: 550, y: 470 },
  },
  3: {
    value: 3,
    zone: ZONES_DATA["2"],
    reduces: 3,
    lore: "Cumulation of 2 (1+2). Digital reduction directs the channel from Zone 2 to Zone 3 (Warp).",
    pos: { x: 350, y: 260 },
  },
  6: {
    value: 6,
    zone: ZONES_DATA["3"],
    reduces: 6,
    lore: "Cumulation of 3 (1+2+3). Digital reduction directs the channel from Zone 3 to Zone 6, feeding the Ulterior Vortex.",
    pos: { x: 500, y: 80 },
  },
  10: {
    value: 10,
    zone: ZONES_DATA["4"],
    reduces: 1,
    lore: "Cumulation of 4 (1+2+3+4). Reduces to 1 (1+0). Routes the channel from the unstable Zone 4 back to the hub of Zone 1.",
    pos: { x: 310, y: 560 },
  },
  15: {
    value: 15,
    zone: ZONES_DATA["5"],
    reduces: 6,
    lore: "Cumulation of 5. Reduces to 6 (1+5). Drives a massive channel from the Time-Circuit (5) up into the Warp region (6).",
    pos: { x: 570, y: 40 },
  },
  21: {
    value: 21,
    zone: ZONES_DATA["6"],
    reduces: 3,
    lore: "Cumulation of 6. Reduces to 3 (2+1). Completes the 6-3 Warp vortex.",
    pos: { x: 480, y: 260 },
  },
  28: {
    value: 28,
    zone: ZONES_DATA["7"],
    reduces: 1,
    lore: "Cumulation of 7. Reduces to 1 (2+8=10 -> 1+0=1). Connects the Lemurian apocalypse of 7 back into the ego-hub of 1.",
    pos: { x: 670, y: 500 },
  },
  36: {
    value: 36,
    zone: ZONES_DATA["8"],
    reduces: 9,
    lore: "Cumulation of 8. Reduces to 9 (3+6). The Eighth Door channel, allowing escape from the Time-Circuit down into the abyssal Plex (9).",
    pos: { x: 600, y: 815 },
  },
  45: {
    value: 45,
    zone: ZONES_DATA["9"],
    reduces: 9,
    lore: "Cumulation of 9. Reduces to 9 (4+5). The ultimate Pandemonium Gate. All 45 Lemurian demons are encompassed here, looping infinitely.",
    pos: { x: 390, y: 880 },
  },
};

const Numogram: NumogramData = {
  Zones: ZONES_DATA,
  Currents: CURRENTS_DATA,
  Gates: GATES_DATA,
  Channels: CHANNELS_PATHS,
  CurrentsPaths: [
    { id: "5::4", path: "M 200 400 Q 350 450 450 530", grad: "grad-5-4" },
    { id: "8::1", path: "M 540 570 Q 750 500 780 390", grad: "grad-8-1" },
    { id: "7::2", path: "M 780 340 Q 550 340 300 350", grad: "grad-7-2" },
    { id: "6::3", path: "M 540 180 Q 500 230 460 180", grad: "grad-6-3" },
    { id: "9::0", path: "M 460 1050 Q 420 980 470 930", grad: "grad-9-0" },
  ],
  GatesPaths: {
    1: { x: 550, y: 470 },
    3: { x: 350, y: 260 },
    6: { x: 500, y: 80 },
    10: { x: 310, y: 560 },
    15: { x: 570, y: 40 },
    21: { x: 480, y: 260 },
    28: { x: 670, y: 500 },
    36: { x: 600, y: 815 },
    45: { x: 390, y: 880 },
  },
  NodeCoords: {
    1: { x: 500, y: 550 },
    2: { x: 750, y: 250 },
    3: { x: 420, y: 180 },
    4: { x: 120, y: 480 },
    5: { x: 250, y: 350 },
    6: { x: 580, y: 180 },
    7: { x: 820, y: 350 },
    8: { x: 500, y: 730 },
    9: { x: 500, y: 900 },
    0: { x: 500, y: 1070 },
  },
};
export default Numogram;
