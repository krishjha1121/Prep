<div align = "center"> 
<h1 style = "color:orange"> 💻 Object Oriented Programming </h1>
</div>

- Object-oriented programming is a programming paradigm built on the concept of objects.## Importance:
- An approach to solve problems where all computations are carried out using objects
- Promotes code reuse through inheritance.
- Improves code organization and readability.
- Makes maintenance and scaling easier.
- Encapsulates data, increasing security and reducing complexity.
- Follow DRY (Don't Repeat Yourself) Principle.

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
    - Example :

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

- Output :

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
- Example :

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

- Class Level Modifiers (Top level classes)
    - public : accessible from anywhere.
    - default(if nothing specified) : accessible from the same package.
    - abstract : prohibits instantiation.
    - final :
        - prohibits child class creation.
        - Final access modifier is a modifier applicable to classes, methods, and variables. If we declare a parent class method as final then we can’t override that method in the child class because its implementation is final and if a class is declared as final we can’t extend the functionality of that class i.e we can’t create a child class for that class i.e inheritance is not possible for final classes.
        - Every method present inside the final class is always final by default but every variable present inside the final class need not be final.

- Class Level Modifiers (Nested classes)
    - Top level class modifiers + private + protected + static;
    - private : Can only be accessible within the same class.
    - protected : Accessible within the same package and also to subclass even outside of package.
    - static :
        - Static access modifier is an access modifier that is applicable for methods and variables but not for classes. We can not declare top-level class with a static modifier but we can declare the inner class as static (such types of inner classes are known as static nested classes). In the case of instance variable for every object, a separate copy will be created but in the case of static variable, a single copy will be created at class level and shared by every object of that class.

- Static keyword in java
    - The static keyword in Java is mainly used for memory management, allowing variables and methods to belong to the class itself rather than individual instances.
    - The static keyword belongs to the class rather than an instance of the class.
    - The static keyword is used for a constant variable or a method that is the same for every instance of a class.
    - Static methods cannot be overridden in subclasses because they belong to the class, not to an object.
    - Static members can not access non-static members.
    - Static members belong to the class, not to any specified object.

# Abstract (meaning not clear, incomplete, or partial)

- abstract method
- abstract class

# Abstract Method

- abstract method is a method that is declared in an abstract class but does not have an implementation.

```java
public abstract class Shape {
    public abstract double area();
}
```

# Abstract Class

- abstract class is a class that cannot be instantiated.
- abstract class can have abstract methods.first
- child class is responsible for implementing the all abstract methods.(compulsory to implement all the abstract methods);

```java
public abstract class Shape {
    public abstract double area();
    public abstract double perimeter();
}

public class Rectangle extends Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    public double area() {
        return length * width;
    }

    public double perimeter() {
        return 2 * (length + width);
    }
}
```

- Rectangle must implement both area() and perimeter() methods or else declare the Rectangle class as abstract.

# Table for visibility of access modifiers

| visibility                                | public | protected | default | private |
| ----------------------------------------- | ------ | --------- | ------- | ------- |
| within the same class                     | ✅     | ✅        | ✅      | ✅      |
| from child class of same package          | ✅     | ✅        | ✅      | ❎      |
| from non child class of same package      | ✅     | ✅        | ✅      | ❎      |
| from child class of different package     | ✅     | ✅        | ❎      | ❎      |
| from non child class of different package | ✅     | ❎        | ❎      | ❎      |

# Interface

an **interface** is a contract that defines a set of method signatures (and sometimes properties) that aclass must implement, but does not provide any implementation itself. Interfaces allowdifferent classesto guarantee they provide certain behaviors, enabling polymorphism and decoupling code from specific implementations.

# What is the difference between and interface and abstract class ?

An interface defines a contract: it specifies method signatures (and sometimes properties) that implementing classes must provide, but contains no implementation (except default methods in some languages like Java).

An abstract class can provide both method signatures (abstract methods) and concrete method implementations. It can also have fields and constructors.

Key differences:

- A class can implement multiple interfaces, but can inherit from only one abstract class (in most languages).
- Interfaces cannot have state (fields), while abstract classes can.
- Abstract classes are used for sharing code among related classes; interfaces are for defining capabilities.
- Example

```java
interface Animal {
    void makeSound(); /* All methods are always abstract and public */
    void run();
}

class Dog implements Animal {
    public void makeSound() { /* Public is Necessary here. */
        System.out.println("Woof!");
    }
    publi void run() {
        System.out.println("Running...");
    }
}
```

- Dog should always implement all the required methods of an interface.
- if Just in case Dog is not able to provide all the methods of an interface declare class Dog as abstract.

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
