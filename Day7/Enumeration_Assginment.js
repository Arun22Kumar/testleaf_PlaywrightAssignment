var enviroment;
(function (enviroment) {
    enviroment["Local"] = "Local";
    enviroment["Development"] = "Development";
    enviroment["Staging"] = "Staging";
    enviroment[enviroment["Production"] = 1] = "Production";
    enviroment[enviroment["SDET"] = 2] = "SDET";
})(enviroment || (enviroment = {}));
function runTest(env) {
    console.log("Test run in ".concat(env, " environment"));
}
runTest(enviroment.Staging);
runTest(enviroment.Production);
runTest(enviroment.SDET);
