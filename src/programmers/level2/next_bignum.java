package programmers.level2;

public class next_bignum {
    public int solution(int n) {
        String binary = Integer.toBinaryString(n);
        String next_binary = "";
        int cnt = binary.length() - binary.replace("1", "").length();
        int next_num = n+1;
        while (true){
            next_binary = Integer.toBinaryString(next_num);
            int next_cnt = next_binary.length() - next_binary.replace("1", "").length();
            if (cnt == next_cnt) break;
            next_num++;
        }
        
        return Integer.parseInt(next_binary, 2);
    }
    
}
