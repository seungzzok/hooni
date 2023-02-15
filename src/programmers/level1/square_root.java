package programmers.level1;

public class square_root {
	public long solution(long n) {
        long answer = 0;
        double sqrt = Math.sqrt(n);
        if(Math.floor(sqrt)==Math.ceil(sqrt)) {
        	answer = (long)Math.pow(sqrt + 1, 2);
        } else {
        	answer = -1;
        }         
        return answer;
    }

}
