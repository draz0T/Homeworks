

function equality (par1 = 9, par2 = 4, par3 = "4")
{
    if(par1 == par2 || par1 == par3 || par2 == par3)
         {return true}
    else {return false}
};
let result = equality(par1, par2, par3)
console.log(result);





function date(month) {
    let thirtyOne = [1, 3, 5, 7, 8, 10, 12];
    let thirty = [4, 6, 9, 11];
    month = prompt("Enter a month")
    month = Number(month)
    if (thirtyOne.includes(month)) {
      return "31 days";
    } else if (thirty.includes(month)) {
      return "30 days";
    } else {
      let twentyEight = prompt("Enter a year");
      if (twentyEight % 4 != 0) {
        return "28 days";
    } else if (twentyEight % 4 == 0 && twentyEight % 100 == 0) {
               if( twentyEight % 400 == 0) {
                        return 29
                  }
                else { return 28 }
   } else {
              return 29
   }
    }
  };
  console.log(date());



