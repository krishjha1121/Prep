# Open/Closed Principle (OCP)

## 🎯 Definition

> "Software entities (classes, modules, functions, etc.) should be **open for extension** but **closed for modification**."
>
> _- Bertrand Meyer_

The Open/Closed Principle states that you should be able to **extend the behavior** of a system **without modifying** its existing code. This is achieved through **abstraction** and **polymorphism**.

## 🤔 What Does "Open/Closed" Mean?

- **Open for Extension**: You can add new functionality and behaviors
- **Closed for Modification**: Existing code should not be changed when adding new features

### Key Concepts

```mermaid
mindmap
  root((OCP))
    Extension
      New features
      Plugin architecture
      Polymorphism
    Abstraction
      Interfaces
      Abstract classes
      Contracts
    Benefits
      Stability
      Flexibility
      Maintainability
```

## ❌ OCP Violation: Modification Required

Let's look at a classic example that violates OCP:

```java
// ❌ VIOLATION: Need to modify existing code for new features
public class DiscountCalculator {
    public double calculateDiscount(String customerType, double amount) {
        if (customerType.equals("REGULAR")) {
            return amount * 0.05; // 5% discount
        } else if (customerType.equals("PREMIUM")) {
            return amount * 0.10; // 10% discount
        } else if (customerType.equals("VIP")) {
            return amount * 0.15; // 15% discount
        } else if (customerType.equals("GOLD")) {  // ❌ NEW: Had to modify existing code
            return amount * 0.20; // 20% discount
        } else if (customerType.equals("PLATINUM")) { // ❌ NEW: More modifications
            return amount * 0.25; // 25% discount
        }
        return 0;
    }
}
```

### Problems with This Design

1. **Modification Required**: Every new customer type requires changing existing code
2. **Risk of Bugs**: Modifying existing code can introduce bugs
3. **Violation of Single Responsibility**: The class has to know about all customer types
4. **Hard to Test**: Need to retest all existing functionality when adding new types
5. **Tight Coupling**: Calculator is tightly coupled to specific customer types

## ✅ OCP Solution: Extension Without Modification

Let's refactor using abstraction and polymorphism:

### 1. Create Discount Strategy Interface

```java
// ✅ GOOD: Abstract interface for discount calculation
public interface DiscountStrategy {
    double calculateDiscount(double amount);
    String getCustomerType();
}
```

### 2. Implement Concrete Strategies

```java
// ✅ GOOD: Regular customer discount strategy
public class RegularCustomerDiscount implements DiscountStrategy {
    @Override
    public double calculateDiscount(double amount) {
        return amount * 0.05; // 5% discount
    }

    @Override
    public String getCustomerType() {
        return "REGULAR";
    }
}

// ✅ GOOD: Premium customer discount strategy
public class PremiumCustomerDiscount implements DiscountStrategy {
    @Override
    public double calculateDiscount(double amount) {
        return amount * 0.10; // 10% discount
    }

    @Override
    public String getCustomerType() {
        return "PREMIUM";
    }
}

// ✅ GOOD: VIP customer discount strategy
public class VipCustomerDiscount implements DiscountStrategy {
    @Override
    public double calculateDiscount(double amount) {
        return amount * 0.15; // 15% discount
    }

    @Override
    public String getCustomerType() {
        return "VIP";
    }
}
```

### 3. Context Class Using Strategy

```java
// ✅ GOOD: Calculator that works with any discount strategy
public class DiscountCalculator {
    private Map<String, DiscountStrategy> strategies;

    public DiscountCalculator() {
        this.strategies = new HashMap<>();
        // Register default strategies
        registerStrategy(new RegularCustomerDiscount());
        registerStrategy(new PremiumCustomerDiscount());
        registerStrategy(new VipCustomerDiscount());
    }

    public void registerStrategy(DiscountStrategy strategy) {
        strategies.put(strategy.getCustomerType(), strategy);
    }

    public double calculateDiscount(String customerType, double amount) {
        DiscountStrategy strategy = strategies.get(customerType);
        if (strategy == null) {
            throw new IllegalArgumentException("Unknown customer type: " + customerType);
        }
        return strategy.calculateDiscount(amount);
    }

    public Set<String> getSupportedCustomerTypes() {
        return strategies.keySet();
    }
}
```

## 🚀 Adding New Features Without Modification

Now we can add new customer types **without modifying existing code**:

```java
// ✅ NEW: Gold customer discount - NO modification to existing code needed!
public class GoldCustomerDiscount implements DiscountStrategy {
    @Override
    public double calculateDiscount(double amount) {
        return amount * 0.20; // 20% discount
    }

    @Override
    public String getCustomerType() {
        return "GOLD";
    }
}

// ✅ NEW: Platinum customer with complex logic - still no modification needed!
public class PlatinumCustomerDiscount implements DiscountStrategy {
    @Override
    public double calculateDiscount(double amount) {
        // Complex discount logic
        if (amount > 10000) {
            return amount * 0.30; // 30% for large purchases
        } else if (amount > 5000) {
            return amount * 0.25; // 25% for medium purchases
        }
        return amount * 0.20; // 20% base discount
    }

    @Override
    public String getCustomerType() {
        return "PLATINUM";
    }
}

// ✅ NEW: Corporate customer with seasonal promotions
public class CorporateCustomerDiscount implements DiscountStrategy {
    private boolean isHolidaySeason;

    public CorporateCustomerDiscount(boolean isHolidaySeason) {
        this.isHolidaySeason = isHolidaySeason;
    }

    @Override
    public double calculateDiscount(double amount) {
        double baseDiscount = amount * 0.18; // 18% base
        return isHolidaySeason ? baseDiscount * 1.5 : baseDiscount;
    }

    @Override
    public String getCustomerType() {
        return "CORPORATE";
    }
}
```

## 🏗️ Class Diagram After OCP

```mermaid
%%{init: {'theme': 'default', 'themeVariables': { 'fontSize': '20px', 'lineHeight': '24px', 'nodeSpacing': 50, 'rankSpacing': 80 }}}%%
classDiagram
    class DiscountStrategy {
        <<interface>>
        +calculateDiscount(amount: double) double
        +getCustomerType() String
    }

    class DiscountCalculator {
        -strategies : Map<String, DiscountStrategy>
        +registerStrategy(strategy: DiscountStrategy)
        +calculateDiscount(customerType: String, amount: double) double
        +getSupportedCustomerTypes() Set<String>
    }

    class RegularCustomerDiscount {
        +calculateDiscount(amount: double) double
        +getCustomerType() String
    }

    class PremiumCustomerDiscount {
        +calculateDiscount(amount: double) double
        +getCustomerType() String
    }

    class VipCustomerDiscount {
        +calculateDiscount(amount: double) double
        +getCustomerType() String
    }

    class GoldCustomerDiscount {
        +calculateDiscount(amount: double) double
        +getCustomerType() String
    }

    class PlatinumCustomerDiscount {
        +calculateDiscount(amount: double) double
        +getCustomerType() String
    }

    DiscountCalculator --> DiscountStrategy
    RegularCustomerDiscount ..|> DiscountStrategy
    PremiumCustomerDiscount ..|> DiscountStrategy
    VipCustomerDiscount ..|> DiscountStrategy
    GoldCustomerDiscount ..|> DiscountStrategy
    PlatinumCustomerDiscount ..|> DiscountStrategy
```

## 🎯 Using the OCP Solution

```java
public class ECommerceSystem {
    public static void main(String[] args) {
        DiscountCalculator calculator = new DiscountCalculator();

        // Add new strategies without modifying existing code
        calculator.registerStrategy(new GoldCustomerDiscount());
        calculator.registerStrategy(new PlatinumCustomerDiscount());
        calculator.registerStrategy(new CorporateCustomerDiscount(true)); // Holiday season

        // Use the calculator
        double amount = 1000.0;

        System.out.println("Regular: $" + calculator.calculateDiscount("REGULAR", amount));
        System.out.println("Premium: $" + calculator.calculateDiscount("PREMIUM", amount));
        System.out.println("VIP: $" + calculator.calculateDiscount("VIP", amount));
        System.out.println("Gold: $" + calculator.calculateDiscount("GOLD", amount));
        System.out.println("Platinum: $" + calculator.calculateDiscount("PLATINUM", amount));
        System.out.println("Corporate: $" + calculator.calculateDiscount("CORPORATE", amount));

        System.out.println("\nSupported customer types: " + calculator.getSupportedCustomerTypes());
    }
}
```

## 🎨 More OCP Examples

### Example 1: Shape Area Calculator

#### ❌ Violation

```java
public class AreaCalculator {
    public double calculateArea(Object shape) {
        if (shape instanceof Circle) {
            Circle circle = (Circle) shape;
            return Math.PI * circle.getRadius() * circle.getRadius();
        } else if (shape instanceof Rectangle) {
            Rectangle rectangle = (Rectangle) shape;
            return rectangle.getWidth() * rectangle.getHeight();
        } else if (shape instanceof Triangle) { // ❌ NEW: Had to modify
            Triangle triangle = (Triangle) shape;
            return 0.5 * triangle.getBase() * triangle.getHeight();
        }
        return 0;
    }
}
```

#### ✅ Solution

```java
// Abstract shape interface
public interface Shape {
    double calculateArea();
}

// Concrete implementations
public class Circle implements Shape {
    private double radius;

    public Circle(double radius) { this.radius = radius; }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

public class Rectangle implements Shape {
    private double width, height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public double calculateArea() {
        return width * height;
    }
}

// ✅ NEW: Can add new shapes without modifying existing code
public class Triangle implements Shape {
    private double base, height;

    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    @Override
    public double calculateArea() {
        return 0.5 * base * height;
    }
}

// Calculator that works with any shape
public class AreaCalculator {
    public double calculateTotalArea(List<Shape> shapes) {
        return shapes.stream()
                    .mapToDouble(Shape::calculateArea)
                    .sum();
    }
}
```

### Example 2: Payment Processing

#### ❌ Violation

```java
public class PaymentProcessor {
    public void processPayment(String paymentType, double amount) {
        if (paymentType.equals("CREDIT_CARD")) {
            // Credit card processing logic
            System.out.println("Processing credit card payment: $" + amount);
        } else if (paymentType.equals("PAYPAL")) {
            // PayPal processing logic
            System.out.println("Processing PayPal payment: $" + amount);
        } else if (paymentType.equals("CRYPTO")) { // ❌ NEW: Modification required
            // Cryptocurrency processing logic
            System.out.println("Processing crypto payment: $" + amount);
        }
    }
}
```

#### ✅ Solution

```java
// Payment strategy interface
public interface PaymentStrategy {
    void processPayment(double amount);
    String getPaymentType();
    boolean isAvailable();
}

// Concrete payment strategies
public class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;
    private String expiryDate;

    public CreditCardPayment(String cardNumber, String expiryDate) {
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
    }

    @Override
    public void processPayment(double amount) {
        // Credit card processing logic
        System.out.println("Processing credit card payment: $" + amount);
        System.out.println("Card ending in: " + cardNumber.substring(cardNumber.length() - 4));
    }

    @Override
    public String getPaymentType() { return "CREDIT_CARD"; }

    @Override
    public boolean isAvailable() {
        // Check if card is valid and not expired
        return true;
    }
}

public class PayPalPayment implements PaymentStrategy {
    private String email;

    public PayPalPayment(String email) { this.email = email; }

    @Override
    public void processPayment(double amount) {
        System.out.println("Processing PayPal payment: $" + amount);
        System.out.println("PayPal account: " + email);
    }

    @Override
    public String getPaymentType() { return "PAYPAL"; }

    @Override
    public boolean isAvailable() { return true; }
}

// ✅ NEW: Can add new payment methods without modifying existing code
public class CryptocurrencyPayment implements PaymentStrategy {
    private String walletAddress;
    private String coinType;

    public CryptocurrencyPayment(String walletAddress, String coinType) {
        this.walletAddress = walletAddress;
        this.coinType = coinType;
    }

    @Override
    public void processPayment(double amount) {
        System.out.println("Processing " + coinType + " payment: $" + amount);
        System.out.println("Wallet: " + walletAddress);
    }

    @Override
    public String getPaymentType() { return "CRYPTOCURRENCY"; }

    @Override
    public boolean isAvailable() {
        // Check blockchain network status
        return true;
    }
}

// Payment processor using strategies
public class PaymentProcessor {
    private Map<String, PaymentStrategy> strategies;

    public PaymentProcessor() {
        this.strategies = new HashMap<>();
    }

    public void registerPaymentMethod(PaymentStrategy strategy) {
        strategies.put(strategy.getPaymentType(), strategy);
    }

    public void processPayment(String paymentType, double amount) {
        PaymentStrategy strategy = strategies.get(paymentType);
        if (strategy == null) {
            throw new IllegalArgumentException("Unsupported payment type: " + paymentType);
        }

        if (!strategy.isAvailable()) {
            throw new RuntimeException("Payment method not available: " + paymentType);
        }

        strategy.processPayment(amount);
    }

    public List<String> getAvailablePaymentMethods() {
        return strategies.values().stream()
                        .filter(PaymentStrategy::isAvailable)
                        .map(PaymentStrategy::getPaymentType)
                        .collect(Collectors.toList());
    }
}
```

## 🛠️ OCP Implementation Patterns

### 1. Strategy Pattern

```java
// Context class that uses strategies
public class TextFormatter {
    private FormattingStrategy strategy;

    public void setFormattingStrategy(FormattingStrategy strategy) {
        this.strategy = strategy;
    }

    public String format(String text) {
        return strategy.format(text);
    }
}

// Strategy interface
public interface FormattingStrategy {
    String format(String text);
}

// Concrete strategies - can add more without modifying existing code
public class UpperCaseFormatter implements FormattingStrategy {
    public String format(String text) { return text.toUpperCase(); }
}

public class LowerCaseFormatter implements FormattingStrategy {
    public String format(String text) { return text.toLowerCase(); }
}
```

### 2. Template Method Pattern

```java
// Abstract base class defining the algorithm template
public abstract class DataProcessor {

    // Template method - defines the algorithm structure
    public final void processData(String data) {
        String cleanedData = cleanData(data);
        String validatedData = validateData(cleanedData);
        String transformedData = transformData(validatedData);
        saveData(transformedData);
    }

    // Steps that can be extended by subclasses
    protected abstract String cleanData(String data);
    protected abstract String validateData(String data);
    protected abstract String transformData(String data);
    protected abstract void saveData(String data);
}

// ✅ NEW: Can add new processors without modifying base class
public class CSVDataProcessor extends DataProcessor {
    protected String cleanData(String data) { /* CSV-specific cleaning */ return data; }
    protected String validateData(String data) { /* CSV validation */ return data; }
    protected String transformData(String data) { /* CSV transformation */ return data; }
    protected void saveData(String data) { /* Save CSV */ }
}

public class JSONDataProcessor extends DataProcessor {
    protected String cleanData(String data) { /* JSON-specific cleaning */ return data; }
    protected String validateData(String data) { /* JSON validation */ return data; }
    protected String transformData(String data) { /* JSON transformation */ return data; }
    protected void saveData(String data) { /* Save JSON */ }
}
```

### 3. Plugin Architecture

```java
// Plugin interface
public interface Plugin {
    String getName();
    String getVersion();
    void execute();
    boolean isEnabled();
}

// Plugin manager
public class PluginManager {
    private List<Plugin> plugins = new ArrayList<>();

    public void registerPlugin(Plugin plugin) {
        plugins.add(plugin);
        System.out.println("Registered plugin: " + plugin.getName());
    }

    public void executePlugins() {
        plugins.stream()
               .filter(Plugin::isEnabled)
               .forEach(Plugin::execute);
    }

    public List<Plugin> getPlugins() {
        return new ArrayList<>(plugins);
    }
}

// ✅ NEW: Can add new plugins without modifying plugin manager
public class BackupPlugin implements Plugin {
    public String getName() { return "Backup Plugin"; }
    public String getVersion() { return "1.0"; }
    public boolean isEnabled() { return true; }
    public void execute() { System.out.println("Running backup..."); }
}

public class SecurityScanPlugin implements Plugin {
    public String getName() { return "Security Scanner"; }
    public String getVersion() { return "2.1"; }
    public boolean isEnabled() { return true; }
    public void execute() { System.out.println("Running security scan..."); }
}
```

## 🔍 How to Identify OCP Violations

### Questions to Ask

1. **Do I need to modify existing classes when adding new features?**
2. **Are there multiple if/else or switch statements based on types?**
3. **Is the class tightly coupled to specific implementations?**
4. **Do I need to recompile and retest existing code for new features?**

### Warning Signs

- ❌ Long if/else chains or switch statements
- ❌ Frequent modifications to the same classes
- ❌ Hard-coded dependencies
- ❌ Classes that need to "know" about all possible implementations
- ❌ Difficulty adding new features without extensive changes

## 🎯 Benefits of Following OCP

### 1. **Stability**

```java
// ✅ Existing code remains stable when adding new features
public class Logger {
    private List<LogHandler> handlers = new ArrayList<>();

    public void addHandler(LogHandler handler) {
        handlers.add(handler);  // No modification to existing code
    }

    public void log(String message) {
        handlers.forEach(handler -> handler.handle(message));
    }
}

// ✅ NEW: Add new handlers without touching Logger class
public class SlackLogHandler implements LogHandler {
    public void handle(String message) {
        // Send to Slack
    }
}
```

### 2. **Easier Testing**

```java
@Test
public void testNewDiscountStrategy() {
    // Test only the new strategy, existing code unaffected
    DiscountStrategy strategy = new StudentDiscountStrategy();
    double discount = strategy.calculateDiscount(100.0);
    assertEquals(15.0, discount, 0.01);
}
```

### 3. **Parallel Development**

```java
// Team A can work on new payment methods
public class ApplePayPayment implements PaymentStrategy {
    // Implementation
}

// Team B can work on new shipping methods
public class DroneShipping implements ShippingStrategy {
    // Implementation
}

// Neither team affects the other's work
```

## 🚨 Common OCP Mistakes

### ❌ Over-Engineering

Don't create abstractions prematurely:

```java
// ❌ BAD: Creating unnecessary abstraction
public interface NumberProcessor {
    int process(int number);
}

public class AddOneProcessor implements NumberProcessor {
    public int process(int number) { return number + 1; }
}

// ✅ BETTER: Simple method until extension is actually needed
public class Calculator {
    public int addOne(int number) { return number + 1; }
}
```

### ❌ Wrong Abstraction Level

```java
// ❌ BAD: Too specific interface
public interface DatabaseUserRepository {
    void saveUserToMySQL(User user);
    void saveUserToPostgreSQL(User user);
}

// ✅ BETTER: Proper abstraction level
public interface UserRepository {
    void save(User user);
    User findById(Long id);
}
```

## 🛠️ Refactoring to OCP

### Step-by-Step Process

1. **Identify Variation Points**: Find code that changes frequently
2. **Extract Abstractions**: Create interfaces or abstract classes
3. **Implement Strategies**: Create concrete implementations
4. **Use Dependency Injection**: Inject dependencies instead of creating them
5. **Register/Configure**: Use configuration or registration mechanisms

### Example Refactoring

```java
// BEFORE: Violation
public class ReportGenerator {
    public void generateReport(String type, List<Data> data) {
        if (type.equals("PDF")) {
            // Generate PDF
        } else if (type.equals("Excel")) {
            // Generate Excel
        }
    }
}

// AFTER: Following OCP
public interface ReportFormat {
    void generate(List<Data> data, OutputStream output);
}

public class ReportGenerator {
    private Map<String, ReportFormat> formats = new HashMap<>();

    public void registerFormat(String type, ReportFormat format) {
        formats.put(type, format);
    }

    public void generateReport(String type, List<Data> data, OutputStream output) {
        ReportFormat format = formats.get(type);
        if (format != null) {
            format.generate(data, output);
        }
    }
}
```

## 🎓 Practice Exercise

### Exercise: Refactor the Notification System

Here's a system that violates OCP. Can you refactor it?

```java
public class NotificationService {
    public void sendNotification(String type, String message, String recipient) {
        if (type.equals("EMAIL")) {
            // Send email
            System.out.println("Email sent to " + recipient + ": " + message);
        } else if (type.equals("SMS")) {
            // Send SMS
            System.out.println("SMS sent to " + recipient + ": " + message);
        } else if (type.equals("PUSH")) {
            // Send push notification
            System.out.println("Push notification sent to " + recipient + ": " + message);
        }
    }

    public boolean isValidRecipient(String type, String recipient) {
        if (type.equals("EMAIL")) {
            return recipient.contains("@");
        } else if (type.equals("SMS")) {
            return recipient.matches("\\d{10}");
        } else if (type.equals("PUSH")) {
            return recipient.length() > 0;
        }
        return false;
    }
}
```

### Solution Approach

1. Create `NotificationChannel` interface
2. Implement `EmailNotification`, `SMSNotification`, `PushNotification`
3. Create `NotificationService` that uses strategies
4. Add registration mechanism for new notification types

## 📚 Summary

The Open/Closed Principle is about designing software that can **grow and evolve without breaking existing functionality**. By following OCP:

- ✅ **Stability**: Existing code remains unchanged and stable
- ✅ **Extensibility**: New features can be added easily
- ✅ **Maintainability**: Reduced risk of introducing bugs
- ✅ **Testability**: New features can be tested in isolation
- ✅ **Flexibility**: System adapts to changing requirements

Remember: **Open for Extension, Closed for Modification!**

The key is to identify the parts of your system that are likely to change and abstract them behind stable interfaces. Use design patterns like Strategy, Template Method, and Plugin architectures to achieve OCP compliance.

---
