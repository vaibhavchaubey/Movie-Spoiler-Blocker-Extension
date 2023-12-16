# Movie Spoiler Blocker Chrome Extension

![Movie Spoiler Blocker Logo](https://github.com/vaibhavchaubey/MovieSpoilerBlocker/raw/main/icon.png)


## Overview

The Movie Spoiler Blocker is a Chrome extension designed to enhance your movie-watching experience by preventing spoilers in online reviews. With a user-friendly interface and customizable settings, this extension allows you to toggle spoiler blocking on or off with a single click.

## Features

- **Spoiler Detection:** The extension scans movie reviews for potential spoilers, providing a seamless browsing experience without revealing key plot details.

- **Toggle Functionality:** Easily enable or disable the spoiler blocker with the click of a button, giving you control over when to use the extension.

- **Stylish Design:** The extension features a clean and modern design with rounded corners and attractive colors for a visually appealing user interface.

- **Dynamic Content Handling:** The content script dynamically adjusts to changes in the webpage's DOM, ensuring continuous spoiler protection as you navigate through different reviews.

## Installation

1. Download the extension files from the [GitHub repository](#insert-repository-link-here).

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" in the top right corner.

4. Click on "Load unpacked" and select the folder containing the extension files.

5. The Movie Spoiler Blocker icon should now appear in your Chrome toolbar.

## Usage

1. Click on the Movie Spoiler Blocker icon in the Chrome toolbar to open the popup.

2. Use the "Toggle Spoiler Blocker" button to enable or disable the spoiler blocker.

3. Enjoy reading movie reviews without worrying about spoilers!

## Customization

- **Spoiler Detection Logic:** Customize the spoiler detection logic in the `isSpoiler` function within the `contentScript.js` file to suit your preferences.

- **Styling:** Modify the styles in the `popup.html` file to further customize the appearance of the extension popup.

## Contributing

We welcome contributions! If you find a bug or have an idea for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
