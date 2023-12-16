function isSpoiler(title, description) {
  // Implement your spoiler detection logic


  /* FOR DEMO */
 return title === 'Crazy in every sense';
}

function hideSpoiler(reviewElement) {
  const spoilerMessage = document.createElement('div');
  spoilerMessage.className = 'spoiler-message';
  spoilerMessage.innerHTML = `
    <p class="spoiler-text">Spoiler detected and removed by the extension.</p>
    <p class="disclaimer-text">Watch the movie to discover the plot twists!</p>
  `;

  // Add your preferred styles for the spoiler message
  spoilerMessage.style.backgroundColor = '#ffcccb'; // Light red background
  spoilerMessage.style.padding = '10px';
  spoilerMessage.style.borderRadius = '8px';
  spoilerMessage.style.marginTop = '10px';
  spoilerMessage.style.textAlign = 'center';

  // Replace the content of the review element with the spoiler message
  reviewElement.innerHTML = '';
  reviewElement.appendChild(spoilerMessage);
}

function processReviews(isSpoilerBlockerEnabled) {
  if (isSpoilerBlockerEnabled) {
    const reviews = document.querySelectorAll('.review'); // Adjust the selector based on your actual HTML structure

    reviews.forEach((review) => {
      const titleElement = review.querySelector('.title');
      const descriptionElement = review.querySelector('.description');

      if (titleElement && descriptionElement) {
        const title = titleElement.innerText;
        const description = descriptionElement.innerText;

        if (isSpoiler(title, description)) {
          hideSpoiler(review);
        }
      }
    });
  }
}

function applySpoilerBlocker() {
  // Get the spoiler blocker state from the background script
  chrome.runtime.sendMessage({ action: 'getSpoilerBlockerState' }, (response) => {
    const isSpoilerBlockerEnabled = response && response.spoilerBlockerEnabled;
    processReviews(isSpoilerBlockerEnabled);
  });
}

// Run the spoiler blocker logic when the content script is injected
applySpoilerBlocker();

// Add an event listener for dynamic content loading
// For example, listen for changes in the DOM:
const observer = new MutationObserver(applySpoilerBlocker);
observer.observe(document.body, { subtree: true, childList: true });

// Listen for messages from the background script to re-run the content script
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'reloadContentScript') {
    applySpoilerBlocker();
  }
});
