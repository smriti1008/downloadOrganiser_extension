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

## 📂 Project Structure

```text
downloadOrganiser/
├── manifest.json    # Extension configuration
├── background.js    # Download organization logic
├── README.md        # Project documentation
└── LICENSE          # MIT License (if included)
```

## 🌐 Browser Support

| Browser | Supported |
|---|---|
| Google Chrome | ✅ Yes |
| Microsoft Edge | ✅ Yes |
| Brave | ✅ Yes |
| Opera | ✅ Yes |
| Vivaldi | ✅ Yes |
| Arc | ✅ Yes |
| Firefox | ❌ No |
| Safari | ❌ No |

This extension relies on Chrome's `downloads.onDeterminingFilename` API, which is not available in Firefox and Safari in the required form.

## ⚙️ Configuration

Download Organizer works automatically without additional configuration.

**Important:** If Chrome's *Ask where to save each file before downloading* setting is enabled, Chrome may prompt you to choose a location instead of using the suggested folder.

To disable it:

1. Open Chrome Settings.
2. Navigate to **Downloads**.
3. Turn off **Ask where to save each file before downloading**.

### Customize Folder Names

Folder naming is handled by the `getFolderName()` function in `background.js`.

- **Keep `www.` in folder names:** Remove the code that strips the `www.` prefix.
- **Change the fallback folder:** Edit the `FALLBACK_FOLDER` constant.

After making changes, open `chrome://extensions` and reload the extension.

## 🔒 Permissions & Privacy

The extension requests the `downloads` permission to determine and suggest download destinations.

- No browsing history collection.
- No tracking or analytics.
- No external network requests.
- No personal data collection.

Your downloads stay on your device.

## ⚠️ Limitations

- **Subdomains are separate:** `cdn.example.com` and `example.com` create separate folders.
- **Extension conflicts:** Another extension that modifies download filenames may conflict with Download Organizer.
- **Downloads directory only:** Chrome extensions cannot use this API to save files to arbitrary locations outside the permitted download directory.
- **New downloads only:** Existing files are not moved or reorganized.
- **Browser save prompts:** Chrome's manual save-location setting can override the suggested destination.

## 🤝 Contributing

Contributions, bug reports, and feature suggestions are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request describing your improvements.

For major changes, consider opening an issue first to discuss your proposal.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👩‍💻 Author

**Smriti**

GitHub: [@smriti1008](https://github.com/smriti1008)

---

*Less clutter. Smarter downloads. Zero extra effort.*
