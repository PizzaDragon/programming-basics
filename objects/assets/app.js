// 1
const lapRounds = {
    round1: 55.99,
    round2: 63.00,
    round3: 63.01,
    round4: 54.01,
    round5: 62.79,
    round6: 52.88,
    round7: 53.10,
    round8: 54.12
}

// 2
const teachers = [
    {
        name: 'Loek',
        profession: 'teacher',
        brand: 'Linux',
        hoursPerWeek: 20,
        salary: 3500
    },
    {
        name: 'Daan',
        profession: 'teacher',
        brand: 'Arduino',
        hoursPerWeek: 18,
        salary: 3200
    },
    {
        name: 'Rimmert',
        profession: 'teacher',
        brand: 'Apple',
        hoursPerWeek: 19,
        salary: 3350
    },
    salaryPerHour = function() {
        for (let i = 0; i < array.length; i++) {
            this.salary[i] /= this.hoursPerWeek[i];
            return this.salary[i];
        }
    }
]

console.log(teachers.salaryPerHour())

for (let i = 0; i < teachers.length; i++) {
    console.log(`I have a ${teachers[i].profession} named ${teachers[i].name} and he likes to work on a ${teachers[i].brand} computer`)
}

