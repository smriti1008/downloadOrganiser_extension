Download Organizer
A lightweight Chrome extension that automatically sorts your downloads into folders named after the website they came from. No clicks, no settings, no clutter.

How it works
When you download a file, the extension looks at the page you started the download from and saves the file into a subfolder of your Downloads directory named after that site.

Downloads/
├── github.com/
│   └── project-main.zip
├── unsplash.com/
│   └── photo-123.jpg
├── example.com/
│   └── report.pdf
└── Misc/
    └── notes.txt        <- data:, file: and other non-website sources
Features
Sorts downloads into per-domain folders automatically
Strips www. and lowercases names, so www.Example.com and example.com share one folder
Resolves blob: downloads to their real site instead of dumping them in Misc
Removes characters that are invalid on Windows, macOS and Linux
Never overwrites: duplicates are saved as file (1).zip, file (2).zip, and so on
Falls back to the file's own URL if the referring page is unavailable
Leaves downloads alone if they already have a subfolder path
Minimal permissions: only downloads, with no access to your browsing data
No network requests, no tracking, no data collection
Installation
The extension isn't on the Chrome Web Store, so load it manually:

Clone or download this repository:
git clone https://github.com/Shwzz04/Downloads-Organizer-Chrome-Extention.git
Open chrome://extensions in Chrome.
Turn on Developer mode (top right).
Click Load unpacked and select the project folder.
Browser support
Browser	Supported
Google Chrome	Yes
Microsoft Edge	Yes
Brave, Opera, Vivaldi, Arc	Yes
Firefox	No
Safari	No
Firefox and Safari don't offer the downloads.onDeterminingFilename API that this extension relies on, so it can't work there.

Usage
Nothing to configure. Download a file as you normally would and check the matching folder inside your default Downloads directory.

Note: Chrome's Ask where to save each file before downloading setting (Settings → Downloads) prompts you for a location and overrides the folder suggested here. Turn it off for fully automatic sorting.

Project structure
download-organizer/
├── manifest.json    # Extension config (Manifest V3, `downloads` permission)
├── background.js    # Service worker that relocates downloads
├── LICENSE
└── README.md
Permissions
Permission	Why it's needed
downloads	To intercept downloads and suggest a destination folder
Limitations
Subdomains are separate folders. cdn.site.com and site.com aren't merged.
One filename controller per download. If another extension also changes download filenames, Chrome lets only one of them win.
Folders are relative to your Downloads directory. Chrome doesn't allow extensions to save outside it.
Applies to new downloads only. Files you've already downloaded are not moved.
Customization
Folder naming lives in the getFolderName() function in background.js.

To keep www. in folder names, remove this line:
if (domain.startsWith('www.')) domain = domain.slice(4);
To change the fallback folder name, edit FALLBACK_FOLDER at the top of the file.
After any change, click the reload icon for the extension on chrome://extensions.

Contributing
Issues and pull requests are welcome. For larger changes, please open an issue first to discuss what you'd like to change.

License
MIT License

Author name Smriti
