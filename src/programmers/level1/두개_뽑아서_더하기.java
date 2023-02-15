package programmers.level1;
import java.util.*;

public class 두개_뽑아서_더하기 {
    public int[] solution(int[] numbers) {
        TreeSet<Integer> set = new TreeSet<Integer>();

        for (int i = 0; i<numbers.length; i++){
            for (int j = i+1; j<numbers.length; j++){
                set.add(numbers[i]+numbers[j]);
            }
        }
        
        return set.stream().mapToInt(Integer::intValue).toArray();
    }    
}
