/**
 * Created by gaoyan on 18-1-26.
 */

// a=123
// b=234
// // console.log(a)
// // console.log(b)
// // console.log(a^b)
// // console.log((a^b).toString(2))
// // console.log((a^b).toString(2).replace(/0/g,""))
// console.log((a^b).toString(2).replace(/0/g,"").length)
var judgeCircle = function(moves) {

    // console.error(y==0 && x==0)
    // return y===x===0
    return moves.split("L").length == moves.split("R").length && moves.split("U").length == moves.split("D").length;
};


console.error(judgeCircle("UDDLRL"))

