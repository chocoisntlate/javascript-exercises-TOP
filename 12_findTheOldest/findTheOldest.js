const findTheOldest = function(people) {
    const ages = people.map((person) => {
        let death = person.yearOfDeath

        if (!person.yearOfDeath) {
            death = new Date().getFullYear();
        }
        return death - person.yearOfBirth;
    });
    const original = [...ages];
    ages.sort((a,b) => {
        if (a < b) {
            return 1;
        } else {
            return -1;
        }
    });
    const personIndex = original.indexOf(ages[0]);
    return people[personIndex];
    // return people[0].yearOfDeath - people[0].yearOfBirth;
    // return ages;
};

// Do not edit below this line
module.exports = findTheOldest;
