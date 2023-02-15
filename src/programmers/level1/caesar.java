package programmers.level1;

public class caesar {
    class Solution {
        public String solution(String s, int n) {
            String answer = "";
            for (int i = 0; i<s.length(); i++){
                int ascii = (int)s.charAt(i) + n;
                if (ascii == 32 + n) {answer += " "; continue;}
                if (ascii > 122) ascii -= 26;
                if ((int)s.charAt(i) < 91 && ascii > 90) ascii -= 26;
                answer += (char)ascii;
            }            
            return answer;
        }
    }
    
}
