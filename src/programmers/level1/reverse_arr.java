package programmers.level1;

public class reverse_arr {
	public static int[] solution(long n) {     
       
		int length = (int)Math.log10(n)+1;
        int[]answer = new int[length];
       
        for (int i=0; i<length; i++) {
        	answer[i] = (int)n%10;
        	n = (int)n/10;        	
        }

		return(answer);	

	}
}
