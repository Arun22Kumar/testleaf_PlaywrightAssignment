const browserVersion = "chrome";

function getBrowserVersion() {

    if (browserVersion === "chrome") {
        let browserVersion = "chromevar";
        console.log("Inside If block " + browserVersion);
    }

    console.log("Outside If block Inside function block " + browserVersion);
}

getBrowserVersion();
