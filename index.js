/* 3. Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.
	The subjects for each class group are as follows:
	Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
Social Science Subjects - Accounting, Commerce, Marketing, Geography
Arts Subjects - Government, Economics, Literature, History
General Subjects - English, Mathematics

Using if…else conditional statement, write a program that will help Bolatito determine the subjects she will be taking for the session using her class group. Also, in the case of an invalid class group, your output should be the General subjects
*/

let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
    socialSciencesubjects = 'Accounting, Commerce, Marketing, Geography';
    artsSubjects = 'Government, Economics, Literature, History';
    generalSubjects = 'English, Mathematics';

let classGroup = socialSciencesubjects;

if (classGroup===scienceSubjects) {
    console.log('Bolatito will offer ' + scienceSubjects);
} if (classGroup===socialSciencesubjects) {
    console.log('Bolatito will offer ' + socialSciencesubjects);
} else if (classGroup===artsSubjects) {
    console.log('Bolatito will offer ' + artsSubjects);
} else {
    console.log('Bolatito will offer ' + generalSubjects);
}

/* 5. Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
“The number (pwr) is the power of 2 nearest to (num).”
*/

let num = 108;
let pwr = 1;
let nearestNum = 0
while (pwr < num) {
   pwr *= 2; 
}
if (pwr - num > num -pwr/2) {
    pwr/=2;
}
console.log('The number ' + pwr + ' is the power of 2 nearest to ' + num);


