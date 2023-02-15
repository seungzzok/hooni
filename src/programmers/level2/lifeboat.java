package programmers.level2;

import java.util.Arrays;

public class lifeboat {
    public int solution(int[] people, int limit) {
        Arrays.sort(people);
        int cnt = 0;
        int order = people.length-1;
        boolean bl = false;

        for (int i = 0; i < people.length; i ++){
            for (int j = order; i < j; j--){
                if (people[i] + people[j] <= limit){
                    cnt++;
                    order = j-1;
                    break;
                }
                if (i+1 == j) bl = true;
            }
            if(bl) break;
        }
        
        return people.length - cnt;
    }    
}
