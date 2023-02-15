package programmers.level2;

public class strange_num {
    public String solution(String s) {
        String[] arr = s.split("");        
        int idx = 0;
        int word_idx = 0;
        for (String i : arr){
            arr[idx] = (word_idx%2==0) ? i.toUpperCase() : i.toLowerCase();
            word_idx ++;
            if (arr[idx].equals(" ")) word_idx = 0;     
            idx ++;                   
        }
        return String.join("", arr);
    }
    
}
