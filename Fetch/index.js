// const getData = ()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((err)=> console.log(err))  
//     .finally(()=> console.log("finally"));
// }

// const saveData = () =>{
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((err)=> console.log(err));
// }

// async function allDataAndDelete(){
//   try{
//     const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.jason();
//     console.log(data[0].id);

//     const res2 = await fetch('https://jsonplaceholder.typicode.com/posts'+data[0].id,{
//       method: 'DELETE',
//   });
//   const data2 = await res2.json()
//   console.log(data2)
// } catch(err){
//   console.log(err)
// }
// }
// allDataAndDelete()

function loadData(){
  let arrayData = ''
  fetch ('https://jsonplaceholder.typicode.com/posts')
  .then((response)=> response.json())
  .then((json)=>{
    json.map((val,index)=>{
      console.log(val);
      arrayData += `<div class="card">
      <h1>${val.id}</h1>
      <h2>${val.title}</h2>
      <label>${val.body}</label>
      <h4>${val.userId}</h4>
      </div>`
    })
    document.getElementById ('card-conteiner').innerHTML=arrayData
  })
  .catch((err)=> console.log(err))
}
// loadData();
function clickShortName(){
  const inputValue = document.getElementById('input1').value;
  let answer =''
  switch (inputValue){
    case 'intern':
      answer = "Intern Software Engineer";
      break;
    case 'ase':
      answer = "Associate Software Engineer";
      break;
    case 'se':
      answer = "Software Engineer";
      break;
    case 'sse':
      answer = "Senior Software Engineer";
      break;  
    case 'atl':
      answer = "Assistant Tech Lead";
      break; 
    case 'tl':
      answer = "Tech Lead";
      break; 
    default:
      answer = "Error code...!";
      break;   
  }
  document.getElementById('display1').innerHTML=answer
}