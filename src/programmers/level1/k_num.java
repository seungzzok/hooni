package programmers.level1;

public class k_num {    
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        int idx = 0;
        for (int[] i : commands){
            int length = i[1]-i[0]+1;
            int[] arr = new int[length];

            for (int j = 0; j < length; j++){
                arr[j] = array[j+i[0]-1];
            }

            answer[idx] = arr[i[3]];
            idx++;
        }
        return answer;
    }
}
