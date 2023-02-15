package programmers.level1;

class EvenorOdd {	
    public String solution(int num) {
        String answer = "";
        if (num%2 == 0){
            answer = "Even";
        }else{
            answer = "Odd";
        }
        return answer;
    }
    
}