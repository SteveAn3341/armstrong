// How can you make this more scalable and reusable later?


// num = 157
// arm strong number is something like 1*1*1 + 5*5*5 + 7*7*7 === num then it is a armstrong number
// we need to find the num's length we need to make it to the string first 
// and put the number in to the arr
// loop the arr and use math.pow to * i(math.pow is take base number and power it to the exponent number ,exponent number is the number of times a number  multiplied by itself)
// make a varible call sum and sum = 0 and store the sum of the num in to the varible
// comepare the number is equal to the varible 

// exports.findArmstrongNumbers = function(num) {

function findArm(){
  let x = []
  for(let i = 0; i < 1000; i++){
    let d = i.toString().split("");
    if(i < 10){
      x.push(i);
   }
    else if(i < 100){
      let s = d.map((k) => k**2).reduce((a,b) => a+b, 0);
      if(s === i){
        x.push(i)
      }
    } 
      else if(i < 1000){
        let f =  d.map((k) => k**3).reduce((a,b) => a+b, 0);
        if(f === i){
            x.push(i)
        }
      }
  }
  return x
}
console.log(findArm(999))
