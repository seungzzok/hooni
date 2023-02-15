package programmers.level2;

public class Fibonacci {
    public int solution(int n) {        
        return (int) fibonacci(n) % 1234567;
    }
    
    public long fibonacci(int a){
        if(a==0) return 0;
        if(a==1) return 1;
        else return fibonacci(a-2) + fibonacci(a-1);
    }
}

class Solution {
    public int solution(int n) {        
        int f0 = 0;
        int f1 = 1;
        int f2 = 1;
        for (int i = 2; i<n; i++){
            f0 = f1%1234567;
            f1 = f2%1234567;
            f2 = (f0 + f1)%1234567;
        }
        return f2;
    }    
}
