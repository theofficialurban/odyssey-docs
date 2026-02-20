// 1. The Elements (The Base Frequencies)
// export enum Element {
//   Fire = "FIRE",
//   Earth = "EARTH",
//   Air = "AIR",
//   Water = "WATER",
// }

// 2. The Planets (The Modulators / Rulers)
// Note: In astrological systems, the Sun and Moon (luminaries)
// and Pluto are traditionally categorized under "planets" for logic mapping.
// export enum Planet {
//   Sun = "SUN",
//   Moon = "MOON",
//   Mercury = "MERCURY",
//   Venus = "VENUS",
//   Mars = "MARS",
//   Jupiter = "JUPITER",
//   Saturn = "SATURN",
//   Uranus = "URANUS",
//   Neptune = "NEPTUNE",
//   Pluto = "PLUTO",
// }

// 3. The Zodiac Signs (The 12 Architectural Configurations)
// export enum ZodiacSign {
//   Aries = "ARIES",
//   Taurus = "TAURUS",
//   Gemini = "GEMINI",
//   Cancer = "CANCER",
//   Leo = "LEO",
//   Virgo = "VIRGO",
//   Libra = "LIBRA",
//   Scorpio = "SCORPIO",
//   Sagittarius = "SAGITTARIUS",
//   Capricorn = "CAPRICORN",
//   Aquarius = "AQUARIUS",
//   Pisces = "PISCES",
// }

// Optional but recommended: Modalities (The execution states)
// export enum Modality {
//   Cardinal = "CARDINAL", // Initiating action
//   Fixed = "FIXED", // Sustaining action
//   Mutable = "MUTABLE", // Adapting/Changing
// }

// export enum Dignity {
//   Rulership = "DOMICILE",
//   Exaltation = "EXALTATION",
//   Detriment = "DETRIMENT",
//   Fall = "FALL",
// }
export type Planets =
  | "Neptune"
  | "Uranus"
  | "Pluto"
  | "Jupiter"
  | "Saturn"
  | "Mars"
  | "Venus"
  | "Mercury"
  | "Sun"
  | "Moon";

export type ZodiacSigns =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Capricorn"
  | "Virgo"
  | "Sagittarius"
  | "Pisces"
  | "Aquarius"
  | "Libra"
  | "Scorpio";

export type Elements = "Fire" | "Water" | "Air" | "Earth" | "Spirit";

// ruler: Planet,
//     exalted: Planet | null,
//     detriment: Planet,
//     fall: Planet | null

// export interface Relationship<D extends Dignity> {
//   dignity: D;
//   planet: Planet;
// }
// export type ZodiacSignDignities = {
//   ruler: Relationship<Dignity.Rulership>;
//   exaltation: Relationship<Dignity.Exaltation> | null;
//   detriment: Relationship<Dignity.Detriment>;
//   fall: Relationship<Dignity.Fall> | null;
// };
//type PlanetaryDignities = Map<ZodiacSigns, ZodiacSignDignities>;
export type PlanetaryIcons = Record<Planets, string>;
export type ZodiacIcons = Record<ZodiacSigns, string>;
export type ElementalIcons = Record<Elements, string>;
// https://en.wikipedia.org/wiki/Alchemical_symbol
export const ElementalIcons: ElementalIcons = {
  Water: `<svg xmlns="http://www.w3.org/2000/svg" stroke="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 12 12"><path style="fill:none;stroke-width:.60000002;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:7;stroke-dasharray:none" d="M11 1.67H1l5 8.66z" stroke-miterlimit="10"/></svg>`,
  Fire: `<svg xmlns="http://www.w3.org/2000/svg" stroke="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 12 12"><path stroke-miterlimit="10" d="m1 10.33 5-8.66 5 8.66z" style="fill:none;stroke-width:.60000002;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:7;stroke-dasharray:none"/></svg>`,
  Air: `<svg stroke="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path style="fill:none;stroke-width:.60000002;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:7;stroke-dasharray:none" d="M1 6h10M1 10.33l5-8.66 5 8.66z"/></svg>`,
  Earth: `<svg stroke="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path style="fill:none;stroke-width:.60000002;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:7;stroke-dasharray:none" d="M1 6h10m0-4.33H1l5 8.66z"/></svg>`,
  Spirit: `<svg xmlns="http://www.w3.org/2000/svg" stroke="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 12 12"><path style="fill:none;stroke-width:.60000002;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1" d="M11 6A5 5 0 1 0 1 6a5 5 0 0 0 10 0zm-5 5V1M1 6h10M2.464 9.536l7.072-7.072m-7.072 0 7.072 7.072"/></svg>`,
};

export const ZodiacIcons: ZodiacIcons = {
  Aquarius: `<svg xmlns="http://www.w3.org/2000/svg" fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 24 24"><title>Aquarius</title><path fill="{{fill}}" d="m15 12.41l-3-3l-3 3l-3-3l-2.29 2.3l-1.42-1.42L6 6.59l3 3l3-3l3 3l3-3l3.71 3.7l-1.42 1.42L18 9.41zm3 3l2.29 2.3l1.42-1.42l-3.71-3.7l-3 3l-3-3l-3 3l-3-3l-3.71 3.7l1.42 1.42L6 15.41l3 3l3-3l3 3z"/></svg>`,
  Aries: `<svg xmlns="http://www.w3.org/2000/svg" fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 24 24"><title>aries</title><path fill="{{fill}}" d="M16 2c-1.05 0-2.09.27-3 .81c-.36.19-.7.45-1 .73c-.3-.28-.64-.54-1-.73C10.09 2.27 9.05 2 8 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6v-2a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4.03 4.03 0 0 1 3 1.36V22h2V5.36c.08-.09.16-.18.25-.26a4 4 0 0 1 5.66.15a3.997 3.997 0 0 1-.15 5.65C18 11.61 17.03 12 16 12v2a6 6 0 0 0 6-6a6 6 0 0 0-6-6"/></svg>`,
  Cancer: `<svg xmlns="http://www.w3.org/2000/svg" fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 24 24"><title>cancer</title><path fill="{{fill}}" d="M12 4C6.5 4 2 7.58 2 12c0 2.12 1.65 3.87 3.76 4H6a4 4 0 0 0 4-4a4 4 0 0 0-4-4h-.24A8.8 8.8 0 0 1 12 5.6c1.77-.02 3.5.47 5 1.4l1.25-1.25A11.5 11.5 0 0 0 12 4m-6 6a2 2 0 0 1 2 2c0 1.11-.92 2-2 2a2 2 0 0 1-2-1.8v-.4A2 2 0 0 1 6 10m12.24-2H18a4 4 0 0 0-4 4a4 4 0 0 0 4 4h.24A8.8 8.8 0 0 1 12 18.4c-1.77.02-3.5-.47-5-1.4l-1.24 1.24C7.63 19.41 9.79 20 12 20c5.5 0 10-3.58 10-8c0-2.12-1.65-3.87-3.76-4M18 14a2 2 0 0 1-2-2c0-1.11.92-2 2-2a2 2 0 0 1 2 1.8v.4a2 2 0 0 1-2 1.8"/></svg>`,
  Capricorn: `<svg xmlns="http://www.w3.org/2000/svg" fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 24 24"><title>capricorn</title><path fill="{{fill}}" d="M15 13c-.7 0-1.39.19-2 .55V6a3 3 0 0 0-3-3c-.75 0-1.45.29-2 .78C7.45 3.28 6.74 3 6 3v2a1 1 0 0 1 1 1v10h2V6a1 1 0 0 1 1-1a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2v2c1.15 0 2.25-.5 3-1.38a3.974 3.974 0 0 0 5.64.38c1.67-1.42 1.86-3.95.4-5.62A4.01 4.01 0 0 0 15 13m0 6a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2"/></svg>`,
  Gemini: `<svg xmlns="http://www.w3.org/2000/svg" fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 24 24"><title>gemini</title><path fill="{{fill}}" d="M18 5.3c1.35-.33 2.66-.76 3.94-1.3l-.76-1.86a23.75 23.75 0 0 1-18.36.03L2.06 4c1.28.54 2.59.97 3.94 1.3v13.4c-1.35.33-2.66.76-3.94 1.3l.76 1.86a23.94 23.94 0 0 1 18.36 0l.76-1.86c-1.28-.54-2.59-.97-3.94-1.3zm-10 13V5.69c1.32.2 2.66.31 4 .31s2.68-.11 4-.31v12.62a26.2 26.2 0 0 0-8 0z"/></svg>`,
  Leo: `<svg xmlns="http://www.w3.org/2000/svg" fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 24 24"><title>leo</title><path fill="{{fill}}" d="M20 17a3 3 0 0 1-3 3a3.163 3.163 0 0 1-3-3c.16-1.61.5-3.2 1-4.74c.54-1.71.87-3.47 1-5.26a5.136 5.136 0 0 0-5-5a5.136 5.136 0 0 0-5 5c.15 1.53.5 3.03 1 4.5l.21.7c-2.11-.67-4.35.5-5.02 2.6c-.69 2.11.49 4.36 2.6 5.03s4.35-.5 5.02-2.61c.13-.39.19-.81.19-1.22c-.16-1.73-.5-3.44-1.09-5.08A18.8 18.8 0 0 1 8 7a3.163 3.163 0 0 1 3-3c1.62.08 2.92 1.38 3 3a22.6 22.6 0 0 1-1 4.74c-.54 1.71-.87 3.47-1 5.26a5.136 5.136 0 0 0 5 5a5 5 0 0 0 5-5zM6 18a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2"/></svg>`,
  Libra: `<svg xmlns="http://www.w3.org/2000/svg" fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 24 24"><title>libra</title><path fill="{{fill}}" d="M20 16v2h-7v-2.09c3-.55 4.96-3.41 4.41-6.41S14 4.54 11 5.09C8 5.65 6.04 8.5 6.59 11.5c.41 2.24 2.17 4 4.41 4.41V18H4v-2h2.92a7.43 7.43 0 0 1-2.42-5.5A7.5 7.5 0 0 1 12 3a7.5 7.5 0 0 1 7.5 7.5c0 2.09-.87 4.09-2.42 5.5zm0 3H4v2h16z"/></svg>`,
  Pisces: `<svg xmlns="http://www.w3.org/2000/svg" fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 24 24"><title>pisces</title><path fill="{{fill}}" d="M20 11h-2c.11-2.81.73-5.58 1.81-8.18L18 2.06A26 26 0 0 0 16 11H8c-.13-3.08-.81-6.1-2-8.94l-1.86.76C5.24 5.41 5.87 8.18 6 11H4v2h2a23.8 23.8 0 0 1-1.81 8.18l1.81.76C7.19 19.1 7.87 16.08 8 13h8c.13 3.08.81 6.1 2 8.94l1.86-.76c-1.1-2.59-1.73-5.36-1.86-8.18h2z"/></svg>`,
  Sagittarius: `<svg xmlns="http://www.w3.org/2000/svg" fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 24 24"><title>sagittarius</title><path fill="{{fill}}" d="M22 2v10h-2V5.41L10.41 15l2.3 2.29l-1.42 1.42L9 16.41l-5.29 5.3l-1.42-1.42L7.59 15l-2.3-2.29l1.42-1.42L9 13.59L18.59 4H12V2z"/></svg>`,
  Scorpio: `<svg xmlns="http://www.w3.org/2000/svg" fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 24 24"><title>scorpio</title><path fill="{{fill}}" d="m17.71 15.29l-1.42 1.42l1.3 1.29H16a2 2 0 0 1-2-2V6a3 3 0 0 0-3-3c-.75 0-1.45.29-2 .78a2.997 2.997 0 0 0-4 0C4.45 3.28 3.74 3 3 3v2a1 1 0 0 1 1 1v10h2V6a1 1 0 0 1 1-1a1 1 0 0 1 1 1v10h2V6a1 1 0 0 1 1-1a1 1 0 0 1 1 1v10a4 4 0 0 0 4 4h1.59l-1.3 1.29l1.42 1.42l3.7-3.71z"/></svg>`,
  Taurus: `<svg xmlns="http://www.w3.org/2000/svg" fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 24 24"><title>taurus</title><path fill="{{fill}}" d="M15.59 9A7 7 0 0 0 19 3h-2a5 5 0 0 1-5 5a5 5 0 0 1-5-5H5c0 2.46 1.3 4.74 3.41 6C5.09 11 4 15.28 6 18.6c1.97 3.32 6.27 4.4 9.59 2.4c3.32-1.96 4.41-6.26 2.41-9.58A6.9 6.9 0 0 0 15.59 9M12 20a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5"/></svg>`,
  Virgo: `<svg xmlns="http://www.w3.org/2000/svg" fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 24 24"><title>virgo</title><path fill="{{fill}}" d="M18.5 19.13C20 17.77 20 15.18 20 14a4 4 0 0 0-4-4c-.7 0-1.4.2-2 .56V6a3 3 0 0 0-3-3c-.75 0-1.45.29-2 .78a2.997 2.997 0 0 0-4 0C4.45 3.28 3.74 3 3 3v2a1 1 0 0 1 1 1v10h2V6a1 1 0 0 1 1-1a1 1 0 0 1 1 1v10h2V6a1 1 0 0 1 1-1a1 1 0 0 1 1 1v8c0 1.18 0 3.77 1.5 5.13c-.78.41-1.62.71-2.5.87v2c1.29 0 3.84-1.26 5-1.87c1.16.61 3.71 1.87 5 1.87v-2c-.88-.16-1.72-.46-2.5-.87M16 12a2 2 0 0 1 2 2c0 2.92-.54 4-2 4s-2-1.08-2-4a2 2 0 0 1 2-2"/></svg>`,
};
export const PlanetaryIcons: PlanetaryIcons = {
  Pluto: `<svg fill="{{fill}}" width="{{width}}" height="{{height}}" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="{{fill}}" d="M458.668,160c0-5.875-4.781-10.656-10.688-10.656c-5.875,0-10.656,4.781-10.656,10.656 c0,24.5-4.781,48.25-14.25,70.594c-9.125,21.562-22.219,40.969-38.875,57.625s-36.031,29.75-57.625,38.875 c-22.344,9.438-46.094,14.25-70.586,14.25c-24.469,0-48.219-4.812-70.562-14.25c-21.594-9.125-41-22.219-57.656-38.875 s-29.719-36.062-38.875-57.625C79.457,208.25,74.676,184.5,74.676,160l0,0c0-5.875-4.781-10.656-10.688-10.656 c-5.875,0-10.656,4.781-10.656,10.656l0,0l0,0l0,0l0,0c0,108.344,85.031,196.844,192,202.406v138.938 c0,5.875,4.781,10.656,10.656,10.656c5.898,0,10.68-4.781,10.68-10.656V362.406C373.637,356.844,458.668,268.344,458.668,160z"></path> <g> <path fill="{{fill}}" d="M256.004,320c88.383,0,160.008-71.625,160.008-160S344.387,0,256.004,0 c-88.344,0-160,71.625-160,160S167.66,320,256.004,320z M117.348,160c0-18.719,3.656-36.875,10.875-53.969 c7-16.5,17-31.344,29.75-44.094c12.719-12.719,27.562-22.719,44.062-29.719c17.094-7.219,35.25-10.875,53.969-10.875 c18.758,0,36.914,3.656,53.977,10.875c16.531,7,31.344,17,44.094,29.719c12.75,12.75,22.75,27.594,29.719,44.094 c7.219,17.094,10.906,35.25,10.906,53.969s-3.688,36.906-10.906,53.969c-6.969,16.5-16.969,31.344-29.719,44.094 s-27.562,22.75-44.094,29.719c-17.062,7.219-35.219,10.875-53.977,10.875c-18.719,0-36.875-3.656-53.969-10.875 c-16.5-6.969-31.344-16.969-44.062-29.719c-12.75-12.75-22.75-27.594-29.75-44.094C121.004,196.906,117.348,178.719,117.348,160z"></path> <path fill="{{fill}}" d="M330.668,426.594H181.332c-5.906,0-10.656,4.781-10.656,10.688c0,5.875,4.75,10.656,10.656,10.656 h149.336c5.875,0,10.656-4.781,10.656-10.656C341.324,431.375,336.543,426.594,330.668,426.594z"></path> </g> </g></svg>`,
  Neptune: `<svg fill="{{fill}}" width="{{width}}" height="{{height}}" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 475.534 475.534" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M400.845,15.724h-0.014c-50.393,0.039-93.961,29.643-113.688,77.262c-13.166,31.771-13.166,65.377-1.138,94.82h-24.642 V23.598C261.365,10.563,250.796,0,237.767,0S214.17,10.563,214.17,23.598v164.208h-24.643c12.03-29.443,12.03-63.05-1.136-94.82 c-19.726-47.618-63.297-77.222-113.687-77.262h-0.016c-13.027,0-23.582,10.554-23.598,23.583 C51.075,52.335,61.63,62.913,74.673,62.919c37.011,0.031,60.485,24.881,70.118,48.133c9.648,23.268,10.632,57.465-15.532,83.682 c-6.744,6.752-8.758,16.901-5.101,25.71c3.657,8.811,12.26,14.557,21.801,14.557h68.212v65.831h-60.807 c-13.027,0-23.598,10.563-23.598,23.598c0,13.036,10.57,23.598,23.598,23.598h60.807v103.908c0,13.036,10.569,23.598,23.598,23.598 s23.598-10.561,23.598-23.598V348.028h60.808c13.027,0,23.598-10.562,23.598-23.598c0-13.035-10.57-23.598-23.598-23.598h-60.808 v-65.831h68.213c9.539,0,18.143-5.745,21.8-14.557c3.655-8.81,1.643-18.958-5.101-25.71c-26.164-26.217-25.181-60.415-15.532-83.682 c9.633-23.252,33.107-48.102,70.116-48.133c13.044-0.006,23.599-10.584,23.582-23.612C424.429,26.278,413.875,15.724,400.845,15.724 z"></path> </g></svg>`,
  Uranus: `<svg fill="{{fill}}" width="{{width}}" height="{{height}}" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 485.33 485.33" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M411.785,243.039c-44.145,0-80.053-35.915-80.067-80.052c0.015-44.136,35.923-80.043,80.052-80.06 c13.524,0,24.47-10.96,24.47-24.478c0-13.509-10.961-24.462-24.47-24.462c-65.57,0.016-119.768,49.258-127.844,112.686h-16.791 V24.469C267.135,10.952,256.174,0,242.665,0c-13.509,0-24.47,10.952-24.47,24.469v122.205h-16.791 c-8.063-63.42-62.258-112.67-127.844-112.686c-13.511,0-24.47,10.953-24.47,24.462c0,13.517,10.944,24.478,24.47,24.478 c44.128,0.016,80.035,35.924,80.052,80.044c-0.017,44.153-35.924,80.068-80.068,80.068c-13.509,0-24.47,10.952-24.47,24.469 c0,13.519,10.961,24.47,24.47,24.47c65.57,0,119.768-49.233,127.86-112.678h16.791v102.426 c-45.18,11.033-78.857,51.744-78.857,100.277c0,56.977,46.358,103.327,103.327,103.327c56.968,0,103.327-46.35,103.327-103.327 c0-48.533-33.679-89.244-78.857-100.277V179.3h16.791c8.076,63.429,62.287,112.678,127.859,112.678 c13.509,0,24.47-10.951,24.47-24.47C436.255,253.991,425.294,243.039,411.785,243.039z M297.053,382.003 c0,29.99-24.406,54.388-54.388,54.388c-29.982,0-54.388-24.398-54.388-54.388c0-29.99,24.405-54.388,54.388-54.388 C272.647,327.615,297.053,352.013,297.053,382.003z"></path> </g></svg>`,
  Mars: `<svg fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m23 0c.549.008.992.451 1 .999v6.501.02c0 .265-.215.48-.48.48-.007 0-.014 0-.021 0h.001-1c-.006 0-.013 0-.02 0-.265 0-.48-.215-.48-.48 0-.007 0-.014 0-.021v.001-4.094l-5.969 5.984c1.226 1.485 1.969 3.407 1.969 5.503 0 .037 0 .075-.001.112v-.006.026c0 1.253-.262 2.444-.733 3.522l.022-.057c-.92 2.18-2.62 3.88-4.742 4.778l-.058.022c-1.03.449-2.231.711-3.492.711s-2.462-.261-3.55-.733l.058.022c-2.18-.92-3.88-2.62-4.778-4.742l-.022-.058c-.449-1.03-.711-2.231-.711-3.492s.261-2.462.733-3.55l-.022.058c.92-2.18 2.62-3.88 4.742-4.778l.058-.022c1.022-.45 2.213-.711 3.466-.711h.028-.001c.032 0 .069-.001.106-.001 2.096 0 4.019.744 5.518 1.981l-.015-.012 5.969-5.969h-4.08c-.006 0-.013 0-.02 0-.265 0-.48-.215-.48-.48 0-.007 0-.014 0-.021v.001-1c0-.006 0-.013 0-.02 0-.265.215-.48.48-.48h.021-.001zm-14 22h.015c3.874 0 7.015-3.141 7.015-7.015s-3.141-7.015-7.015-7.015-7.015 3.141-7.015 7.015c0 1.937.785 3.691 2.055 4.961 1.227 1.268 2.945 2.055 4.846 2.055.035 0 .07 0 .105-.001h-.005z"></path></g></svg>`,
  Venus: `<svg fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="-4.5 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m15.426 7.714c0 .03.001.065.001.1 0 1.951-.751 3.727-1.98 5.054l.004-.005c-1.217 1.383-2.925 2.31-4.848 2.509l-.032.003v3.482h3 .016c.228 0 .413.185.413.413v.017-.001.857.016c0 .228-.185.413-.413.413-.006 0-.011 0-.017 0h.001-3v3 .016c0 .228-.185.413-.413.413-.006 0-.011 0-.017 0h.001-.857c-.005 0-.011 0-.016 0-.228 0-.413-.185-.413-.413 0-.006 0-.011 0-.017v.001-3h-3c-.005 0-.011 0-.016 0-.228 0-.413-.185-.413-.413 0-.006 0-.011 0-.017v.001-.857c0-.005 0-.011 0-.016 0-.228.185-.413.413-.413h.017-.001 3v-3.482c-1.378-.143-2.619-.639-3.658-1.394l.022.015c-1.96-1.42-3.22-3.701-3.22-6.277 0-.223.009-.444.028-.662l-.002.028c.102-1.245.49-2.381 1.099-3.367l-.019.033c.621-1.024 1.439-1.867 2.408-2.499l.03-.018c.934-.619 2.051-1.039 3.254-1.175l.034-.003c.273-.034.589-.054.909-.054 4.245 0 7.686 3.441 7.686 7.686v.03-.002zm-13.716 0c0 .026-.001.056-.001.087 0 1.629.674 3.101 1.759 4.152l.002.001c1.083 1.089 2.583 1.762 4.24 1.762s3.157-.674 4.24-1.762c1.086-1.052 1.761-2.524 1.761-4.153 0-.031 0-.061-.001-.092v.005c0-.026.001-.056.001-.087 0-1.629-.674-3.101-1.759-4.152l-.002-.001c-1.083-1.089-2.583-1.762-4.24-1.762s-3.157.674-4.24 1.762c-1.085 1.052-1.758 2.523-1.758 4.151 0 .031 0 .063.001.094v-.005z"></path></g></svg>`,
  Mercury: `<svg fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="-9 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mercury</title> <path d="M13.76 13.596c0-2.6-1.44-4.88-3.6-6.040 1.12-0.6 2.080-1.52 2.72-2.68 0.24-0.4 0.080-0.92-0.32-1.16s-0.92-0.080-1.16 0.32c-0.92 1.64-2.68 2.68-4.56 2.68s-3.64-1.040-4.56-2.68c-0.2-0.4-0.68-0.56-1.12-0.32-0.4 0.24-0.56 0.72-0.32 1.12 0.64 1.16 1.6 2.12 2.76 2.72-2.16 1.2-3.6 3.44-3.6 6.040 0 3.52 2.64 6.4 6.040 6.84v3.56h-2c-0.48 0-0.84 0.36-0.84 0.84s0.36 0.84 0.84 0.84h2v1.88c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-1.88h2c0.48 0 0.84-0.36 0.84-0.84s-0.36-0.84-0.84-0.84h-2v-3.56c3.4-0.4 6.040-3.32 6.040-6.84zM1.68 13.596c0-2.88 2.32-5.2 5.2-5.2s5.2 2.32 5.2 5.2-2.32 5.2-5.2 5.2-5.2-2.32-5.2-5.2z"></path> </g></svg>`,

  Saturn: `<svg fill="{{fill}}" width="{{width}}" height="{{height}}" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.993 511.993" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="{{fill}}" d="M277.335,174.469c-70.703,0-128.008,57.305-128.008,127.992h21.328 c0-28.484,11.102-55.273,31.242-75.414c20.148-20.148,46.938-31.242,75.438-31.242c28.484,0,55.266,11.094,75.406,31.242 c20.156,20.141,31.25,46.93,31.25,75.414v0.094v0.094c0.328,41.609-22.5,93.531-66.594,152.438 c-10.062,12.719-16.062,28.781-16.062,46.25c0,5.875,4.781,10.656,10.656,10.656c5.906,0,10.672-4.781,10.672-10.656 c0.016-11.219,3.531-21.734,9.484-30.312c41.547-54.875,73.594-114.781,73.188-168.562 C405.335,231.773,348.022,174.469,277.335,174.469z"></path> <path fill="{{fill}}" d="M322.663,501.336L322.663,501.336C322.663,501.351,322.663,501.336,322.663,501.336z"></path> </g> <path fill="{{fill}}" d="M149.327,10.664v416c0,5.891,4.773,10.672,10.664,10.672s10.664-4.781,10.664-10.672v-416 C170.655,10.664,149.327,10.664,149.327,10.664z"></path> <path fill="{{fill}}" d="M202.655,0h-85.328c-5.891,0-10.672,4.773-10.672,10.664s4.781,10.672,10.672,10.672h85.328 c5.891,0,10.672-4.781,10.672-10.672S208.546,0,202.655,0z"></path> </g></svg>`,
  Sun: `<svg fill="{{fill}}" width="{{width}}" height="{{height}}" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 482.112 482.112" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M241.055,0C108.141,0,0.007,108.134,0.007,241.048c0,132.922,108.134,241.064,241.048,241.064 c132.915,0,241.05-108.142,241.05-241.064C482.105,108.134,373.97,0,241.055,0z M241.055,434.267 c-106.53,0-193.202-86.68-193.202-193.218c0-106.531,86.672-193.203,193.202-193.203c106.53,0,193.204,86.672,193.204,193.203 C434.259,347.587,347.585,434.267,241.055,434.267z"></path> <path d="M241.055,181.561c-32.862,0-59.494,26.634-59.494,59.496s26.632,59.496,59.494,59.496 c32.863,0,59.496-26.634,59.496-59.496S273.918,181.561,241.055,181.561z"></path> </g> </g></svg>`,
  Moon: `<svg fill="{{fill}}" width="{{width}}" height="{{height}}" viewBox="-5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>moon</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-573.000000, -827.000000)" fill="{{fill}}"> <path d="M587.23,857 C582.287,856.641 575.047,850.732 575.047,843 C575.047,835.269 582.132,829.434 587.23,829 C588.764,828.87 587.953,828.875 589.372,829 C586.035,831.104 582.216,836.962 582.216,843 C582.216,849.038 584.994,854.619 589.372,857 C588.024,857.125 588.698,857.106 587.23,857 L587.23,857 Z M584.256,843 C584.256,836.1 588.735,830.236 595,827.991 C593.243,827.361 591.353,827 589.372,827 C580.33,827 573,834.164 573,843 C573,851.837 580.33,859 589.372,859 C591.353,859 593.243,858.639 595,858.009 C588.735,855.764 584.256,849.901 584.256,843 L584.256,843 Z" id="moon" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`,
  Jupiter: `<svg stroke="{{fill}}" fill="none" xmlns="http://www.w3.org/2000/svg" width="{{width}}" height="{{height}}" viewBox="0 0 12 12"><path d="M2.25 1a4.33 4.33 0 0 1 0 7.5h7.5M7.25 6v5" style="stroke-width:.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;stroke-opacity:1;stroke-dasharray:none"/></svg>`,
};

// export const PlanetaryDignities: PlanetaryDignities = new Map<
//   ZodiacSign,
//   ZodiacSignDignities
// >([
//   [
//     ZodiacSign.Aquarius,
//     {
//       ruler: { dignity: Dignity.Rulership, planet: Planet.Saturn },
//       exaltation: null,
//       detriment: { dignity: Dignity.Detriment, planet: Planet.Sun },
//       fall: null,
//     },
//   ],
//   [
//     ZodiacSign.Pisces,
//     {
//       ruler: { dignity: Dignity.Rulership, planet: Planet.Jupiter },
//       exaltation: { dignity: Dignity.Exaltation, planet: Planet.Venus },
//       detriment: { dignity: Dignity.Detriment, planet: Planet.Mercury },
//       fall: { dignity: Dignity.Fall, planet: Planet.Mercury },
//     },
//   ],
//   [
//     ZodiacSign.Aries,
//     {
//       ruler: { dignity: Dignity.Rulership, planet: Planet.Mars },
//       exaltation: { dignity: Dignity.Exaltation, planet: Planet.Sun },
//       detriment: { dignity: Dignity.Detriment, planet: Planet.Venus },
//       fall: { dignity: Dignity.Fall, planet: Planet.Saturn },
//     },
//   ],
//   [
//     ZodiacSign.Taurus,
//     {
//       ruler: { dignity: Dignity.Rulership, planet: Planet.Venus },
//       exaltation: { dignity: Dignity.Exaltation, planet: Planet.Moon },
//       detriment: { dignity: Dignity.Detriment, planet: Planet.Mars },
//       fall: null,
//     },
//   ],
//   [
//     ZodiacSign.Gemini,
//     {
//       ruler: { dignity: Dignity.Rulership, planet: Planet.Mercury },
//       exaltation: null,
//       detriment: { dignity: Dignity.Detriment, planet: Planet.Jupiter },
//       fall: null,
//     },
//   ],
//   [
//     ZodiacSign.Cancer,
//     {
//       ruler: { dignity: Dignity.Rulership, planet: Planet.Moon },
//       exaltation: { dignity: Dignity.Exaltation, planet: Planet.Jupiter },
//       detriment: { dignity: Dignity.Detriment, planet: Planet.Saturn },
//       fall: { dignity: Dignity.Fall, planet: Planet.Mars },
//     },
//   ],
//   [
//     ZodiacSign.Leo,
//     {
//       ruler: { dignity: Dignity.Rulership, planet: Planet.Sun },
//       exaltation: null,
//       detriment: { dignity: Dignity.Detriment, planet: Planet.Saturn },
//       fall: null,
//     },
//   ],
//   [
//     ZodiacSign.Virgo,
//     {
//       ruler: { dignity: Dignity.Rulership, planet: Planet.Mercury },
//       exaltation: { dignity: Dignity.Exaltation, planet: Planet.Mercury },
//       detriment: { dignity: Dignity.Detriment, planet: Planet.Jupiter },
//       fall: { dignity: Dignity.Fall, planet: Planet.Venus },
//     },
//   ],
//   [
//     ZodiacSign.Libra,
//     {
//       ruler: { dignity: Dignity.Rulership, planet: Planet.Venus },
//       exaltation: { dignity: Dignity.Exaltation, planet: Planet.Saturn },
//       detriment: { dignity: Dignity.Detriment, planet: Planet.Mars },
//       fall: { dignity: Dignity.Fall, planet: Planet.Sun },
//     },
//   ],
//   [
//     ZodiacSign.Scorpio,
//     {
//       ruler: { dignity: Dignity.Rulership, planet: Planet.Mars },
//       exaltation: null,
//       detriment: { dignity: Dignity.Detriment, planet: Planet.Venus },
//       fall: { dignity: Dignity.Fall, planet: Planet.Moon },
//     },
//   ],
//   [
//     ZodiacSign.Sagittarius,
//     {
//       ruler: { dignity: Dignity.Rulership, planet: Planet.Jupiter },
//       exaltation: null,
//       detriment: { dignity: Dignity.Detriment, planet: Planet.Mercury },
//       fall: null,
//     },
//   ],
//   [
//     ZodiacSign.Capricorn,
//     {
//       ruler: { dignity: Dignity.Rulership, planet: Planet.Saturn },
//       exaltation: { dignity: Dignity.Exaltation, planet: Planet.Mars },
//       detriment: { dignity: Dignity.Detriment, planet: Planet.Moon },
//       fall: { dignity: Dignity.Fall, planet: Planet.Jupiter },
//     },
//   ],
// ]);
