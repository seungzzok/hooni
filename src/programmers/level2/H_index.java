package programmers.level2;

import java.util.Arrays;

public class H_index {
    public int solution(int[] citations) {
        Arrays.sort(citations);
        int min = Math.min(citations.length, citations[citations.length-1]);
        int cnt = 0;
        int idx = citations.length-1;
        
        while (citations[idx] >= min){
            cnt++;
            if(cnt >= min) return min;
            else idx--;
        }

        for (int i = min; i >= 0; i--){
            while(citations[idx]==i){
                if(i<=cnt) break;
                cnt++;
                idx--;
            }
            if(i<=cnt) break;
        }
        
        return cnt;
    }    
}
