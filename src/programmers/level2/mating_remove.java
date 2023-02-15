package programmers.level2;

public class mating_remove {
    public int solution(String s){
        StringBuilder sb = new StringBuilder(s);
        StringBuilder aft_sb = new StringBuilder();

        for (int i = 0; i < s.length(); i++){
            if(aft_sb.length() == 0){
                aft_sb.append(sb.charAt(i));
            } else if (sb.charAt(i) == aft_sb.charAt(aft_sb.length()-1)){
                aft_sb.deleteCharAt(aft_sb.length()-1);
            } else{
                aft_sb.append(sb.charAt(i));
            }
        }

        return aft_sb.length() == 0? 1: 0;
    }
}
