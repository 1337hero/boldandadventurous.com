---
layout: post
title: "Our DIY Lithium Iron Phosphate (LiFePo4) Battery Upgrade PT 1"
permalink: /our-diy-lithium-battery-upgrade-pt-1/

by: "Mike"


image: false

video: false

categories:
  - DIY, Airstream
  
---

We awoke one morning to find ourselves cold. I stumbled to the galley and took a look at the IPN Remote display. The voltage readout was 8.9 volts. Begrudgingly I put on my pants, coat and shoes to head outside and fire up the generator. My least favorite activity when it’s 42 outside with 15mph wind gusts.

<img src="https://scontent-lax3-1.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/11909147_1666563770266568_2071204063_n.jpg" alt="Low Battery">

All summer long our batteries and solar have served us well. But as the summer turned to fall and the fall to winter, we started having problems. Running the furnace at night would result in depleting our batteries. 

We needed to upgrade our battery bank.

My initial plans called for a fast swap project. Install four 6v Trojan AGM batteries in the front storage compartment. This would replace our existing two 12v group 27 Interstate batteries and take us to 400Ah.

But there were some drawbacks to this approach. First, it would add 328 .lbs to our Airstream with most of that weight on the tongue.

Second, it would take up a huge amount of storage space. Third, a safe discharge rate for 6V batteries is only 50%. So in reality, we could only use 200Ah  of a 400Ah battery bank.

Cost wise was appealing, though, coming in at around $1400.00 for a 400Ah bank of Trojans.

So the wife and I began discussing the pros and cons of 6V AGM vs. a system comprised of lithium batteries. 

We liked that lithium would offer similar bank capacities at 1/2 the weight. And that it would reduce the space requirements by at least 1/3. We liked the expected cycle life, maintenance free aspects of the lithiums.

The big plus for us though was the faster charging without a slow acceptance phase. And the draw rate.

These batteries accept a full rate of charge until fully charged. And we could use 80%-90% of the capacity of this bank. Which means we could have between 320-380Ah of available power. We would need six 6V batteries to get the same amount of amp hours.

The charge/discharge curve of lithiums is very flat. It's impossible to tell current state of charge by battery voltage alone. During discharge, the voltage will vary about 1/10 of a volt. So voltage tells you one of three things; the battery bank is fully charged, dead, or somewhere in the middle. This is the complete opposite of lead acid and AGM batteries were the voltage drops as the battery is depleted. This is a bonus for getting maximum power out of the bank all the way to the end. 

## Why DIY?

I geek out on this stuff. I’m one of those guys who enjoys changing his own oil. I know time is money, and sometimes it’s worth paying people to do things. For me, I wanted to do this just to do it. It’s a cool, fun project. 

There is a significant cash saving if you go this route too. But that only partially affected my decision. 

That being said, it is by no means for the faint of heart or the inexperienced. 


## Battery Options
 
Lithium cells come in many chemical variations. The lithium iron phosphate chemistry (LiFePO4) is different than the exploding laptop batteries we all heard about a few years ago. There are a few slight variations in the chemistry of this category including LiFePO4 (generic version), LiFeYPO4 and LiFeMnPO4 cells. These are all similar batteries, the variations by different manufacturers.

These batteries come in cells called prismatic form factor. They are available in many sizes rated from 40 to 1000 Ah. Each cell is nominally rated at 3.2V, and it takes four cells in series to make a nominal 12.8V battery. 

<img src="https://scontent-lax3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/12375981_1515853978710964_3124539985766957537_n.jpg?oh=81dd82af8f617b36a02fe5eef371ca96&oe=570C196A" alt="Lithium cells">

The lithium cells available to the public are all manufactured in China. The biggest manufacturers are CALB, Sinopoly, Winston and GB Systems (GBS). 

Some people have purchased factory direct. I tried but found the logistics too difficult. Caleb Power (CALB), Balqon (Winston) and Elite Power Solutions (GBS) are stocking US distributors. 

I chose to go with GBS Cells and used Elite Power Solutions since they had a dealer in Yuma, AZ when I was there.

Also, AMSolar is selling a “kit” for RVers. Their kit includes cells from Sinopoly. And includes a BMS and Sense boards from Clean Power Auto. The kit includes all necessary wires and cables in a convenient package. 

<img src="https://scontent-lax3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/1014109_1515854285377600_203220778352229125_n.png?oh=7f77112a76a1e05e3675f3d6ae9d0b6e&oe=57108401" alt="AMSolar Lithium Batteries">


## Battery Management System

Lithiums need some special care when used. And because of this, you’ll want to buy a battery management system (BMS).

The purpose of a BMS is to protect the lithium cells in the event of over voltage or under voltage conditions. Two scenarios that may cause damage to the cells.

The BMS removes the battery bank from the charging source if the voltage is too high. And if the voltage is too low, removes the battery bank from the loads. Monitoring is done at the individual cell level making sure no cell in the pack goes below 2.5V or above 3.6V.

A BMS also does cell balancing. This is to ensure each cell in the battery bank is kept at the same SOC. Initially, on installation, we fully charge all the cells, so each cell starts at 100% SOC. As we discharge and charge the bank over several cycles, the cells can potentially drift apart, and cell balancing is a process to keep them in sync with each other.

Traditional batteries have this problem too. Lead acid batteries have either 3 or 6 cells in an individual battery. These individual cells within a lead acid battery do eventually end up at a different SOC, or level of charge. Further, individual batteries combined in banks also tend to drift over time. You can measure this with a hydrometer. This is where you equalize normal batteries with a high overcharge.

Lithium batteries will not tolerate this approach. Overcharging a lithium cell not only damages the cell, but it also creates lots of heat. So a different approach is necessary. A simple BMS accomplishes what we call a top balance. During every charge cycle, as a cell reaches 3.55 volts, the BMS shunts current to a resistive load, slowing the charge to that cell while allowing the lower cells catch up. More advanced BMS systems are active, charging the lower cells in the bank with energy from the higher cells on an ongoing basis.

There were only 2 BMS systems I considered. The Elite EMS and Clean Power Auto’s HouseBMS. Both are top balance systems, and both provide the important mechanism to protect the batteries from over or under voltage situations. 

<img src="https://scontent-lax3-1.xx.fbcdn.net/hphotos-xpa1/t31.0-8/10296253_1515854855377543_4375584740301100434_o.jpg" alt="BMS">

I chose the Elite EMS since I could get everything from the same source. And it had a couple of extra features, a remote display and included a battery capacity monitor. And it also monitors cell temperature. Clean Power Auto offers most of the additional features as a separate option but still does not offer cell level voltage and temperature display.

## Why I chose the GBS 100Ah cells vs. 200Ah cells

For a number of reasons;

**Cost Effective**
The GBS cells come pre-packaged in 4 cell units, connected in series making a 12V battery. I purchased 4 of these for a cost of $620 each.

I did consider briefly purchasing two of the 200Ah cells, but the cost there is $1,480.00 each. Easy math for me.

$1,480.00    x2 = $2,960.00

**VS**

$620.00 x4 = $2,480.00    

**Worst Case Scenario**
Another consideration for the 100Ah cell packs vs. the 200Ah cell pack was if a single cell fails.

I’ll try not to make this too confusing.

If I build a 400Ah bank out of the 200Ah packs, it will be comprised of eight 3.2v cells. If one of those cells fails, I will be reduced to a 200Ah bank.

If I build a 400Ah bank out of 100Ah packs, it will be comprised of sixteen 3.2v cells. Which means I could have 1 to 4 cells fail and be reduced only to 300Ah.

Also, individual cell replacement. $153 vs. $260

Cell failure is extremely rare if you have a BMS, but it was a consideration.

**Safety**
The GBS chemistry is LiFeMnPO4 in these cells. They are the first cells to have passed certification tests for on road use, which requires the cell not to catch fire or explode when dropped, over discharged, overcharged, baked, frozen, crushed or pierced with a steel rod.

**Availability**
There are several US distributors for this brand. One happened to be close to my location. I purchased mine from Starlight Solar Power Systems in Yuma, AZ over Thanksgiving.

## The Plan

We planned to do our system in 3 phases. As I started this post, we needed batteries NOW. So I purchased the batteries before I bought a single piece of the system components.

<img src="https://scontent-lax3-1.xx.fbcdn.net/hphotos-xpa1/t31.0-8/12244766_1511312799165082_6191847071797880395_o.jpg" alt="the batteries">

**Phase 1** includes installing the new lithiums and system components. Upgrading all wiring and future proofing the system. Relocating the solar charge controller and shorting the solar run while also upgrading the solar wiring from 6awg to 4awg. We will also be adding a 4th solar panel to the roof to complement the existing three 135 watt panels. This panel will be a GS100 - 100-watt panel from AMSolar. Installing all necessary safeties, fuses, new blocks, etc.

**Phase 2** after the new year will include a new Solar Charge controller. We will slave the original controller to the new one. And build a 200-watt ground deploy solar panel using two GS100 panels. 

**Phase 3** will be the addition of a 3000 watt Magnum Hybrid inverter with a separate ac panel and switch over. This is planned for around late spring just before the start of summer. This will allow us the use of our A/C when combined with our Honda generator.

Our initial system will be made up of:

Main battery bank, comprised of 16 3.2V GBS cells. 

Elite BMS (battery management system) with video monitor. A master disconnect solenoid wired to the OV and UV on the BMS.  

1. A master On/Off switch. 

2. A Blue Sky Solar Charge Controller to connect to the roof-mounted PV system. 

3. A 600-watt Samlex inverter isolated with a 300-amp bus fuse.

4. The Airstream’s 12V power will have a 50 amp breaker switch between the Airstream and the main battery bank.

## Final Remarks

Hopefully this post was informative. In my next post, I'll be detailing the installation of the battery bank in our Airstream.