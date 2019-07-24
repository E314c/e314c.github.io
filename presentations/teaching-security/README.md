# Security Teaching
__Those who can't do: teach.__

## Course materials (?)
I've been developping a script to set up a testing environment to try all of this in your own time:
[https://github.com/E314c/E134cSecurityBoxes](https://github.com/E314c/E134cSecurityBoxes)
Check it out and play along. It contains the scripts that will be mentioned in the presentations and any demos will be based on this environment.

## Sylabus
### 1. PWK, OSCP, WTF
This is mainly just meant as a quick introduction to what I'm intending to teach, the kind of things I want to cover and some terminology that people might need to be aware of

### 2. Setting up a PenTesting Environment
We'll need a place to try out and to demonstrate the stuff we'll learn, so in this series of slides I'll be going through some tips to setting up your own environment.
I'm also working on a system that i'll hopefully be releasing that'll make this even easier to setup, but I'm having a few teething problems at the moment


### 3. A few linux basics
In Kali (and hacking in general), it's good to know some of the more fundemental ways of working with linux to get the things you want. This presentation is mainly to go through things like `grep`, `ps`, terminal re-direction and other things you'll want to know when navigating and investigating a linux system.


### 4. Networking is important in the tech industry
This presentation covers some basics of networking on a compute, including how a packet is addressed at different levels of the OSI system.


### 5. ARP poisoning and Man-In-The-Middle attacks
This is mainly a short presentation for the demonstartion of a MITM attack using ARP spoofing over a LAN connection


### 6. Recon - Technical information
This presentation is focussed on passive information gathering and OSINT, particularly relating to the technical aspects of a target, such as registered domains, IP addresses, hosting providers, etc.


### 7. Recon - The social side
A quick review of the kind of personal information one can glean about a target from opensource locations. This information may provide the grounds for a spear phising campaign.

### 8. Active and Vulnerability Scanning
Active scanning will actually contact the target's infrastructure, which can give you access to more technical information, but also more likely to be detected. The talk goes through some use of some common tools, like nmap and sqlmap.

### 9. Popping Shells and shellcode
A quick introduction to shellcode, what it is and how you can write your own.

### 10. Buffer Overflows
Discusses the anatomy of a buffer overflow flaw, how it's exploited and possible remedies. It also discusses some of the standard variants and a breif description of Return-Oriented-Programming.

## Expanding your learning:
### Exploit Development - Sam Bowne
[https://samsclass.info/127/127_S17.shtml](https://samsclass.info/127/127_S17.shtml)   
Sam Bowne has uploaded his `CNIT 127: Exploit Development Course` and videos of lectures and projects are all available online.  
Highly recommended for those wanting to learn about low level program design and exploitation as it covers Linux drivers, Windows drivers, assembly, shellcode and exploitation of compiled binaries.

### Over the wire
[Over the wire - wargames](http://overthewire.org/wargames/)  
Over the wire has a series of "wargames": games based around technical puzzles where the aim is to retrieve a secret from a system that will enable you to log into the next.  
There are SSH/CLI based games, webapp ones and more, all available free and without having to install anything on your local machine.