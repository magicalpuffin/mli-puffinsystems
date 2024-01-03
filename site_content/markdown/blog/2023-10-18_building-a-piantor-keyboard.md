---
date_created: 2024-01-02
date_updated: 2024-01-02
---
![[static/content/images/blog/20231018/20231018_piantor_complete.png]]

## Overview

The [Piantor](https://github.com/beekeeb/piantor) is a 36 or 42 key mechanical keyboard using the RP2040 microcontroller based on the [Cantor](https://github.com/diepala/cantor). I built this keyboard in replacement of my [ZSA Moonlander](https://www.zsa.io/moonlander/) for the following reasons.

- **36 keys.** I was only using 36 keys on the Moonlander anyways.
- **Pinky stagger.** The Piantor has a more drastic column stagger compared to other keyboards. 
- **Low profile.** I was planning on carrying this keyboard for work or when traveling.
- **Hot swappable switches.** I was expecting to mess up and this would allow reusing the switches.
- **Easy build.** Diodeless, hotswappable sockets, and the option to directly solder the microcontroller to the PCB makes it much easier to build.

I highly recommend the Piantor keyboard, although, I don't recommend the process I went through for building mine.
## Sourcing

Components were all independently sourced instead of being bought from a kit. The total cost was ~ $250 including the soldering equipment. With the correct tools and components, this should cost < $100.

During the build process, I either bought incompatible microcontrollers or was missing resisters. The safest and fastest option was to restart the build but with official Rasberry Pi Picos.

### Initial Components

| Source | Part | Cost |
| ---- | ---- | ---- |
| Etsy | Piantor PCB | 20.00 |
| Etsy | Tax & Shipping | 6.14 |
| Chosfox | Hot Swap Socket | 7.25 |
| Chosfox | Kailh Low Profile Red | 24.00 |
| Chosfox | Tax & Shipping | 5.00 |
| Aliexpress | RP2040 Microcontroller | 7.25 |
| Aliexpress | TRRS Jack | 4.40 |
| Aliexpress | M2 Brass Insert | 1.20 |
| Aliexpress | M2 Screws | 1.07 |

### Additional Components

| Source | Part | Cost |
| ---- | ---- | ---- |
| Etsy | Piantor PCB | 20.00 |
| Etsy | Tax & Shipping | 6.14 |
| Amazon | Rasberry Pi Pico RP2040 | 12.50 |
| Amazon | Mico USB Cable | 8.99 |
| Amazon | Bumpons | 4.49 |
| Chosfox | Hot Swap Socket | 7.25 |
| Chosfox | Kailh Low Profile Red Pro | 22.00 |
| Chosfox | Tax & Shipping | 5.00 |

### Soldering

| Source | Part | Cost |
| ---- | ---- | ---- |
| Amazon | Pinecil | 39.99 |
| Amazon | Solder Wick | 3.99 |
| Amazon | Tweezers | 5.49 |
| Amazon | Lead Free Solder | 7.99 |
| Amazon | Flux Pen | 8.99 |
| Amazon | Scotch Tape | 3.49 |
| Amazon | Multimeter | 15.99 |

### Links
- [Etsy Piantor PCB](https://www.etsy.com/listing/1411130742/piantor-keyboard-pcb)
- [Aliexpress TRRS Jack](https://www.aliexpress.us/item/2251832843150354.html)
- [Chosfox hotswap sockets](https://chosfox.com/collections/sockets-mouse-switches/products/kailh-choc-switch-1350-hot-swap-sockets)
- [Chosfox keyswitches](https://chosfox.com/products/kailh-low-profile-choc-switches?variant=42514647613634)
- [Amazon RP2040](https://www.amazon.com/gp/product/B092S2KCV2/)
## 3d Printing
### Key Caps

To save on cost, I 3d printed the key caps on my Ender 3 V2. Key caps should be printed vertically to for strength. Layer lines aren't really noticeable on the surface finish; however, printing defects such as stringing can leave bumps.

When printing multiple keys (ex. 6 keys at a time), position keys facing outwards. This ensures stringing wouldn't affect the surface finish. I used 0.16 mm resolution but I don't really think it matters.

`placeholder for image prusa image of keys`

### Case

The case provided on the Piantor github is fine. There is also a 36 key version on Printables. The screws thread directly into the plastic and no heat set inserts are necessary.
### Links
- [Kailh Low Profile Key Caps Improved Supports](https://www.printables.com/model/566288-improved-supports-kailh-choc-ergonomic-sculpted-ke)
- [Kailh Low Profile Key Caps (Includes Tactile)](https://www.printables.com/model/400911-kailh-choc-ergonomic-sculpted-keycaps)
- [Piantor 36 Key Case](https://www.printables.com/model/380211-piantor-36-keys-keyboard-case)

## Soldering

Soldering was completed with a Pinecil on a USB C laptop charger. I used lead free solder which might have been a mistake due to the higher melting temperature. All connections to ground were difficult to melt even when using the max temperature on the Pinecil.

![[static/content/images/blog/20231018/20231018_piantor_solder.png]]

## Firmware

The default firmware provided by Beekeeb for the Piantor was Vial, a QMK fork which allows you to update the firmware live. Real time firmware changes is such an amazing feature that it makes Vial better than Oryx. I recreated my Moonlander layout and everything works as expected.

![[static/content/images/blog/20231018/20231018_piantor_vial.png]]