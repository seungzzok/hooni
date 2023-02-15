package programmers.level1;

public class reverse_ternary {
    public int solution(int n) {
        String str = "";
        while (n > 0){
            str = (n%3) + str;
            n = (int)n/3;
        }

        int answer = 0;
        for (int i = 0; i<str.length(); i++){
            answer += Math.pow(3, i) * Character.getNumericValue(str.charAt(i));
        }
        return answer;
    }    
}
