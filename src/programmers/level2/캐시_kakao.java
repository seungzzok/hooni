package programmers.level2;

import java.util.*;

public class 캐시_kakao {
    public int solution(int cacheSize, String[] cities) {
        List <String> list = new ArrayList<>();
        int speed = 0;
        for (int i = 0; i <cities.length; i++){
            String lower = cities[i].toLowerCase();
            if(list.contains(lower)){
                list.remove(list.indexOf(lower));
                list.add(0, lower);
                speed += 1;
            } else{
                list.add(0, lower);
                speed += 5;
                if (list.size() > cacheSize) list.remove(cacheSize);
            }
        }
        return speed;
    }    
}
