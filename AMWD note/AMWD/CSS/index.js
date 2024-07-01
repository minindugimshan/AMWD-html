const passorfail = (name,marks) => {
    if (marks > 60) {
        return name + "is passed"
    }
    else{
        return name + "is failed"
    }
}
const res = passorfail("Minindu", 76);
console.log(res);

function ONCLICK(){
    alert("call me")
}
function ONCHANGE(){
  const value = document.getElementById('change').value
  console.log(value) 
}
 
function mouseOver(){
    document.getElementById('mouse').style.backgroundColor = 'blue'
}
function mouseOut(){
    document.getElementById('mouse').style.backgroundColor= 'red'
}