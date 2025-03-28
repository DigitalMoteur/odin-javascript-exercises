function getAge(person) {
    if (person.yearOfDeath == undefined) {
        person.yearOfDeath = new Date().getFullYear();
    }
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(list) {
    let oldest = undefined;
    list.map((current) => {
        if (oldest == undefined)
            oldest = current;
        oldest = getAge(current) > getAge(oldest) ? current : oldest
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
