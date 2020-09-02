//September 2, 2020

function checkSubSudoku(matrix) {
return { isValid: function () {
    
    //Check wrong size matrix
    if (matrix[0].length != matrix.length) return false;
    
    //Verify unique number arrays along horizontal line
    for (let i = 0; i < matrix.length; i++)
        for (let j = 1; j <= matrix[i].length; j++)
    //If missing values, mark as invalid
    if (matrix[i].indexOf(j) < 0) return false;
    
    //Verify unique number arrays along vertical line
    for (let a = 0, temp = []; a < matrix[0].length; a++, temp = []) {
      for (let b = 0; b < matrix.length; b++) temp.push(matrix[b][a])
      for (let c = 1; c <= matrix[0].length; c++)
   // If missing values, mark as invalid
      if (temp.indexOf(c) < 0) return false;
    }
    
    //Verify unique number smaller boxes
    for (let x = 0, temp = []; x < Math.sqrt(matrix[0].length); x++) {
      for (let y = 0, side; y < matrix[0].length; y++) {
        side = matrix[y].slice(Math.sqrt(matrix[0].length)*x, Math.sqrt(matrix[0].length)*x + Math.sqrt(matrix[0].length));
        temp = temp.concat(side);
        
        // If missing values, mark as invalid
        if ((y + 1) % Math.sqrt(matrix[0].length) === 0 && y > 0) {
          for (let z = 1; z <= matrix[0].length; z++)
            if (temp.indexOf(z) < 0) return false;
          temp = [];
        }
      }
    }
    return true;
    }
  }
}


// Test Cases
// Good Check 1
let goodBoard1 = [
  [7,8,4, 1,5,9, 3,2,6],
  [5,3,9, 6,7,2, 8,4,1],
  [6,1,2, 4,3,8, 7,5,9],

  [9,2,8, 7,1,5, 4,6,3],
  [3,5,7, 8,4,6, 1,9,2],
  [4,6,1, 9,2,3, 5,8,7],
  
  [8,7,6, 3,9,4, 2,1,5],
  [2,4,3, 5,6,1, 9,7,8],
  [1,9,5, 2,8,7, 6,3,4]
];

let outputGood1 = checkSubSudoku(goodBoard1).isValid();

console.log(outputGood1)

//Good Check 2
let goodBoard2 = [
  [1,4,2,3],
  [3,2,4,1],
  [4,1,3,2],
  [2,3,1,4]
];

let outputGood2 = checkSubSudoku(goodBoard2).isValid();

console.log(outputGood2)

//Good Check 3
let goodBoard3 = [
  [3,2,3,2],
  [2,3,2,2],
  [3,2,3,2],
  [2,3,2,2]
];

let outputGood3 = checkSubSudoku(goodBoard3).isValid();

console.log(outputGood3)

//Bad Check 1
let badBoard1 = [
  [1,2,3,4,5],
  [1,2,3,4],
  [1,2,3,4],  
  [1]
];

let outputBad1 = checkSubSudoku(badBoard1).isValid();

console.log(outputBad1)

//Bad Check 2
let badBoard2 = [
  [-1,-2,-3],
  [-1,-2,-3],
  [-1,-2,-3]
];

let outputBad2 = checkSubSudoku(badBoard2).isValid();

console.log(outputBad2)

//Bad Check 3
let badBoard3 = [
  [2,3,4],
  [3,4,2],
  [4,2,3]
];

let outputBad3 = checkSubSudoku(badBoard3).isValid();

console.log(outputBad3)


