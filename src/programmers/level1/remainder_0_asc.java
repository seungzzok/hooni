package programmers.level1;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class remainder_0_asc {
    public int[] solution(int [] arr, int divisor) {
        List<Integer> list = new ArrayList<Integer>();
        for (int i : arr){
            if (i % divisor == 0){
                list.add(i);
            }            
        }
        int[] none = {-1};
        int[] answer = list.stream().mapToInt(i -> i).toArray();
        Arrays.sort(answer);
        return answer.length == 0 ? none : answer;
    }    
}
