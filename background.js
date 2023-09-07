chrome.idle.setDetectionInterval(300); // 5 minutes in seconds
chrome.idle.onStateChanged.addListener((newState) => {
    if (newState === 'idle') {
        chrome.tabs.create({url: 'https://media.tenor.com/ciNDyf6AgH0AAAAd/disappointed-disappointed-fan.gif'});
    }
});
