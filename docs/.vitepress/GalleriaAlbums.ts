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
export const AgitPropGalleria: ImageItem[] = [
  { image: "https://i.imgur.com/2atoQB4.png", title: "Orthopraxy" },
  { image: "https://i.imgur.com/sVPWRFX.png", title: "Sensibilization" },
  { image: "https://i.imgur.com/evOkhQp.png", title: "Privatization" },
  {
    image: "https://i.imgur.com/qKnP6ue.png",
    title: "Psychic Dissociation",
    caption:
      "Also Called Diabologic Schizophrenia and Damnation (To Block or Halt Progression)",
  },
  {
    image: "https://i.imgur.com/5KwVJNY.png",
    title: "Pre-Propaganda",
    caption: "Also Called: Sub-Propaganda",
  },
  {
    image: "https://i.imgur.com/UwMxocY.png",
    title: "Sociological Propaganda",
  },
  {
    image: "https://i.imgur.com/JV7Q56w.png",
    title: "Agitation Propaganda",
    caption: "AgitProp",
  },
  { image: "https://i.imgur.com/i60PcGP.png", title: "Integration Propaganda" },
  { image: "https://i.imgur.com/wAV5X7j.png", title: "Horizontal Propaganda" },
  { image: "https://i.imgur.com/OOpUpo6.png", title: "Vertical Propaganda" },
  {
    image: "https://i.imgur.com/CgtKOX8.png",
    title: "Psychological Crystallization",
  },
  { image: "https://i.imgur.com/dT28k7u.png", title: "Mithridatization" },
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
  // .slice(-13) for Surrogate Terms
  { image: "https://i.imgur.com/wtM8P2e.png", title: "Surrogate Model" },
  {
    image: "https://i.imgur.com/1IShXOp.png",
    title: "Closed-Loop Control",
    caption: "Self-Optimization",
  },
  {
    image: "https://i.imgur.com/ixqtr7F.png",
    title: "Neural Radiance Fields (NeRF)",
  },
  {
    image: "https://i.imgur.com/WQdDZXR.png",
    title: "Virtual Physiological Human (VPH)",
  },
  { image: "https://i.imgur.com/4RQHm6Q.png", title: "Agrivoltaics" },
  { image: "https://i.imgur.com/Fvpc5dw.png", title: "Edge Intelligence" },
  { image: "https://i.imgur.com/3Lnggd4.png", title: "Federated Learning" },
  {
    image: "https://i.imgur.com/tEYMlc9.png",
    title: "Digital Darwinism",
    caption:
      "Meta-material AI Design Principal No. One - Mimicking Nature: Digital Darwinism (Evolutionary Computation)",
  },
  {
    image: "https://i.imgur.com/KqW4YZF.png",
    title: "The Omniscient Oracle",
    caption:
      "Meta-material AI Design Principal No. Two - Mapping Patterns: The Omniscient Oracle (Deep Learning / Neural Networks)",
  },
  {
    image: "https://i.imgur.com/qOfdTVm.png",
    title: "Forward vs. Inverse Design",
    caption:
      "In meta-optics, engineering logic flows in two directions: looking forward to predict, or looking backward to discover.",
  },
  {
    image: "https://i.imgur.com/GOWroMo.png",
    title: "Convolutional Neural Networks (CNNs)",
  },
  {
    image: "https://i.imgur.com/ITarhys.png",
    title: "Variational Autoencoders (VAEs)",
  },
  {
    image: "https://i.imgur.com/iYxYsXP.png",
    title: "Generative Adversarial Networks (GANs)",
  },
];

export const MorphicResonanceGalleria: ImageItem[] = [
  { image: "https://i.imgur.com/kFqXcJ8.png", title: "Morphic Field" },
  { image: "https://i.imgur.com/xEi8KmW.png", title: "Morphic Resonance" },
  { image: "https://i.imgur.com/a5jZ4a7.png", title: "Formative Causation" },
  { image: "https://i.imgur.com/jp2voAz.png", title: "Chreode" },
  { image: "https://i.imgur.com/asFxHDX.png", title: "Self-Resonance" },
  {
    image: "https://i.imgur.com/zllN8VD.png",
    title: "Evolutionary Plagiarism",
  },
];
export const ALIGalleria: ImageItem[] = [
  {
    image: "https://i.imgur.com/1IW66RE.png",
    title: "Artificial Liquid Intelligence (ALI)",
  },
  {
    image: "https://i.imgur.com/oMHt7V3.png",
    title: "Intelligent Non-Fungible Token (iNFT)",
  },
  {
    image: "https://i.imgur.com/mR3qVIS.png",
    title: "Harvest Now, Decrypt Later (HNDL)",
  },
  {
    image: "https://i.imgur.com/FLPBp0V.png",
    title: "Bioanalogous Ledgers (Blockchain Biology)",
  },
  {
    image: "https://i.imgur.com/LLt6dEs.png",
    title: "Biological Boolean Logic Gates",
  },
  {
    image: "https://i.imgur.com/TPbK9rb.png",
    title: "Decentralized Oracle Networks (DONs)",
  },
  {
    image: "https://i.imgur.com/Foo2L1P.png",
    title: "Genomic Ledgers (SAMchain / ConsentChain)",
  },
  { image: "https://i.imgur.com/XTtX8MG.png", title: "Quantum Pangenomics" },
  { image: "https://i.imgur.com/kin10pz.png", title: "Hive Registry (DePIN)" },
];

export const EliteTheoryGalleria: ImageItem[] = [
  {
    image: "https://i.imgur.com/EAjzerw.png",
    title: "Authoritarian High Modernism",
  },
  {
    image: "https://i.imgur.com/qQTRsMs.png",
    title: "The Political Formula",
    caption: "See Also: Kayfabe",
  },
  {
    image: "https://i.imgur.com/eozsyoy.png",
    title: "The Second Stratum",
    caption: "The Sub-Elite",
  },
  {
    image: "https://i.imgur.com/SYeDYJp.png",
    title: "Circulation of Elites",
    caption: "The Snakes Eating their Own Tales",
  },
  { image: "https://i.imgur.com/N4t9DsY.png", title: "Legibility" },
  { image: "https://i.imgur.com/2O5za6M.png", title: "Mass Organizations" },
  { image: "https://i.imgur.com/J5A0c59.png", title: "Residues & Derivations" },
  { image: "https://i.imgur.com/39iBu9D.png", title: "Scientism" },
  { image: "https://i.imgur.com/7GqAAFc.png", title: "Soft Managerial Regime" },
  { image: "https://i.imgur.com/atSLkRn.png", title: "Technetronic Society" },
  { image: "https://i.imgur.com/t8mBWXJ.png", title: "Technostructure" },
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
