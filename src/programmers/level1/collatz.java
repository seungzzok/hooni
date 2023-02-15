package programmers.level1;

public class collatz {
    public int solution(Long num) {
        int count = 0;
        int answer = 0;
        while(true){
            if (num==1){
                answer = count;
                break;
            } else if (count == 500){
                answer = -1;
                break;
            } else if (num%2 == 0){
                num /= 2;
                count += 1;
            } else{
                num = (num*3) +1;
                count += 1;
            }
        }
        return answer;
    }
    
}
