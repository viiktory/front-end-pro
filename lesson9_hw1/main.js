/*
Дізнатись суму всіх зарплат користувачів:
 */

let company = {
    sales: [
        {name: 'John', salary: 1000},
        {name: 'Alice', salary: 600}
    ],
    developments: {
        web: [
            {name: 'Peter', salary: 2000},
            {name: 'Alex', salary: 1800}
        ],
        internals: [
            {name: 'Jack', salary: 1300},
            {
                interns: [
                    {name: 'Jack', salary: 200},
                    {name: 'Kiki', salary: 250},
                    {name: 'Luck', salary: 100},
                    {
                        labs: [
                            {name: 'Tom', salary: 20},
                            {name: 'Mark', salary: 10}
                        ]
                    }
                ]
            }
        ]
    },
    directors: [
        {name: 'Emily', salary: 9999}
    ]
};

function calculateTotalSalary(object) {
    let totalSalary = 0;

    for (let key in object) {
        let value = object[key];

        if (Array.isArray(value)) {
            value.forEach(item => {
                totalSalary += calculateTotalSalary(item);
            });
        } else if (typeof value === 'object' && value !== null) {
            totalSalary += calculateTotalSalary(value);
        } else if (key === 'salary') {
            totalSalary += value;
        }
    }

    return totalSalary;
}

let salary = calculateTotalSalary(company);
console.log(salary);