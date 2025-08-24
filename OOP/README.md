<div align = "center"> 
  <h1 style = "color:orange"> 💻 Object Oriented Programming </h1>
  </div>

- Object-oriented programming is a programming paradigm built on the concept of objects.

> ## Importance:

- An approach to solve problems where all computations are carried out using objects
- Promotes code reuse through inheritance.
- Improves code organization and readability.
- Makes maintenance and scaling easier.
- Encapsulates data, increasing security and reducing complexity.
- Follow **DRY (Don't Repeat Yourself)** Principle.

<div align = "center">
    <h2 style = "color:orange"> Import Statements </h2>
</div>

- Import Statements are used to import classes, packages, and other resources into a program.
  <br>
- An Example of fully qualified name

```java
public class Main {
    public static void main(String[] args) {
        // Fully Qualified Name.
        java.util.ArrayList list = new java.util.ArrayList();
    }
}
```

- To use short name directly, use import statement

```java
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        // Short name.
        ArrayList list = new ArrayList();
    }
}
```

- Types of Import Statements :
    - Explicit Import Statements
        ```java
        //Recommended
        import java.util.ArrayList;
        public class Main {
            publis static void main(String args[]) {
                ArrayList list = new ArrayList();
            }
        }
        ```
    - Implicit Import Statements :
        ```java
        //Not Recommended
        import java.util.*;
        public class Main {
            public static void main(String args[]) {
                ArrayList list = new ArrayList();
            }
        }
        ```
- No need to import the packages that are inside java.lang packages. -> it will automatically get imoprted;

> Example :

```java
//String, Thread, Exception, StringBuffer are some of the classes that are present inside java.lang package.
public class Main {
    public static void main(String args[]) {
        String s = new String("RAJ ROY");
        Thread t= new Thread();
        Exception e = new Exception();
        StringBuffer sb = new StringBuffer("RAJ ROY");
        System.out.println(s);
    }
}
```

> Output :

```text
RAJ ROY
```

- All the classes that are present inside the current working directory will be automatically imported.

- we know we have java.util.regex.Pattern
    - Lets say we want to use the Pattern class then the import statement can be written as#️⃣
        ```java
         import java.util.regex.Pattern; //valid
         import java.util.regex.*; //valid
         import java.util.*; --> //not valid;
        ```

<div align = "center">
    <h2 style = "color:orange"> Package Statements </h2> </div>

- Package :
    - Group of related classes and interfaces.
- Package statement is used to group related classes and interfaces together.
- Package statements must be the first line of code in a java file other than comment lines.
- At most one package statements are allowed in a java file.
- Resolves naming conflicts.

> Example :

```java
package mypackage; // user-defined package
public class Hello {
    public void sayHi() {
        System.out.println("Hello from my package!");
    }
}
```

<div align = "center">
     <h2 style = "color:orange"> Class and Object </h2>
</div>

- Class → A blueprint or template that defines the properties (fields/variables) and behaviors (methods) of objects.
- Object → A real instance of a class that actually uses the defined properties and behaviors.
- Example :

```java
class Car { // class
    private String color;
    private int speed;
    public Car(String color, int speed) {
        this.color = color;
        this.speed = speed;
    }
    public void run() {
        System.out.println("Car is running");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Red", 100); //object of class Car
        myCar.run();
    }
}
```

- In the above example, Car is a class and myCar is an object of the Car class.
- The run() method is a behavior of the Car class and color & speed are the properties of the Car class.

<div align = "center"> 
    <h2 style = "color:orange">  Access Modifiers </h2>
</div>

- In Java, access modifiers are essential tools that define how the members of a class, like variables, methods, and even the class itself, can be accessed from other parts of our program.

> Class Level Modifiers (Top level classes)

- public : accessible from anywhere.
- default(if nothing specified) : accessible from the same package.
- abstract : prohibits instantiation.
- final :
    - prohibits child class creation.
    - Final access modifier is a modifier applicable to classes, methods, and variables. If we declare a parent class method as final then **we can’t override that method in the child class** because its implementation is final and **if a class is declared as final we can’t extend the functionality of that class** i.e we can’t create a child class for that class i.e inheritance is not possible for final classes.
    - **Every method present inside the final class is always final by default** but every variable present inside the final class need not be final.

> Class Level Modifiers (Nested classes)

- Top level class modifiers + private + protected + static;

> static :

- The static keyword in Java is mainly used for memory management, allowing variables and methods to belong to the **class itself rather than individual instances.**
- The static keyword belongs to the class rather than an instance of the class.
- The static keyword is used for a constant variable or a method that is the same for every instance of a class.
- We do not need to create objects of the class to use static methods.
- We can call static members using the class name directly.
- Static members belong to the class, not to any specified object.
- Static members can not access non-static members.
- Static methods **cannot be overridden** in subclasses because they belong to the class, not to an object.

> This example demonstrates that a static method can be called without creating an instance of the class.

```java
/* Java program to demonstrate that a static member */
/*  can be accessed before instantiating a class */
class Roy {
    // static method
    static void m1() {
        System.out.println("from m1");
    }
    public static void main(String[] args) {
          /* calling m1 without creating */
          /* any object of class Test */
           m1();
    }
}
```

> static block :

- If you need to do the computation in order to initialize your static variables, you can declare a static block that gets executed exactly once, when the class is first loaded.

> This example demonstrates the use of a static block to initialize static variables before the main method is executed.

```java
/* Java program to demonstrate use of static blocks */
class Roy {
    // static variable
    static int a = 10;
    static int b;

    // static block
    static {
        System.out.println("Static block initialized.");
        b = a * 4;
    }
    public static void main(String[] args) {
       System.out.println("from main");
       System.out.println("Value of a : "+a);
       System.out.println("Value of b : "+b);
    }
}
```

> static variables :

- When a variable is declared as static, then a single copy of the variable is created and shared among all objects at the class level. Static variables are, essentially, global variables. All instances of the class share the same static variable.
- Importance :
    - We can create static variables at the class level only.
    - static block and static variables are executed in the order they are present in a program.

> This example demonstrates that static variables are initialized by calling static methods before the static block is executed.

```java
/* Java program to demonstrate execution */
/* of static blocks and variables */
class Roy {
    // static variable
    static int a = m1();

    // static block
    static {
        System.out.println("Inside static block");
    }

    // static method
    static int m1() {
        System.out.println("from m1");
        return 20;
    }

    // static method(main !!)
    public static void main(String[] args) {
       System.out.println("Value of a : "+a);
       System.out.println("from main");
    }
}
```

> static methods :

- When a method is declared with the static keyword, it is known as the static method. The most common example of a static method is the main() method. As discussed above, Any static member can be accessed before any objects of its class are created, and without reference to any object. Methods declared as static have several restrictions:
- They can only directly call other static methods.
- They can only directly access static data.
- They cannot refer to this or super in any way.

> This example demonstrates the restriction that static methods cannot access instance variables, instance methods, or use super in a static context.

```java
/* Java program to demonstrate restriction on static methods */
class Roy {
    // static variable
    static int a = 10;
    // instance variable
    int b = 20;
    // static method
    static void m1() {
        a = 20;
        System.out.println("from m1");
         // Cannot make a static reference to the non-static field b
         b = 10; // compilation error
         // Cannot make a static reference to the
                 // non-static method m2() from the type Test
         m2();  // compilation error

         //  Cannot use super in a static context
         System.out.println(super.a); // compiler error
    }

    // instance method
    void m2() {
        System.out.println("from m2");
    }

    public static void main(String[] args) {
        // main method
    }
}
```

> Output :

```text
prog.java:18: error: non-static variable b cannot be referenced from a static context
         b = 10; // compilation error
         ^
prog.java:22: error: non-static method m2() cannot be referenced from a static context
         m2();  // compilation error
         ^
prog.java:25: error: non-static variable super cannot be referenced from a static context
         System.out.println(super.a); // compiler error
                            ^
prog.java:25: error: cannot find symbol
         System.out.println(super.a); // compiler error
                                 ^
  symbol: variable a
4 errors
```

> 🧠 **when to use static variables and methods ?**

- Use the static variable for the property that is common to all objects. For example, in class Student, all students share the same college name. Use static methods for changing static variables.

> This example demonstrates the use of static variables and methods to share data (like cllgName and counter) across all instances of a class.

```java
/* A java program to demonstrate use of static keyword with methods and variables */
class Student {
    String name;
    int rollNo;
    // static variable
    static String cllgName;
    // static counter to set unique roll no
    static int counter = 0;
    public Student(String name) {
        this.name = name;
        this.rollNo = setRollNo();
    }
    // getting unique rollNo
    // through static variable(counter)
    static int setRollNo() {
        counter++;
        return counter;
    }
    // static method
    static void setCllg(String name) { cllgName = name; }
    // instance method
    void getStudentInfo() {
        System.out.println("name : " + this.name);
        System.out.println("rollNo : " + this.rollNo);
        // accessing static variable
        System.out.println("cllgName : " + cllgName);
    }
}
// Driver class
public class StaticDemo {
    public static void main(String[] args) {
        // calling static method
        // without instantiating Student class
        Student.setCllg("XYZ");

        Student s1 = new Student("Geek1");
        Student s2 = new Student("Geek2");

        s1.getStudentInfo();
        s2.getStudentInfo();
    }
}
```

> Output :

```text
name : Geek1
rollNo : 1
cllgName : XYZ
name : Geek2
rollNo : 2
cllgName : XYZ
```

> ### Table for visibility of access modifiers

| visibility                                | public | protected | default | private |
| ----------------------------------------- | ------ | --------- | ------- | ------- |
| within the same class                     | ✅     | ✅        | ✅      | ✅      |
| from child class of same package          | ✅     | ✅        | ✅      | ❎      |
| from non child class of same package      | ✅     | ✅        | ✅      | ❎      |
| from child class of different package     | ✅     | ✅        | ❎      | ❎      |
| from non child class of different package | ✅     | ❎        | ❎      | ❎      |

<div align = "center">
    <h2 style = "color:orange">  static classes </h2>
</div>

- A class can be made static only if it is a nested class. We cannot declare a top-level class with a static modifier but can declare nested classes as static. Such types of classes are called Nested static classes.
- Nested static class doesn’t need a reference of Outer class. In this case, a static class cannot access non-static members of the Outer class.

> Example :

```java
/* A java program to demonstrate use of static keyword with Classes */
import java.io.*;
public class Roy {
    private static String str = "GeeksforGeeks";
    // Static class
    static class MyNestedClass {
        // non-static method
        public void disp(){
          System.out.println(str);
        }
    }
    public static void main(String args[]) {
        Geeks.MyNestedClass obj
            = new Geeks.MyNestedClass();
        obj.disp();
    }
}
```

> The table below demonstrates the difference between Static and Non-Static

| Static                                                          | Non-Static                                                              |
| --------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Static members have one copy shared across the class.           | Non-static members have a separate copy for each instance of the class. |
| Static members are accessed via the class name.                 | Non-static members are accessed via an object reference.                |
| Static members cannot be overridden.                            | Non-static members can be overridden in subclasses.                     |
| Static members cannot use `this` or `super` keyword.            | Non-static members can use `this` and `super` keyword.                  |
| Static members exist for the duration of the class's lifecycle. | Non-static members exist as long as the object they belong to is alive. |

> Advantages of static keyword

- Static members use the memory only once and this helps save memory when we have to deal with big programs.
- Static members provide fast access because static members belong to the class not to an object and that's why they can be access faster than regular member.
- We can access static members from anywhere, whether an object of the class has been created or not.
- We can use static final variables to create constant that stays the same throughout the program.

> Disadvantages of static keyword

- Static members can't be overridden or dynamically bound like instance members.
- Static methods and variables make unit testing difficult due to tight coupling.
- Static variables create a global state, which can lead to unwanted side effects across different parts of the program.
- Static variables stay in memory as long as the program runs, which might cause memory to be used longer than needed.
- Using too many static members can reduce the benefits of object-oriented programming, like hiding data and using inheritance.

<div align = "center"> <h2 style = "color:orange"> Abstract (Partial or Incomplete) </h2> </div>

- An abstract is a **Java modifier** applicable for classes and methods in Java but not for Variables

> ### Abstract Method

- Abstract method is a method that is declared in an abstract class but does not have an **implementation.**
- The abstract Method is used for creating blueprints for classes or interfaces.
- Here methods are defined but these methods don't provide the implementation.
- Abstract Methods can only be implemented using subclasses or classes that implement the interfaces.
- A subclass must override them to provide a method definition.

> ##### Rules :

- Any class that contains one or more abstract methods must also be declared abstract.
- If a class contains an abstract method it needs to be abstract and vice versa is not true.
- An abstract class may or may not contain abstract methods(java).
- If a non-abstract class extends an abstract class, then the class must implement all the abstract methods of the abstract class else the concrete class has to be declared as abstract as well.
- The following are various illegal combinations of other modifiers for methods with respect to abstract modifiers:
    - final
    - abstract native
    - abstract synchronized
    - abstract static
    - abstract private
    - abstract strictfp

> ##### Example :

```java
//Example 1
abstract class Shape {
    abstract double area(); // abstract method
    abstract double perimeter(); // abstract method
}
```

> ##### Example :

```java
//Example 2;
// Abstract class
abstract class Vehicle {
    // Abstract method (no body)
    abstract void start();
    // Normal method
    void fuel() {
        System.out.println("This vehicle needs fuel to run.");
    }
}
// Subclass 1
class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car starts with a key.");
    }
}
// Subclass 2
class Bike extends Vehicle {
    @Override
    void start() {
        System.out.println("Bike starts with a kick or button.");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        Vehicle v1 = new Car();   // Polymorphism
        v1.start();               // Car's implementation
        v1.fuel();

        Vehicle v2 = new Bike();  // Polymorphism
        v2.start();               // Bike's implementation
        v2.fuel();
    }
}
```

> ##### Output :

```text
Car starts with a key.
This vehicle needs fuel to run.
Bike starts with a kick or button.
This vehicle needs fuel to run.
```

> NOTE :

- Although abstract classes cannot be used to instantiate objects, they can be used to **create object references**, because Java’s approach to run-time polymorphism is implemented through the use of super-class references. Thus, it must be **possible to create a reference to an abstract class** so that it can be used to point to a subclass object.

> ### Abstract Class

- Abstract class is declared with the abstract keyword.
- Abstract class is a class that cannot be instantiated.
- Abstract class can have abstract methods as well as concrete methods.
- Child class is responsible for implementing the all abstract methods.(compulsory to implement all the abstract methods);

> ##### Example :

```java
import java.util.*; //Not recommended.
// Abstract class
abstract class Shape {
    String name;
    Shape(String name) {
        this.name = name;
    }
    // Abstract methods (must be implemented by subclasses)
    abstract double area();
    abstract double perimeter();
    // Concrete method (common to all shapes)
    void display() {
        System.out.println("Shape: " + name);
        System.out.println("Area: " + area());
        System.out.println("Perimeter: " + perimeter());
        System.out.println("----------------------");
    }
}
// Subclass 1: Circle
class Circle extends Shape {
    double radius;
    Circle(double radius) {
        super("Circle");
        this.radius = radius;
    }
    @Override
    double area() {
        return Math.PI * radius * radius;
    }
    @Override
    double perimeter() {
        return 2 * Math.PI * radius;
    }
}
// Subclass 2: Rectangle
class Rectangle extends Shape {
    double length, width;
    Rectangle(double length, double width) {
        super("Rectangle");
        this.length = length;
        this.width = width;
    }
    @Override
    double area() {
        return length * width;
    }
    @Override
    double perimeter() {
        return 2 * (length + width);
    }
}
// Subclass 3: Triangle
class Triangle extends Shape {
    double a, b, c;
    Triangle(double a, double b, double c) {
        super("Triangle");
        this.a = a;
        this.b = b;
        this.c = c;
    }
    @Override
    double area() {
        double s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
    @Override
    double perimeter() {
        return a + b + c;
    }
}
// Main class
public class Main {
    public static void main(String[] args) {
        Shape s1 = new Circle(5);
        Shape s2 = new Rectangle(4, 6);
        Shape s3 = new Triangle(3, 4, 5);
        // Polymorphism: common interface, different implementations
        s1.display();
        s2.display();
        s3.display();
    }
}
```

> Output :

```text
Shape: Circle
Area: 78.53981633974483
Perimeter: 31.41592653589793
----------------------
Shape: Rectangle
Area: 24.0
Perimeter: 20.0
----------------------
Shape: Triangle
Area: 6.0
Perimeter: 12.0
----------------------
```

> ##### important observations about abstract classes

- An instance of an abstract class cannot be created.
- Constructors are allowed.
- We can have an abstract class without any abstract method.
- There can be a **final method** in abstract class **but any abstract method in class(abstract class) can not be declared as final.**
- We can define **static methods** in an abstract class.
- We can use the abstract keyword for declaring top-level classes (Outer class) as well as inner classes as abstract.
- If a class contains at least one abstract method then compulsory should declare a class as abstract
- If the Child class is unable to provide implementation to all abstract methods of the Parent class then we should declare that Child class as abstract so that the next level Child class should provide implementation to the remaining abstract method

<div align = "center"> <h2 style = "color:orange"> Interfaces </h2> </div>

- Any contract between client and service provider.
- An **interface** is a contract that defines a set of method signatures (and sometimes properties) that a class must implement, but does not provide any implementation itself.
- Interfaces allow different classes to guarantee they provide certain behaviors, enabling polymorphism and decoupling code from specific implementations.

> #### Key Properties of Interfaces :

- The interface in Java is a mechanism to achieve **abstraction and multiple inheritance**.
- By default, variables in an interface are public, static and final.
- In other words, interfaces primarily define methods that other classes must implement.

> ##### Example :

```java
// Payment interface (contract)
interface Payment {
    void pay(double amount);   // abstract method
}
// Implementation 1: Credit Card Payment
class CreditCardPayment implements Payment {
    private String cardNumber;
    CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }
    @Override
    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using Credit Card: " + cardNumber);
    }
}
// Implementation 2: PayPal Payment
class PayPalPayment implements Payment {
    private String email;
    PayPalPayment(String email) {
        this.email = email;
    }
    @Override
    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using PayPal account: " + email);
    }
}
// Implementation 3: UPI Payment
class UPIPayment implements Payment {
    private String upiId;
    UPIPayment(String upiId) {
        this.upiId = upiId;
    }
    @Override
    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using UPI ID: " + upiId);
    }
}
public class Main {
    public static void main(String[] args) {
        Payment p1 = new CreditCardPayment("1234-5678-9876-5432");
        Payment p2 = new PayPalPayment("user@example.com");
        Payment p3 = new UPIPayment("raj@upi");

        p1.pay(1500.00);
        p2.pay(299.99);
        p3.pay(500.00);
    }
}
```

> Output :

```text
Paid ₹1500.0 using Credit Card: 1234-5678-9876-5432
Paid ₹299.99 using PayPal account: user@example.com
Paid ₹500.0 using UPI ID: raj@upi
```

> Relationship between Interfaces and Classes :

- A class can extend another class and similarly, an interface can extend another interface. However, only a class can implement an interface and the reverse (an interface implementing a class) is not allowed.

<div align = "center">
    
```mermaid
flowchart LR
    %% First: class extends class
    A2[class] -->|extends| A1[class]

    %% Second: class implements interface
    B2[class] -.->|implements| B1[interface]

    %% Third: interface extends interface
    C2[interface] -->|extends| C1[interface]

````

</div>


> 🧠 **What is the difference between and interface and abstract class ?**

- An interface defines a contract: it specifies method signatures (and sometimes properties) that implementing classes must provide, but contains no implementation (except default methods in some languages like Java).

- An abstract class can provide both method signatures (abstract methods) and concrete method implementations. It can also have fields and constructors.

> Key differences:

- A class can implement multiple interfaces, but can inherit from only one abstract class (in most languages).
- Interfaces cannot have state (fields), while abstract classes can.
- Abstract classes are used for sharing code among related classes; interfaces are for defining capabilities.
- Example

> 🧠 **When to Use Class and Interface ?**


> ##### Use Class when:

- Use a class when you need to represent a real-world entity with attributes (fields) and behaviors (methods).
- Use a class when you need to create objects that hold state and perform actions
- Classes are used for defining templates for objects with specific functionality and properties.

> ##### Use  Interface when:
- Use an interface when you need to define a contract for behavior that multiple classes can implement.
- Interface is ideal for achieving abstraction and multiple inheritance.


# Pillars of OOPS

- Abstraction : It is the process of hiding the implementation and exposing only the services.
- Encapsulation : It is the process of hiding the internal details of an object and exposing only the external interface.
- Inheritance : It is the process of creating a new class from an existing class.
- Polymorphism : It is the process of using a single interface to represent different types.

# Types of Inheritance

- Single Inheritance
    - Example 📳
        ```java
        class A {}
        class B extends A {}
        ```
- Multiple Inheritance
    - Example 📳
        ```java
        class A {}
        class B {}
        class C extends A, B {} // Not allowed in Java.
        ```
- Multilevel Inheritance
    - Example 📳
        ```java
        class A {}
        class B extends A {}
        class C extends B {}
        ```
- Hierarchical Inheritance
    - Example 📳
        ```java
        class A {}
        class B extends A {}
        class C extends A {}
        class D extends A {}
        ```

- Hybrid Interitance (Combination of two or more type of inheritance, not allowed in java)
    - Example 📳
        ```java
        class A {}
        class B extends A {}
        class C extends B {}
        class D extends B, C {}
        ```
- Multiple Inhertiance can be achieved in java by using concept of interface.
    - Example 📳
        ```java
        interface A { public void m1(); }
        interface B {}
        class C implements A, B { public void m1(){}}
        ```

- Java does not support multiple inhertiance because of ambiguity problem.
    - Example 📳
        ```java
        class A { public void m1(){} }
        class B { public void m1(){} }
        class C extends A, B {
            //call m1 --> which m1 method to call ?
        }
        ```
- Java also does not support cyclic inhertiance.
    - Example 📳

        ```java
        class A extends A{} ❎

        class A extends B {}
        class B extends A {} : ❎
        ```

# Polymorphism

- Polymorphism is the ability of an object to take on many forms.

- Method Signature -->
    - Example 📳
        - name_of_method(type_of_parameter1, type_of_parameter2,..., type_of_parametern)
        - return type is not cosidered to be a part of method signature in java, but it is considered in c++

- (Automatic promotion in overloading(static polymorphism)) check promotion table for overloading concept , char --> int --> long --> float --> double

- Method overriding(dynamic Polymorphism)
    - Example 📳

        ```java
        class A {
            public void m1() {}
        }
        class B extends A {
            public void m1() { System.out.println("B"); }
        }
        ```

        - here child class B was not happy with the method implementation of parent class A, so it overrides the method.

- Rules of method overriding (Not a easy concept)
    - Method signature must be same.
    - Return may not be same but need to be covariant. (Object-string) (string-object --> not allowed)

-
````
