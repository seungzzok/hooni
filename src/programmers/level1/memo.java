package programmers.level1;
import java.util.*;

public class memo {      
    public static void main(String[] args){
        int[] citations = {0,1,2};
        int idx = citations.length-1;
        
        Arrays.sort(citations);
        int min = Math.min(citations.length, citations[citations.length-1]);
        int cnt = 0;

        //if(min==0 || min==1) System.out.println(min);

        while (citations[idx] >= min){
            cnt++;
            if(cnt>=min) {System.out.println(min); break;}
            else{idx--;}
            System.out.println(cnt + " " + idx);
        }

        for (int i = min; i >= 0; i--){
            while(citations[idx]==i){
                cnt++;
                idx--;
            }
            if(i<=cnt) break;
            //System.out.println(cnt + " " + idx);
        }
        
        System.out.println(cnt);
    }    
}
