import { DynamicDialogInstance } from "primevue/dynamicdialogoptions";
import { Ref, VNode } from "vue";

export type ImageItem = {
  image: string;
  title: string;
  caption?: string;
  captionHtml?: boolean;
};
export type CustomDialogOpenFunction = () => DynamicDialogInstance;
export type CustomImageHtmlCaption = CustomDialogOpenFunction | null;
export type CustomImageHtmlCaptions = CustomImageHtmlCaption[];
export const CCRUVocabulary: ImageItem[] = [
  { image: "https://i.imgur.com/e3muUYg.png", title: "Gothic Materialism" },
  { image: "https://i.imgur.com/j78C9fc.png", title: "Cybergothic" },
  {
    image: "https://i.imgur.com/gZHRTQc.png",
    title: "Architectonic Order of the Eschaton (AOE)",
  },
  { image: "https://i.imgur.com/Vosmgwv.png", title: "Petropolitics" },
  { image: "https://i.imgur.com/Oh016ny.png", title: "Schizoanalysis" },
  { image: "https://i.imgur.com/TB4l5Jd.png", title: "Technoshamanism" },
  { image: "https://i.imgur.com/YF6bxLg.png", title: "Templexity" },
  { image: "https://i.imgur.com/J6IVB7X.png", title: "Synthanatos" },
  { image: "https://i.imgur.com/B8W5lcP.png", title: "The Eerie" },
  { image: "https://i.imgur.com/ZwmN4ao.png", title: "The Weird" },
  { image: "https://i.imgur.com/90KdSNn.png", title: "Xenodemon" },
  { image: "https://i.imgur.com/b571KaT.png", title: "Xerodrome" },
  { image: "https://i.imgur.com/eBzLNDk.png", title: "Flatline" },
  { image: "https://i.imgur.com/M9ROhgo.png", title: "Metaverse" },
  { image: "https://i.imgur.com/3cIOHVK.png", title: "A-Death (Unlife)" },
  { image: "https://i.imgur.com/GPHfXGy.png", title: "Hauntology" },
  { image: "https://i.imgur.com/qYHVExU.png", title: "Crypt" },
  { image: "https://i.imgur.com/hl87JdV.png", title: "Cyberia" },
  { image: "https://i.imgur.com/3nPDc3N.png", title: "Demon" },
  { image: "https://i.imgur.com/nkvH3U1.png", title: "Geotraumatics" },
  { image: "https://i.imgur.com/YWn79kp.png", title: "Specter (Gespenst)" },
  { image: "https://i.imgur.com/zLBd8Sy.png", title: "Hypernaturalism" },
  { image: "https://i.imgur.com/eVLOCDq.png", title: "Metatronics" },
  { image: "https://i.imgur.com/t26lTmD.png", title: "AxSys" },
  { image: "https://i.imgur.com/QQOROZh.png", title: "Hyperstition" },
  { image: "https://i.imgur.com/3OdZLqn.png", title: "Mesh" },
  { image: "https://i.imgur.com/cwsylQr.png", title: "Pazuzu" },
  { image: "https://i.imgur.com/Znc7o5x.png", title: "Body without Organs" },
  { image: "https://i.imgur.com/s9LMeyI.png", title: "Schizoanalysis" },
  {
    image: "https://i.imgur.com/R87fwFP.png",
    title: "Schizophrenia",
    caption: "Within the Context of Cybernetic-Theory Fiction",
  },
  { image: "https://i.imgur.com/9I33ZYA.png", title: "Schizotrategy" },
  {
    image: "https://i.imgur.com/mEFcp2M.png",
    title: "Ontology",
    caption: "Dictionary Definition of Ontology",
  },
  {
    image: "https://i.imgur.com/gyILp45.png",
    title: "Ontology",
    caption: "Philosophical & Fundamental Ontology",
  },
  {
    image: "https://i.imgur.com/J9jOmCG.png",
    title: "Ontology",
    caption: "Computational & Web Ontology",
  },
  {
    image: "https://i.imgur.com/57YOzyP.png",
    title: "Ontology",
    caption: "Fundamental vs. Technical Ontologies",
  },
];

export const MetaPhotonicsGalleria: ImageItem[] = [
  {
    image: "https://i.imgur.com/8vMj6cI.png",
    title: "Biomimetic Membrane Camouflage",
  },
  {
    image: "https://i.imgur.com/wXqXp6W.png",
    title: "Diffractive Deep Neural Networks (D2NN)",
  },
  {
    image: "https://i.imgur.com/eclRy8Y.png",
    title: "Enhanced Permeability and Retention (EPR) Trap",
  },
  {
    image: "https://i.imgur.com/16Ovz6y.png",
    title: "Enormous Fluid Antenna System (E-FAS)",
  },
  {
    image: "https://i.imgur.com/jh53bHo.png",
    title: "Flexible Intelligent Metasurfaces (FIM)",
  },
  {
    image: "https://i.imgur.com/3AypP5W.png",
    title: "Inverse Design Generation",
  },
  {
    image: "https://i.imgur.com/0vBC3Q1.png",
    title: "Orbital Angular Momentum (OAM) Multiplexing",
  },
  {
    image: "https://i.imgur.com/Lb8SCQp.png",
    title: "Quality by Design (QbD) Scaling",
  },
  {
    image: "https://i.imgur.com/tvnNxDx.png",
    title: "Zwitterionic Stealth Coatings",
  },
  {
    image: "https://i.imgur.com/aXlfikw.png",
    title: "Metasurface vs. Metamaterial",
    caption: "The Dimensional Collapse",
  },
  { image: "https://i.imgur.com/KK7tFfH.png", title: "Hypersurface™ Stack" },
  {
    image: "https://i.imgur.com/fhZKOsJ.png",
    title: "Smart Radio Environments (SRE) / RIS",
  },
  {
    image: "https://i.imgur.com/Jh0NHVZ.png",
    title: "Multiphysics-as-an-app (MaaP)",
  },
  {
    image: "https://i.imgur.com/oBLU8WK.png",
    title: "Neuromorphic Metasurface",
  },
  { image: "https://i.imgur.com/vZKYORO.png", title: "Photonic Tensor Core" },
  {
    image: "https://i.imgur.com/i6HlBiO.png",
    title: "Plasmonic (Metallic) Meta-atoms",
  },
  { image: "https://i.imgur.com/CuQXnXk.png", title: "Dielectric Meta-atoms" },
  {
    image: "https://i.imgur.com/6D5BzuP.png",
    title: "Phase-Change Meta-Optics (GST / VO2)",
  },
  { image: "https://i.imgur.com/2y8rDEr.png", title: "Meta-molecule" },
  {
    image: "https://i.imgur.com/1yOPY93.png",
    title: "Physics-Informed Neural Networks (PINNs)",
  },
];

export const ThomisticVocabulary: ImageItem[] = [
  { image: "https://i.imgur.com/S5WArKD.png", title: "Privation" },
  {
    image: "https://i.imgur.com/bagLmff.png",
    title: "Principal of the Integral Good",
  },
  { image: "https://i.imgur.com/ts4EgPs.png", title: "Phantasm" },
  { image: "https://i.imgur.com/dOel4fg.png", title: "Truth" },
  { image: "https://i.imgur.com/VhxrZF2.png", title: "Agent Intellect" },
  { image: "https://i.imgur.com/I6yFDvB.png", title: "Possible Intellect" },
  { image: "https://i.imgur.com/T33JASQ.png", title: "Free Choice" },
  { image: "https://i.imgur.com/jgaS2Eh.png", title: "First & Second Acts" },
  {
    image: "https://i.imgur.com/piOGnQ4.png",
    title: "Conscious",
    caption: "(Consciousness)",
  },
  { image: "https://i.imgur.com/PJGpxdb.png", title: "Empiricism" },
  {
    image: "https://i.imgur.com/UV5HrSz.png",
    title: "Cogitative Power",
    caption: "(Vis Cogitativa)",
  },
  { image: "https://i.imgur.com/zbYsVpk.png", title: "Common Sense" },
  { image: "https://i.imgur.com/yKc05pc.png", title: "Hylomorphism" },
  { image: "https://i.imgur.com/k9FLegU.png", title: "Pure Act" },
  { image: "https://i.imgur.com/FIlQ0uA.png", title: "Concupiscence" },
  {
    image: "https://i.imgur.com/gqGhAGi.png",
    title: "Ordinary Diabolic Influence",
    caption: "Temptation",
  },
  { image: "https://i.imgur.com/9l0rNAY.png", title: "Diabolic Obsession" },
  { image: "https://i.imgur.com/qEUkdOS.png", title: "Diabolic Oppression" },
  { image: "https://i.imgur.com/cJSLMtY.png", title: "Diabolic Possession" },
  { image: "https://i.imgur.com/83TGmfY.png", title: "Diabolic Schizophrenia" },
];
