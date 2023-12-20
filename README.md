# Movie Spoiler-Shield Chrome Extension

## Overview

The Movie Spoiler-Shield is a comprehensive Chrome extension designed to elevate your movie-watching experience by harnessing the power of the BERT pre-trained model for spoiler detection in movie reviews. With a user-friendly interface, customizable settings, and a seamless integration of machine learning and web scraping, this extension ensures users are shielded from plot revelations, allowing them to enjoy reviews without the fear of spoilers.

## Features

- **Spoiler Detection with BERT:** Utilizes a BERT pre-trained model to accurately detect potential spoilers in movie reviews, providing advanced spoiler protection.

- **Web Scraping Integration:** The JavaScript code performs web scraping to extract relevant data from movie review websites, allowing the extension to analyze and process the content.

- **Flask API Backend:** Hosts the BERT model using Flask, creating a robust backend system for handling predictions based on the content extracted from movie reviews.

- **Dynamic Content Handling:** The extension's JavaScript dynamically interacts with the Flask API to obtain real-time predictions, ensuring that the spoiler detection is consistently up-to-date.

- **Automatic Spoiler Blocking:** If the BERT model predicts the presence of spoilers, the extension automatically hides the corresponding review content, preventing users from accidentally encountering plot details.

- **Toggle Functionality:** Easily enable or disable the spoiler blocker with the click of a button, giving you control over when to use the extension.

- **Stylish Design:** The extension features a clean and modern design with rounded corners and attractive colors for a visually appealing user interface.

- **Dynamic Content Handling:** The content script dynamically adjusts to changes in the webpage's DOM, ensuring continuous spoiler protection as you navigate through different reviews.

## Installation

1. Download the extension files from the [GitHub repository](#insert-repository-link-here).

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" in the top right corner.

4. Click on "Load unpacked" and select the folder containing the extension files.

5. The Movie Spoiler-Shield icon should now appear in your Chrome toolbar.

## Usage

1. Click on the Movie Spoiler-Shield icon in the Chrome toolbar to open the popup.

2. Use the "Toggle Spoiler Blocker" button to enable or disable the spoiler blocker.

3. Enjoy reading movie reviews without worrying about spoilers! If the extension detects potential spoilers, it automatically hides the relevant content.

## Customization

- **Adjusting Thresholds:** Explore the Flask API configuration to fine-tune the spoiler detection thresholds based on user preferences.

- **Model Updates:** Periodically update the BERT pre-trained model to incorporate the latest advancements in spoiler detection.

- **Spoiler Detection Logic:** Customize the spoiler detection logic in the `isSpoiler` function within the `contentScript.js` file to suit your preferences.

- **Styling:** Modify the styles in the `popup.html` file to further customize the appearance of the extension popup.

## Contributing

We welcome contributions! If you find a bug or have an idea for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

We would like to express our gratitude to the creators of the BERT pre-trained model and the Flask framework for making this project possible. Special thanks to the open-source community for their continuous support and contributions.

---

Feel free to adjust the headings, formatting, and content to suit your preferences. This extended version provides a more comprehensive overview of the Movie Spoiler-Shield Chrome Extension, covering both the initial details and the additional information about the BERT model integration.
