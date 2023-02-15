package hackerrank.easy;

import java.util.Scanner;

public class scanner {
	
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		int a = scan.nextInt();
		scan.nextLine();
		String b = scan.nextLine();
		int c = scan.nextInt();
		
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
		scan.close();
	}

}
