chrome.runtime.onInstalled.addListener(function () {
    chrome.notifications.create({
        type: "basic",
        title: "Bing Wallpaper",
        message: "Click the extension or go to www.bing.com to get started.",
        iconUrl: "icons/B1024.png"
    });
});
chrome.notifications.onClicked.addListener(function () {
    chrome.tabs.create({
        url: "https://www.bing.com/"
    });
});
chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({
        url: "https://www.bing.com/"
    });
});