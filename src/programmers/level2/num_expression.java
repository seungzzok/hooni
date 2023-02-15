package programmers.level2;

public class num_expression {
    public int solution(int n) {
        int count = 0;
        for (int i = 1; i<n*2/i; i++){
            if(n*2%i == 0){
                if((n*2/i -i +1) % 2 ==0) count++;
            }
        }
        return count;
    }
    
}
