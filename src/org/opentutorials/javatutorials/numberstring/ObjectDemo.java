package org.opentutorials.javatutorials.numberstring;

class Student{
	String name;
	Student(String name){
		this.name = name;
	}
}

class ObjectDemo {
	
	public static void main(String[] args) {
		Student s1 = new Student("egoing");
		Student s2 = new Student("egoing");
		System.out.println(s1);
		System.out.println(s2);
		System.out.println(s1.equals(s2));
	}
	
}
