package programmers.level2;

import java.util.Arrays;

public class minimumm {
    public int solution(int []A, int []B){
        Arrays.sort(A);
        Arrays.sort(B);
        int minimumm = 0;
        for (int i = 0; i < A.length; i++){
            minimumm += A[i] * (B[B.length -1 -i]);
        }
        return minimumm;
        
    }
}
