let spoilerBlockerEnabled = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get('spoilerBlockerEnabled', (data) => {
    spoilerBlockerEnabled = data.spoilerBlockerEnabled !== false;
  });
});

chrome.storage.onChanged.addListener((changes) => {
  if ('spoilerBlockerEnabled' in changes) {
    spoilerBlockerEnabled = changes.spoilerBlockerEnabled.newValue;
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getSpoilerBlockerState') {
    sendResponse({ spoilerBlockerEnabled });
  } else if (message.action === 'reloadContentScript') {
    chrome.tabs.sendMessage(message.tabId, { action: 'reloadContentScript' });
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, { action: 'reloadContentScript' });
  }
});
