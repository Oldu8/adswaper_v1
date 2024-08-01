chrome.runtime.onInstalled.addListener(() => {
  console.log("AdSwaper installed.");
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    files: ["src/content.ts"],
  });
});
