package programmers.level1;

public class average {
	public static double solution(int[] arr) {
        
        double sum = 0;
        // double로 지정안하고 int로 지정해서 계속 소수점이 계산 안된채로 answer에 대입된거임.
        int count = 0;
        for (int i : arr) {
        	sum += i;
        	count += 1;
        	System.out.print(sum + " ");
        	System.out.println(count);
        }
        double answer = sum/count;
        
        return answer;
    }
	
	public static void main (String[] args) {
		int[] example = {1, 2, 3, 4};
		System.out.println(solution(example));
		//System.out.println(solution(5,5));
	}

}
