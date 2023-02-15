package programmers.level2;

import java.util.Arrays;

public class word_chain_game{
    public int[] solution(int n, String[] words) {
        int[] answer = new int[2];
        String[] arr = new String[words.length];
        char ch = ' ';
        int turn = 0;

        for(String i : words){
            if (i.length()==1) break;           
            else if (turn>0 && ch != i.charAt(0)) break;
            else if (Arrays.asList(arr).contains(i)) break;
            arr[turn] = i;
            ch = i.charAt(i.length()-1);
            turn++;
        }

        if (turn == words.length){
            answer[0] = 0; answer [1] = 0;
        } else{
            answer[0] = (int)turn/n; answer[1] = turn%n;
        }

        return answer;
    }
}