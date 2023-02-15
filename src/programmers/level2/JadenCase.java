package programmers.level2;

public class JadenCase {
    class Solution {
        public String solution(String s) {
            String[] arr = s.toLowerCase().split("");
            String pre_str = " ";
            String answer = "";

            for (String i : arr){
                answer += pre_str.equals(" ") ? i.toUpperCase() : i;
                pre_str = i;
            }

            return answer;                
        }
    }
}
