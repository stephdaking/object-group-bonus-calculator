$(document).ready(console.log('JQ is ready!'));

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
const employees = [
	{
		name: 'Atticus',
		employeeNumber: '2405',
		annualSalary: '47000',
		reviewRating: 3,
	},
	{
		name: 'Jem',
		employeeNumber: '62347',
		annualSalary: '63500',
		reviewRating: 4,
	},
	{
		name: 'Scout',
		employeeNumber: '6243',
		annualSalary: '74750',
		reviewRating: 5,
	},
	{
		name: 'Robert',
		employeeNumber: '26835',
		annualSalary: '66000',
		reviewRating: 1,
	},
	{
		name: 'Mayella',
		employeeNumber: '89068',
		annualSalary: '35000',
		reviewRating: 1,
	},
];

console.log(employees);

function employeeBonus(employee) {
	let totalIncome;
	for (let i = 0; i < employees.length; i++) {
		if (employees[i].name.toLowerCase() === employee.toLowerCase()) {
			totalIncome = {
				name: employees[i].name,
				bonusPercentage: bonusPercent(
					employees[i].reviewRating,
					employees[i].employeeNumber,
					employees[i].annualSalary
				),
				totalCompensation:
					employees[i].annualSalary *
						bonusPercent(
							employees[i].reviewRating,
							employees[i].employeeNumber,
							employees[i].annualSalary
						) +
					Number(employees[i].annualSalary),
				totalBonus: Math.round(
					employees[i].annualSalary *
						bonusPercent(
							employees[i].reviewRating,
							employees[i].employeeNumber,
							employees[i].annualSalary
						)
				),
			};
		}
	}
	return totalIncome;
}

function bonusPercent(reviewRating, employeeNumber, annualSalary) {
	let bonus = 0;
	if (employeeNumber.length === 4) {
		bonus += 0.05;
	}
	if (annualSalary > 65000) {
		bonus -= 0.01;
	}
	if (reviewRating <= 2) {
		bonus += 0;
	} else if (reviewRating === 3) {
		bonus += 0.04;
	} else if (reviewRating === 4) {
		bonus += 0.06;
	} else if (reviewRating === 5) {
		bonus += 0.1;
	}
	if (bonus > 0.13) {
		bonus = 0.13;
	}
	if (bonus < 0) {
		bonus = 0;
	}
	return bonus;
}

console.log('Annual bonus is: 0', bonusPercent(1, '111', 64000));
console.log('Annual bonus is: 0', bonusPercent(1, '111', 66000));
console.log('Annual bonus should be: 0.4', bonusPercent(3, '111', 64000));
console.log('Annual bonus should be: 0.6', bonusPercent(4, '111', 64000));
console.log('Annual bonus should be: 0.10', bonusPercent(5, '111', 64000));
console.log('Annual bonus should be: 0.9', bonusPercent(3, '1111', 64000));
console.log('Annual bonus should be: 0.11', bonusPercent(4, '1111', 64000));
console.log('Annual bonus should be: 0.13', bonusPercent(5, '1111', 64000));

console.log('Employee Bonus should be: 0.9%, $4,230, $51,230', employeeBonus('Atticus'));
console.log(employeeBonus('jem'));
console.log(employeeBonus('scout'));
console.log(employeeBonus('Robert'));
console.log(employeeBonus('Mayella'));

// Day 2 stuff, adding DOM

$('.button').on('click', employeeBonus);

let el = $('.bonuses')
for( let i = 0; i < employees.length; i++) {
	el.append(`<li>${employees.}</li>`)
}
