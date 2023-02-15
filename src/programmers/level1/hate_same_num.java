package programmers.level1;
import java.util.*;

public class hate_same_num {
    public int[] solution(int []arr) {
        int length = arr.length-1;
        ArrayList<Integer> arrayList = new ArrayList<>();
        for (int i = 0; i < length; i++){
            if (arr[i] != arr[i+1]){
                arrayList.add(arr[i]);
            }  
            if (i == length-1) {
                arrayList.add(arr[i+1]);                                  
            }      
        }
        return arrayList.stream().mapToInt(Integer::intValue).toArray();
    }
}