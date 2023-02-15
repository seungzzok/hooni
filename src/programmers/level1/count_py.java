package programmers.level1;
import java.lang.String;

class count_py {
    boolean solution(String s) {
        boolean answer = true;
        int num_T = 0;
        int num_Y = 0; 

        s = s.toUpperCase();
        for (int i = 0; i<s.length(); i++){
            if (s.charAt(i) == 'T'){
                num_T += 1;
            } else if (s.charAt(i) == 'Y'){
                num_Y += 1;
            }
        }

        if (num_T != num_Y){
            answer = false;
        }       

        return answer;
    }
}