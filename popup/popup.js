document.addEventListener('DOMContentLoaded', function() {
    const captureButton = document.querySelector('.btn-primary');
    
    captureButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.captureVisibleTab(tabs[0].windowId, {format: 'png'}, function(dataUrl) {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'screenshot.png';
                link.click();
            });
        });
    });
});