---
title: Thoughts on the Moonlander Keyboard
description: Blog post about my experience using the Moolander keyboard. Reliability and  ergonomics issues.
createdDate: 2023-07-06
updatedDate: 2024-01-02
tags:
  - keyboard
---
![my keyboards](/static/blog/20230706/moonlander_and_keyboards.png)
*My keyboards*
## Overview

The [Moonlander MK I](https://www.zsa.io/moonlander/) is a $400 dollar ortholinear split keyboard from ZSA, and was my first introduction to the mechanical keyboard world. Despite the impressive marketing, the Moonlander is mediocre at best; the greatest value it provides is for beginners to get into split mechanical keyboards.

**2024-01-02 UPDATE**: The newly released [ZSA Voyager](https://www.zsa.io/voyager) seems to addresses many of the  issues with the Moonlander.

If your top priority is ergonomics, I would recommend a 36 or 42 key keyboard ([Piantor](https://github.com/beekeeb/piantor), [Corne](https://github.com/foostan/crkbd), [Ferris Sweep](https://github.com/davidphilipbarr/Sweep)). These keyboard can be purchased pre-soldered and will likely be similar in quality to the Moonlander. These keyboards also support [Vial](https://get.vial.today/), which enables real time layout configuration, something not supported by Oryx (ZSA's layout editor).

## How I Use the Moonlander

The Moonlander provided a great platform for learning and developing a keyboard layout. After 2 months, I was able to create a 36 key configuration which works for me. Here were some of my considerations:

- **Use 36 keys**. Fewer keys is more difficult to learn but pays off ergonomically.
- **Ignore the thumb cluster**. A 36 key layout is able to fully fit on the main board, allowing you to use normal keys for thumb keys.
- **Disable the RGB**. I originally used it to differentiate between layers but it is unnecessary.
- **Remove the wrist rests**. The built in wrist rests are too low, it was more comfortable to hover my hands over the keyboard.
- **Printed key caps don't matter**. With custom layouts, you will need to memorize your layout anyways.

In the end, removed so many keys and ignored so many features it might as well be a different keyboard.

![my moonlander configuration](/static/blog/20230706/36key_moonlander.png)
*My 36 key Moonlander*

## Reliability Issues

Within 3 days of receiving my Moonlander, the right board stopped responding. The left board could be used by itself, however, it would stop working the moment the right board was plugged in.

![screenshot from zsa](/static/blog/20230706/zsa_active_left.png)
*Advertising for disconnecting the right half*

This was caused by unplugging the TRRS cable while boards were still powered. This is actually a [common issue ](https://www.reddit.com/r/ErgoMechKeyboards/comments/rt083u/) for split keyboards without additional protections built in. This use case and functionality is directly advertised by ZSA.

Fortunately, I was able to contact ZSA customer support and receive a replacement unit. The long lead time also applied to the replacement unit which took about a week to receive.

## Ergonomic Issues

One of the greatest disappointments with the Moonlander was the lackluster ergonomics considering its price point and marketing.

![moonlander vs ferris](/static/blog/20230706/moonlander_ferris.png)
*Comparison between ZSA Moonlander and Ferris Sweep*

**The worst offender is thumb cluster.** Out of the 4 keys, only one is usable; all of the other keys are too far away to be used without thumb pain. Almost no other keyboard has such a far away thumb cluster. For example, compare the thumb cluster with the ones on the Ferris Sweep (image from [Split Keyboard Compare](https://compare.splitkb.com/)).

**Tenting is also dependent on the thumb cluster.** If you were to fully tent the Moonlander, the thumb cluster is moved even further away and angled downwards. To address this, you could give ZSA another $112 for the [Platform](https://www.zsa.io/moonlander/platform/), or 3d print workarounds such as a [thumb cluster leg](https://www.thingiverse.com/thing:4688862). For a while I used the latter before giving up and just moving the thumb keys off the thumb cluster entirely.

**The pinky columns are not staggered far enough.** However, this is a common issue on other keyboards. Trying to reliably press "q" and "p" was difficult and required shifting my entire hand.

I'm surprised these issues were missed when ZSA designed the layout. Looking back at the reviews, I should have also paid more attention to these issues.
