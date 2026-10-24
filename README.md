# 📂 Download Organizer

**Automatically organize your downloads by website domain.**

Download Organizer is a lightweight Chrome extension that automatically sorts downloaded files into folders named after the websites they came from. No manual sorting, no complicated setup, and no clutter.

## ✨ Features

- **Automatic Organization** — Saves downloads in folders named after their source domains.
- **Clean Folder Names** — Converts domains to lowercase and removes `www.` so equivalent domains share a folder.
- **Blob URL Support** — Resolves `blob:` downloads to their originating website whenever possible.
- **Cross-Platform Safe Names** — Removes characters that are invalid in Windows, macOS, and Linux filenames.
- **Duplicate Protection** — Prevents overwriting existing files by allowing numbered filenames such as `file (1).zip` and `file (2).zip`.
- **Smart Fallback** — Uses the file's own URL when the referring page is unavailable.
- **Preserves Existing Paths** — Leaves downloads unchanged if they already have a subfolder path.
- **Minimal Permissions** — Requires only the `downloads` permission.
- **Privacy First** — No network requests, tracking, or data collection.

## 📁 How It Works

When you download a file, the extension identifies the source website and suggests a destination inside your default Downloads directory.

For example:

```text
Downloads/
├── github.com/
│   └── project-main.zip
├── unsplash.com/
│   └── photo-123.jpg
├── example.com/
│   └── report.pdf
└── Misc/
    └── notes.txt
```

Files from non-website sources, such as `data:` and `file:` URLs, are placed in the `Misc` folder.

## 🚀 Installation

The extension is not currently distributed through the Chrome Web Store. Install it manually using these steps.

1. Clone this repository:

   ```bash
   git clone https://github.com/smriti1008/downloadOrganiser_extension.git
   ```

2. Open Chrome and navigate to:

   ```text
   chrome://extensions
   ```

3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked**.
5. Select the downloaded project folder containing `manifest.json`.

That's it! Download a file normally and check your Downloads directory for the automatically created domain folder.

## 🛠️ Tech Stack

- JavaScript
- Chrome Extensions API
- Manifest V3

