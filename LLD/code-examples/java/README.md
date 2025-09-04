# Java Code Examples

This directory contains Java implementations of all the concepts covered in the Low-Level Design guide. Each example is complete, runnable, and demonstrates real-world usage patterns.

## 📁 Directory Structure

```
java/
├── solid-principles/          # SOLID principles implementations
│   ├── srp/                  # Single Responsibility Principle
│   ├── ocp/                  # Open/Closed Principle
│   ├── lsp/                  # Liskov Substitution Principle
│   ├── isp/                  # Interface Segregation Principle
│   └── dip/                  # Dependency Inversion Principle
├── design-patterns/          # Gang of Four patterns
│   ├── creational/           # Creational patterns
│   │   ├── singleton/
│   │   ├── factory-method/
│   │   ├── abstract-factory/
│   │   ├── builder/
│   │   └── prototype/
│   ├── structural/           # Structural patterns
│   │   ├── adapter/
│   │   ├── decorator/
│   │   ├── facade/
│   │   ├── composite/
│   │   ├── bridge/
│   │   ├── flyweight/
│   │   └── proxy/
│   └── behavioral/           # Behavioral patterns
│       ├── observer/
│       ├── strategy/
│       ├── command/
│       ├── state/
│       ├── template-method/
│       ├── chain-of-responsibility/
│       ├── mediator/
│       ├── visitor/
│       ├── iterator/
│       └── memento/
├── case-studies/             # Real-world implementations
│   ├── parking-lot/
│   ├── elevator-system/
│   ├── chat-application/
│   ├── library-management/
│   ├── ecommerce-system/
│   ├── social-media-feed/
│   └── gaming-system/
└── utils/                    # Common utilities and helpers
    ├── DatabaseConnection.java
    ├── Logger.java
    └── TestRunner.java
```

## 🚀 How to Use

### Prerequisites
- Java 8 or higher
- Any IDE (IntelliJ IDEA, Eclipse, VS Code)
- Maven (optional, for dependency management)

### Running Examples

1. **Clone/Download** the examples to your local machine
2. **Navigate** to any specific example directory
3. **Compile** the Java files:
   ```bash
   javac *.java
   ```
4. **Run** the main class:
   ```bash
   java MainClass
   ```

### Example Structure

Each example follows this structure:
- **Main.java**: Demonstrates the pattern/principle usage
- **README.md**: Explanation of the specific implementation
- **Test.java**: Unit tests (where applicable)
- Supporting classes with clear, documented code

## 📚 Quick Navigation

### SOLID Principles
- [SRP Examples](./solid-principles/srp/) - Employee management refactoring
- [OCP Examples](./solid-principles/ocp/) - Shape calculator extensibility
- [LSP Examples](./solid-principles/lsp/) - Bird inheritance hierarchy
- [ISP Examples](./solid-principles/isp/) - Printer interface segregation
- [DIP Examples](./solid-principles/dip/) - Order processing with dependency injection

### Popular Design Patterns
- [Singleton](./design-patterns/creational/singleton/) - Database connection manager
- [Observer](./design-patterns/behavioral/observer/) - Stock price monitoring
- [Strategy](./design-patterns/behavioral/strategy/) - Payment processing
- [Factory Method](./design-patterns/creational/factory-method/) - Vehicle creation
- [Decorator](./design-patterns/structural/decorator/) - Coffee ordering system

### Case Studies
- [Parking Lot System](./case-studies/parking-lot/) - Complete OOP design
- [Elevator System](./case-studies/elevator-system/) - State machine implementation
- [Chat Application](./case-studies/chat-application/) - Observer and Command patterns

## 🎯 Learning Approach

### For Beginners
1. Start with [SOLID Principles examples](./solid-principles/)
2. Move to [Creational Patterns](./design-patterns/creational/)
3. Practice with simple [Case Studies](./case-studies/)

### For Intermediate Developers
1. Review [Structural Patterns](./design-patterns/structural/)
2. Master [Behavioral Patterns](./design-patterns/behavioral/)
3. Implement complex [Case Studies](./case-studies/)

### For Advanced Practitioners
1. Study pattern combinations in [Case Studies](./case-studies/)
2. Focus on performance and scalability aspects
3. Customize patterns for specific use cases

## 🛠️ Code Quality Standards

All examples follow:
- **Clean Code** principles
- **Consistent naming** conventions
- **Comprehensive comments** and documentation
- **Error handling** where appropriate
- **Unit tests** for core functionality

## 📝 Contributing

Want to add more examples or improve existing ones?
1. Follow the existing code style
2. Include comprehensive documentation
3. Add unit tests where applicable
4. Ensure examples are beginner-friendly

---

Ready to start coding? Pick a concept and dive into the examples!

**Happy Coding! 🎉**
