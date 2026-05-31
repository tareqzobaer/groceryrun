# Grocery Run

Grocery Run is a lightweight grocery shopping app that converts messy grocery lists into organized shopping lists. Simply paste a WhatsApp message, voice note transcript, or any free-form text, and the app automatically extracts items, quantities, and categories.

Designed with Bangladeshi users in mind, Grocery Run supports Banglish input, common local grocery items, and the informal formats people typically use when creating shopping lists.

## Features

* Parse grocery lists from WhatsApp messages, voice note transcripts, SMS, or plain text
* Automatically extract item names, quantities, and units
* Support for common formats such as:

  * `2 apples`
  * `apples x2`
  * `500g flour`
  * `milk 2L`
  * `biscuit 1 box`
* Automatically categorize items into groups such as Produce, Meat & Fish, Dairy, Pantry, and Household Items
* Support Banglish item names and Bangladesh-specific grocery items
* Merge duplicate items by updating quantities
* Check off purchased items with a single tap
* Edit items using a long press
* Delete items by swiping left or tapping ×
* Collapse and expand categories
* Share purchased items through the system share sheet or clipboard
* Offline support through service worker caching
* Automatic light and dark mode support
* Installable as a Progressive Web App (PWA)

## Supported Input Formats

| Input             | Result        |
| ----------------- | ------------- |
| `2 apples`        | apples × 2    |
| `apples x 12`     | apples × 12   |
| `500g flour`      | flour 500 g   |
| `chicken 1 kg`    | chicken 1 kg  |
| `milk 2L`         | milk 2 L      |
| `biscuit - 1 box` | biscuit 1 box |
| `eggs (12)`       | eggs × 12     |

Supported units include:

`g`, `kg`, `L`, `ml`, `dozen`, and `box`

## Tech Stack

* Vanilla HTML, CSS, and JavaScript
* localStorage
* Service Worker
* No external dependencies
* No build step required

## Project Structure

```text
index.html      # Main application
manifest.json   # PWA manifest
sw.js           # Service worker
icon-192.png    # App icon (192×192)
icon-512.png    # App icon (512×512)
```

## Local Development

Open `index.html` directly in a browser.

For PWA functionality, serve the project over HTTP:

```bash
npx serve .
```

## License

MIT License
