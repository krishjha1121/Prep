# Single Responsibility Principle (SRP)

## 🎯 Definition

> "A class should have only one reason to change."
>
> _- Robert C. Martin_

The Single Responsibility Principle states that every class should have **responsibility over a single part of the functionality** provided by the software, and that responsibility should be **entirely encapsulated** by the class.

## 🤔 What Does "Single Responsibility" Mean?

A class has a single responsibility if it has **only one reason to change**. If you can think of more than one motive for changing a class, then that class has more than one responsibility.

### Key Concepts

```mermaid
mindmap
  root((SRP))
    Cohesion
      Related functionality
      Focused purpose
      Clear boundaries
    Coupling
      Reduced dependencies
      Isolated changes
      Easier testing
    Maintainability
      Single reason to change
      Clear responsibility
      Simplified debugging
```

## ❌ SRP Violation: The "God Class"

Let's look at a classic example that violates SRP:

```java
// ❌ VIOLATION: This class has multiple responsibilities
public class Employee {
    private String name;
    private String employeeId;
    private double salary;
    private String department;

    // Constructor
    public Employee(String name, String employeeId, double salary, String department) {
        this.name = name;
        this.employeeId = employeeId;
        this.salary = salary;
        this.department = department;
    }

    // Responsibility 1: Data management
    public void setName(String name) { this.name = name; }
    public String getName() { return name; }
    public void setSalary(double salary) { this.salary = salary; }
    public double getSalary() { return salary; }

    // Responsibility 2: Salary calculations
    public double calculateTax() {
        return salary * 0.25;
    }

    public double calculateBonus() {
        return salary * 0.1;
    }

    // Responsibility 3: Database operations
    public void saveToDatabase() {
        // Database connection and save logic
        System.out.println("Saving employee to database...");
    }

    public void deleteFromDatabase() {
        // Database connection and delete logic
        System.out.println("Deleting employee from database...");
    }

    // Responsibility 4: Report generation
    public void generatePayslip() {
        System.out.println("=== PAYSLIP ===");
        System.out.println("Employee: " + name);
        System.out.println("Salary: $" + salary);
        System.out.println("Tax: $" + calculateTax());
        System.out.println("Bonus: $" + calculateBonus());
    }

    // Responsibility 5: Email notifications
    public void sendEmail(String message) {
        System.out.println("Sending email to " + name + ": " + message);
    }
}
```

### Problems with This Design

1. **Multiple Reasons to Change**:
    - Tax calculation rules change
    - Database schema changes
    - Email system changes
    - Report format changes

2. **High Coupling**: Changes in one area affect others
3. **Difficult Testing**: Can't test parts in isolation
4. **Code Duplication**: Similar logic scattered across methods
5. **Violation of Single Responsibility**: Class does too many things

## ✅ SRP Solution: Separated Responsibilities

Let's refactor this into multiple classes, each with a single responsibility:

### 1. Employee Data Class

```java
// ✅ GOOD: Only handles employee data
public class Employee {
    private String name;
    private String employeeId;
    private double salary;
    private String department;

    public Employee(String name, String employeeId, double salary, String department) {
        this.name = name;
        this.employeeId = employeeId;
        this.salary = salary;
        this.department = department;
    }

    // Only getters and setters - data management only
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmployeeId() { return employeeId; }
    public void setEmployeeId(String employeeId) { this.employeeId = employeeId; }

    public double getSalary() { return salary; }
    public void setSalary(double salary) { this.salary = salary; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }
}
```

### 2. Salary Calculator Class

```java
// ✅ GOOD: Only handles salary calculations
public class SalaryCalculator {
    private static final double TAX_RATE = 0.25;
    private static final double BONUS_RATE = 0.1;

    public double calculateTax(Employee employee) {
        return employee.getSalary() * TAX_RATE;
    }

    public double calculateBonus(Employee employee) {
        return employee.getSalary() * BONUS_RATE;
    }

    public double calculateNetSalary(Employee employee) {
        return employee.getSalary() - calculateTax(employee) + calculateBonus(employee);
    }
}
```

### 3. Employee Repository Class

```java
// ✅ GOOD: Only handles database operations
public class EmployeeRepository {
    private DatabaseConnection connection;

    public EmployeeRepository(DatabaseConnection connection) {
        this.connection = connection;
    }

    public void save(Employee employee) {
        // Database save logic
        System.out.println("Saving employee " + employee.getName() + " to database...");
    }

    public void delete(String employeeId) {
        // Database delete logic
        System.out.println("Deleting employee " + employeeId + " from database...");
    }

    public Employee findById(String employeeId) {
        // Database query logic
        System.out.println("Finding employee " + employeeId + " in database...");
        return null; // Simplified for example
    }
}
```

### 4. Payslip Generator Class

```java
// ✅ GOOD: Only handles report generation
public class PayslipGenerator {
    private SalaryCalculator calculator;

    public PayslipGenerator(SalaryCalculator calculator) {
        this.calculator = calculator;
    }

    public void generatePayslip(Employee employee) {
        System.out.println("=== PAYSLIP ===");
        System.out.println("Employee: " + employee.getName());
        System.out.println("ID: " + employee.getEmployeeId());
        System.out.println("Department: " + employee.getDepartment());
        System.out.println("Gross Salary: $" + employee.getSalary());
        System.out.println("Tax: $" + calculator.calculateTax(employee));
        System.out.println("Bonus: $" + calculator.calculateBonus(employee));
        System.out.println("Net Salary: $" + calculator.calculateNetSalary(employee));
        System.out.println("================");
    }

    public String generatePayslipAsString(Employee employee) {
        StringBuilder sb = new StringBuilder();
        sb.append("Payslip for: ").append(employee.getName()).append("\n");
        sb.append("Net Salary: $").append(calculator.calculateNetSalary(employee));
        return sb.toString();
    }
}
```

### 5. Email Service Class

```java
// ✅ GOOD: Only handles email operations
public class EmailService {
    private String smtpServer;
    private int port;

    public EmailService(String smtpServer, int port) {
        this.smtpServer = smtpServer;
        this.port = port;
    }

    public void sendEmail(String recipientEmail, String subject, String message) {
        // Email sending logic
        System.out.println("Sending email to: " + recipientEmail);
        System.out.println("Subject: " + subject);
        System.out.println("Message: " + message);
    }

    public void sendPayslipEmail(Employee employee, String payslipContent) {
        String subject = "Payslip for " + employee.getName();
        sendEmail(employee.getName() + "@company.com", subject, payslipContent);
    }
}
```

## 🏗️ Class Diagram After SRP

```mermaid
%%{init: {'theme': 'default'}}%%
classDiagram
    class Employee {
        -String name
        -String employeeId
        -double salary
        -String department
        +getName()
        +setName(String)
        +getSalary()
        +setSalary(double)
    }

    class SalaryCalculator {
        -double TAX_RATE
        -double BONUS_RATE
        +calculateTax(Employee)
        +calculateBonus(Employee)
        +calculateNetSalary(Employee)
    }

    class EmployeeRepository {
        -DatabaseConnection connection
        +save(Employee)
        +delete(String)
        +findById(String)
    }

    class PayslipGenerator {
        -SalaryCalculator calculator
        +generatePayslip(Employee)
        +generatePayslipAsString(Employee)
    }

    class EmailService {
        -String smtpServer
        -int port
        +sendEmail(String, String, String)
        +sendPayslipEmail(Employee, String)
    }

    PayslipGenerator --> SalaryCalculator
    EmailService ..> Employee
    PayslipGenerator ..> Employee
    SalaryCalculator ..> Employee
    EmployeeRepository ..> Employee
```

## 🎯 Using the Refactored Classes

```java
public class EmployeeManagementSystem {
    public static void main(String[] args) {
        // Create dependencies
        SalaryCalculator calculator = new SalaryCalculator();
        EmployeeRepository repository = new EmployeeRepository(new DatabaseConnection());
        PayslipGenerator payslipGenerator = new PayslipGenerator(calculator);
        EmailService emailService = new EmailService("smtp.company.com", 587);

        // Create employee
        Employee employee = new Employee("John Doe", "EMP001", 50000, "Engineering");

        // Save to database
        repository.save(employee);

        // Generate payslip
        payslipGenerator.generatePayslip(employee);
        String payslipContent = payslipGenerator.generatePayslipAsString(employee);

        // Send payslip via email
        emailService.sendPayslipEmail(employee, payslipContent);
    }
}
```

## 🎨 More SRP Examples

### Example 1: User Authentication

#### ❌ Violation

```java
public class UserManager {
    public boolean validateUser(String username, String password) { ... }
    public void sendPasswordResetEmail(String email) { ... }
    public void logUserActivity(String username, String activity) { ... }
    public void saveUserToDatabase(User user) { ... }
    public User getUserFromDatabase(String username) { ... }
}
```

#### ✅ Solution

```java
public class AuthenticationService {
    public boolean validateUser(String username, String password) { ... }
}

public class EmailService {
    public void sendPasswordResetEmail(String email) { ... }
}

public class ActivityLogger {
    public void logUserActivity(String username, String activity) { ... }
}

public class UserRepository {
    public void saveUser(User user) { ... }
    public User getUser(String username) { ... }
}
```

### Example 2: Order Processing

#### ❌ Violation

```java
public class Order {
    private List<OrderItem> items;

    public void addItem(OrderItem item) { ... }
    public double calculateTotal() { ... }
    public double calculateTax() { ... }
    public void saveToDatabase() { ... }
    public void sendConfirmationEmail() { ... }
    public void updateInventory() { ... }
}
```

#### ✅ Solution

```java
public class Order {
    private List<OrderItem> items;
    public void addItem(OrderItem item) { ... }
    // Only order data management
}

public class OrderCalculator {
    public double calculateTotal(Order order) { ... }
    public double calculateTax(Order order) { ... }
}

public class OrderRepository {
    public void save(Order order) { ... }
}

public class OrderNotificationService {
    public void sendConfirmationEmail(Order order) { ... }
}

public class InventoryService {
    public void updateInventory(Order order) { ... }
}
```

## 🔍 How to Identify SRP Violations

### Questions to Ask

1. **Can I describe the class responsibility in a single sentence without using "and" or "or"?**
2. **How many reasons can I think of for changing this class?**
3. **Does this class have methods that operate on different sets of data?**
4. **Would different stakeholders want to change different parts of this class?**

### Warning Signs

- ❌ Class names with "Manager", "Handler", "Controller", "Util"
- ❌ Methods that don't use instance variables
- ❌ Large classes (> 200-300 lines)
- ❌ Many import statements
- ❌ Methods that belong to different conceptual groups

## 🏆 Benefits of Following SRP

### 1. **Easier Maintenance**

```java
// If tax rules change, only SalaryCalculator needs to change
public class SalaryCalculator {
    public double calculateTax(Employee employee) {
        // Easy to modify tax logic without affecting other classes
        return employee.getSalary() * getCurrentTaxRate();
    }
}
```

### 2. **Better Testability**

```java
@Test
public void testTaxCalculation() {
    SalaryCalculator calculator = new SalaryCalculator();
    Employee employee = new Employee("John", "001", 50000, "IT");

    double tax = calculator.calculateTax(employee);

    assertEquals(12500.0, tax, 0.01);
}
```

### 3. **Improved Reusability**

```java
// EmailService can be reused for different purposes
EmailService emailService = new EmailService("smtp.server.com", 587);
emailService.sendEmail("user@example.com", "Welcome", "Welcome message");
emailService.sendEmail("admin@example.com", "Alert", "System alert");
```

### 4. **Reduced Coupling**

- Changes in one class don't affect others
- Classes can be developed and tested independently
- Easier to understand and debug

## 🎯 Common Misconceptions

### ❌ "One Method Per Class"

SRP doesn't mean one method per class. A class can have multiple methods if they all serve the same responsibility.

```java
// ✅ GOOD: Multiple methods, single responsibility (string manipulation)
public class StringFormatter {
    public String toUpperCase(String input) { ... }
    public String toLowerCase(String input) { ... }
    public String capitalize(String input) { ... }
    public String removeSpaces(String input) { ... }
}
```

### ❌ "Avoid All Dependencies"

SRP doesn't mean classes can't depend on each other. Dependencies are fine if they support the single responsibility.

```java
// ✅ GOOD: OrderService depends on other services but has single responsibility
public class OrderService {
    private PaymentProcessor paymentProcessor;
    private InventoryService inventoryService;

    public void processOrder(Order order) {
        // Single responsibility: orchestrating order processing
    }
}
```

## 🛠️ Refactoring to SRP

### Step-by-Step Process

1. **Identify Responsibilities**: List all things the class does
2. **Group Related Methods**: Find methods that work together
3. **Extract Classes**: Create new classes for each responsibility
4. **Define Interfaces**: Create contracts between classes
5. **Update Dependencies**: Inject dependencies where needed
6. **Test**: Ensure functionality is preserved

### Example Refactoring Process

```java
// Before: Mixed responsibilities
public class BookService {
    public void addBook(Book book) { ... }           // Data management
    public List<Book> searchBooks(String query) { ... } // Search logic
    public void sendNotification(String message) { ... } // Communication
    public void generateReport() { ... }              // Reporting
}

// After: Separated responsibilities
public class BookRepository {
    public void save(Book book) { ... }
    public List<Book> findByQuery(String query) { ... }
}

public class NotificationService {
    public void sendNotification(String message) { ... }
}

public class ReportGenerator {
    public void generateBookReport() { ... }
}

public class BookService {
    private BookRepository repository;
    private NotificationService notificationService;

    // Orchestrates operations - single responsibility
    public void addBook(Book book) {
        repository.save(book);
        notificationService.sendNotification("Book added: " + book.getTitle());
    }
}
```

## 🎓 Practice Exercise

### Exercise: Refactor the Violation

Here's a class that violates SRP. Can you refactor it?

```java
public class StudentManager {
    private List<Student> students = new ArrayList<>();

    // Student management
    public void addStudent(Student student) { ... }
    public void removeStudent(String studentId) { ... }
    public Student findStudent(String studentId) { ... }

    // Grade calculation
    public double calculateGPA(String studentId) { ... }
    public String getGradeLevel(double gpa) { ... }

    // File operations
    public void saveToFile(String filename) { ... }
    public void loadFromFile(String filename) { ... }

    // Email notifications
    public void sendGradeReport(String studentId) { ... }
    public void sendWelcomeEmail(Student student) { ... }

    // Report generation
    public void generateClassReport() { ... }
    public void generateStudentTranscript(String studentId) { ... }
}
```

### Solution Approach

1. Create `StudentRepository` for data management
2. Create `GradeCalculator` for grade-related calculations
3. Create `FileManager` for file operations
4. Create `EmailService` for notifications
5. Create `ReportGenerator` for reports
6. Create `StudentService` to orchestrate operations

## 📚 Summary

The Single Responsibility Principle is about creating **focused, cohesive classes** that have **one clear purpose**. By following SRP:

- ✅ **Easier to maintain**: Changes are localized
- ✅ **Better testability**: Isolated testing of functionality
- ✅ **Improved reusability**: Focused classes can be reused
- ✅ **Reduced coupling**: Classes are less dependent on each other
- ✅ **Clearer code**: Each class has a clear, single purpose

Remember: **A class should have only one reason to change!**

---
