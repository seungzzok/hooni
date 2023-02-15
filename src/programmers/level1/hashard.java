package programmers.level1;

public class hashard {
    public boolean solution(int x) {
        double sum = 0;
        int n = x;
        for (int i = 0; i< Integer.toString(x).length(); i++){
            sum += n%10;
            n = n/10;
        }
        return Math.floor(x/sum) == Math.ceil(x/sum);


        //boolean answer = true;
        //return answer;
    }
    
}
