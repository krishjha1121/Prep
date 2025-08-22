# Object Oriented Programming #️⃣:

Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior. OOP organizes code into reusable, modular components.

## Importance:

- Promotes code reuse through inheritance.
- Improves code organization and readability.
- Makes maintenance and scaling easier.
- Encapsulates data, increasing security and reducing complexity.

# Import Statements #️⃣

- Import Statements are used to import classes, packages, and other resources into a program.
- java.util.ArrayList list = new java.util.ArrayList(); -> Fully Qualified Name.;
- To use short name directly, use import statement imoprt java.util.ArrayList; -> ArrayList list = new ArrayList();
- Two Types of Import Statements :
    - Explicit Import Statements : import java.util.ArrayList; --> Recommended;
    - Implicit Import Statements : import java.util.\*;
- No need to import the packages that are inside java.lang packages. -> it will automatically get imoprted;
    - Example : String, Thread, Exception, StringBuffer;
    - String s = new String("RAJ ROY") --> import statement not required;
    - Thread t= new Thread(); --> import statement not required;
    - Exception e = new Exception(); --> import statement not required;
    - StringBuffer sb = new StringBuffer("RAJ ROY"); --> import statement not required;
    - All the classes that are present inside the current working directory will be automatically imported.
- we know we have java.util.regex.Pattern
    - Lets say we want to use the Pattern class then the import statement can be written as#️⃣
        - import java.util.regex.Pattern;
        - import java.util.regex;
        - import java.util.\*; --> Not allowed;

# Package Statements

- package -> Group of related classes and interfaces.
- package statement is used to group related classes and interfaces together.
- package statements must be the first line of code in a java file other than comment lines.
- At most one package statements are allowed.
- Resolves naming conflicts.

# Class Level Modifiers (Top level classes)

- used to specify the access level or behaviour of a class or interface.
- public -> accessible from anywhere.
- <defalut> nothing -> accessible from the same package.
- abstract -> prohibits instantiation.
- final -> prohibits child class creation.

# Class Level Modifiers (Nested classes)

- Top level class modifiers + private + protected + static;

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
