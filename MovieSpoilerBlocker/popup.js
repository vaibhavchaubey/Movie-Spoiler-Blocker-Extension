document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const statusElement = document.getElementById('status');
  
    // Load the current state from storage and update the UI
    chrome.storage.sync.get('spoilerBlockerEnabled', function (data) {
      const isEnabled = data.spoilerBlockerEnabled !== false; // Default to true if not set
      updateUI(isEnabled);
  
      toggleButton.addEventListener('click', function () {
        const newStatus = !isEnabled;
        updateUI(newStatus);
        chrome.storage.sync.set({ spoilerBlockerEnabled: newStatus });
  
        // Reload the active tab to apply the changes
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.reload(tabs[0].id);
        });
      });
    });
  
    function updateUI(isEnabled) {
      toggleButton.textContent = isEnabled ? 'Turn Spoiler Blocker OFF' : 'Turn Spoiler Blocker ON';
      statusElement.textContent = isEnabled ? 'Spoiler Blocker is ON' : 'Spoiler Blocker is OFF';
    }
  });
  