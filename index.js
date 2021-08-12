function findMatching(drivers, string) {
    return drivers.filter(listOfDrivers => 
        listOfDrivers.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, testString) {
    return drivers.filter(listOfDrivers =>
        listOfDrivers.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
}

function matchName(drivers, resultName) {
    return drivers.filter(record =>
        record.name === resultName
    )
}