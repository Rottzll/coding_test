function solution(dartResult) {
    var result = 0;
    var answer = new Array();
    var temp = 0;
    
    var len = dartResult.length;
    var i = 0;
    for(i; i < len; i++) {
        if(dartResult[i] <=10) {
            if(dartResult[i] == 1 && dartResult[i+1] == 0) {
                temp = 10;
                i++;
            } else {
                temp = dartResult[i];
            }
        }
        else if(dartResult[i] === 'S') {
            answer.push(temp);
        }
        else if(dartResult[i] === 'D') {
            answer.push(Math.pow(temp, 2));
        }
        else if(dartResult[i] === 'T'){
            answer.push(Math.pow(temp, 3));
        }
        else if(dartResult[i] === '#') {
           answer[answer.length-1]*=-1;
        }
        else if(dartResult[i] === '*') {
            answer[answer.length-1]*=2;
            answer[answer.length-2]*=2;
        }
    }
    
    var len = answer.length;
    var i = 0;
    for(i; i < len; i++) {
        result += Number(answer[i]);
    }
    return result;
}