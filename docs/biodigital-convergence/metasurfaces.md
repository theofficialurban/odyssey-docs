---
title: Programmable Metasurfaces
description: The provided sources introduce programmable wireless environments (PWEs) as a transformative solution that uses intelligent metasurfaces to turn the physical environment into a software-controlled resource.
ogimage: https://www.visorsurf.eu/m/filer_public_thumbnails/filer_public/40/80/40803283-a83d-44f3-a792-59571ef18feb/visorsurf2.png__1890x1342_q85_crop_upscale.png
ogimagewidth: 1890
ogimageheight: 1342
---

[[atomic]]

# Programmable Metasurfaces & VisorSurf {#title}

![](https://www.visorsurf.eu/m/filer_public_thumbnails/filer_public/40/80/40803283-a83d-44f3-a792-59571ef18feb/visorsurf2.png__1890x1342_q85_crop_upscale.png)

[[toc]]

## Overview

Modern wireless communication faces significant hurdles like **signal fading** and **interference**, particularly at the high frequencies required for **5G and 6G networks**. The provided sources introduce **programmable wireless environments** (PWEs) as a transformative solution that uses **intelligent metasurfaces** to turn the physical environment into a software-controlled resource. These **HyperSurfaces** consist of numerous small **meta-atoms** and integrated **miniaturized controllers** that can manipulate electromagnetic waves by **steering, absorbing, or polarizing** them. By networking these surfaces through **Software-Defined Networking** (SDN) paradigms, operators can optimize data paths to improve **security**, reduce **energy consumption**, and bypass obstacles. Beyond rigid panels, research also explores **flexible intelligent metasurfaces** (FIMs) and **graphene-based sensors** to enhance signal diversity and wearable applications. Ultimately, this technology shifts wireless design from a probabilistic model to a **deterministic, programmable service** that actively assists in data delivery.

[Directory of Human Husbandry Technology + Juxtaposition1 Lexicon](https://datawrapper.dwcdn.net/9ysrs/9/)

:::details Expand for the Table

<iframe title="Directory of Human Husbandry Technology + Juxtaposition1 Lexicon" aria-label="Table" id="datawrapper-chart-9ysrs" src="https://datawrapper.dwcdn.net/9ysrs/14/" scrolling="no" frameborder="0" style="border: none;" width="600" height="3973" data-external="1"></iframe>

:::

## Urban's Video on Metasurfaces {#video}

<YouTube id="OWVqaTsUJpI" />

## Images

![](https://i.imgur.com/MHnQ9f9.png)

![](https://www.visorsurf.eu/m/filer_public_thumbnails/filer_public/4d/42/4d424e18-e696-48e9-b36a-30a77e343660/visorsurf1.png__2106x800_q85_crop_upscale.png)

![](https://www.visorsurf.eu/m/cms_page_media/5/f534824d-9cc0-4473-bd0f-5547dccecde0.png)

## **Reshaping Connectivity: An Analysis of Metasurface Technologies in Next-Generation Wireless Communications**

### 1.0 Introduction: The Uncontrolled Wireless Channel Problem

As wireless communication systems advance into the millimeter-wave (mm-wave) and Terahertz (THz) frequencies, they promise unprecedented data rates and device miniaturization. However, realizing this potential requires overcoming inherent environmental challenges that have long constrained performance. Traditionally, the wireless environment is an uncontrollable factor that actively degrades communication quality. This document analyzes a transformative technology—programmable metasurfaces—that reframes this long-standing limitation, turning the physical environment itself into an intelligent, optimizable component of the wireless network.

The fundamental limitations of the conventional wireless environment are well-documented. Signals are weakened by **attenuation** and **path loss** as they diffuse through space. They reflect, refract, and diffract off objects, creating **multi-path propagation**. This leads to **fading phenomena**, where sharp fluctuations in received signal power can drastically undermine communication efficiency, particularly in non-line-of-sight conditions. Furthermore, user mobility introduces **Doppler shift**, altering the perceived signal frequency and further degrading quality. These issues are especially acute at mm-wave and THz frequencies. For decades, the wireless channel has been treated as a probabilistic process—a set of obstacles to be compensated for at the transmitter and receiver, but never controlled.

Programmable metasurfaces, and the architectural framework known as the **HyperSurface**, represent a paradigm shift in wireless systems design. By coating environmental objects like walls and furniture with these intelligent surfaces, the wireless environment is transformed from a passive, probabilistic medium into an active, software-defined, and optimizable resource. This technology enables programmatic control over the propagation of electromagnetic (EM) waves, allowing them to be steered, focused, absorbed, or otherwise manipulated in real time.

This analysis will deconstruct the fundamental principles of these programmable surfaces, detail the HyperSurface architectural framework that makes them deployable, evaluate their system-level benefits in performance and security, and survey the emerging frontiers that are paving the way for truly intelligent wireless environments.

### 2.0 Fundamental Principles of Programmable Metasurfaces

To understand the profound applications of metasurfaces, one must first grasp their physical structure and the core mechanisms that enable their programmability. At the heart of this technology is the "meta-atom"—a meticulously engineered, sub-wavelength building block that dictates how the surface interacts with electromagnetic waves.

#### Defining Metasurfaces

A metasurface is a two-dimensional (2D) composite material layer, typically composed of a conductive pattern repeated over a dielectric substrate. These repeating patterns, the meta-atoms, can be fabricated from materials like copper, silver, or gold on substrates such as silicon. The operating principle is based on electromagnetic induction. When an EM wave impinges on the metasurface, it induces currents within the meta-atoms. These currents, in turn, generate a secondary EM response field. The geometry and composition of the meta-atoms are specifically engineered to shape this response field, allowing the metasurface to perform functions like steering, absorbing, or polarizing the original wave.

#### From Static to Dynamic Control

The earliest metasurface designs featured **static meta-atoms**, where the geometry was fixed, resulting in a permanent, unchangeable EM interaction. The breakthrough for wireless communications came with the development of **dynamic meta-atoms**. These advanced structures achieve reconfigurability by incorporating phase-switching components, such as CMOS transistors or diodes, directly into their design. An external control signal can apply a bias to these components, changing the local impedance of the meta-atom. This allows for real-time, software-driven alteration of the metasurface's overall electromagnetic behavior.

#### Enabling Control at Scale: The Role of ASICs

Controlling the thousands or even millions of meta-atoms required for a large-scale programmable metasurface is a significant engineering challenge. Using discrete electronic components is impractical due to high power consumption, cost, and size. The solution lies in custom-designed Application-Specific Integrated Circuits (ASICs) that can be integrated directly into the metasurface structure. These ASICs provide fine-grained, low-power control over groups of meta-atoms.

An asynchronous control circuit methodology is employed in these ASICs to reduce noise and power consumption compared to traditional clocked systems. The advantages of this integrated approach are substantial, offering lower power consumption, reduced cost and size, and increased performance. Critically, ASICs also enable a much higher number of configurable states; a single proposed ASIC can offer up to 2<sup>64</sup> states. This vast state space is a critical enabler for complex, wave-based computing functions like MIMO precoding within SIM architectures and allows for exceptionally fine-grained phase control needed to create targeted nulls for physical-layer security.

The key characteristics of a proposed metasurface ASIC family are summarized below.

| Characteristic                 | Specification                            |
| ------------------------------ | ---------------------------------------- |
| **Technology**                 | 0.18 µm CMOS mixed-signal RF             |
| **Supply Voltage**             | 1.8 V                                    |
| **Die Size**                   | 2.2 mm × 2.2 mm (4.84 mm² area)¹         |
| **Package Type**               | Wafer Level Chip Scale Packaging (WLCSP) |
| **Bit Rate**                   | 68 MBits/s                               |
| **Static Power Consumption**   | 328 µW                                   |
| **Energy Consumption per Bit** | 79 pJ/bit                                |

¹*Note: Source documents show minor variations in chip dimensions, with one source text specifying 2.2 mm × 2.2 mm and another citing an approximate volume of 2 mm × 2 mm × 0.8 mm.*

With these fundamental building blocks—the meta-atom and the control ASIC—it becomes possible to construct a complete, scalable system architecture for intelligent wireless environments.

### 3.0 The HyperSurface Architecture: Engineering a Programmable Wireless Environment

To bridge the gap between a novel material science concept and a deployable network component, the **HyperSurface architecture** was developed. This framework provides a standardized, multi-layered abstraction that modularizes the technology, enabling scalability and seamless integration with network management paradigms like Software-Defined Networking (SDN).

#### The HyperSurface Tile Concept

The fundamental building block of the HyperSurface architecture is the **tile**. A HyperSurface tile is a modular, rectangular unit that merges an adaptive metasurface with a network of embedded control elements (ASICs). These tiles are designed to be cascaded, allowing them to coat environmental objects like walls, ceilings, and furniture. By interconnecting these tiles, the entire physical environment can be made software-controllable, treating wave propagation as a manageable resource rather than a random phenomenon.

#### Architectural Layers

The HyperSurface architecture is organized into three distinct functional layers, each with a specific role in enabling a programmable environment.

- **The Meta-atom Canvas Layer:** This is the physical layer of the tile, comprising the dynamic meta-atoms that directly interact with impinging EM waves. The "canvas" concept highlights its function as a surface upon which different EM behaviors can be "painted" by software. The resolution of this canvas—defined by the smallest repeatable meta-atom pattern—is a critical design parameter as it dictates the maximum carrier frequency the HyperSurface can manipulate effectively, directly impacting its applicability for mm-wave or THz systems.
- **The Distributed Sense and Control Layer:** This layer consists of the miniaturized network of controllers—the ASICs—embedded within the tile. It receives programmatic directives and translates them into the specific bias signals required to configure the meta-atoms. This layer also supports inter-tile networking, allowing multiple tiles to coordinate their actions to achieve a large-scale, cohesive EM response. The design of this controller network is non-trivial, facing significant engineering challenges including fault tolerance, mitigating EM interference with the canvas layer, and the need for low-latency, energy-efficient communication protocols to support high user mobility.
- **The Tile Gateway Layer:** This layer provides the crucial link between the internal controller network and the outside world. The gateway facilitates bidirectional communication, allowing tiles to receive commands from an external server (e.g., via the Internet) and send back sensor data. This enables powerful, off-device computation for optimizing the environment's configuration and allows the PWE to be integrated into broader network management systems. Existing Internet of Things (IoT) platforms are considered promising choices for implementing these tile gateways.

#### Software-Defined Control and Abstraction

The HyperSurface architecture enables a new class of software that treats wireless propagation as an application. It provides a high-level programming interface that abstracts the underlying physics, allowing developers to manipulate EM waves with simple commands without needing to understand electromagnetism. For example, a developer could issue a `STEER` command with parameters specifying the incident wave direction, the desired reflection direction, and the frequency. Similarly, an `ABSORB` command could be used to create a "dead zone" for signals. This approach aligns perfectly with the principles of Software-Defined Networking (SDN), which decouples the network's control plane from its data plane, enabling centralized, software-based optimization of the entire communication process—now including the environment itself.

This powerful architectural framework moves metasurface technology from a theoretical concept to a deployable system with tangible, real-world applications.

### 4.0 Core Applications and System-Level Benefits

By transforming the wireless environment into a controllable resource, metasurface technologies deliver tangible improvements in system performance, security, and energy efficiency. This section connects the technological principles to the crucial "so what?"—the practical benefits that redefine what is possible in wireless communications.

#### Mitigating Channel Impairments and Enhancing Performance

Programmable wireless environments directly combat the most persistent challenges in wireless communications. By intelligently steering waves, HyperSurfaces can effectively create a **"virtual line-of-sight"** path between a transmitter and receiver, even in obstructed environments. Unlike device-side beamforming or passive reflectors, this approach reshapes the channel itself, ensuring that a dominant path is established with a high **Rice factor**, fundamentally altering the channel from a Rayleigh to a Rician fading model and drastically improving link stability. Functions like wave steering and focusing also directly counteract signal attenuation and path loss. In an indoor evaluation conducted in a 15m x 10m room, this capability was shown to significantly improve communication performance, turning previously low-signal areas into high-connectivity zones.

#### Enabling Physical-Layer Security

The ability to control signal propagation opens up novel mechanisms for **physical-layer security**, which aims to prevent eavesdropping at the most fundamental level. Programmable Wireless Environments (PWEs) can enhance security in two primary ways:

1. **Eavesdropper Avoidance:** Wireless waves can be programmatically routed along specific air-paths that actively avoid the physical locations of unauthorized users or potential eavesdroppers.
2. **Targeted Fading:** By exercising precise phase control, a HyperSurface can be configured to artificially amplify multi-path fading effects specifically at an eavesdropper's location, scrambling the signal for them while ensuring a clear reception for the intended user.

#### Improving Wireless Power Transfer (WPT) and Energy Harvesting

Metasurfaces are poised to dramatically improve the efficiency of Wireless Power Transfer (WPT) and Wireless Energy Harvesting (WEH) systems. Conventional WPT is often limited by low efficiency and a small effective area. By using a metasurface as a passive relay, the magnetic field can be reformed and focused to significantly boost performance. Experimental results have demonstrated up to a **4.6 times improvement in efficiency**. Furthermore, the effective coverage area was increased from around 5 cm by 5 cm with over 40% efficiency to around 10 cm by 10 cm with over 70% efficiency, making practical, room-scale wireless charging a more attainable reality.

#### Integrated Sensing and Communication (ISAC)

A new class of metasurfaces, known as Adaptively Programmable Metasurfaces (APMs), integrates sensing and communication capabilities. APMs have the remarkable dual ability to:

1. **Sense** the complex EM field distributions in their vicinity, including both the magnitude and phase of incident waves on an element-by-element basis.
2. **Manipulate** those waves in real time based on the sensed information.

This ISAC capability allows the wireless environment to become truly adaptive, intelligently reacting to changes in real time to maintain optimal communication quality.

These core applications demonstrate that metasurfaces are not merely an incremental improvement but a foundational technology enabling the next wave of innovation in wireless systems.

### 5.0 Emerging Frontiers in Metasurface Technology

The field of programmable metasurfaces is evolving rapidly, moving beyond basic reflective surfaces to explore advanced concepts that promise to further reduce hardware complexity, expand spatial coverage, and introduce new physical form factors. These emerging frontiers are pushing the boundaries of what is possible, paving the way for even more sophisticated and integrated wireless systems.

#### Active and Transmissive Surfaces (RIS/STAR-RIS)

Conventional metasurfaces, often called Reconfigurable Intelligent Surfaces (RIS), are passive, meaning they only reflect and reshape incident signals without adding power. While effective, this limits their service coverage to only half the space around them (the reflective side). Two key innovations address these limitations:

- **Active RIS:** These surfaces incorporate amplifiers, enabling them to not only reflect but also amplify signals, helping to overcome severe path loss.
- **Simultaneously Transmitting And Reflecting (STAR) RIS:** This groundbreaking technology allows a single surface to refract and reflect wireless signals into the entire space. STAR-RIS provides full 360-degree spatial coverage, dramatically extending the service area of a single deployment.

#### Stacked Intelligent Metasurfaces (SIM) for Wave-Based Computing

The Stacked Intelligent Metasurface (SIM) architecture represents a paradigm shift toward performing signal processing directly in the wave domain. A SIM consists of multiple metasurface layers placed one after another. As an EM wave propagates through these layers, each layer applies a specific phase shift. The collective effect performs complex mathematical operations, such as MIMO precoding and combining, on the wave itself. The key benefit is a radical reduction in hardware complexity and power consumption. By offloading these tasks to the SIM, communication systems can operate with fewer radio frequency (RF) chains and lower-resolution digital-to-analog converters (DACs).

#### Flexible Intelligent Metasurfaces (FIM)

Breaking free from rigid, planar designs, Flexible Intelligent Metasurfaces (FIMs) are constructed on substrates that can be morphed or bent into various shapes. This flexibility unlocks unique advantages:

- **Conformal Deployment:** FIMs can be applied to non-planar objects, such as curved walls, vehicle bodies, or even clothing.
- **Dynamic Shape Control:** By dynamically altering their physical shape in addition to their EM properties, FIMs can create highly customized radiation patterns. This can be used to enhance diversity gain and mitigate multi-user interference. This is achieved by beneficially morphing the surface shape to make the effective channels between different users **nearly orthogonal**, a feat not possible with rigid planar surfaces. Simulations have shown that a morphable FIM can reduce the required transmit power by approximately **3 dB** compared to a conventional rigid array while delivering the same data rate.

These emerging technologies signal a future where intelligent surfaces are not just passive reflectors on walls, but active, computational, and physically adaptive components fully integrated into our wireless infrastructure.

### 6.0 Challenges and Future Research Directions

While the potential of Programmable Wireless Environments (PWEs) is transformative, their transition from laboratory prototypes to ubiquitous infrastructure hinges on solving a complex set of inter-related challenges across the entire technology stack—from scalable manufacturing and low-latency control networking to efficient channel estimation and software optimization. The following research directions highlight the critical engineering trade-offs that must be navigated for widespread adoption.

- **Hardware and Manufacturing:** The success of metasurfaces depends on producing large, reliable, and low-cost surfaces. Research is focused on scalable manufacturing techniques like **Large Area Electronics (LAE)**, which uses conductive ink-based printing on flexible films. Another promising direction involves **graphene**-based fabrication on substrates like fabric, which could lead to ultra-low-cost, flexible sensors. Concurrently, the design of dynamic meta-atoms is being continuously optimized to achieve ultra-wideband performance.
- **Control and Networking:** A large-scale HyperSurface deployment requires a fast, energy-efficient, and fault-tolerant controller network. The design of both intra-tile and inter-tile communication protocols is a critical challenge. These networks must minimize reconfiguration latency to support high user mobility and adapt to changing environmental conditions without introducing significant delays.
- **Channel State Information (CSI) Acquisition:** To intelligently configure a metasurface, the system needs accurate channel information. Acquiring CSI in metasurface-aided systems is notoriously difficult; the massive number of configurable meta-atoms far exceeds the limited number of RF chains available for measurement. This challenge is particularly acute for advanced architectures like **Stacked Intelligent Metasurfaces (SIM)**, where the source explicitly notes that "the BS has fewer RF chains than the number of meta-atoms on each metasurface layer, which determines the channel dimension that needs to be probed." The development of novel, low-overhead estimation algorithms is a vital area of research.
- **Software and Optimization:** The sheer number of possible configurations for a large metasurface makes real-time optimization computationally intensive. There is a pressing need for low-complexity, fast optimization algorithms that can determine the best meta-atom states quickly. Furthermore, standardized software interfaces, such as Application Programming Interfaces (APIs) and middleware, are required to abstract the underlying physics and enable seamless integration with existing network architectures like SDN.
- **Modeling and Characterization:** To reliably deploy and control HyperSurface tiles, their capabilities must be precisely understood. This requires the development of formal **tile "sounding" procedures**—both simulation-based and experimental—to accurately measure the supported functions (e.g., steering range, absorption efficiency) and operational parameters for different tile designs.

Addressing these challenges will be essential for creating the robust, scalable, and intelligent wireless environments envisioned for the next generation of communication systems.

### 7.0 Conclusion: The Dawn of the Smart Wireless Environment

Metasurface and HyperSurface technologies represent more than an incremental improvement in wireless communications; they are a fundamental shift in perspective. For the first time, we can move beyond treating the wireless environment as a static, uncontrollable obstacle and begin leveraging it as a dynamic, intelligent, and integral component of the communication system itself. This evolution from a probabilistic channel to a software-defined resource marks the dawn of the smart wireless environment.

Throughout this analysis, we have seen how this paradigm shift delivers unprecedented gains. By programmatically controlling electromagnetic waves, we can mitigate deep-seated problems like path loss and fading, create new frontiers in physical-layer security, and dramatically enhance the efficiency of wireless power transfer. The architectural concepts underpinning this technology provide a scalable, modular path toward real-world deployment, with software abstractions that make these powerful capabilities accessible to network operators and application developers.

While significant engineering challenges remain, the trajectory is clear. The continued advancement of metasurface technology will be a defining feature of 6G and beyond, finally enabling the long-held vision of truly smart, programmable, and responsive wireless environments that adapt to our needs in real time.

---

## **Deconstructing the HyperSurface Tile: The Building Blocks of a Programmable World**

### 1. Introduction: From Uncontrollable Environments to Software-Defined Surfaces

Today's wireless environments are fundamentally uncontrollable. When a device transmits a signal, it undergoes a complex and probabilistic journey defined by factors like signal attenuation, multi-path fading, and Doppler shifts. These phenomena degrade communication quality and make connectivity inefficient. This problem is particularly acute for next-generation wireless systems; signal deterioration is a major consideration in forthcoming mm-wave and THz communications, where the high frequencies essential for 5G, 6G, and beyond suffer from severe attenuation, limiting their use to short, line-of-sight distances. The environment remains a passive and often disruptive bystander rather than an active participant.

The **HyperSurface** concept emerges as a groundbreaking solution. A HyperSurface is a new class of software-controlled metasurface that merges a network of miniaturized control elements with an adaptive physical surface. This fusion transforms the wireless environment from an unpredictable medium into a programmable, optimizable resource that can be tailored in real-time to meet specific communication needs.

This document deconstructs the architecture of a **HyperSurface tile**—the fundamental building block that makes this new paradigm possible. We will explore its internal structure layer by layer to understand how a simple software command can be translated into a sophisticated physical function that shapes the flow of electromagnetic waves.

### 2. The HyperSurface Tile Architecture: A Three-Layer Model

A HyperSurface tile is composed of three core functional layers, as shown in the exploded-view diagram. Each layer has a distinct role, working in concert to receive commands, reconfigure the surface, and manipulate electromagnetic (EM) waves.

- **The Canvas Layer (The "Skin"):** The outermost layer that physically interacts with impinging EM waves.
- **The Intra-Tile Control Layer (The "Nervous System"):** An embedded network of controllers that manages the canvas.
- **The Tile Gateway Layer (The "Communicator"):** The interface connecting the tile to the outside world and other tiles.

#### 2.1. The Canvas Layer: The Interactive "Skin"

The Canvas Layer is the physical surface where the electromagnetic interaction occurs. It is a composite material layer consisting of a conductive pattern of tiny, repeating elements called **meta-atoms** arranged over a dielectric substrate. These meta-atoms are engineered to interact with EM waves in specific ways and can be fabricated using practical, scalable techniques such as conductive ink-based printing methods on flexible and transparent polymer films. There are two primary types of meta-atoms:

| Meta-Atom Type | Key Characteristic                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Static**     | Its interaction with EM waves is fixed by its physical geometry and composition.                                                                                                                                                                                             |
| **Dynamic**    | Incorporates switching elements that allow its response to be changed by an external control signal. These elements can range from diodes and CMOS transistors to micro-electromechanical switches (MEMS) or even custom ASICs incorporating MOSFET varistors and varactors. |

The operating principle is straightforward yet powerful: when an EM wave impinges on the canvas, it induces electrical currents within the meta-atoms. These currents, in turn, generate a secondary EM field—the "response." In a dynamic design, the state of the integrated switches determines the path of the induced currents, allowing the response to be reconfigured on demand. This gives the HyperSurface a custom, software-defined EM function.

From the individual meta-atoms that interact with waves, we now turn to the system that tells them _how_ to interact.

#### 2.2. The Intra-Tile Control Layer: The "Nervous System"

Acting as the tile's nervous system, the Intra-Tile Control Layer is an embedded, grid-like network of miniaturized controllers. This **controller network (CN)** is responsible for managing the state of the meta-atom canvas above it. Its primary job is to translate software directives into the precise physical stimuli—such as applying the proper bias voltage—needed to change the state of the switches in the dynamic meta-atoms.

The design of this layer is not merely a matter of convenience but is dictated by hard physical constraints. The need to manipulate high-frequency signals, for instance, imposes strict limitations on size. To properly interact with 60GHz communications, meta-atoms must be smaller than 1mm x 1mm. This extreme miniaturization, coupled with the need to avoid EM interference between the control signals and the primary EM waves, forces the controllers to adhere to a demanding set of design principles:

- **Simplicity and Low Cost:** To make large-scale deployments feasible, each controller must be inexpensive.
- **Low Power Consumption:** The sheer number of controllers necessitates minimal energy use to avoid excessive power drain and heat.
- **Scalability:** The architecture must easily scale to accommodate vast numbers of meta-atoms.
- **Fault Tolerance:** The system must be resilient to failures in individual controllers, ensuring the overall surface remains operational.

To meet these challenges, this network requires specialized, lightweight, and fault-tolerant routing protocols (such as XY/YX variants) to efficiently and reliably deliver control signals across the tile. This internal "nervous system" is highly efficient at local control, but it needs a way to receive commands and coordinate with the wider world.

#### 2.3. The Tile Gateway Layer: The "Communicator"

The Tile Gateway Layer serves as the central communication hub for the tile. It consists of the hardware (the Gateway) and the protocols that connect the tile's internal controller network to the outside world. This layer performs two critical communication functions:

1. **External Communication:** It enables bidirectional communication with external networks like the Internet. This allows the tile to receive high-level commands from a central server and report back operational status.
2. **Inter-Tile Communication:** It allows a tile to communicate directly with its neighboring tiles. This is essential for coordinating their actions to function as a single, large, continuous HyperSurface.

Crucially, this layer also provides a feedback loop. The sensing capabilities of existing IoT platforms can facilitate the monitoring of the tile's environment, such as making impinging wave power measurements. This data can be relayed to an external server, enabling the adaptive tuning of the tile's functions in a closed control loop. This architecture allows for offloading computationally demanding tasks—like calculating the optimal configuration for a specific function—to powerful external servers, keeping the tile itself simple and low-cost.

With all the architectural components defined, we can now trace the complete workflow from a software command to a physical EM function.

### 3. Putting It All Together: From Software Command to EM Function

The true power of the HyperSurface tile lies in its ability to seamlessly translate a software instruction into a tangible change in the physical environment. This process follows a clear, multi-stage workflow that intelligently distributes computational load:

1. **Command Issued:** An external service or application sends a high-level software command, such as `STEER` or `ABSORB`, to the HyperSurface.
2. **Gateway Receives & Relays:** The appropriate Tile Gateway receives the command. It may also use its sensors to collect environmental data, such as the power and direction of an impinging wave, and relay this information to an external server.
3. **Configuration Calculated:** A powerful external server performs the computationally intensive task of calculating the optimal configuration of all meta-atom switches required to achieve the desired function (e.g., the precise phase shifts needed to steer a wave).
4. **Directives Distributed:** The server sends the specific, low-level switch-state directives back to the Tile Gateway, which then distributes them across its internal intra-tile controller network.
5. **Controllers Actuate:** Each controller within the network receives its directive and sends the corresponding control signals (e.g., a bias voltage) to the individual meta-atoms within its domain.
6. **Canvas Reconfigures & Function Achieved:** The collective change of switch states across the tile canvas reconfigures its electromagnetic properties, causing it to physically manipulate impinging waves according to the original software command.

This workflow illustrates how a single tile operates. The next step is to understand how these tiles work together to create a fully intelligent environment.

### 4. The Bigger Picture: From a Single Tile to a Smart Environment

The ultimate vision for HyperSurfaces extends far beyond a single tile. The goal is to coat large environmental objects—walls, furniture, ceilings—with these tiles. They are designed to be interconnected automatically in an **ad-hoc networking manner**, forming a single, continuous, and large-scale programmable surface.

When deployed this way, the network of tiles transforms the entire wireless environment from a passive, probabilistic medium into an active, software-controlled resource. This paradigm shift enables a new class of applications that solve wireless challenges with software. For instance, connecting two devices is no longer a matter of signal strength and luck; it becomes a problem of **finding a "route" over the HyperSurface tiles** that coat the walls between them. This control unlocks powerful new capabilities:

- **Physical-Layer Security:** Waves can be actively steered along paths that **avoid the vicinity of potential eavesdroppers**, making interception physically impossible.
- **Signal Quality Enhancement:** Signals can be precisely **focused** onto a specific user's device, dramatically improving link quality and data rates.
- **Interference Mitigation:** Unwanted signals can be selectively **absorbed** by the surface, cleaning up the EM spectrum and reducing noise for all users.

In this paradigm, the HyperSurface tiles are the foundational building blocks, enabling the creation of future smart environments where the laws of wireless propagation can be written, rewritten, and optimized with code.

---

## **Painting the Air: How Smart Surfaces are Programming the Future of Wireless**

### 1. Introduction: From Dumb Walls to Smart Environments

Imagine trying to have a conversation in a large hall with strange angles, sound-absorbing curtains, and unpredictable echoes. You might have to shout to be heard, and even then, your voice would bounce around chaotically, arriving at the listener's ear as a garbled mess. This is exactly what today's wireless signals, like Wi-Fi, experience every moment.

Our physical environment—the walls, furniture, and objects around us—is a passive and often disruptive bystander in wireless communication. It absorbs, reflects, and scatters signals in random ways, leading to common frustrations like dead zones, dropped connections, and slow data speeds. We've spent decades designing more powerful transmitters and more sensitive receivers to fight against the environment.

But what if we could change the rules of the game? What if we could turn our walls, desks, and windows into active participants that intelligently manage and direct wireless signals?

This is the promise of a groundbreaking technology called **metasurfaces**, and their programmable evolution, **HyperSurfaces**. These aren't just smart devices; they are the building blocks of smart, software-controlled environments. By coating everyday objects with these ultra-thin materials, we can essentially "paint the air" with signals, telling them exactly where to go and what to do.

This article will explore the fundamental challenges of wireless communication and how these intelligent surfaces are poised to solve them, transforming our relationship with the invisible world of radio waves.

### 2. The Unruly Nature of Wireless Signals

Wireless communication has always been a battle against the physics of the environment. While we often take it for granted, sending a clear signal from point A to point B is incredibly difficult due to two major challenges:

- **Path Loss:** This is the most basic problem—a signal gets weaker the farther it travels. Think of it like a flashlight beam in the dark; it's bright up close but becomes progressively dimmer in the distance. This attenuation limits the effective range of any wireless device.
- **Multi-path Fading:** A signal doesn't just travel in a straight line. It bounces off walls, furniture, and people, creating multiple copies of the original message. These "echoes" arrive at the receiver at slightly different times, and their jumbled superposition can distort or even cancel out the original signal, causing drastic fluctuations in quality and performance.

These problems are a major hurdle for next-generation technologies like **millimeter-wave (mm-wave)** and **THz communications**. While these higher frequencies promise unprecedented data speeds, they are extremely sensitive and easily blocked by obstacles, limiting their use to short, direct line-of-sight distances.

To overcome these inherent limitations, we need a way to tame the environment itself. The fundamental building block for this revolution is the metasurface.

### 3. Metasurfaces: A Magic Mirror for Radio Waves

In simple terms, a **metasurface** is a thin, artificial material layer engineered to control electromagnetic (EM) waves in ways not found in nature. Think of it as a kind of "high-tech wallpaper" or a "magic mirror" that can precisely manipulate radio signals instead of just reflecting light. This isn't science fiction; these surfaces can be manufactured using techniques similar to inkjet printing, applying conductive inks onto flexible films.

A metasurface is composed of two main parts:

1. **The Substrate:** The base material, often a thin, flexible layer like a circuit board.
2. **The Meta-atoms:** A grid of tiny, repeating conductive patterns on the substrate. The specific shape, size, and composition of each meta-atom determines how it interacts with an incoming radio wave.

The principle behind how they work is elegant yet powerful:

- **Wave Induction:** When a radio wave hits a meta-atom, it induces a tiny electrical current within the conductive pattern.
- **Custom Response:** This induced current creates its own secondary electromagnetic field—essentially, a new, tiny wave.
- **Engineered Outcome:** By carefully designing the grid of meta-atoms, engineers can control the properties of all these tiny secondary waves. The collective result is a single, unified wave that has been transformed in a desirable way, such as being perfectly reflected in a new direction or being completely absorbed by the surface.

While powerful, a static metasurface has a fixed function. To truly control a wireless environment, we need these surfaces to become dynamic and programmable.

### 4. The HyperSurface Revolution: Making the Environment Programmable

A **HyperSurface** is the next evolution: a metasurface that is actively and dynamically controlled by software. It achieves this by merging an adaptive metasurface—one whose meta-atoms contain tiny switching elements (like CMOS transistors or diodes)—with a networked grid of miniaturized controllers.

This architecture can be understood in three distinct layers, as illustrated in the conceptual diagram below:

1. **The EM Function Layer:** This is the high-level goal or desired outcome. A user or application simply specifies what it wants to do, using commands like `STEER`, `FOCUS`, or `ABSORB`. This abstracts away all the underlying physics.
2. **The Switch Configuration Layer:** The software acts as a translator. It takes the high-level command from the EM Function Layer and converts it into a specific pattern of ON/OFF states for the millions of tiny switch elements embedded within the metasurface. This specific pattern is what makes the surface perform the desired function.
3. **The Gateway Layer:** An IoT-like hardware device serves as the entry point. It receives commands from the external world (e.g., a central server over the internet) and distributes them to the network of controllers embedded in the surface, which then apply the correct settings to the meta-atoms.

In essence, the software defines the _goal_ (EM Function), translates it into a precise set of _instructions_ (Switch Configuration), and the _messenger_ (Gateway) delivers those instructions to the surface to execute the command.

This creates a profound paradigm shift. For the first time, wireless propagation is no longer a random, probabilistic process left to chance. It becomes a **software-defined service**, where signal paths can be created, managed, and optimized just like data packets are routed across the internet. With the environment now programmable, we can unlock a host of new capabilities to solve wireless communication's most persistent challenges.

### 5. The Superpowers of a Programmable Wireless World

By transforming passive surfaces into active, intelligent components, HyperSurfaces unlock a new set of "superpowers" to solve long-standing wireless challenges.

| Common Wireless Problem                | The HyperSurface Solution                                                                                                                                                                                                                    |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Signal Blockage (No Line-of-Sight)** | **Wave Steering:** Create "virtual" line-of-sight by intelligently bouncing signals off walls and around obstacles to reach the user.                                                                                                        |
| **Weak Signal & Low Data Rates**       | **Signal Focusing:** Act like a lens to concentrate a signal's energy directly onto a receiving device, boosting performance and saving power.                                                                                               |
| **Interference & Eavesdropping**       | **Dynamic Path Obfuscation & Absorption:** Create "dead zones" by absorbing unwanted signals and enhance security by routing information along unpredictable, fast-changing paths that are nearly impossible for eavesdroppers to intercept. |
| **Unreliable Connections (Fading)**    | **Path Shaping:** Control the reflections in a room to ensure one strong, dominant signal path reaches the user, mimicking a stable line-of-sight connection.                                                                                |

These capabilities give us unprecedented control over our wireless environments:

- **Steering:** This allows a surface to act like a smart mirror, precisely redirecting an incoming signal toward a specific outgoing direction.
- **Focusing:** This enables a surface to behave like a lens, concentrating the energy of a diffuse radio wave onto a single point to dramatically increase signal strength.
- **Absorbing & Securing:** This capability can create "dead zones" by absorbing unwanted signals and can enhance security by routing information along unpredictable paths to thwart eavesdroppers.

These new tools don't just fix today's problems; they pave the way for tomorrow's technologies.

### 6. Powering the Future of Connectivity

HyperSurfaces are more than just an improvement to Wi-Fi; they are a critical enabling technology for the future of connectivity. Two key applications stand out:

1. **Next-Generation Networks (5G/6G & Beyond)** High-frequency signals, like mm-wave, are the backbone of 5G and future networks because they offer incredible speed and capacity. However, their greatest weakness is that they are easily blocked by nearly any physical obstacle—walls, furniture, even people. HyperSurfaces solve this fundamental deployment problem by intelligently steering these sensitive signals around blockages, making widespread, reliable high-speed networks feasible indoors and out.
2. **Efficient Wireless Power Transfer (WPT)** Truly wireless charging has been a long-held dream. A major obstacle has been the inefficiency and safety of broadcasting power over the air. HyperSurfaces can overcome this by precisely focusing radio waves to deliver energy safely and efficiently to devices like phones, laptops, and IoT sensors—with experiments showing up to a 4.6-fold improvement in efficiency—finally enabling a future free from charging cables.

By fundamentally changing how waves propagate, smart surfaces provide the infrastructure needed for the next wave of wireless innovation.

### 7. Conclusion: A New Wireless Paradigm

For decades, we have designed our wireless systems to fight against a chaotic and unpredictable physical environment. We are now entering an era where we can partner with our environment instead.

By embedding software-controlled intelligence directly into the surfaces that surround us, technologies like HyperSurfaces transform wireless communication from a game of chance into a deterministic, optimizable system. This shift allows us to control the flow of radio waves with the same precision that we control the flow of data on a computer chip, paving the way for a future of truly seamless connectivity, ubiquitous wireless power, and inherently secure communications.

---

## **Research Proposal: A Framework for Software-Defined Metamaterials in Programmable Wireless Environments**

### 1.0 Introduction and Problem Statement

Contemporary wireless communication systems are fundamentally constrained by treating the physical environment as a passive, uncontrollable liability. Objects within an environment—walls, furniture, and other obstacles—impose a probabilistic and generally detrimental effect on electromagnetic wave propagation. We propose a transformative new paradigm that reframes this liability as a powerful, unharnessed asset. Instead of passively contending with the environment, our research will establish a framework to make the environment an active, intelligent, and software-programmable component of the wireless network itself.

The core technical challenges inherent in the current paradigm are severe and escalating. Signal attenuation limits connectivity, while multi-path propagation induces fading—drastic fluctuations in received signal power that undermine communication efficiency. These issues become particularly acute for forthcoming millimeter-wave (mm-wave) and terahertz (THz) communications, which, despite offering unprecedented data rates, suffer from extreme attenuation, multi-path fading, and Doppler shifts. Existing mitigation strategies are insufficient; massive MIMO and 3D beamforming introduce significant hardware scalability and mobility issues, while passive reflectors offer only limited control over signal directivity. Consequently, the wireless environment remains an uncooperative and unpredictable variable, fundamentally limiting network performance, efficiency, and security.

This research will establish a transformative new paradigm: the Programmable Wireless Environment (PWE). Enabled by software-controlled metasurfaces, termed **HyperSurfaces (HSF)**, this approach fundamentally shifts the wireless channel from an uncontrollable, probabilistic process to a deterministic, software-defined service. By coating environmental objects with HyperSurfaces, the environment can be programmed to actively participate in the communication process. This technology allows for the precise, software-driven manipulation of electromagnetic (EM) waves—steering, focusing, or absorbing them as needed—to optimize data delivery, enhance security, and improve energy efficiency.

This document presents a comprehensive research plan to design, develop, and validate a foundational framework for this next-generation wireless technology. The proposed work will establish the networking protocols, software abstractions, and application-specific design principles required to convert the physical world from a passive impediment into an intelligent, programmable wireless infrastructure.

### 2.0 Background and State of the Art

A thorough understanding of the foundational technologies underpinning the PWE concept—from reconfigurable materials and controller hardware to networking protocols and software abstraction—is critical to appreciating the novelty and feasibility of the proposed research. This project builds upon recent breakthroughs in each of these domains to create a unified, functional system.

#### 2.1 Foundational Metasurface Technology

A **metasurface** is a composite, two-dimensional material layer engineered to control and transform electromagnetic (EM) waves. Its structure typically comprises a conductive pattern of repeating sub-wavelength elements, known as "meta-atoms," arranged over a dielectric substrate. The operating principle of a metasurface relies on the induction of currents within these meta-atoms when an EM wave impinges upon the surface. In static designs, where the geometry and composition of the meta-atoms are fixed, this induced current pattern produces a fixed, time-invariant EM response. The key innovation enabling programmability is the development of dynamic meta-atoms, which incorporate phase-switching components, such as CMOS transistors, into their structure. An external control signal can alter the state of these components, changing the local impedance and thereby enabling a time-variant, software-controlled interaction with impinging EM waves.

#### 2.2 The HyperSurface (HSF) Concept

**HyperSurfaces** represent an advanced class of software-controlled metasurfaces that integrate an adaptive metasurface layer with an embedded network of miniaturized controllers. The controllers apply the proper bias to the dynamic meta-atoms, allowing the surface to achieve a desired macroscopic EM behavior through software directives.

HyperSurfaces are designed with a modular "tile" architecture. These rectangular units can be cascaded to coat common environmental objects like walls, doors, and furniture. This transforms the entire environment into an active, programmable component of the wireless communication process, capable of sensing ongoing communications and adapting its performance in a closed control loop.

#### 2.3 Enabling Hardware and Networking

The realization of large-scale HyperSurfaces depends on two critical enabling technologies: efficient control hardware and a robust internal communication network.

- **Application-Specific Integrated Circuits (ASICs):** To control the vast number of meta-atoms required for a functional surface, custom ASICs are essential. The proposed ASIC architecture is designed for this specific purpose, featuring low-power asynchronous control circuits to reduce noise and energy consumption. Due to physical pin limitations on the small chip size (2.2 mm × 2.2 mm), a serial communication scheme is adopted for inter-chip communication. To make mass deployment economically viable, Wafer Level Chip Scale Packaging (WLCSP) technology is utilized. This choice minimizes cost and improves RF performance by eliminating wire-bonding. Specifically, the solder-ball spheres have a diameter of **250 µm** and a pitch of **400 µm**, a design choice that complies with standard high-frequency PCB manufacturing rules and underscores the focus on cost-effective scalability.
- **Controller Network:** The embedded ASICs must form an interconnected network to receive commands and coordinate their actions. This intra-tile Controller Network requires specialized nanonetworking protocols that are lightweight, fault-adaptive, and power-efficient. These protocols must manage communication between thousands of controllers within a single HyperSurface tile, transforming high-level software directives into synchronized, low-level stimuli for the meta-atoms.

#### 2.4 Identified Research Gaps

While the foundational components exist, their integration into a coherent, scalable, and usable PWE is blocked by three critical research barriers that this proposal is designed to demolish:

- Optimized tile architectures that support ultra-wideband performance, allowing a single surface to interact with a wide variety of communication frequencies.
- Fast, energy-efficient, and fault-tolerant inter-tile networking protocols to support rapid reconfiguration and adapt to user mobility.
- Robust control software and high-level programming interfaces (APIs) that can effectively abstract the complex underlying physics, allowing network operators to command macroscopic EM functions without requiring expertise in electromagnetics.

The research plan detailed herein is architected specifically to bridge these critical gaps, thereby laying the complete scientific and engineering groundwork for the realization of Programmable Wireless Environments.

### 3.0 Research Aims and Objectives

Our overarching goal is to architect the complete vertical stack for Programmable Wireless Environments—from the low-level nanonetworking fabric that coordinates meta-atoms to the high-level software abstractions that will empower a new class of environmentally-aware applications. This will be achieved by pursuing three core research objectives.

1. **Develop a Unified HyperSurface Control and Networking Framework:** The aim is to design the software and networking architecture required to manage a PWE. This includes creating a lightweight, fault-tolerant nanonetworking protocol for intra-tile communication and developing a high-level Application Programming Interface (API) that allows operators to command macroscopic EM functions (e.g., `STEER`, `ABSORB`) without needing to understand the underlying physics.
2. **Characterize Metasurface Performance for High-Impact Applications:** The aim is to establish the scientific and engineering principles for using HyperSurfaces in two key areas. This involves defining formal "tile sounding procedures" (both simulation-based and experimental) to map specific meta-atom configurations to desired EM behaviors for:
   - **Ubiquitous Wireless Power Transfer (WPT):** Investigating how HyperSurfaces can be configured to act as passive relays that reform and focus EM fields. Building on prior experimental work that has already demonstrated **up to a 4.6-fold improvement in efficiency**, this objective will seek to optimize configurations to further enhance power transfer. A key goal is to expand the effective coverage area, leveraging demonstrations where the high-efficiency zone was expanded from a **5 cm x 5 cm area with >40% efficiency to a 10 cm x 10 cm area with >70% efficiency**.
   - **Robust Physical-Layer Security:** Investigating how HyperSurfaces can dynamically create secure communication channels by intelligently routing EM waves along paths that actively avoid potential eavesdroppers.
3. **Validate the Integrated Framework via System Prototyping:** The aim is to build and evaluate a lab-scale proof-of-concept system. This objective integrates the software framework from Objective 1 with the characterized hardware configurations from Objective 2 to demonstrate the real-world viability and performance gains of the proposed PWE paradigm.

A detailed plan to achieve these objectives is outlined in the methodology that follows.

### 4.0 Proposed Methodology and Research Plan

The research is structured into three distinct but interconnected Work Packages (WPs). Each WP corresponds directly to one of the research objectives, providing a clear path from foundational design and characterization to system integration and validation.

#### 4.1 Work Package 1 (WP1): HyperSurface Networking and Software Abstraction

This WP focuses on developing the core control plane for the PWE, specifically the foundational intra-tile communication fabric.

- **Task 1.1: Nanonetwork Protocol Design:** A lightweight, fault-adaptive routing protocol will be designed for the inter-controller network within a single tile. The design will build upon established concepts like XY routing and will be tailored to the unique hardware constraints and fault models of the HyperSurface architecture. The protocol will be evaluated via simulation, with key performance metrics being low power consumption, low latency, and high reliability in the presence of controller faults.
- **Task 1.2: API and Abstraction Layer Development:** A high-level, Software-Defined Networking (SDN) compatible API will be developed. This task involves creating a macroscopic, state-based model of the HyperSurface's behavior that abstracts the complex underlying EM physics. The API will expose simple, function-oriented commands—such as `STEER(incident_wave_direction, intended_reflection_direction, wave_frequency_band)`—to network controllers or application developers, enabling programmatic control over the wireless environment.

#### 4.2 Work Package 2 (WP2): Application-Driven Metasurface Characterization

This WP will establish the design principles for using HyperSurfaces in high-impact applications.

- **Task 2.1: Optimizing for Wireless Power Transfer:** Full-wave electromagnetic simulations will be employed to model and optimize HyperSurface tile configurations to act as focusing lenses for WPT. Building on demonstrated performance gains, the primary goal is to derive specific meta-atom state configurations that maximize the power received at a target device from a single transmitting coil. The expected efficiency gains and expanded high-efficiency coverage area will be quantified against established benchmarks.
- **Task 2.2: Engineering for Physical-Layer Security:** A communication scenario will be modeled featuring a transmitter, an intended receiver, and a potential eavesdropper at a known location. An algorithm will be developed to translate a high-level security policy (e.g., "avoid eavesdropper at location X") into specific wave-steering commands for the HSF tiles. This will demonstrate the creation of secure "air-routes" for data transmission by actively guiding EM waves to avoid unintended users.

#### 4.3 Work Package 3 (WP3): System Integration and Experimental Validation

This WP will integrate the outcomes of WP1 and WP2 into a functional prototype to validate the PWE concept.

- **Task 3.1: Prototype Development:** A lab-scale prototype consisting of multiple interconnected HyperSurface tiles will be constructed. The prototype will be controlled by the software framework developed in WP1 and configured using the application-specific principles derived in WP2.
- **Task 3.2: WPT Performance Validation:** A series of experiments will be conducted to validate the WPT application. Measurements will quantify the end-to-end power transfer efficiency and map the high-efficiency coverage area. These results will be compared against a baseline case where the HyperSurface is inactive to demonstrate the performance improvement.
- **Task 3.3: Security Performance Validation:** Experiments will be performed to validate the physical-layer security application. The signal-to-noise ratio (SNR) will be measured at the intended receiver's location and compared against the SNR at the simulated eavesdropper's location. This will quantify the ability to create "air-routes that exemplary avoid unintended users, or at least ensure destructive wave super-position in their vicinity," thereby achieving a high degree of signal isolation.

The successful execution of these work packages will yield several significant outcomes, which are detailed in the following section.

### 5.0 Expected Outcomes and Broader Impact

This research is designed to produce both tangible project deliverables and long-term strategic impact. The expected outcomes represent the concrete outputs of the project, while the broader impact describes their long-term scientific, technological, and economic significance.

#### 5.1 Expected Outcomes

- **A Novel Nanonetworking Protocol:** A fully specified and simulated protocol optimized for the unique power, latency, and fault-tolerance constraints of metasurface controller networks.
- **An Open-Source PWE Software Framework:** An SDN-compatible API and control middleware for managing programmable wireless environments, successfully abstracting the underlying physics to enable high-level control.
- **Validated Design Principles for Metasurface-Enhanced WPT:** A set of quantified, simulation-backed, and experimentally-verified configurations for maximizing wireless power transfer efficiency and expanding coverage area.
- **A New Paradigm for Physical-Layer Security:** A demonstrated method for engineering secure wireless links by controlling the propagation environment itself, actively routing signals away from potential eavesdroppers.
- **A Functional Lab-Scale Prototype:** An integrated hardware/software system that serves as a proof-of-concept for the PWE paradigm and provides a valuable platform for future research and development.

#### 5.2 Broader Impact

This project will establish a foundational, inter-disciplinary framework that merges materials science, electromagnetics, and computer networking. By transforming the wireless environment from a liability into a controllable asset, this research will change the trajectory of future wireless systems. For 6G and the Internet of Things (IoT), it will enable unprecedented levels of reliability and spectral efficiency. In security, it offers a new physical layer defense that complements traditional cryptography. Most significantly, this work will move wireless power from a niche, proximity-based technology to a truly ubiquitous, infrastructure-level service. This shift will fundamentally alter the design, deployment, and operation of all future electronic devices, creating new possibilities for the cable-free charging of consumer electronics, biomedical implants, and autonomous systems.

The project timeline for achieving these outcomes is detailed below.

### 6.0 Project Timeline

The project is proposed for a 36-month duration. The schedule for the Work Packages and their constituent tasks is presented in the table below, which provides a quarter-by-quarter breakdown of the research activities.

| Work Package | Task                                         | Year 1 (Q1-Q4) | Year 2 (Q1-Q4) | Year 3 (Q1-Q4) |
| ------------ | -------------------------------------------- | -------------- | -------------- | -------------- |
| **WP1**      | 1.1: Nanonetwork Protocol Design             | X X X          |                |                |
|              | 1.2: API & Abstraction Layer Development     | X X X          | X              |                |
| **WP2**      | 2.1: Optimizing for Wireless Power Transfer  | X X X          | X              |                |
|              | 2.2: Engineering for Physical-Layer Security | X X            | X X            |                |
| **WP3**      | 3.1: Prototype Development                   |                | X X X          | X              |
|              | 3.2: WPT Performance Validation              |                |                | X X            |
|              | 3.3: Security Performance Validation         |                |                | X X            |
| **Project**  | Reporting and Dissemination                  | X              | X              | X              |
