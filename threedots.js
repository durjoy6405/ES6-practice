const ages = [12, 14, 16, 17];
const ages2 = [15, 16, 19];
const ages3 = [25, 35, 68];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);

console.log(allAges);

const allAges2 = [ages, ages2, 5, ages3];
console.log(allAges2);

const allAges3 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges3);

const maximum =Math.max(...ages3);
console.log(maximum);