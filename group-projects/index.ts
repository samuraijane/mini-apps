import * as defaultList from './studentList.json';

interface StudentGroup {
  [key: string]: string[]
}

let openGroups: number[] = [];
let studentGroups: StudentGroup = {};

/**
 * 
 * @param {number} num 
 * @returns 
 */
const nameStudentGroups = (num: number) => {
  for (let i = 1; i <= num; i++) {
    studentGroups[`group${i}`] = [];
    openGroups.push(i);
  }
  return studentGroups;
};


const checkIsGroupClosed = (groupId: number) => {
  return studentGroups[`group${groupId}`].length === 2;
};


function cancelGroupId(groupId: number) {
  const position = openGroups.indexOf(groupId);
  openGroups.splice(position, 1);
}


const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min;
}


const selectRandomGroup = (num: number) => {
  let randomInt = getRandomInteger(1, num);

  while (checkIsGroupClosed(randomInt)) {
    cancelGroupId(randomInt);
    randomInt = getRandomInteger(1, num);
  }

  return randomInt;
};


const printStudentGroups = (list: string[]) => {
  const totalGroups = list.length / 2;
  studentGroups = nameStudentGroups(totalGroups);
  for (let i = 0; i < list.length; i++) {
    const groupId = selectRandomGroup(totalGroups);
    studentGroups[`group${groupId}`].push(list[i]);
  }
  console.log(studentGroups);
}

export { printStudentGroups, defaultList };