package programmers.level1;

class aliquot {
	public int solution1(int n) {
        int answer = 0;
        
        for (int i=1; i<=n; i++) {
        	if (n%i == 0) {
        		answer += i;
        	}
        }
        
        return answer;
    }
}
//절대참조 무조건 해야됨 왜그래야되는지 모르겠음 그거 안하면은 자꾸 다른 패키지 내용 갖고와짐
