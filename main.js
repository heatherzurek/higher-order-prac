const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [1, 3, 5, 6, 7, 8, 9, 11, 33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for(let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

companies.forEach(function(company) {
  console.log(company.name);
});

ages.forEach(function(age) {
  console.log(age)
})

let canDrink = [];
for(let i = 0; i < ages.length; i++){
  if(ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

let cantDrink = [];
for(let i = 0; i < ages.length; i++){
  if(ages[i] < 21) {
    cantDrink.push(ages[i]);
  }
}
console.log(cantDrink);

const canDrink = ages.filter(function(age) {
  if(age >= 21) {
    return true;
  }
});
console.log(canDrink);

const cantDrink = ages.filter(function(age) {
  if(age < 21 ) {
    return true;
  }
});
console.log(cantDrink);

const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

const cantDrink = ages.filter(age => age < 21);
console.log(cantDrink);

const is33 = ages.filter(age => age === 33);
console.log(is33);

const is12 = ages.filter(age => age === 12);
console.log(is12);

filter retail companies

const retailCo = companies.filter(function(company) {
  if(company.category === 'Retail') {
    return true;
  }
});

console.log(retailCo);

const retailCo = companies.filter(company => company.category === 'Retail');
console.log(retailCo);

const techCo = companies.filter(company => company.category === 'Technology');
console.log(techCo);

const financeCo = companies.filter(company => company.category === 'Finance');
console.log(financeCo);

const autoCo = companies.filter(company => company.category === 'Auto');
console.log(autoCo);

const start1981 = companies.filter(company => company.start === 1981);
console.log(start1981);

const end2010 = companies.filter(company => company.end === 2010);
console.log(end2010);

const end2005 = companies.filter(company => company.end === 2004);
console.log(end2005);

const eightiesCo = companies.filter(company => (company.start >= 1980 && company.end < 2005));
console.log(eightiesCo);

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);


const companyNames = companies.map(function(company) {
  return company.name;
});
console.log(companyNames);

const companyNames = companies.map(company => company.category);
console.log(companyNames);

const testMap = companies.map(function(company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(testMap);

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

console.log(testMap);

const agesSqaure = ages.map(age => Math.sqrt(age));
console.log(agesSqaure);

const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);

const agesTimesThree = ages.map(age => age * 3);
console.log(agesTimesThree);

const agesTimesFour = ages.map(age => age * 4);
console.log(agesTimesFour);

const agesMinusTwo = ages.map(age => age - 2);
console.log(agesMinusTwo);

const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);

console.log(ageMap);

sort
const sortedCompanies = companies.sort(function(c1, c2) {
  if(c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedCompanies);

sort companies by start year
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);


const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);


const sortedByOldest = ages.sort((a, b) => b - a);
console.log(sortedByOldest);

// reduce

let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

console.log(ageSum);


const ageSum = ages.reduce(function(total, age) {
  return total + age;
}, 0);
console.log(ageSum);


const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);




const totalYears = companies.reduce(function(total, company) {
  return total + (company.end - company.start);
}, 0);
console.log(totalYears);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);


// combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0)

  console.log(combined);


const oddNumbers = ages.filter(num => num % 2 != 0);
console.log(oddNumbers);

const oddSum = oddNumbers.reduce((total, num) => total + num, 0);
console.log(oddSum);
