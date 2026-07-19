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

export const TEMGallery: ImageItem[] = [
  {
    image: "https://i.imgur.com/YSYldFt.png",
    title: "Transverse Dielectro-Electromagnetism (TEM)",
  },
  {
    image: "https://i.imgur.com/zZJhBvQ.png",
    title: "Z-Axis Radial Dielectric Core",
  },
  {
    image: "https://i.imgur.com/Kb1cJBC.png",
    title: "Field Incommensurability (F.I.)",
  },
  {
    image: "https://i.imgur.com/9gHH7AD.png",
    title: "Ferrocell",
    caption: "Ferrohydrodynamic Lens",
  },
  {
    image: "https://i.imgur.com/fM1a580.png",
    title: "Magneto-Dielectric Hyperboloid",
  },
  { image: "https://i.imgur.com/HLDauoC.png", title: "Dielectric Reflector" },
  {
    image: "https://i.imgur.com/5nvijHc.png",
    title: "Hypotrochoid Vectorization",
  },
];

export const PlasmoidGallery: ImageItem[] = [
  { image: "https://i.imgur.com/Q7N6gLI.png", title: "Vivi-6" },
  { image: "https://i.imgur.com/VUUiWOp.png", title: "Sarkolepsy" },
  { image: "https://i.imgur.com/EzbNO3n.png", title: "Proticity" },
  {
    image: "https://i.imgur.com/gOb07u8.png",
    title: "Psi-Signature (Psi-Sig)",
  },
  { image: "https://i.imgur.com/5g89VmB.png", title: "Biophotons" },
  {
    image: "https://i.imgur.com/lI4hIGp.png",
    title: "HyPercept",
    caption: "Hypothesis-based Perception",
  },
  { image: "https://i.imgur.com/tpU6shS.png", title: "Holon" },
  {
    image: "https://i.imgur.com/rWSi0nz.png",
    title: "Natura Naturata",
    caption: "The Created World",
  },
  {
    image: "https://i.imgur.com/NX56NFH.png",
    title: "MSAART",
    caption: "Molten Sea Arc Atomic Reconstruction Technology",
  },
  {
    image: "https://i.imgur.com/89XG1jx.png",
    title: "Plasmoid EVO",
    caption: "EVO = Exotic Vacuum Occurrence",
  },
  {
    image: "https://i.imgur.com/zyumeMN.png",
    title: "Torus Vajra (Implosive Turbine)",
  },
  {
    image: "https://i.imgur.com/C1WmMPV.png",
    title: "Singularity Zero Point (Point G)",
  },
  { image: "https://i.imgur.com/N7aPPhU.png", title: "The Rod Unit 1.111" },
  {
    image: "https://i.imgur.com/QJ5WMUv.png",
    title: "Resonant Frequency Energy Unit 129,600",
  },
  {
    image: "https://i.imgur.com/kKObg4e.png",
    title: "Catalytic Tornado Resonator (CTR)",
  },
  {
    image: "https://i.imgur.com/wTihVDK.png",
    title: "Low Energy Atomic Transmutation (LEAT)",
  },
  {
    image: "https://i.imgur.com/GcQZUMI.png",
    title: "Yukawa Balls (Coulomb Balls)",
  },
];

export const CyberneticsGallery: ImageItem[] = [
  { image: "https://i.imgur.com/UjxxyAH.png", title: "Cybernetics" },
  { image: "https://i.imgur.com/VngBTO3.png", title: "Human Biocomputer" },
  { image: "https://i.imgur.com/XY75kd1.png", title: "Self-Metaprogrammer" },
  { image: "https://i.imgur.com/A8RWj3h.png", title: "Supraself-Metaprograms" },
  { image: "https://i.imgur.com/wV4fDEY.png", title: "Computer Interlock" },
  { image: "https://i.imgur.com/IEweDtd.png", title: "Governing Machine" },
  { image: "https://i.imgur.com/vxej1Jr.png", title: "Schismogenesis" },
  { image: "https://i.imgur.com/w3tOPGc.png", title: "Deutero-Learning" },
  { image: "https://i.imgur.com/V0UFLpB.png", title: "Double Bind" },
  { image: "https://i.imgur.com/zv5hv8q.png", title: "Project Cybersyn" },
  { image: "https://i.imgur.com/Ai4lfUT.png", title: "Meme" },
  { image: "https://i.imgur.com/GAZ11ox.png", title: "Buffer Overflow" },
  { image: "https://i.imgur.com/e61A3Rs.png", title: "Crash OS" },
  { image: "https://i.imgur.com/7dHbQOQ.png", title: "Dictionary Attack" },
  { image: "https://i.imgur.com/dnItCsR.png", title: "Infinite Looping" },
  { image: "https://i.imgur.com/go5PXOk.png", title: "Memory Probing" },
  { image: "https://i.imgur.com/hTtbapg.png", title: "Mind Virus" },
  { image: "https://i.imgur.com/oX9aG1l.png", title: "Negative Association" },
  { image: "https://i.imgur.com/mXJtJOI.png", title: "Psycho-Bombs" },
  { image: "https://i.imgur.com/sHFlPla.png", title: "Screen Scraping" },
  { image: "https://i.imgur.com/r2P7ZLA.png", title: "Spoofing" },
  { image: "https://i.imgur.com/wdvHQIj.png", title: "Trojan Horse" },
];
export const NanoWbansGalleria: ImageItem[] = [
  {
    image: "https://i.imgur.com/4UNJF7Q.png",
    title: "Self-Powered Wireless Body Area Network (SpWBAN)",
  },
  {
    image: "https://i.imgur.com/WIuBZnC.png",
    title: "Bipolar Electrochemistry (Wirefree Electroceuticals)",
  },
  { image: "https://i.imgur.com/Qjbvaq0.png", title: "Electroporation" },
  { image: "https://i.imgur.com/riIjmyo.png", title: "Iontophoresis" },
  {
    image: "https://i.imgur.com/78rdudz.png",
    title: "Pyroelectric Nanogenerators (PYENG)",
  },
  {
    image: "https://i.imgur.com/uMsUTVC.png",
    title: "LC Resonant Tank (Wireless Inductive Heater)",
  },
  {
    image: "https://i.imgur.com/gvig76j.png",
    title: "Polymeric Microneedle Arrays",
  },
  { image: "https://i.imgur.com/qSttzoX.png", title: "Neuroweapons" },
  {
    image: "https://i.imgur.com/tkNSla3.png",
    title: "NEURINT (Neuro-Intelligence)",
  },
  {
    image: "https://i.imgur.com/A3dd72K.png",
    title: "Genetic Firewall",
    caption: "Cryptographic Lock-and-Key",
  },
  { image: "https://i.imgur.com/vgjbMEz.png", title: "HyperSonic Sound (HSS)" },
  {
    image: "https://i.imgur.com/LHy317Y.png",
    title: "Videodromotic Transmission",
  },
  { image: "https://i.imgur.com/xesg3Fn.png", title: "Viral Waveform" },
  { image: "https://i.imgur.com/Rm4CAcw.png", title: "Psychotronics" },
  { image: "https://i.imgur.com/STPPA9d.png", title: "Vasculoid" },
  { image: "https://i.imgur.com/P2dQ5gf.png", title: "Computronium" },
  { image: "https://i.imgur.com/fsdRkOW.png", title: "Nanarchy" },
  {
    image: "https://i.imgur.com/MWwrDdr.png",
    title: "Antifertility Vaccines (HCG Lacing)",
  },
  { image: "https://i.imgur.com/0FuLbeo.png", title: "Instinctive Substratum" },
  {
    image: "https://i.imgur.com/ZR0amSs.png",
    title: "D.C.A.P.S.",
    caption: "Detection and Computational Analysis of Psychological Signals",
  },
  {
    image: "https://i.imgur.com/hjRhJOD.png",
    title: "T.R.U.S.T.",
    caption: "Tools for Recognizing Useful Signals of Trustworthiness",
  },
];

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
  { image: "https://i.imgur.com/PSf9lwo.png", title: "Proof-of-Stake (PoS)" },
  { image: "https://i.imgur.com/hifEGUz.png", title: "Digital Leviathan" },
  { image: "https://i.imgur.com/rBAscfh.png", title: "Algorithmic Governance" },
  {
    image: "https://i.imgur.com/JhIcCGK.png",
    title: "Digital Neo-Imperialism",
  },
  { image: "https://i.imgur.com/4c31miy.png", title: "Smart Legal Contract" },
  {
    image: "https://i.imgur.com/tyT9E9G.png",
    title: "Decentralized Finance (DeFi)",
  },
  {
    image: "https://i.imgur.com/1bJ2ZKD.png",
    title: "Cross-Chain Interoperability Protocol (CCIP)",
  },
  {
    image: "https://i.imgur.com/t1L7Zud.png",
    title: "Symbolic Execution (Formal Verification)",
  },
  {
    image: "https://i.imgur.com/sazY7Q2.png",
    title: "Reentrancy Vulnerability",
  },
];

export const QuantumHauntologyGalleria: ImageItem[] = [
  { image: "https://i.imgur.com/sUxhYOK.png", title: "Accommodation Party" },
  { image: "https://i.imgur.com/cfzZAf1.png", title: "Barnum Statement" },
  {
    image: "https://i.imgur.com/CXucdtR.png",
    title: "D.-C.-C.-V.",
    caption: "Document-Contract-Corporation-Vessel",
  },
  {
    image: "https://i.imgur.com/tH0ZliA.png",
    title: "F.C.L.F.",
    caption: "Fiction-Communication and Language-Format",
  },
  {
    image: "https://i.imgur.com/5aYq2Ox.png",
    title: "Field Warehouse Receipt",
  },
  { image: "https://i.imgur.com/YeSa3sK.png", title: "Identity Laundering" },
  {
    image: "https://i.imgur.com/RygoYmt.png",
    title: "Invisible Consent Mechanisms",
  },
  {
    image: "https://i.imgur.com/qEmmAVA.png",
    title: "JI-Operator",
    caption: "Jurisdictional Identity Operator",
  },
  { image: "https://i.imgur.com/sBBCnYr.png", title: "Perjury Jurat" },
  {
    image: "https://i.imgur.com/jIBLivG.png",
    title: "PersonPRI (Private Capacity)",
  },
  {
    image: "https://i.imgur.com/pLSr4a1.png",
    title: "PersonPUB (Public Capacity)",
  },
  {
    image: "https://i.imgur.com/Nu5LzYf.png",
    title: "Straw Man (Ens Legis / Stramineus Homo)",
  },
  { image: "https://i.imgur.com/pz6qxCi.png", title: "Transmitting Utility" },
  { image: "https://i.imgur.com/CC5WWHB.png", title: "Age of Total Language" },
  { image: "https://i.imgur.com/mECOGAT.png", title: "Cyberotics" },
  {
    image: "https://i.imgur.com/o4u6ex6.png",
    title: "Energy Distribution Card",
  },
  { image: "https://i.imgur.com/UD8sjKO.png", title: "Functional Sequence" },
  { image: "https://i.imgur.com/9d1INZm.png", title: "Metaphysical Economy" },
  { image: "https://i.imgur.com/Eu4JbDV.png", title: "NBIC Convergence" },
  { image: "https://i.imgur.com/Pc0RzUH.png", title: "Post-Human" },
  { image: "https://i.imgur.com/b42xYbe.png", title: "Self-Augmentation" },
  { image: "https://i.imgur.com/FH2ShOa.png", title: "Technological Autonomy" },
  { image: "https://i.imgur.com/eKrAfDG.png", title: "Transhumanism" },
];
export const HiddenKingGallery: ImageItem[] = [
  {
    image: "https://i.imgur.com/v20PpPo.png",
    title: "Marks of Foundlings (Sinais de Expostos)",
  },
  {
    image: "https://i.imgur.com/ClFaZ94.png",
    title: "Varnish over Blood (DNA Footprint)",
  },
  {
    image: "https://i.imgur.com/7ZujcAa.png",
    title: "Arma Christi ^(Forbidden Merchandise)^",
  },
  {
    image: "https://i.imgur.com/e2yPZoZ.png",
    title: "Me Seeds ^(Civilisation Seeds)^",
  },
  { image: "https://i.imgur.com/uf7EdPj.png", title: "Lancement" },
  { image: "https://i.imgur.com/wUCrX7q.png", title: "Cumberland Jacks" },
  {
    image: "https://i.imgur.com/aQ4OzrY.png",
    title: "6/5",
    caption: "Microcosm / Macrocosm Alignment",
  },
  {
    image: "https://i.imgur.com/HzgNvYE.png",
    title: "Shin Pact",
    caption: "Enforced Period of Omerta (Secrecy) Lasting 200-Years",
  },
  { image: "https://i.imgur.com/8CaE7U4.png", title: "Morganatic Conception" },
  { image: "https://i.imgur.com/w6cJiJU.png", title: "The Plantagenet Jesus" },
  { image: "https://i.imgur.com/AzLLHiG.png", title: "Tidal Kings" },
  {
    image: "https://i.imgur.com/i2ux1OP.png",
    title: "Legominism",
    caption: "(Psychological Containment / Subliminal Formatting)",
  },
];

export const TectonicWarfareGallery: ImageItem[] = [
  { image: "https://i.imgur.com/lT0heFh.png", title: "Tectonic Warfare" },
  {
    image: "https://i.imgur.com/PD0LwHP.png",
    title: "Wigner Effect",
    caption: "(Discomposition Effect / Radioactive Dust)",
  },
  { image: "https://i.imgur.com/MAYr48s.png", title: "Jason Scientists" },
  {
    image: "https://i.imgur.com/MQ6Nn80.png",
    title: "Fukushima Neutron Pulse",
    caption: "(Blowup Regime)",
  },
  {
    image: "https://i.imgur.com/xF1LXsI.png",
    title: "Foreshadowing Event",
    caption: "(HAARP Trigger)",
  },
  { image: "https://i.imgur.com/ln6MyfF.png", title: "Military Rainstorms" },
  { image: "https://i.imgur.com/xyQtqLN.png", title: "Rogue Waves" },
  { image: "https://i.imgur.com/56d0kSw.png", title: "Brown's Gas" },
  {
    image: "https://i.imgur.com/Jg85VQO.png",
    title: "Catenoid / Pseudosphere",
  },
  {
    image: "https://i.imgur.com/8LC5hMt.png",
    title: "Commodity Code 792",
    caption: "(Russian Classification OK 015-94)",
  },
  {
    image: "https://i.imgur.com/DtdPsSp.png",
    title: "DOR",
    caption: "(Deadly Orgone Radiation)",
  },
  {
    image: "https://i.imgur.com/2ddv5hR.png",
    title: "Eidetic / Eidolic Vision",
  },
  {
    image: "https://i.imgur.com/MmrwE9D.png",
    title: "Zero-Point Energy (ZPE)",
  },
  { image: "https://i.imgur.com/KesEG1i.png", title: "Eloptic Energy" },
  { image: "https://i.imgur.com/S6Xbk17.png", title: "Ephemeralization" },
  { image: "https://i.imgur.com/bFNi9nA.png", title: "Feta Comeso" },
  {
    image: "https://i.imgur.com/RJ6q1JS.png",
    title: "GEET",
    caption: "(Global Environmental Energy Technology)",
  },
  { image: "https://i.imgur.com/FgZT4SI.png", title: "Homopolar Generator" },
  { image: "https://i.imgur.com/xU4IvHr.png", title: "Oscilloclast" },
  { image: "https://i.imgur.com/nrUcWjZ.png", title: "Piezoluminescence" },
  { image: "https://i.imgur.com/n0kIWlb.png", title: "Regauging" },
  { image: "https://i.imgur.com/xqK34b9.png", title: "Somatid" },
  { image: "https://i.imgur.com/miC6r3o.png", title: "Trexar" },
  { image: "https://i.imgur.com/MMAOblN.png", title: "Violet Ray" },
  {
    image: "https://i.imgur.com/MB0HYof.png",
    title: "Voluntary Roman Slaves",
    caption: "(Добровольные Римские Рабы)",
  },
  { image: "https://i.imgur.com/0LloFXr.png", title: "Vril" },
  { image: "https://i.imgur.com/sjgGuBP.png", title: "Z-Ray" },
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
