let randomArray = [];
function loadRandomArray(){
    for(var i=0; i < 100; i++){
        randomArray.push(Math.round(Math.random()*100));
    }
    console.log(randomArray);
    document.getElementById('display2').innerHTML=randomArray;
}

loadRandomArray();

function filterArray(){
    const text = document.getElementById('input2').value ;
    let filterText =[]
    for (let e = 0; e<randomArray.length;e++){
        if(randomArray[e]%text==0){
            filterText.push(randomArray[e]);
        }
    }
    document.getElementById('display3').innerText=filterText;
}