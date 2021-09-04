let bonus = 20;
function sum(first, second){
    let result = first + second + 20;
    if(result > 9){
        const mood = "happy";
        console.log(mood);
    }
    return result;
}
const output = sum(5,6);
console.log(output);