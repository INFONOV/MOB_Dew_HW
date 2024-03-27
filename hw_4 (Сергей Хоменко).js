//1
function makeNegative(x){
    return((x>0)?(-1)*x:x);
}
console.log(makeNegative(-5)); 

//2
function approveGame(val){
    if ((val==="scissors")||(val==="paper")||(val==="rock")){
        return true;
    }else{
        return false;
    }
}

function rockPaperScissors(player1, player2){
    if (approveGame(player1) && approveGame(player2)){
        if (player1===player2){
            return "Draw!";
        }

        switch(player1){
            case "scissors":
                if (player2==="rock"){return "Player 2 won!";}
                if (player2==="paper"){return "Player 1 won!";}
                break;

            case "paper":
                if (player2==="rock"){return "Player 1 won!";}
                if (player2==="scissors"){return "Player 2 won!";}
                break;
            
            case "rock":
                if (player2==="scissors"){return "Player 1 won!";}
                if (player2==="paper"){return "Player 2 won!";}
                break;
            
            default:
                return "undefined";
        }

    }else{
        return "unknown sign";
    }

}
console.log(rockPaperScissors("scissors", "paper")); //return "Player 1 won!"
console.log(rockPaperScissors("scissors", "rock")); //return "Player 2 won!"
console.log(rockPaperScissors("paper", "paper")); //return "Draw!"
console.log(rockPaperScissors("car", "paper")); //return "unknown sign"

//3
function sumPositive(arr){
    let sum=0;
    arr.forEach(element => {
        (element>0?sum+=element:"");    
    });
return sum;
}

const arrTmp = [1,-4,7,12];
console.log(sumPositive(arrTmp));

//4
function countBy(step, maxValue){
    let arr = [];
    for (let i=step;i<=maxValue*step;i+=step){
        arr.push(i);
    }
return arr;
}
console.log(countBy(3, 10)); //return [3,6,9,12,15,18, 21, 24,27,30]
console.log(countBy(2,5)); //return [2,4,6,8,10]
console.log(countBy(4, 11)); // return  [4,44]

//5
let j=0;
function trafficlightNextColors(color,count){
    const arrTrafic = ["red","yellow","green","yellow"];
    let tmp="";
    //let j=arrTrafic.indexOf(color);
    j=arrTrafic.indexOf(color,j);
    for (let i=0;i<count;i++){
        j++;
        if (j>arrTrafic.length-1){j=0;}
        tmp=tmp + " " + arrTrafic[j];
    }
return tmp;
}

console.log(trafficlightNextColors("green", 4));  //return "yellow red yellow green"
console.log(trafficlightNextColors("yellow", 1));  //return "red"
console.log(trafficlightNextColors("red", 5));  //return "yellow green yellow red yellow"