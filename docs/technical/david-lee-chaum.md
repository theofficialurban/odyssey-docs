---
title: David Lee Chaum
description: |
  An interview special from 1996 with David Lee Chaum who first proposed a system for electronic / digital dollars called 'eCash' (Chaum's paper had everything except for Proof-of-Work concept)
ogimage: https://i.imgur.com/yukatKk.jpeg
---

[[atomic]]

# eCash / Digital Dollars as the First Blockchain Proposal (David Lee Chaum, 1981) {#title}

[[toc]]

An interview special from 1996 with David Lee Chaum who first proposed a system for electronic / digital dollars called 'eCash' (Chaum's paper had everything except for Proof-of-Work concept)

## Watch the "Life on the Internet" Promotional Segment from 1996

<VEmbed platform="Odysee" src="https://odysee.com/%24/embed/%40UrbanOdyssey%3Ab%2Fecash-chaum-1996%3A8?r=SeiWjpTeLvnadbdz5qFHGSRRzyZLzTJn&signature=42eebb2d5ab12942bbd1d33b1a0876df70c9fa490b146204df05e7fe9cdc2e701178d0c49e664ff5ea2fe81e3c3ceff5b5baf5aca44a8195d1b7dafa3c70ff52&signature_ts=1779467518" />
https://odysee.com/@UrbanOdyssey:b/ecash-chaum-1996:8

> This tape is one of a 13-part television series covering aspects of the Internet in 1996 to introduce to a general audience. Called “Life on the Internet”, the series was hosted by Scott Simon, sponsored by Sun Microsystems, and covers the state of online life at the time.
>
> Episode 113: Digital Dollars
>
> Electronic cash has already entered the flow of money that makes the world go ‘round. But are we ready to take the final step and open our wallets to cyberspace?
>
> Like a digital freight train, the Internet has roared into the American consciousness, bombarding us with new words and ideas; web sites, home pages, cyberspace. But for all the spark and sparkle of this high-tech world, the big question is how does the Internet affect ordinary people? National Public Radio’s Scott Simon hosts this series presenting the human side of this global technology, a series about how people use the Internet to make a difference in their lives.
>
> LNET-113 - Running Time 30 Minutes
>
> Located on the Internet Archive: https://archive.org/details/Life_On_The_Internet_113_Digital_Dollars_PBS_1996
>
> Life on the Internet Mini-Series: https://archive.org/details/lifeontheinternet

## Urban's Notes

<CCard collection="biodigital" href="/biodigital-convergence/blockchain.html" />
<CCard collection="biodigital" href="/biodigital-convergence/btc-power-law.html" />
<CCard collection="biodigital" href="/biodigital-convergence/blockchain-genomics.html" />

## [David Lee Chaum](https://en.wikipedia.org/wiki/David_Chaum)

An article on Chaum’s Background: https://medium.com/blockwhat/82-the-birth-of-digital-cash-ea08b53379d8

From Chaum’s Home Page: https://chaum.com/

![](https://i.imgur.com/fumNJKx.png)

![](https://i.imgur.com/HPIrM0I.png)

### Papers & Journals by Chaum

Public Key Encryption: https://medium.com/blockwhat/public-key-cryptography-a-comprehensive-guide-1e8489e08104

1. [**Computer Systems Established, Maintained and Trusted by Mutually Suspicious Groups** (1977-82)](https://u.pcloud.link/publink/show?code=XZ5xiU5Zv3k8e3EqcNjOCqDAiWF9u7yhv1Jk)
2. [**Untraceable Electronic Mail, Return Addresses, and Digital Pseudonyms** (1981)](https://u.pcloud.link/publink/show?code=XZQwiU5ZNqIX6MTYpPfeN5txJOp7RSoLQh7V)

:::tabs
== Paper #1

<NonHeading :preset="2" href="https://u.pcloud.link/publink/show?code=XZ5xiU5Zv3k8e3EqcNjOCqDAiWF9u7yhv1Jk">Computer Systems Established, Maintained and Trusted by Mutually Suspicious Groups (1977-82)</NonHeading>

> Abstract (The first known paper on Blockchain Technology missing the vital Proof-of-Work Concept)
>
> A number of organizations who do not trust one another can build and maintain a highly-secured computer system that they can all trust (if they can agree on a workable design). A variety of examples from both the public and private sector illustrate the need for these systems. Cryptographic techniques make such systems practical, by allowing stored and communicated data to be protected while only a small mechanism, called a vault, need be physically secured. Once a vault has been inspected and sealed, any attempt to open it will cause it to destroy its own information content, rendering the attack useless. A decision by a group of trustees can allow such a vault-or even a physically destroyed vault -to be re-established safely.
>
> Networks of vaults can allow reliable operation even in the face of communication channel and vault failures. Networks also have several security advantages over single vault systems: (1) information that is no longer needed can be permanently destroyed, (2) comprehensive records of security relevant actions by the trustees can be maintained, and (3) abuse of the trustees' power requires advance notice. Algorithms which implement such a network are presented in a specially adapted formal specification language; examples of the algorithms' use are given; analysis of communication, memory and time requirements are presented; and security and reliability properties are proved.
>
> Each of some mutually suspicious groups can supply part of a vault, in such a way that each group need only trust its part in order to be able to trust the entire vault. Another approach to construction is based on public selection of a system's component parts at random from a large store of equivalent parts. The practicality and ramifications of the ideas presented are also considered.

== Paper #2

<NonHeading :preset="2" href="https://u.pcloud.link/publink/show?code=XZQwiU5ZNqIX6MTYpPfeN5txJOp7RSoLQh7V">Untraceable Electronic Mail, Return Addresses, and Digital Pseudonyms\*\* (1981)</NonHeading>

> Abstract
>
> A technique based on public key cryptography is presented that allows an electronic mail system to hide who a participant communicates with as well as the content of the communication - in spite of an unsecured underlying telecommunication system. The technique does not require a universally trusted authority. One correspondent can remain anonymous to a second, while allowing the second to respond via an untraceable return address. The technique can also be used to form rosters of untraceable digital pseudonyms from selected applications. Applicants retain the exclusive ability to form digital signatures corresponding to their pseudonyms. Elections in which any interested party can verify that the ballots have been properly counted are possible if anonymously mailed ballots are signed with pseudonyms from a roster of registered voters. Another use allows an individual to correspond with a record-keeping organization under a unique pseudonym which appears in a roster of acceptable clients.

<NonHeading :preset="3">David Chaum’s Work on Digital Pseudonyms</NonHeading>

> What are the chances that the guy who created the first paper on the concept of a “blockchain” also did work in “Digital Pseudonyms?”
>
> It’s ironic that someone using the pseudonym ‘Satoshi Nakamoto’ anonymously provided the missing Proof-of-Work concept for the system created mostly by David Chaum.

According to David Chaum, a digital pseudonym is essentially a public key used to verify digital signatures created by the anonymous individual who holds the corresponding private key.

Chaum proposed that these digital pseudonyms can be utilized to maintain privacy and security in several ways:

- **Rosters of Pseudonyms:** An authority can create a “roster”—a list of accepted pseudonyms—based on applications they receive. The authority can approve these applications without ever being able to trace the pseudonyms in the completed roster back to the individuals.
- **Anonymous Credentials:** Individuals can interact with a record-keeping organization under a unique pseudonym that appears on an approved roster. This allows them to prove they are an acceptable client while keeping their real identity hidden, and ensures that different pseudonyms used across various organizations cannot be linked to the same person.
- **Secure Elections:** Digital pseudonyms can be used to conduct verifiable elections. Registered voters can anonymously mail in ballots signed with their digital pseudonyms. Anyone can then count the votes and verify their legitimacy by checking the appended pseudonyms against the roster of registered voters, all without revealing who cast which vote.

:::

## Proof-Of-Work as the Missing Element

The statement highlights that David Chaum’s 1982 dissertation, “Computer Systems Established, Maintained, and Trusted by Mutually Suspicious Groups,” outlined almost all the foundational technical concepts of a blockchain, with the sole exception being the proof-of-work mechanism.

Specifically, Chaum’s “vault system” proposed the following elements that later became central to the Bitcoin blockchain:

- **Cryptographically Chained Blocks:** He detailed a system where a cryptographic checksum is “chained” through the entire history of consensus states, effectively immutably time-stamping and linking blocks of data.
- **Distributed Trust:** The architecture was a public record-keeping system designed to be established, maintained, and trusted by “mutually suspicious groups,” meaning it could operate securely between mutually distrustful parties without relying on a single central authority.
- **Consensus Mechanisms:** The system included a method for nodes to achieve a consensus state regarding the network’s history. This involved a majority vote based on the signed messages entering and leaving the network’s “vaults”.
- **Cryptographic Primitives:** Chaum’s design utilized digital signatures, asymmetric (public/private) encryption, and cryptographic hash functions so that each vault could securely sign, record, and broadcast transactions.

**The Missing Element:** The one major blockchain component absent from Chaum’s 1982 proposal was proof-of-work. Bitcoin relies on computationally expensive cryptographic puzzles (proof-of-work) combined with the dynamic throttling of work difficulty to defend against forged identities (Sybil attacks) and achieve consensus in a permissionless network. Chaum’s system did not include these computational proof-of-work ideas, relying instead on physically secure hardware (”vaults”) and a weaker form of transaction consensus.

### What is “Proof-of-Work” ?

Step 4 (in the lifecycle of a Bitcoin Transaction): The Proof-of-Work Puzzle ([See here](https://docs.urbanodyssey.xyz/biodigital-convergence/blockchain.html#the-life-of-a-bitcoin-transaction-a-step-by-step-journey))

This step is the engine that secures the entire network. To add a block to the official chain, a node must first solve a difficult computational puzzle. This process is called Proof-of-Work.

- **The Goal:** Each node with a candidate block of transactions now works on “finding a difficult proof-of-work for its block.”
- **The Method:** The process involves a brute-force search. A node takes all the data in its block and repeatedly hashes it, “incrementing a nonce in the block” with each attempt. A nonce is just a number that is changed each time. The node keeps trying millions or billions of combinations until it finds a hash that, by pure chance, starts with a required number of zero bits. It’s like trying countless key combinations in a digital lock until one finally clicks. Requiring a specific number of leading zeros is what makes the puzzle difficult, as “the average work required is exponential in the number of zero bits required,” while still being simple for anyone to verify.
- **The Purpose:** This computationally expensive process serves two critical functions for the network:
- **Security:** Once the puzzle is solved, the block cannot be changed without redoing all that computational work. To alter a historical block, an attacker would have to “redo the work” for that block and all the blocks that have been added after it, which becomes practically impossible over time.
- **Fair Voting:** Proof-of-Work is essentially “one-CPU-one-vote.” The majority decision is represented by the longest chain of blocks because it is the one with the greatest proof-of-work effort invested in it. This ensures that as long as honest nodes control the majority of CPU power, they will always outpace any attackers.

After an immense number of attempts, one lucky node will find a winning solution.
