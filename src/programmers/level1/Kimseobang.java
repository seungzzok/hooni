package programmers.level1;

public class Kimseobang {
    public String solution(String[] seoul) {
        int location = 0;
        for (int i = 0; i<seoul.length; i++){
            if (seoul[i] == "Kim") location = i;
        }
        return "김서방은 " + location + "에 있다";
    }
    
}
