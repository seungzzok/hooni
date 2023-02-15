package programmers.level1;

public class remove_smallest {
    public int[] solution(int[] arr) {
        int[] answer = {};
        if (arr.length - 1 == 0){
            answer = new int[] {-1};
        } else{
            answer = new int[arr.length - 1];
            int min = arr[0];
            int count = 0;

            for (int i : arr){
                if(min > i){
                    min = i;
                }
            }
            
            for (int i = 0; i<arr.length; i++){
                if(arr[i] == min){
                    continue;
                }else{
                    answer[count++] = arr[i];
                }
            }            
        }
        return answer;
    }    
}
