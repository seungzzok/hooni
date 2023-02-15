package programmers.level2;

import java.util.Arrays;
import java.util.stream.Stream;

public class max_min {
    public String solution(String s) {
        String[] arr = s.split(" ");
        int[] intarr = Stream.of(arr).mapToInt(Integer::parseInt).toArray();
        Arrays.sort(intarr);
        String answer = String.valueOf(intarr[0]) + " " + String.valueOf(intarr[intarr.length-1]);
        return answer;
    }
}
