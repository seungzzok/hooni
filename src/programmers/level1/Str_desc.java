package programmers.level1;
import java.util.Arrays;
import java.util.Collections;

public class Str_desc {
    public String solution(String s) {
        String[] arr = s.split("");
        Arrays.sort(arr,  Collections.reverseOrder());
        return String.join("", arr);
    }
}
