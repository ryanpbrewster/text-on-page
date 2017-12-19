chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({ file: "on-page.js" });
});
