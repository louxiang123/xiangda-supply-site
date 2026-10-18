# ASSETS.md - Image Manifest

All category and hero imagery reuses exact CDN URLs already live in production.
One self-hosted generated asset exists: the social share cover (row 9).

| # | Asset | Source URL | Used In | Status |
|---|-------|-----------|---------|--------|
| 1 | Hero depth photo | https://sc02.alicdn.com/kf/Af821c6da94944447975e273055cd5359o.png | Hero background depth layer (D1), under the type layer | existing-CDN (pre-redesign hero) |
| 2 | Drinkware & Thermoses | https://s.alicdn.com/@sc04/kf/H8aca403e5dd746fea970ffc27550eb12V.jpg_640x640.jpg | Featured category card, band 1 (4:3 crop) | existing-CDN |
| 3 | Off-Road Motorcycles | https://s.alicdn.com/@sc04/kf/Hca3fdb50097c4151acd3126da9cd77892/Nexvey-72V-30Ah-Chinese-Factory-Adult-Electric.png_640x640.jpg | Category card, band 1 (4:3 crop) | existing-CDN |
| 4 | Jewelry & Accessories | https://s.alicdn.com/@sc04/kf/H9d086a3cb2eb479cb167c019151ab149I.jpg_640x640.jpg | Category card, band 2 (1:1) | existing-CDN |
| 5 | Apparel & Socks | https://s.alicdn.com/@sc04/kf/H7dd232fec01a4ac6b6d4d2324b58d7aai.jpg_640x640.jpg | Category card, band 2 (1:1) | existing-CDN |
| 6 | Toys & Stationery | https://s.alicdn.com/@sc04/kf/H6fdf0a845c0546d989990132c6f2c922F.png_640x640.png | Category card, band 2 (1:1) | existing-CDN |
| 7 | Home & Hardware | https://s.alicdn.com/@sc04/kf/H0840d06794c44799bff04a8d0bdaa984m.jpg_640x640.jpg | Category card, band 3 (16:10, image right) | existing-CDN |
| 8 | Bags & Luggage | https://s.alicdn.com/@sc04/kf/H8fbb8db8200147dc87927a54f8a695702.jpg_640x640.jpg | Category card, band 3 (16:10, image left) | existing-CDN |
| 9 | OG / social share cover (1200x630) | https://www.xiangdasupply.com/images/og-cover.jpg (local: images/og-cover.jpg) | og:image + twitter:image on all 9 pages | generated, self-hosted JPEG |

Hero background: CSS layers (navy base + navy-lift mesh + gold glow, no grain)
plus the depth photo above, rendered at brightness .62 / opacity .45 under a
110deg navy scrim (solid navy at 32%, transparent at 100%). Visual presence is
kept under 45% of the hero; typography and layout are unchanged.
