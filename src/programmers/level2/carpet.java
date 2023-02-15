package programmers.level2;

public class carpet {
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        int num = 1;
        while (num <= yellow/num){           
            if(yellow % num == 0 && num*2 + yellow/num*2 + 4 == brown){
                answer[0] = yellow/num + 2;
                answer[1] = num + 2;
                break;
            }            
            num++;
        }        
        return answer;
    }    
}
