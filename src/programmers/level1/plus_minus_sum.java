package programmers.level1;

public class plus_minus_sum {
    public int solution(int[] absolutes, boolean[] signs) {
        int ans_array[] = new int[absolutes.length];
        int answer = 0;

        for (int i = 0; i < absolutes.length; i++){
            if (signs[i] == true){
                ans_array[i] = absolutes[i];
            } else{
                ans_array[i] = -absolutes[i];
            }
        }

        for (int i : ans_array){
            answer += i;
        }
        
        return answer;
    }
    
}
