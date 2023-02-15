package programmers.level1;

public class lack_money {
    public long solution(int price, int money, int count) {

        long result = (long)price*(long)count*(count+1)/2-money;

        return result;
    }
    
}
