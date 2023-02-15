package programmers.level1;
import java.util.Collections;
import java.util.ArrayList;

class str_arr_sort {
    public String[] solution(String[] strings, int n) {
        String[] answer = new String[strings.length];
        
        ArrayList<String> arr = new ArrayList<>();
        
        for(int i = 0; i < strings.length; i++){
            arr.add(strings[i].charAt(n) + strings[i]);
        }
        
        Collections.sort(arr);
        
        for(int i = 0; i < arr.size(); i++){
            answer[i] = arr.get(i).substring(1);
        }
        return answer;
    }
}