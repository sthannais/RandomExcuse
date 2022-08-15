let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function RandomExcuse(array1, array2, array3) {
    let newArray = [...array1, ...array2, ...array3];
    let randomItem = newArray[Math.floor(Math.random() * newArray.length)];
    return randomItem;
}

console.log(RandomExcuse(who, what, when));

document.getElementById("excuse").innerHTML = RandomExcuse(who, what, when);
