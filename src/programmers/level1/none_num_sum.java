package programmers.level1;

public class none_num_sum {
    public int solution(int[] numbers) {
        int total_sum = 45;
        for (int i : numbers){
            total_sum -= i;
        }
        return total_sum;
    }
}
