---
id: 20230706
title: Thoughts on the Moonlander Keyboard
description: Blog post about my experience using the Moolander keyboard. Reliability and  ergonomics issues.
date_created: 2023-07-06
date_updated: 2024-01-02
---

![my keyboards](/static/content/images/blog/20230706/20230706_moonlander_and_keyboards.png)

## Overview

The [Moonlander MK I](https://www.zsa.io/moonlander/) is a $400 dollar ortholinear split keyboard from ZSA, and was my first introduction to the mechanical keyboard world. Despite the impressive marketing, the Moonlander is mediocre at best; the greatest value it provides is for beginners to get into split mechanical keyboards.

UPDATE: The newly released [ZSA Voyager](https://www.zsa.io/voyager) outclasses the Moonlander and addresses many of my issues.

If your top priority is ergonomics, I would recommend a 36 or 42 key keyboard ([Piantor](https://github.com/beekeeb/piantor), [Corne](https://github.com/foostan/crkbd), [Ferris Sweep](https://github.com/davidphilipbarr/Sweep)). These keyboard can be purchased pre-soldered and will likely be similar in quality to the Moonlander. These keyboards also support [Vial](https://get.vial.today/), which enables real time layout configuration, something not supported by Oryx (ZSA's layout editor).

## How I Use the Moonlander

The Moonlander provided a great platform for learning and developing a keyboard layout. After 2 months, I was able to create a 36 key configuration which works for me. Here were some of my considerations:

- **Use 36 keys**. Fewer keys is more difficult to learn but pays off ergonomically.
- **Ignore the thumb cluster**. A 36 key layout is able to fully fit on the main board, allowing you to use normal keys for thumb keys.
- **Disable the RGB**. I originally used it to differentiate between layers but it is unnecessary.
- **Remove the wrist rests**. The built in wrist rests are too low, it was more comfortable to hover my hands over the keyboard.
- **Printed key caps don't matter**. With custom layouts, you will need to memorize your layout anyways.

With so many keys removed and features ignored, I might as well just get another keyboard...

![my moonlander configuration](/static/content/images/blog/20230706/20230706_36key_moonlander.png)

## Reliability Issues

Within 3 days of receiving my Moonlander, the right board stopped responding when connected. The left board could be used by itself, however, it would stop working the moment the right board was plugged in.

![screenshot from zsa](/static/content/images/blog/20230706/20230706_zsa_active_left.png)

This was caused by unplugging the TRRS cable while boards were still powered. This is actually a [common issue ](https://www.reddit.com/r/ErgoMechKeyboards/comments/rt083u/) for split keyboards without additional protections built in. This use case and functionality is also advertised by ZSA.

Fortunately, I was able to contact ZSA and receive a replacement unit. The long lead time also applied to the replacement unit which took about a week to receive.

## Ergonomic Issues

One of the greatest disappointments with the Moonlander was the lackluster ergonomics given its price point and marketing.

![moonlander vs ferris](/static/content/images/blog/20230706/20230706_moonlander_ferris.png)

The worst offender is thumb cluster. Out of the 4 keys, only one is usable; all of the other keys are too far away to be used without thumb pain. Almost no other keyboard has such a far away thumb cluster. For example, compare the thumb cluster with the ones on the Ferris Sweep (image from [Split Keyboard Compare](https://compare.splitkb.com/)).

Tenting is also dependent on the thumb cluster; therefore, if you were to fully tent the Moonlander, the thumb cluster is moved even further away at a downward angle. To address this, you would either have to give ZSA another $112 for the [Platform](https://www.zsa.io/moonlander/platform/), or 3d print workarounds such as a [thumb cluster leg](https://www.thingiverse.com/thing:4688862). I opted for the latter before giving up and just ignoring the thumb cluster entirely.

The pinky columns are not staggered far enough, however, this is a common issue on many other keyboards. Trying to reliably press "q" and "p" was difficult and required shifting my entire hand.

I'm surprised these issues were missed when ZSA designed the layout. Looking back at the reviews, I should have also paid more attention to these issues.
