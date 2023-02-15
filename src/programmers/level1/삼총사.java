package programmers.level1;
import java.util.*;

public class 삼총사 {
    public int solution(int[] number) {
        List<Integer> list = new ArrayList<>();
        
        for (int i = 0; i<number.length-2; i++){
            for (int j = i+1; j < number.length-1; j++){
                for (int k = j+1; k<number.length; k++){
                    list.add(number[i]+number[j]+number[k]);
                }
            }
        }

        int cnt = Collections.frequency(list, 0);
        return cnt;
    }
}
