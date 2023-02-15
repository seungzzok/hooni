package programmers.level2;

public class parenthesis {
    boolean solution(String s) {
        boolean answer = true;
        int count = 0;
        for (int i = 0; i<s.length(); i++){
            if(count<0){
                answer=false;
                break;
            }
            count = s.charAt(i) == '(' ? count + 1 : count - 1;
        }
        answer = count != 0 ? false : true;
        return answer;
    }    
}
