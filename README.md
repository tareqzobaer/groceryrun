# Grocery Run

A fast, offline-first grocery list PWA built for Bangladeshi users. Auto-categorizes items, understands Banglish, and works without an internet connection after first load.

## Features

- **Paste a list** — paste comma or newline-separated items and they're parsed and categorized instantly
- **Smart quantity parsing** — handles `2 apples`, `apples x2`, `500g flour`, `milk 2L`, `biscuit 1 box`, etc.
- **Auto-categorization** — items are grouped into categories (Produce, Meat & Fish, Dairy, Pantry, etc.) with Bangladesh-relevant keywords and Banglish support
- **Item merging** — adding the same item twice bumps the quantity instead of duplicating
- **Tap to check off** — checked items sink to the bottom of their category
- **Long-press to edit** — rename, change quantity, or change unit
- **Swipe left to delete** — or tap ×
- **Collapsible categories** — tap any category header to collapse it
- **Share what's bought** — export your checked items via the system share sheet or clipboard
- **Offline support** — full service worker caching; works without a connection after first visit
- **Dark mode** — follows system preference
- **PWA installable** — add to home screen on Android and iOS

## File Structure

```
index.html      — entire app (HTML + CSS + JS, single file)
manifest.json   — PWA manifest
sw.js           — service worker for offline caching
icon-192.png    — app icon (192×192)
icon-512.png    — app icon (512×512)
```

## Input Formats Supported

| Input | Parsed as |
|---|---|
| `2 apples` | apples × 2 |
| `apples x 12` | apples × 12 |
| `500g flour` | flour 500 g |
| `chicken 1 kg` | chicken 1 kg |
| `milk 2L` | milk 2 L |
| `biscuit - 1 box` | biscuit 1 box |
| `eggs (12)` | eggs × 12 |

Supported units: `g`, `kg`, `L`, `ml`, `dozen`, `box`

## Tech Stack

Vanilla HTML/CSS/JS · localStorage · Service Worker · No dependencies · No build step

## Local Development

Just open `index.html` in a browser. For PWA features (service worker, install prompt), serve over HTTP:

```bash
npx serve .
```
