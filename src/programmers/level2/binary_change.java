package programmers.level2;

public class binary_change {
    public int[] solution(String s) {
        int zero_count = 0;
        int change_count = 0;
        while (!s.equals("1")){
            int length = s.length();
            int after_length = s.replace("0","").length();
            String binary = ""; 
            zero_count += length - after_length;
            
            while (after_length!=1){              
                binary = after_length%2 == 1 ? "1" + binary : "0" + binary;
                after_length = (int)after_length/2;
            }
            s = "1" + binary;      
            change_count ++;           
        }
        
        return new int[] {change_count, zero_count};
    } 
}
