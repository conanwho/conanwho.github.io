/*
  Author: Christian
  
  Purpose: test output and input
  
*/

import java.util.Scanner; //used for user-input

public class HelloWorld{

  //entry point of program
  public static void main(String[] args){
    
    /*
      other data types 
      int - 3, 100, -33
      double - 2.3, 0.33  
      char - 'x' '!' '1'
      boolean - true/false
      string - "word", "cat" "sdgrrerge"
    */
    //declare all variables
    String word = "Hello World!";
    Scanner input = new Scanner(System.in); 
    String name = "";
    int age = 0;
    double gpa = 0.0;
    
    //output Hello World!
    System.out.println(word);
    
    //prompt the user
    System.out.println("What is your name?");
    
    //get user input
    name = input.next();
    
    /*
      name.lenght() //get how many characters in string
      == //is equal to 
    
    */
    if(){
      
    }
    /*
     to get other datatypes with scanner:
     .next() - to get a String
     .nextInt() - to get Int
     .nextDouble() - to get double
    
    */
    
    //output what user typed in
    System.out.println("Hello " + name);
    
    System.out.println("How old are you?");
      
    age = input.nextInt();
    
    System.out.println("you are " + age + " years old");
    
    System.out.println("What is your gpa?");      
    
    gpa = input.nextDouble();
    
    System.out.println("you have a " + gpa + " gpa");
      
  }//end main
  
}//end class