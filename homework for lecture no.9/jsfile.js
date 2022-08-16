let nameFromdId= "Dragancho";
let age = 34 ;
let jobTitle = "Carpenter";
let gender = "male";
let fromSkopje= true;
//  We can declare many variables in one "Let" statement

let ego = {
    persons_nameFromdId:nameFromdId,
    persons_age: age,
    persons_jobTitle: jobTitle,
    persons_gender:gender,
    persons_location:fromSkopje,
};
console.log(ego);
function buttonClick(){
alert(ego.persons_age);
}



// console.log(ego);
// window.alert(ego)


    
// Change heading:
// document.getElementById("myH").innerHTML = "My First Page";