function findMatching(driverArray, driverName) {
    // const newDriverArray = []
    // for (const user of driverArray) {
    //     if (user.toUpperCase() === driverName.toUpperCase()) {
    //         newDriverArray.push(user)
    //     }
    // }
    // return newDriverArray
    return driverArray.filter((user) => {return user.toUpperCase() === driverName.toUpperCase()})
}
function fuzzyMatch(driverArray, driverName) {
    const newDriverArray = []
    for (const user of driverArray) {
        if (user.charAt(0,1) === driverName.charAt(0,1)) {
            newDriverArray.push(user)
        }
    }
    return newDriverArray
}
function matchName(driverArray, driverName) {
    const newDriverArray = []
    for (const user of driverArray) {
        if (user.name === driverName) {
            newDriverArray.push(user)
        }
    }
    return newDriverArray
}
