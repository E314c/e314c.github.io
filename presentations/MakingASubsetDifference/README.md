# Making a Subset difference: The Crypto in AACS

When I wanted to understand how AACS works I found very little information/explanation. The Subset-Difference tree and how it provides efficient revocation in a broadcast encryption scenario was particularly opaque.

This talk aims to demystify the crypto in AACS, explaining how we can revoke a device's ability to decode media without relying on co-operation from the device. 

## Asociated Codebase:
You can see implementations of (parts of) the AACS specification on another of my repositories: [https://github.com/E314c/AACS](https://github.com/E314c/AACS).

## References
- `arnezami`'s Doom9 post "Understanding AACS (including Subset-Difference)"
  - https://web.archive.org/web/20070303012909/https://forum.doom9.org/showthread.php?t=122363
- [AACS specification documents](https://aacsla.com/aacs-specifications/), particularly:
  - [Introduction and Common Cryptographic Elements Book Rev 0.953](http://aacs.tjn.chef.causewaynow.com/wp-content/uploads/2019/02/AACS_Spec_Common_Final_0953.pdf)

## Clearing up common confusions from talk feedback
- The Media Key Block is distributed with the disc
- A device is hard coded with only it's particular set of 496 keys.
  - It is the manufacturer's job to keep this 8Kb of data secret, as any release of it may get their device keys revoked and prevent customer's being able to watch media on their devices 
- The term device in this presentation is not necessarily a particular device
  - A company will likely license a number of device key sets. They make then give a certain set to a particular model / region.
    - For example, sony might request 10 sets of device keys (likely assigned in a continuous set). They may the decide that globally the PS4 would receive 5 different sets of device keys, depending on region: Key set A for Americas, B for Europe, etc.
    - This means saves cost in buying license and in manufacture costs.
- As the AACS tree is 31 bits deep, there are 2^31 device nodes = 2,147,483,648  -> ~ 2 billion 
  - so they _could_ assign a node to each device produced, but it's easier for the Licensing agency and manufacturer to deal in a small set of devices at a time.

## Delivered @
- BSides Manchester 2019: https://www.youtube.com/watch?v=i0ofXHu2lqY

## Misc
I've included a `.ppsx` file alongside the usual `.pdf` for this presentation, as it contains a lot of animations that people might find useful.
