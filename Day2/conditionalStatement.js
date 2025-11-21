
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome");
    } else {
        console.log("Launching Default");
    }
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Smoke Test");
            break;

        case "sanity":
            console.log("Sanity Test");
            break;

        case "regression":
            console.log("Regression Test");
            break;

        default:
            console.log("default");
    }
}


launchBrowser("chrome");      
launchBrowser("firefox");      

runTests("smoke");            
runTests("sanity");        
runTests("regression");       
runTests("performance");
