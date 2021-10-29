const employees = [
    {
        name: 'Ali',
        age: 25
    },
    {
        name: 'Ahmed',
        age: 27
    }
];

const FIRST_INDEX = 0;

const isEmployeeMatchGivenInfo = (employee) => {
    return employee.name === 'Ali' && employee.age === 25;
};

export default {
    caseAssetFailedThatThrowErrorWithTraceAndData: () => {
        console.assert(employees[FIRST_INDEX] === {
            name: 'Ali',
            age: 25
        }, {
            'employees[FIRST_INDEX]': employees[FIRST_INDEX],
            'employee given': {
                name: 'Ali',
                age: 25
            }
        });
    },
    caseAssetSuccessThatDoNoThing: () => {
        const wantedEmployee = employees.filter(isEmployeeMatchGivenInfo)[FIRST_INDEX];
        console.assert(employees[FIRST_INDEX] === wantedEmployee, {
            'employees[FIRST_INDEX]': employees[FIRST_INDEX],
            'wantedEmployee': wantedEmployee,
            'message': 'Second'
        });

    }
}





