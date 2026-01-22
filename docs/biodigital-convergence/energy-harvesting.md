---
title: Energy Harvesting WBANs
description: |
  This report provides an exhaustive, expert-level analysis of the seven primary modalities of energy harvesting within WBAN ecosystems: Piezoelectric (PEEH), Triboelectric (TEEH), Electromagnetic (EMEH), Thermoelectric (TEG), Kinetic, Cardiovascular, and Blood Pressure harvesting.
---

[[atomic]]

# **Energy Harvesting Architectures for Wireless Body Area Networks: Mechanisms, Applications, and Systemic Implications** {#title}

[[toc]]

:::tip Download as PDF
Download this report as a PDF here: https://docs.google.com/document/d/10tN-vQylUKxctpm6M6faw8UuJTueLNEzFASA3nnfvyQ/edit?usp=sharing
Also, reference the directory of words & terms: https://dict.officialurban.com
:::

## **1.0 Executive Summary and Systemic Overview**

The proliferation of Wireless Body Area Networks (WBANs) represents a pivotal shift in the trajectory of biomedical engineering, telecommunications, and human-computer interaction. As the demand for continuous, real-time physiological monitoring accelerates—driven by the twin engines of preventative healthcare and the burgeoning "Internet of Bodies" (IoB)—the conventional power paradigm based on finite electrochemical batteries has become an unsustainable bottleneck. The operational lifespan of implantable and wearable devices is currently tethered to the chemical energy density of lithium-ion or solid-state batteries, creating severe limitations regarding device miniaturization, maintenance schedules, and patient safety. In response, the scientific community has aggressively pivoted toward Energy Harvesting (EH) technologies: sophisticated transduction mechanisms designed to scavenge ambient or biomechanical energy from the human host itself, transforming the biological organism into a perpetual power source for the digital infrastructure that monitors it.1

This report provides an exhaustive, expert-level analysis of the seven primary modalities of energy harvesting within WBAN ecosystems: Piezoelectric (PEEH), Triboelectric (TEEH), Electromagnetic (EMEH), Thermoelectric (TEG), Kinetic, Cardiovascular, and Blood Pressure harvesting. It examines the fundamental physics governing these transducers, the advanced materials—such as lead-free piezoceramics, triboelectric polymers, and graphene-based nanocomposites—required to interface with soft biological tissues, and the power management architectures necessary to rectify intermittent biological signals into stable direct current (DC) voltage.4

Furthermore, this analysis integrates a critical assessment of the systemic and geopolitical implications of these technologies. The research literature reveals a dual-use potential inherent in self-powered bio-electronics. While offering revolutionary medical benefits—such as leadless pacemakers that never require battery replacement surgeries and "cuff-less" blood pressure monitors—these technologies also establish the physical hardware for "Bio-Digital Convergence".7 This convergence suggests a future where the human body is re-architected as a "Human Node" within a global information grid, powered by its own metabolic and kinetic output. Concepts such as "Ambient Backscatter" (colloquially termed the "Vampire Protocol" in critical discourse) and "Smart Dust" (NEMS) indicate a trajectory toward inescapable surveillance, where the very act of living—generating heat, moving limbs, and circulating blood—powers the sensors that track, catalogue, and potentially commodify human biological data.8

The following sections dissect these technologies not merely as isolated engineering achievements but as components of a cohesive, self-sustaining "Perpetual Engine" of surveillance and healthcare, evaluating the technical specifications alongside the profound ethical and security risks of side-channel attacks and unauthorized biological actuation.10

## **2.0 The Energy Constraint in WBANs and the Harvesting Paradigm**

### **2.1 Evolution from WSN to WBAN**

Wireless Sensor Networks (WSNs) have historically monitored environmental parameters through distributed nodes. The evolution into Wireless Body Area Networks (WBANs) brings this monitoring to the intimate scale of the human physiology. Standardized under IEEE 802.15.6, WBANs require ultra-low power consumption, high reliability, and extreme miniaturization to function within or upon the human body without inducing tissue necrosis or obstructing natural movement.3 The primary architectural challenge in WBAN design is the "energy gap"—the disparity between the power required for continuous data transmission (telemetry) and the energy capacity of miniaturized storage units.

### **2.2 The Limitations of Electrochemical Storage**

Traditional batteries impose a hard limit on the lifespan of implantable medical devices (IMDs). For cardiac pacemakers, deep brain stimulators, and cochlear implants, battery depletion necessitates surgical replacement, which introduces cumulative risks of infection, scar tissue formation, and anesthesia complications.2 Furthermore, as devices scale down to the nanometer range—facilitating the "Internet of Bio-Nano Things" (IoBNT)—batteries become physically implausible. A device the size of a blood cell cannot house a chemical battery with sufficient charge to operate its transceiver. This physical reality forces a transition to "self-powered" architectures that harvest energy from the environment.8

### **2.3 The Physiology of Power: Available Sources**

The human body is a thermodynamic engine and a kinetic system, continuously dissipating energy that can be scavenged.

- **Thermal Output:** The basal metabolic rate generates heat, maintaining a core temperature of \~37°C. The gradient between the skin surface and the ambient air represents a continuous thermal potential difference.13
- **Kinetic Output:** Voluntary movements (walking, arm swinging) and involuntary movements (heartbeat, respiration, arterial pulsatility) generate mechanical stress and vibration.1
- **Electromagnetic Environment:** The body acts as a conductive medium and an antenna, constantly bombarded by ambient Radio Frequency (RF) signals from the surrounding telecommunications infrastructure (5G/6G, Wi-Fi, TV broadcasts).16

By tapping into these sources, WBAN nodes can achieve "perpetual operation," functioning as long as the host remains biologically active. This capability is central to the vision of "Human Husbandry" technologies, where the management of human populations is automated through self-sustaining biometric feedback loops.9

## **3.0 Piezoelectric Energy Harvesting (PEEH): Transducing Biological Stress**

### **3.1 Fundamental Principles of Piezoelectricity**

Piezoelectric Energy Harvesting (PEEH) harnesses the direct piezoelectric effect, a phenomenon where mechanical strain applied to non-centrosymmetric crystalline materials induces an internal electrical polarization, resulting in a voltage potential across the material's surface. This mechanism is ideal for harvesting the low-frequency, high-torque motions of the human body, such as joint flexion, heel strikes, and organ deformation.4

The constitutive equations governing piezoelectricity relate the electrical displacement (![][image1]) to the mechanical stress (![][image2]) and the electric field (![][image3]):

![][image4]  
Where ![][image5] is the piezoelectric charge constant and ![][image6] is the permittivity at constant stress. In WBAN applications, the coupling coefficient (![][image7]) is critical, representing the efficiency of energy conversion.

### **3.2 Material Science: Ceramics vs. Polymers**

The selection of piezoelectric materials involves a trade-off between conversion efficiency and biocompatibility.

- **Lead Zirconate Titanate (PZT):** PZT ceramics offer the highest piezoelectric coefficients (d33 \> 300 pC/N), making them exceptionally efficient. However, PZT is brittle and contains lead (Pb), a toxic heavy metal. This necessitates rigorous encapsulation for implantable use to prevent lead leakage into the bloodstream, which would be catastrophic.18
- **Polyvinylidene Fluoride (PVDF):** PVDF is a semi-crystalline polymer that is flexible, chemically inert, and biocompatible. While its piezoelectric coefficient is lower than PZT (d33 \~ \-20 to \-30 pC/N), its mechanical compliance allows it to conform to soft tissues, such as arterial walls or the heart surface, without restricting their natural motion. This makes PVDF the material of choice for "smart skin" and vascular energy harvesters.20
- **Zinc Oxide (ZnO) Nanowires:** Emerging research utilizes ZnO nanowire arrays. These are lead-free, biocompatible, and capable of harvesting energy from nanoscale deformations, fitting the requirements for the IoBNT.22

### **3.3 Structural Configurations and Modes**

PEEH devices in WBANs typically utilize two primary operational modes:

- ![][image8] **Mode (Cantilever Beam):** Used for inertial harvesting. A cantilever beam with a proof mass is tuned to resonate with the frequency of human motion (e.g., walking at 1-2 Hz). As the body moves, the beam oscillates, stressing the piezoelectric layers. This is common in shoe-mounted or wrist-worn harvesters.23
- ![][image9] **Mode (Compression):** Used for direct force harvesting, such as the compression of a shoe sole during walking or the squeezing of a pacemaker sleeve by the heart muscle.24

### **3.4 Applications in Physiological Monitoring**

The integration of PEEH allows for sensors that are not only self-powered but also act as active sensors themselves, as the voltage generated is directly proportional to the mechanical stimulus.

- **Gait Recognition:** PEEH insoles generate unique voltage signatures based on the wearer's walking pattern. Deep learning algorithms (e.g., LSTM networks) can analyze these harvesting signals to identify individuals with \>97% accuracy and detect gait anomalies indicative of neurodegenerative diseases, turning the energy harvester into a biometric surveillance tool.23
- **Intracardiac Energy Harvesting:** A critical application involves powering leadless pacemakers. Research describes piezoelectric "sleeves" composed of porous PVDF-TrFE films that wrap around the pacemaker. The contraction of the right ventricle compresses the harvester, generating approximately 1.1 V, sufficient to extend battery life significantly or potentially eliminate it.26

### **3.5 Systemic Implications of PEEH**

The deployment of PEEH devices introduces a paradigm where the subject's physical exertion is commodified as electrical power. In the context of "Human Husbandry," this is described as a "Parasitic Power Plant" mechanism, where the subject's biological output powers the very grid used to monitor them. The use of lead-free materials like ZnO and PVDF mitigates toxicity risks but enhances the feasibility of long-term, undetectable implantation.

## **4.0 Triboelectric Energy Harvesting (TEEH): Surface Charge Engineering**

### **4.1 Principles of Contact Electrification**

Triboelectric Energy Harvesting (TEEH) is based on the coupling of contact electrification (triboelectrification) and electrostatic induction. When two materials with different electron affinities come into contact, electrons transfer from one to the other. When they separate, a potential difference is created, driving electrons through an external load to balance the electrostatic field. TENGs (Triboelectric Nanogenerators) are characterized by high output voltages (hundreds of volts) but low currents, requiring specialized management circuits.5

### **4.2 Material Versatility and Biocompatibility**

Unlike PEEH, which requires specific crystal structures, TEEH can be constructed from a vast array of common polymers (PTFE, PDMS, Kapton, Nylon, Silk). This allows for the fabrication of biodegradable, flexible, and even washable harvesters that can be integrated into clothing ("smart textiles") or implanted directly into the body.28 The "Triboelectric Series" ranks materials by their tendency to gain or lose electrons; maximizing the distance between two materials in this series maximizes power output.30

### **4.3 Operational Modes in WBANs**

1. **Vertical Contact-Separation Mode:** Ideal for harvesting compressive forces like walking or heartbeats. The periodic contact and separation of layers pump electrons back and forth between electrodes.31
2. **Lateral Sliding Mode:** Harvesting energy from friction, such as joints moving or skin rubbing against fabric. This mode is highly effective for low-frequency, large-amplitude motions.31
3. **Single-Electrode Mode:** Useful for interactions where one object is freely moving (e.g., a finger tapping a sensor).
4. **Free-Standing Layer Mode:** Allows for harvesting without direct electrical connection to the moving part, reducing wear and tear.

### **4.4 Physiological Applications: "Smart Skin" and Pulse Sensing**

TEEH is exceptionally sensitive to low-frequency biological signals, making it superior to PEEH for certain soft-tissue applications.

- **Arterial Pulse Sensors:** Ultrasensitive TENGs placed over the radial artery can detect the minute expansion of the vessel wall. The generated voltage waveform mirrors the arterial pressure pulse, allowing for continuous, cuff-less blood pressure monitoring and arterial stiffness assessment.32
- **Respiratory Harvesting:** TENGs integrated into chest bands or implanted near the diaphragm harvest the expansion of the thorax. This provides a self-powered mechanism for monitoring respiration rate and depth, critical for detecting apnea or respiratory distress.33
- **Implantable TENGs (iTENGs):** Biodegradable TENGs can be implanted to power transient medical devices (e.g., electrical stimulators for nerve regeneration) and then dissolve, eliminating the need for removal surgery. Research has demonstrated iTENGs powering pacemakers in porcine models.29

### **4.5 Security Vulnerabilities and Side-Channels**

The high voltage generated by TENGs creates a distinct electromagnetic signature. This introduces security risks where the operation of the harvester can be detected remotely. Furthermore, because the TENG output is directly correlated with user activity (gait, heart rate), the harvested signal itself becomes a side-channel for eavesdropping. An adversary analyzing the power fluctuations of a TENG-powered node could infer specific user activities or health states without accessing the encrypted data stream.11

## **5.0 Electromagnetic Energy Harvesting (EMEH): Inductive and RF Scavenging**

### **5.1 Inductive Harvesting: Biomechanical Coupling**

Electromagnetic Energy Harvesting (EMEH) utilizes Faraday's Law of Induction, where a changing magnetic flux through a coil generates an electromotive force (EMF). In WBANs, this is typically achieved through the relative motion of a permanent magnet and a coil, driven by body movement.

- **Cardiac Mass Imbalance:** EMEH is particularly effective for intracardiac harvesting. A device containing an oscillating mass (magnet) is implanted in the heart. The rhythmic acceleration of the heartbeat drives the mass back and forth through a coil. Prototypes tested in vivo have generated mean power outputs of 14.39 µW to \>80 µW, sufficient to sustain modern leadless pacemakers.36
- **Blood Flow Turbines:** Miniature magnetic turbines placed in the blood stream (e.g., the aorta or right ventricular outflow tract) convert hemodynamic kinetic energy into electricity. While power density is high, the risks of turbulence, hemolysis (damage to blood cells), and thrombosis limit clinical viability.37

### **5.2 RF Energy Harvesting: The "Vampire Protocol"**

Radio Frequency (RF) energy harvesting differs fundamentally from inductive harvesting; rather than converting internal kinetic energy, it scavenges electromagnetic radiation from the external environment. This technology is critical for the "Internet of Bodies" and is often referred to in critical literature as the "Vampire Protocol" or "Ambient Backscatter".8

- **Rectenna Arrays:** The core component is the rectenna (rectifying antenna), which captures RF signals (from Wi-Fi, GSM, LTE, DTV) and converts the AC waveform into DC voltage using Schottky diodes. Impedance matching networks are essential to maximize power transfer efficiency.38
- **Ambient Backscatter:** This communication paradigm allows WBAN nodes to communicate without generating their own radio waves. Instead, they modulate the reflection of incident ambient signals. By toggling their antenna impedance, they encode data into the reflected "electro-smog." This allows for near-zero power communication, enabling devices to operate perpetually on harvested nanowatts.16

### **5.3 6G, Terahertz, and Molecular Absorption**

As telecommunications infrastructure migrates to 6G and the Terahertz (THz) band (0.1–10 THz), RF harvesting dynamics change. THz frequencies offer massive bandwidth (Tbps) but suffer from high molecular absorption, particularly by water. In the context of the IoBNT, this absorption is leveraged as a feature: the body's water content becomes the medium for energy transfer and secure communication. Graphene-based plasmonic nano-antennas are being engineered to resonate at THz frequencies, allowing nanobots to harvest energy from external 6G fields or directed beams, effectively turning the human body into a powered node within the 6G mesh.8

The "Directory of Human Husbandry" characterizes this as a "Kill Grid" architecture, where the same frequencies used for communication and power can be manipulated to create "dead zones" or induce thermal damage in tissues, creating a physical mechanism for remote coercion or "actuation" of biological states.9

## **6.0 Thermoelectric Generators (TEGs): Harvesting the Thermal Gradient**

### **6.1 The Seebeck Effect in Physiology**

Thermoelectric Generators (TEGs) exploit the Seebeck effect to convert heat flux directly into electricity. The human body, maintaining a core temperature of \~37°C, acts as a constant heat source. The temperature gradient (![][image10]) between the skin surface (typically 32-34°C) and the cooler ambient environment drives the diffusion of charge carriers in semiconductor materials, generating voltage.6

### **6.2 Material Engineering for Wearables**

Standard TEG materials like Bismuth Telluride (![][image11]) are rigid and brittle, which is problematic for curvilinear skin surfaces. To maximize ![][image10] and harvesting efficiency (![][image12]), advanced materials are required.

- **Nanocomposites:** Microwave-processed nanocomposites reduce thermal conductivity (keeping the heat in the active material) while maintaining electrical conductivity. Optimized nanocomposite TEGs have achieved power densities of 44 µW/cm² in still air and up to 156.5 µW/cm² under airflow.13
- **Liquid Metal Elastomers:** Researchers are developing stretchable TEGs using liquid metal droplets embedded in elastomers. These "electronic skins" maintain electrical continuity even under significant strain (e.g., on a joint), allowing for seamless integration into clothing or direct skin application.44

### **6.3 Physiological and Environmental Constraints**

The primary limitation of TEG systems is the variability of ![][image10]. In hot environments (ambient \> 30°C) or under insulating clothing, the gradient disappears, and power generation ceases. Conversely, excessive sweating changes the thermal contact resistance. Despite this, TEGs are crucial for "always-on" background monitoring, as they provide a baseline power source whenever the device is worn, unlike solar (which requires light) or kinetic (which requires motion).14

## **7.0 Kinetic Energy Harvesting: The Physics of Body Motion**

### **7.1 Gross Motor Harvesting**

Kinetic energy harvesting captures the mechanical energy of voluntary body movements. This is distinct from the micro-vibrations of the heart (cardiovascular) or arteries (blood pressure).

- **Heel Strike (Footfalls):** The impact of the heel during walking involves significant force (\~1.2x body weight) and displacement. Piezoelectric or electromagnetic in-soles can harvest milliwatts of power from this action, sufficient to power complex sensor nodes and wireless transmission (e.g., ZigBee).12
- **Center of Mass Motion:** Backpack-suspended load harvesters use the vertical oscillation of a load during walking to drive a generator, capable of producing watts of power (mostly for military "soldier power" applications).45

### **7.2 Human Activity Recognition (HAR)**

Kinetic harvesters function inherently as accelerometers. The specific voltage patterns generated by a user's gait are unique. Research demonstrates that this "incidental" data can be processed by deep learning models to identify users and diagnose gait pathologies (e.g., Parkinson's, post-stroke recovery). However, this creates a significant privacy risk: a device marketed for energy efficiency is intrinsically a biometric tracking device capable of identifying the user based solely on how they walk.23

## **8.0 Cardiovascular Energy Harvesting: Powering the Internal Grid**

### **8.1 The Heart as a Perpetual Engine**

Cardiovascular harvesting specifically targets the incessant, involuntary motion of the heart muscle and the pulsatile flow of blood. This provides a reliable power source for critical life-support implants.

- **Mechanism:** Intracardiac harvesters typically use **mass imbalance oscillation**. A capsule containing a magnet on a spring is implanted in the right ventricle. As the heart contracts and relaxes, the magnet oscillates through a coil, generating AC current. Prototypes have demonstrated power outputs (16-80 µW) well in excess of the needs of modern leadless pacemakers.36
- **Piezoelectric Sleeves:** An alternative approach involves flexible piezoelectric polymers (PVDF) wrapped around the pacemaker housing or the leads. The compression of the heart muscle directly strains the polymer, generating charge. This design avoids moving parts, increasing long-term reliability.24

### **8.2 Patent Landscape and Innovation**

Specific patents highlight the commercial maturity of this field.

- **US Patent 11,771,910:** Describes a device implanted in the heart ventricle utilizing magnets and coils enclosed in a mesh to translate torquing heart movements into linear magnetic motion for electricity generation.47
- **US Patent 2010/0076517:** Details a piezoelectric energy converter positioned inside the body to generate power from bio-kinetic events like heartbeats, matched to the physiologic pulse rate range.48

These technologies aim to create "batteryless" cardiac implants, transforming the patient's own organ function into the life-support system for the device regulating it.

## **9.0 Blood Pressure Harvesting: The Hemodynamic Interface**

### **9.1 Arterial Wall Pulsation**

Blood pressure harvesting is distinct from cardiac harvesting; it exploits the elastic expansion of arterial walls (arterial compliance) driven by the pressure pulse wave traveling away from the heart.

- **Piezoelectric Cuffs:** A curved piezoelectric bimorph or PVDF film is wrapped around an artery (e.g., carotid or aorta). As the pressure wave passes, the artery expands, straining the cuff and generating voltage.
- **Power Density:** Simulations indicate that harvesting from the aorta can yield peak powers of \~200 µW, while peripheral arteries like the carotid yield \~10-12 µW. This stratification allows for powering different classes of sensors depending on implantation site.49

### **9.2 Cuff-less Blood Pressure Monitoring**

Beyond power, these harvesters enable "cuff-less" continuous blood pressure monitoring. The voltage output of the piezoelectric cuff correlates linearly with the arterial pressure. By analyzing the Pulse Transit Time (PTT) and the waveform shape, the device can calculate Systolic and Diastolic pressure in real-time without the need for inflatable cuffs. This allows for 24/7 hemodynamic profiling, capturing hypertensive events that sporadic clinical measurements miss.50

## **10.0 Systemic Implications: The "Human Node" and Bio-Digital Convergence**

### **10.1 The Internet of Bio-Nano Things (IoBNT)**

The convergence of these harvesting technologies facilitates the Internet of Bio-Nano Things (IoBNT). In this architecture, the human body is no longer just a user of technology but a substrate for it. Nanodevices, powered by harvested thermal or biochemical energy, communicate via molecular signals or THz frequencies to monitor cellular health, deliver drugs, and potentially interface with neural activity.

- **Terahertz Control:** The use of THz frequencies (0.1-10 THz) is strategic. While these waves have short range (mm), they interact strongly with biological molecules (molecular absorption). This allows external THz sources (6G towers, local gateways) to theoretically wake up, power, or interrogate in-body nanonodes.8

### **10.2 The "Vampire Project" and Techno-Enslavement**

A critical analysis of the literature reveals a narrative of "Human Husbandry" and "Breath Theft." By harvesting the body's thermal and kinetic output, the surveillance infrastructure effectively parasitizes the host's metabolism.

- **The Inescapable Grid:** A sensor powered by Ambient Backscatter (RF) or Body Heat cannot be turned off. It has no battery to remove. It operates as long as the subject is alive and within range of the grid. This creates the technological basis for irreversible "financial panopticons" and "kill grids," where non-compliance can be met with targeted denial of service to essential medical implants or tracking.9
- **Military Optimization:** The "Human Performance Wing" research suggests these technologies are dual-use, intended for "warfighter optimization" (enhancing soldier endurance via metabolic regulation) as much as for civilian healthcare.

### **10.3 Side-Channel Vulnerabilities**

Self-powered WBANs introduce novel security vectors.

- **Energy Analysis Attacks:** Adversaries can monitor the energy harvesting rate of a device (which correlates to the user's activity/heart rate) to infer private behaviors or health states without ever cracking the data encryption. This "side-channel" allows for the profiling of individuals based solely on their power generation patterns.10
- **Keystroke Inference:** Piezoelectric sensors are so sensitive that they can detect the acoustic/vibrational signature of keystrokes on a nearby keyboard, allowing for password theft via a compromised wearable.52

## **11.0 Conclusion**

The engineering of Energy Harvesting WBANs constitutes a monumental leap in material science and biomedical capability. The successful integration of Piezoelectric, Triboelectric, and Thermoelectric mechanisms enables a new class of "immortal" medical devices—leadless pacemakers, deep-brain stimulators, and neural interfaces—that are freed from the tyranny of battery life. This promises to reduce surgical mortality, enhance chronic disease management, and improve quality of life for millions.

However, the third-order implications of this technological victory are stark. The ability to harvest energy from the human body transforms the subject into a perpetual power source for the infrastructure of surveillance. The convergence of these harvesting modalities with 6G/THz communication grids, AI-driven behavioral analysis, and the ideology of "Human Husbandry" establishes the physical hardware for a level of biological monitoring that is persistent, intimate, and physically inescapable. As the "Internet of Bodies" matures, the distinction between a patient being monitored for health and a "Human Node" being managed as an asset will be defined not by the hardware, which is now capable of both, but by the governance, ethics, and sovereignty protocols encoded into the system. The "Perpetual Engine" of the self-powered human is now a reality; the question remains who will hold the keys to the ignition.

#### **Works cited**

1. A Review on Recent Energy Harvesting Methods for Increasing Battery Efficiency in WBANs \- arXiv, accessed January 21, 2026, [https://arxiv.org/pdf/2402.00877](https://arxiv.org/pdf/2402.00877)
2. Towards a Green and Self-Powered Internet of Things Using Piezoelectric Energy Harvesting \- IEEE Xplore, accessed January 21, 2026, [https://ieeexplore.ieee.org/iel7/6287639/8600701/08762143.pdf](https://ieeexplore.ieee.org/iel7/6287639/8600701/08762143.pdf)
3. Energy Harvesting for Self-Sustainable Wireless Body Area Networks \- IEEE Xplore, accessed January 21, 2026, [https://ieeexplore.ieee.org/document/7914600/](https://ieeexplore.ieee.org/document/7914600/)
4. Piezoelectric Energy Harvesting Solutions: A Review \- PMC \- NIH, accessed January 21, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC7349337/](https://pmc.ncbi.nlm.nih.gov/articles/PMC7349337/)
5. Advances in Triboelectric Nanogenerators for Sustainable and Renewable Energy: Working Mechanism, Tribo-Surface Structure, Energy Storage-Collection System, and Applications \- MDPI, accessed January 21, 2026, [https://www.mdpi.com/2227-9717/11/9/2796](https://www.mdpi.com/2227-9717/11/9/2796)
6. Thermoelectric generators for wearable body heat harvesting: Material and device concurrent optimization \- DSpace@MIT, accessed January 21, 2026, [https://dspace.mit.edu/handle/1721.1/127789](https://dspace.mit.edu/handle/1721.1/127789)
7. Urban's Compilation of Notes as of Christmas 2025.pdf
8. accessed December 31, 1969, [https://drive.google.com/open?id=1CKYSdo0pgZIYvGrI5mDp5EZnasWbBeYCFTUNZz8AcxI](https://drive.google.com/open?id=1CKYSdo0pgZIYvGrI5mDp5EZnasWbBeYCFTUNZz8AcxI)
9. Directory of Human Husbandry Technology & Groups, Institutions and Organizations Involved, Now and Historically
10. Side channel attacks and device vulnerabilities: Methodologies of attack and prevention, accessed January 21, 2026, [https://ircommons.uwf.edu/esploro/outputs/graduate/Side-channel-attacks-and-device-vulnerabilities/99380090850006600](https://ircommons.uwf.edu/esploro/outputs/graduate/Side-channel-attacks-and-device-vulnerabilities/99380090850006600)
11. Physical Side-Channel Attacks against Intermittent Devices \- Privacy Enhancing Technologies Symposium, accessed January 21, 2026, [https://petsymposium.org/popets/2024/popets-2024-0088.pdf](https://petsymposium.org/popets/2024/popets-2024-0088.pdf)
12. Energy Harvesting for Wearable Sensors and Body Area Network Nodes \- MDPI, accessed January 21, 2026, [https://www.mdpi.com/1996-1073/16/4/1681](https://www.mdpi.com/1996-1073/16/4/1681)
13. Thermoelectric generators for wearable body heat harvesting: Material and device concurrent optimization \- DSpace@MIT, accessed January 21, 2026, [https://dspace.mit.edu/bitstream/handle/1721.1/127789/NANOEN-D-19-02731_R1.pdf?sequence=2\&isAllowed=y](https://dspace.mit.edu/bitstream/handle/1721.1/127789/NANOEN-D-19-02731_R1.pdf?sequence=2&isAllowed=y)
14. Human body heat-driven thermoelectric generators as a sustainable power supply for wearable electronic devices: Recent advances, challenges, and future perspectives \- PMC \- NIH, accessed January 21, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10070544/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10070544/)
15. Kinetic-Based Micro Energy-Harvesting for Wearable Sensors \- National Institute of Standards and Technology, accessed January 21, 2026, [https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=919282](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=919282)
16. Ambient Backscatter Assisted Wireless Powered Communications \- Department of Electrical and Computer Engineering \- University of Alberta, accessed January 21, 2026, [http://www.ece.ualberta.ca/\~hai1/2018_WCM_xlu_ambient_backscatter.pdf](http://www.ece.ualberta.ca/~hai1/2018_WCM_xlu_ambient_backscatter.pdf)
17. Ambient Electromagnetic Wave Energy Harvesting Using Human Body Antenna for Wearable Sensors \- PMC \- PubMed Central, accessed January 21, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC12349321/](https://pmc.ncbi.nlm.nih.gov/articles/PMC12349321/)
18. A Review of Recent Advances in Human-Motion Energy Harvesting Nanogenerators, Self-Powering Smart Sensors and Self-Charging Electronics \- NIH, accessed January 21, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10891842/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10891842/)
19. Current security and privacy posture in wireless body area networks \- World Journal of Advanced Research and Reviews, accessed January 21, 2026, [https://wjarr.com/sites/default/files/WJARR-2023-1240.pdf](https://wjarr.com/sites/default/files/WJARR-2023-1240.pdf)
20. Piezoelectric Energy Harvesting within Wearable Devices \- PIEZO BLOG, accessed January 21, 2026, [https://blog.piezo.com/piezoelectric-energy-harvesting-within-wearable-devices](https://blog.piezo.com/piezoelectric-energy-harvesting-within-wearable-devices)
21. The Search for High‐Impact Diagnostic and Management Tools for Low‐ and Middle‐Income Countries: A Self‐Powered Low‐Cost Blood Pressure Measurement Device Powered by a Solid‐State Vibration Energy Harvester \- PMC \- NIH, accessed January 21, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC8032134/](https://pmc.ncbi.nlm.nih.gov/articles/PMC8032134/)
22. Recent Progress on Piezoelectric and Triboelectric Energy Harvesters in Biomedical Systems \- PMC \- NIH, accessed January 21, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC5515112/](https://pmc.ncbi.nlm.nih.gov/articles/PMC5515112/)
23. (PDF) Simultaneous Energy Harvesting and Gait Recognition using Piezoelectric Energy Harvester \- ResearchGate, accessed January 21, 2026, [https://www.researchgate.net/publication/344159570_Simultaneous_Energy_Harvesting_and_Gait_Recognition_using_Piezoelectric_Energy_Harvester](https://www.researchgate.net/publication/344159570_Simultaneous_Energy_Harvesting_and_Gait_Recognition_using_Piezoelectric_Energy_Harvester)
24. Harvesting heartbeat energy | UW Department of Mechanical Engineering, accessed January 21, 2026, [https://www.me.washington.edu/news/article/2024-02-12/harvesting-heartbeat-energy](https://www.me.washington.edu/news/article/2024-02-12/harvesting-heartbeat-energy)
25. A triboelectric gait sensor system for human activity recognition and user identification \- Zihan Wang, accessed January 21, 2026, [https://zh-wang.top/papers/Tribogait-NanoEnergy.pdf](https://zh-wang.top/papers/Tribogait-NanoEnergy.pdf)
26. Conceptual Piezoelectric-Based Energy Harvester from In Vivo Heartbeats' Cyclic Kinetic Motion for Leadless Intracardiac Pacemakers \- MDPI, accessed January 21, 2026, [https://www.mdpi.com/2072-666X/15/9/1133](https://www.mdpi.com/2072-666X/15/9/1133)
27. Conceptual Piezoelectric-Based Energy Harvester from In Vivo Heartbeats' Cyclic Kinetic Motion for Leadless Intracardiac Pacemakers \- PubMed Central, accessed January 21, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC11434573/](https://pmc.ncbi.nlm.nih.gov/articles/PMC11434573/)
28. Triboelectric nanogenerators as wearable power sources and self-powered sensors \- NIH, accessed January 21, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC9843157/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9843157/)
29. Biodegradable triboelectric nanogenerator as a life-time designed implantable power source \- PMC \- NIH, accessed January 21, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC4783121/](https://pmc.ncbi.nlm.nih.gov/articles/PMC4783121/)
30. Experimental Study of Triboelectric Energy Harvesting for Different Pairs of Materials and under Various Contact Frequencies \- ResearchGate, accessed January 21, 2026, [https://www.researchgate.net/publication/372177870_Experimental_study_of_triboelectric_energy_harvesting_for_different_pairs_of_materials_and_under_various_contact_frequencies](https://www.researchgate.net/publication/372177870_Experimental_study_of_triboelectric_energy_harvesting_for_different_pairs_of_materials_and_under_various_contact_frequencies)
31. Recent Progress in Self-Powered Sensors Based on Liquid–Solid Triboelectric Nanogenerators \- MDPI, accessed January 21, 2026, [https://www.mdpi.com/1424-8220/23/13/5888](https://www.mdpi.com/1424-8220/23/13/5888)
32. Recent Progress of Wearable Triboelectric Nanogenerator-Based Sensor for Pulse Wave Monitoring \- MDPI, accessed January 21, 2026, [https://www.mdpi.com/1424-8220/24/1/36](https://www.mdpi.com/1424-8220/24/1/36)
33. Triboelectric nanogenerators as wearable power sources and self-powered sensors | National Science Review | Oxford Academic, accessed January 21, 2026, [https://academic.oup.com/nsr/article/10/1/nwac170/6678440](https://academic.oup.com/nsr/article/10/1/nwac170/6678440)
34. Recent Advance of Triboelectric Nanogenerator-Based Electrical Stimulation in Healthcare, accessed January 21, 2026, [https://www.mdpi.com/2079-9292/12/21/4477](https://www.mdpi.com/2079-9292/12/21/4477)
35. Flexible Self-Powered Low-Decibel Voice Recognition Mask \- PMC \- NIH, accessed January 21, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC11124924/](https://pmc.ncbi.nlm.nih.gov/articles/PMC11124924/)
36. A miniaturized endocardial electromagnetic energy harvester for leadless cardiac pacemakers \- PMC \- NIH, accessed January 21, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC7521684/](https://pmc.ncbi.nlm.nih.gov/articles/PMC7521684/)
37. An Intracardiac Flow Based Electromagnetic Energy Harvesting Mechanism for Cardiac Pacing \- PubMed, accessed January 21, 2026, [https://pubmed.ncbi.nlm.nih.gov/29993502/](https://pubmed.ncbi.nlm.nih.gov/29993502/)
38. A Review on Antenna Technologies for Ambient RF Energy Harvesting and Wireless Power Transfer: Designs, Challenges and Applications \- IEEE Xplore, accessed January 21, 2026, [https://ieeexplore.ieee.org/iel7/6287639/6514899/09705592.pdf](https://ieeexplore.ieee.org/iel7/6287639/6514899/09705592.pdf)
39. A Fully-Integrated Ambient RF Energy Harvesting System with 423-μW Output Power \- MDPI, accessed January 21, 2026, [https://www.mdpi.com/1424-8220/22/12/4415](https://www.mdpi.com/1424-8220/22/12/4415)
40. Joint Throughput Maximization and Energy Management for Ultra-low Power Ambient Backscatter Communication in WBANs by Distributed Deep Reinforcement Learning \- ResearchGate, accessed January 21, 2026, [https://www.researchgate.net/publication/385536427_Joint_Throughput_Maximization_and_Energy_Management_for_Ultra-low_Power_Ambient_Backscatter_Communication_in_WBANs_by_Distributed_Deep_Reinforcement_Learning](https://www.researchgate.net/publication/385536427_Joint_Throughput_Maximization_and_Energy_Management_for_Ultra-low_Power_Ambient_Backscatter_Communication_in_WBANs_by_Distributed_Deep_Reinforcement_Learning)
41. Nanoscale Communications & Photonics-1765688075586.pdf, [https://drive.google.com/open?id=1fYjolTLA_vq8PTKFPL9TnxFmIbedO6z5](https://drive.google.com/open?id=1fYjolTLA_vq8PTKFPL9TnxFmIbedO6z5)
42. Dark Tech Theme, [https://drive.google.com/open?id=1MrNJctxd33g_kl5hguAxEGC2BQzY2w0ur6Kui5UNi9Q](https://drive.google.com/open?id=1MrNJctxd33g_kl5hguAxEGC2BQzY2w0ur6Kui5UNi9Q)
43. Thermoelectric Generators for Wearable Body Heat Harvesting: Material and Device Concurrent Optimization | Request PDF \- ResearchGate, accessed January 21, 2026, [https://www.researchgate.net/publication/337084405_Thermoelectric_Generators_for_Wearable_Body_Heat_Harvesting_Material_and_Device_Concurrent_Optimization](https://www.researchgate.net/publication/337084405_Thermoelectric_Generators_for_Wearable_Body_Heat_Harvesting_Material_and_Device_Concurrent_Optimization)
44. Harvesting thermal energy to power wearable electronics \- Institute for Nano-engineered Systems \- University of Washington, accessed January 21, 2026, [https://www.nano.uw.edu/harvesting-thermal-energy-to-power-wearable-electronics/](https://www.nano.uw.edu/harvesting-thermal-energy-to-power-wearable-electronics/)
45. Wearable Thermoelectric Generators Powered by Body Heat \- HDIAC \- dtic.mil, accessed January 21, 2026, [https://hdiac.dtic.mil/articles/wearable-thermoelectric-generators-powered-by-body-heat/](https://hdiac.dtic.mil/articles/wearable-thermoelectric-generators-powered-by-body-heat/)
46. Energy harvesting from the beating heart by a mass imbalance oscillation generator \- PubMed, accessed January 21, 2026, [https://pubmed.ncbi.nlm.nih.gov/22805983/](https://pubmed.ncbi.nlm.nih.gov/22805983/)
47. Cardiac Energy Harvesting Device And Methods Of Use \- Available technology for licensing from the University of California, Irvine, accessed January 21, 2026, [https://techtransfer.universityofcalifornia.edu/NCD/32325.html](https://techtransfer.universityofcalifornia.edu/NCD/32325.html)
48. US20100076517A1 \- Energy harvesting mechanism for medical devices \- Google Patents, accessed January 21, 2026, [https://patents.google.com/patent/US20100076517A1/en](https://patents.google.com/patent/US20100076517A1/en)
49. (PDF) Energy harvesting from arterial blood pressure for powering embedded micro sensors in human brain \- ResearchGate, accessed January 21, 2026, [https://www.researchgate.net/publication/313841909_Energy_harvesting_from_arterial_blood_pressure_for_powering_embedded_micro_sensors_in_human_brain](https://www.researchgate.net/publication/313841909_Energy_harvesting_from_arterial_blood_pressure_for_powering_embedded_micro_sensors_in_human_brain)
50. Wearable Piezoelectric-Based System for Continuous Beat-to-Beat Blood Pressure Measurement \- PMC \- NIH, accessed January 21, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC7038670/](https://pmc.ncbi.nlm.nih.gov/articles/PMC7038670/)
51. Programmable Electromagnetics, [https://drive.google.com/open?id=1AbzaKmYH9c0gaefR-74k3AJ9S050HyTgYiYo_iLb74o](https://drive.google.com/open?id=1AbzaKmYH9c0gaefR-74k3AJ9S050HyTgYiYo_iLb74o)
52. (PDF) Keystroke Estimation via Piezoelectric Acoustic Sensing \- ResearchGate, accessed January 21, 2026, [https://www.researchgate.net/publication/398214261_Keystroke_Estimation_via_Piezoelectric_Acoustic_Sensing](https://www.researchgate.net/publication/398214261_Keystroke_Estimation_via_Piezoelectric_Acoustic_Sensing)

[image1]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAXCAYAAADtNKTnAAAA+ElEQVR4Xu3SP0tCYRTH8SMUJCUugkFNDULgIpIuOgjO0bvo/ThKi1tDi2Dg0BD1GsJVRRAEdTJIKfs+99xreri3254/+MDl/u4fnvM8IvvEpYYx1ltmmPjXS3SQC174LXdYoWLun6ONOUqm20kKr3hDxnQuWfTQRdJ0m1xiigccmC5IS/QZ92xorkXXf2uLrbiPvOPKFkEaEj6PIMd4wgJF03k5wbNEz8PlDH3RXbzYrTR/mUcdX3jEkem8xC2lILq9TRyazkvc1p7iRXQeadNtkhf9i12K++ON6BzuJeIDVQzk55h/YoSh6HH/ED3qZST8d/b5X/kGTpo1fO7baeEAAAAASUVORK5CYII=
[image2]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAuUlEQVR4XmNgGDnACYjvAvEjIrELSBMjEE8B4pVArADlg8AcIP4HxB5QPjMQ2wPxAyA2BQmIA/EqIBaDKgABQSA+zQBRJI0kzgPEi4FYBsQBWVuIJAkC+kD8CYjXADELkjjIwElAzAvihAKxGpIkCEQD8X8gLkcTFwbiNAaEdzAAyH+/gdgGXQIfwOU/gsAYiL8yYPqPIMDlP7wA5On5DIPWf6A4PAfE7xggfoPhL0B8nQFi2CgY3AAAzMQr+zx1NKQAAAAASUVORK5CYII=
[image3]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAZCAYAAADuWXTMAAAA/klEQVR4XmNgGAWeQPyfSFwE1YMBFgLxbyC2QRNnBGIjIH4IxEFocmAgCMSngfgBEEujSsHBHCB2QRcEAX0g/gTEa4CYBSoGog2AmBXKnwhVhwGiGSB+KkcSA7kAZBs3lA9ysgBCGgFAiv4AcQAQSwKxPBDPBOJWZEXYAMy/f4H4CRA/AuJXUD5WPyIDYyD+yoDqX14gXgXESlA+M1QMA1CkGRZYyAlAHIgnAzEHlB8BxFkIaQgAJYD5DNgTBwzwAPFiIFZEl4AF1l0GiG3YQAwDxBUgi1AANv/CACh+K4D4NRBbIkuAouAZAyLBI0cTCP9CktsBxJwQbaNgCAEA3l87nMQUjqsAAAAASUVORK5CYII=
[image4]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAAAsCAYAAADYUuRgAAAD5UlEQVR4Xu3dTah1UxgH8CWUz3zmI0okMqKUkAkZMKAopSRKKJkw4JWhFAPJx0gkGSiUCaEM7lCUUqRIbhKlEDFAPp6ntdc9+2z73PP1nvv25verf3eftffprrtHT+tZe99SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgPzgu8mTkxMgtkQ8jJ3Tnrm0XAQBw4Fwaub47fjHydO/cxb1jAID/hWMihw4HD7CTIkd3x7m6lqtszZG9YwCA/e7HyD+9tM+/Rk7rXbcXroz8Xurvz+LoqsiXka/n5Or88h76InLBcLAnW6T9ezqW+3euBgCY48zIN5G3IkcMzv0UeTZyyGB8k64otWg7NfJq5JRuPPeL5crWduSMbixX4l4u9W+Y57kyWSFbR96Lfjt0ljbfNte+58veF5kAwEEsC4e/I48OT4StyKeRkwfjm/Rg5IdS53Vfb/zCyC+R1yOHdWNZFGXxdGy7aBcvlVrgrSvvRb8dOkubb5tr/ryoO36qOw8AsJAskLJgG1vx2Sp19W2RFax15H6160pdVcuCbCtyU+S83jVZJGUrMefb5L6yu8piK4CrFmy56pirfHkPnoi8EXk78ljk+N51Q22+Ta605cpaurHs/l0AgCnbZbwdmn4r06+vGBruJRvLO6W+CmPMWZHPIw91n28vtchpT2P2Dduhy1qmYLuk1L18Oa9VHn5o7dC/Sr0H33fHY0UxAMBcs9qhKYunRfZrreqVUlfwzu4+t3bo2Ib+LB777dB5Th/ktci5g7FZBdwHkfdLfffaKvI1H22+KVu2uR/vnFILwEVauAAAO2a1Q/NVFVl0bPIdY1mctSIs09qhY4XUsB26m3y4IB8y6OerUt+f1h+7o31hIO9JPiXbVgkvnz49V2uHtidBs9X7TKmrmDdH7unGAQDmygLiu1JXfoayLflA2X1/2HAVayy5/2tWWzGLmru742x1bpfxFb2cw5+lPkG6qmVaojmv3FO3qiwMZ803n2ptK4oAAHNdU/7bDr0z8nPk8cH4JuQKW9uv9l6ZrOg9vHNFlWPLtEPHLFOwfRJ5pEyK1aN65xYx1r7NVb99kct6YwAAM91a6kb4XEn6o0xaf7nRPleHzp9culH3Rj6OvBC5odRC6d1Sn8bMJ0Q/KtMv9s025WdltTbtMgVb7qHL3/1mqXO7bfr0TNla/rbUueZDBrk/L+9r3uP2N/ivCADAQSeLqPZy3MNLfc/ZrBbqOpYp2Jp89UabGwAAG5bvdVunpQoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr+xeu3LQaank2pAAAAABJRU5ErkJggg==
[image5]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAYCAYAAADDLGwtAAAA5klEQVR4XmNgGNSAB4jF0AWRgSMQ/wTi/0C8B00OA8gA8RMgbkWXQAc2DBBT/dAl0EE5EL8FYk10CWaooC8QiwPxGiA+wADxEByAFFwA4nYgToOyfwHxJGRF8kB8C4grgZgRKpbAAPEx3H0sQLycAeI7RZggAxb3gRggAZB7QJpAAERjuA/kcJAV6TABIJAG4gcMaO6DKfREEgOF328gDgJiSyAuBAnqMECshjmanwESZV+B2BiIq4HYBSQB8mUOEF8E4rlAvBuIA4H4ChDvBOJeIGYFKYQBWCoBBToIgCRFkPgjEAAAHLgn/hbkvHMAAAAASUVORK5CYII=
[image6]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAYCAYAAAAYl8YPAAABDUlEQVR4XmNgoDOQBOJjQHwKiA8C8S0gvgDEB6BiIFoEqpYgCAHiCCBmBGJBID4NxNFQORC/B4i5oXy8gAWIS4GYH8o3BuLbQKwJ5YMMK4KyCQKQYdJIfJCLQC4DGQICnEAsj5AmHoC8OR+IJ6FLkAPQw4sigB5eRAFWIBaHYhAbBtIZUMMLL+BjgITHayDeAMRTgFiNAZIsZgHxfSB+DsRzgdgTqgcrAMUIKDHOYYDEENkA5JVVQPwEiBXR5EgGoAB9C8S/gPgREo5EVkQsAMXSVyAuR5cgB+gD8ScGKhkGCvDNDJBwgyUFUGonKvNiAxJAvJ0BUsSAksFhIK5mgORNsgEPA2ZiHQUjEgAAKp4pEBW9VcoAAAAASUVORK5CYII=
[image7]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAXCAYAAADduLXGAAAA4UlEQVR4XuXSoYpCQRTG8SMquKigGA0iirDNBzBqsrnR4AtYtBjFKJpsxu2iGOyC0bppk0Fs+wIK6v/cOwMy94p1wQ9+cOfMwJk5XJF/mQhyyLgbbsY444a+sxeaFi6ouRthmeGAvFMPJI0dNkg4e4F84g8Ds9bHVtDAhz1k08YVdcQxwgRrCXmwvW8JQ1TFPxSYThZ7/GAu/pU0eo0ekmbt5XFkZfxiJU8e6o7sW/xO2rGJjqlLClssEDM1PaxrncIURVOXAk7o2gL5whFLU9cxetEPbRe1BRPt+PKHet/cAcfeIy832IBiAAAAAElFTkSuQmCC
[image8]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAABh0lEQVR4Xu2VPyiGURTGH6GUfwORKBkofwaFoixKYaAwWkwsUgYJo8RisVuUpGwyiOErgxFlEkVZjQYMPI9zX+730vvRd23fU7/e+57zds6959x7XyCnwCohVSQ/7gihPvJM3sgJKU53h1MdeSCrcUdI9cJWMxJ3hNQCeSTNcUc2UnMVcJhUk32SgjU/iBT8gqyRKTd+IZv+R9monlyTRZLnbJOwnRWkHwVkF7aLGjz7T/1oIStk3Y19qdRDpD1m/5CCKJjqr4SSnvF+tJI9UkYayQ3pcb4lckDuYf38JhlVlmnPVkvukN6PbliQLlLjxhOeX5NJIUMSLTWSzscrGYPNds7zSYPkEnZYIyUmaYOVK2pwOewaeSIdZJn0O18FrGRXsGvHV2IS7aYZ2My2yDEZhQU6Ihuk8PNrk87QORn3bIlJIsVvWwWu9N6bYOWTPQp4SIqc/1dJMkmb4Ba2ilJy6myRgiTpJDtkgMzCkkSN16bZhvXxjMzja4V/lkqllfzbTywnvAM870aKCQP0aAAAAABJRU5ErkJggg==
[image9]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAABuklEQVR4Xu2VTyhFQRTGj7CQ/xGJkkT5s0NRNkphQaEs2ChhI8JCstQLCxtbsVCSsqVEeWVpgbISRdlaWqDwfc5c5o678Hqz46tfb+45886dOefMXJF/eVYWKAKprsOH2sAzeAfHIDPs9qcy8ABirsOnWkV30+M6fGoOPIIa15GMWFwG7AbFYA/ERYvvRQx+AZbAmBm/gDV7UjIqB9dgHqQY27BoZ3mpRxrYEe2iCsseVY9asAiWzThQBhgRzcKoeQ6JQRiM+ecLKf669agDuyAHVIEb0CK68xUwYI256CDWp1hkpmXcspWCOwnXoxncgyZQYsZDosG2wKZo4zADZyBf/6YKXtJl2Xg+XkGf6GqnLR/VCS5FD6stpukAzDp2qRdNV1DgXNFr5Ak0gAXQbnwFoim7Er12bA2Cc7AuEVcQ8zghurINcAR6RQMdglWQ/jVbxTPEgP2OnWIsLpKL/SH3tmXgQuu5WjR9tHNuHOyDbNGiV5p5TP+bfO8+IbEJbkV3wcCnxhZ054yZx4W4rf9rNYJt0AEmRV/CwnNnTOmUaMOciKYsONQJiwG5k6iPWJ5oa3u75/6oPgB1hUvcRo0kzQAAAABJRU5ErkJggg==
[image10]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAYCAYAAADtaU2/AAABeElEQVR4Xu2UsSsHYRzGH8UgZFCkGEgW/AkmC4uBRZgUGew2ZTCJf8Fkk5TIYLhRRimDLBZlYDEZ8Dy+97q79+697ooy3Kc+w+/7/u79vs/73r1Awz+gha7RKX/grxmnr/SW9npjPiv0saI3dMIey6O0+/SDftL17HCGdnpOd2lfXOugl7CFK4Boo4v0ng7EtRxj9JQuwZpf057MPxI08QFsAY5h+kQj2pmq99ND2pWq/eDSLsMmu4Cl1u8iVumsV5uBPbPj1bWgPViPHCP0GEnCaVjqK9rt/hTTCmvs74YaqrG/oFE679W+0Uq2kU2nrYpgEy2k6iHc+WqrlbASQ/QI+QRzCKf2CZ1vKVsofoPVTE3VXIsoQ9tbdL5BlPYM4W9W26wJI5QnCZ1vkE264RdTpFPrhSvCvQ+Vz3eQniC5AELopVMafWLp79ZR+3yV9B356833GdY4lLrW+SrlHeyBOupmU+pJ+kDfvPEX2NEEr8eGhoZf4QtvxGYDhLRPqwAAAABJRU5ErkJggg==
[image11]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAYCAYAAABJA/VsAAADV0lEQVR4Xu2XWahNURjH/zJE5iEyRUQZSjJlqvvggQeSZCweEImIB+XlIpLkRbwYQ4YHyQOSlGt4UMpQREohkSQlRMb//35737P2t/c595zjnpfT+deve/a3h7XWN611gZpqqqmaNYW8Jn8DvpC30e/f5DIZHr8QqBWZG6HfzakDOQUbrxjOkY6Nb1ZI+8k3MsHZh5EX5CkZ4O6NIZ9hTmnv7mVpNHlOFiL3fPyNqzCnSF3JUXIaxTmzLHUiDeQJ6ZW81agTsKjPdva2pA7Z72RpLVnjbEth397i7Bprq7O1qIaQd+Q40p6NHfKDTE7eKkmK7EHS39mPkJ9kmrPLGfOcrUU1B+bt1f4GLBVV1wdIm8A+kMwiXQJbIfUjy5F0andyj7xE2hnqEyOcTZLz6mCZ0DN5qzTtgkVSi+gbMYjUk/dkMWnd9LRFQCmvyD1C+YPH9XweSYdmSQ1NfechWUGWkTtkVPhQsYrT9wMsvQ9FqJGoxnciGc3e5BhsoapDdXk5qBzlq2cvzfEKuQVrcrGUfQpUySpUz4Nhnfs+bLHSeLISNvhdchbJKI2ERUTodz5pLI2ZVc9ean5/yKLoWimuSF9Azgnq/MqA3WRVdJ1XhepZiju396iamra4eCLSWLIRVgpTYXttvgUVqudQSuvrsDkoq57BsnA+cguTA/eQBcFvH4yE8u3Pkj6q/VNenuHu6T3t3X0Cm9JUmSGbBlStqjtnaRz5iubrWduhyqwBluZZ0vsnYWUnh2secqgcm1Jz+/N0WIO7huSAWpQWrIUr1fbC0l/fmAjztuw6tOiZLBVbz53JbVjGeemc0M7ZFCjV/2Znb5K2hI9In3zkLaXzJ/IY6UY1k3yHpe4ksh3pfqBIKupKea9S6lnahnTkesC+Eb6/hDwgh5FxfFUEXyF31tY+/AZWg/r7C1Zr65HdEHQc1VZ1CXaWDjuqpOszSB9mdsC+r/HiseNa1fYXbouh9D3V6E3YznKR3ED2/wPSOlgf8PP6bym1lM5+ohpI6a4sUq3p7N5S6gY7Q/hzvuaiJjY0utbBJasPVUQavB4WYU1O9a3to9KKy3RTdK3Dk65lr7i0T4ZpKyp6fo4kZ+8jG2A1rtRXivs+U5WK0z/f1lZTTdWof7YbtgLKQb6PAAAAAElFTkSuQmCC
[image12]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABSElEQVR4Xu2UsSuFURiHX6EIC7pSJkkpyqxMLEoMWJRFWS3+AoOFDJTFYpB/wSDDHZXtLgZZLDYWk4Xnd885de7Xd9xzJ6nvqafb997vnPOe3zn3mlX8N3bxNdMGzrlhefTjLZ7gmK8N4D1+4Kyv9eI2PuOEr2WhCa7MLRSYxDes42BUH8cbHIpqbdnDtUJtBb/xqFDXwqfYVag3t7xkrgOh7c5jn7kFRnw9oIm1QHHhadwo1JoHosPRAGW6iju4H78UEfJXROr4V3rwwtyk6n4Z7/DS3C7KSOWfxQKemesyhWIpy78t6v7YWm9LGan8k+jEN/HQ0rEEFEndMvMXmnwLD7A7quvmrEfPgY7z15X6wkdzO9BOzvEBa9F7gY7yn8JrHMYZfDI3WJ96DiziC37674Pv5hpJ/i3oRyQDyn/UWqOqqPhDfgA0Zj+UGJDZHwAAAABJRU5ErkJggg==
