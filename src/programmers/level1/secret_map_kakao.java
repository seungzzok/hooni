package programmers.level1;

public class secret_map_kakao {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];
        for (int i = 0; i<n; i++){            
            String bin1 = Integer.toBinaryString(arr1[i]);
            String bin2 = Integer.toBinaryString(arr2[i]);
            while (bin1.length() != n || bin2.length() != n){
                bin1 = (bin1.length() != n) ? "0" + bin1 : bin1;
                bin2 = (bin2.length() != n) ? "0" + bin2 : bin2;
            }

            String sum = "";
            for (int j = 0; j<n; j++){
                sum += (bin1.charAt(j)=='0' && bin2.charAt(j)=='0') ? " " : "#";                
            }
            answer[i] = sum;            
        }
        return answer;
    }
}
