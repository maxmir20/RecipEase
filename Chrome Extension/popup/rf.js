
function closeWindow(){
    window.close()    
}

function reportExecuteScriptError(error) {
    document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Failed to execute recipe finder content script: ${error}`);
  }

chrome.tabs.update({ active: true });

chrome.tabs.executeScript({
    file: 'popup/ingredientscroll.js'
    }, function(results) {
      console.error(results[0])
      console.error(results.length)
      if (chrome.runtime.lastError || !results[0] || !results.length) {
        reportExecuteScriptError(TypeError);  // Permission error, tab closed, etc.
    } else {
        closeWindow()
    }
  });
