function closeWindow(){
    window.close()    
}

function reportExecuteScriptError(error) {
    // document.querySelector("#popup-content").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Failed to execute recipe finder content script: ${error.message}`);
  }

browser.tabs.executeScript({
    code: `document.querySelector('div[class*="ingredient"]').scrollIntoView(true);`
    })
.then(closeWindow)
.catch(reportExecuteScriptError);