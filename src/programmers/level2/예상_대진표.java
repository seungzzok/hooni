package programmers.level2;

public class 예상_대진표 {
    public int solution(int n, int a, int b){
        int num = n;
        int cnt = 0;
        while ((a-(num+1)/2.0)*(b-(num+1)/2.0)>0){
            num /= 2;
            cnt ++;
            if(a > num){
                a -= num;
                b -= num;
            }            
        }       
         
        int multi = 0;
        while (n != 1){
            n /= 2;
            multi ++;
        }

        return multi - cnt;
    }    
}
