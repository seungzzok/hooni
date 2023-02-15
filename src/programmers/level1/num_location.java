package programmers.level1;

public class num_location {
	public int solution(int n) {
        int answer = 0;
        int m = 0;
        boolean multiple = true;
        while (multiple) {
        	if((int)(n/Math.pow(10, m)) == 0) {
        		multiple = false;
        	}else {
        		m++;
        	}
        }
        
        for(int i = m-1; i >= 0; i--) {
        	int num = (int)(n/Math.pow(10, i));
        	answer += num;
        	n -= num*Math.pow(10, i);
        }

        return answer;
    }
}
