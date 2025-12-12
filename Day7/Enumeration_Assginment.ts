enum enviroment {
    Local="Local",
    Development="Development",
    Staging="Staging",
    Production=1,
    SDET
}

function runTest(env:enviroment):void {
    console.log(`Test run in ${env} environment`)
}

runTest(enviroment.Staging)
runTest(enviroment.Production)
runTest(enviroment.SDET)