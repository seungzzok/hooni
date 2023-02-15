package programmers.level2;

import java.util.Arrays;

public class N개의_최소공배수 {
    public int solution(int[] arr) {
        Arrays.sort(arr);
        int n = arr[arr.length-1];

        for (int i = arr.length-2; i>=0; i--){
            if(n % arr[i] == 0) continue;
            for (int j = arr[i]; j>0; j--){                
                if(arr[i] % j==0 && n%j==0){
                    n = arr[i] * n /j;
                    break;
                }
            }
        } 
        return n;
    }    
}
