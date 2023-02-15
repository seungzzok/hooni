package programmers.level1;
import java.util.Arrays;
import java.util.Collections;

public class desc_order {
    public long solution(long n) {
        String str = String.valueOf(n);
        String[] arr = new String[str.length()];

        for (int i = 0; i < str.length(); i++){
            arr[i] = String.valueOf(str.charAt(i));
        }

        Arrays.sort(arr, Collections.reverseOrder());        
        String a = "";

        for (int i = 0; i<arr.length; i++){
            a += arr[i];
        }

        Long answer = Long.parseLong(a); 
        return answer;
    }    


}

