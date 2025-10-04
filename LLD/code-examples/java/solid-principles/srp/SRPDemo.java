/**
 * SRP Demonstration - Employee Management System
 * 
 * This class demonstrates the Single Responsibility Principle by showing
 * how different responsibilities are separated into different classes:
 * 
 * - Employee: Data management only
 * - SalaryCalculator: Salary computations only
 * - EmployeeRepository: Database operations only
 * - PayslipGenerator: Report generation only
 * - EmailService: Communication only
 * - EmployeeService: Business logic coordination
 */
public class SRPDemo {
    
    public static void main(String[] args) {
        System.out.println("=== Single Responsibility Principle Demonstration ===\n");
        
        // Initialize dependencies
        DatabaseConnection dbConnection = new DatabaseConnection("jdbc:mysql://localhost:3306/company_db");
        dbConnection.connect();
        
        SalaryCalculator salaryCalculator = new SalaryCalculator();
        EmployeeRepository employeeRepository = new EmployeeRepository(dbConnection);
        PayslipGenerator payslipGenerator = new PayslipGenerator(salaryCalculator);
        EmailService emailService = new EmailService("smtp.company.com", 587);
        
        // Create employee service that coordinates all operations
        EmployeeService employeeService = new EmployeeService(
            employeeRepository, 
            salaryCalculator, 
            payslipGenerator, 
            emailService
        );
        
        // Demonstration scenarios
        demonstrateBasicOperations(employeeService);
        demonstrateSalaryCalculations(employeeService, salaryCalculator);
        demonstrateReportGeneration(employeeService, payslipGenerator);
        demonstrateRepositoryOperations(employeeRepository);
        
        // Cleanup
        dbConnection.disconnect();
        
        System.out.println("\n=== SRP Benefits Demonstrated ===");
        System.out.println("✅ Each class has a single, well-defined responsibility");
        System.out.println("✅ Changes to one area don't affect others");
        System.out.println("✅ Easy to test each component in isolation");
        System.out.println("✅ Code is more maintainable and readable");
        System.out.println("✅ Classes can be reused in different contexts");
    }
    
    private static void demonstrateBasicOperations(EmployeeService employeeService) {
        System.out.println("1. Basic Employee Operations");
        System.out.println("============================");
        
        // Create employees
        Employee emp1 = new Employee("EMP001", "Alice Johnson", "alice@company.com", 
                                   75000, "Engineering", "Senior Developer");
        Employee emp2 = new Employee("EMP002", "Bob Smith", "bob@company.com", 
                                   95000, "Management", "Engineering Manager");
        Employee emp3 = new Employee("EMP003", "Carol Davis", "carol@company.com", 
                                   65000, "Sales", "Sales Representative");
        
        // Add employees using the service
        employeeService.addEmployee(emp1);
        employeeService.addEmployee(emp2);
        employeeService.addEmployee(emp3);
        
        System.out.println();
    }
    
    private static void demonstrateSalaryCalculations(EmployeeService employeeService, 
                                                    SalaryCalculator calculator) {
        System.out.println("2. Salary Calculations (SalaryCalculator responsibility)");
        System.out.println("========================================================");
        
        Employee alice = employeeService.getEmployee("EMP001");
        if (alice != null) {
            System.out.println("Employee: " + alice.getName());
            System.out.println("Gross Salary: $" + alice.getSalary());
            System.out.println("Tax: $" + calculator.calculateTax(alice));
            System.out.println("Bonus: $" + calculator.calculateBonus(alice));
            System.out.println("Net Salary: $" + calculator.calculateNetSalary(alice));
            
            // Calculate with overtime
            int overtimeHours = 20;
            System.out.println("Overtime Pay (20 hours): $" + 
                             calculator.calculateOvertimePay(alice, overtimeHours));
            System.out.println("Total Compensation: $" + 
                             calculator.calculateTotalCompensation(alice, overtimeHours));
            
            // Detailed breakdown
            SalaryCalculator.SalaryBreakdown breakdown = 
                calculator.getDetailedBreakdown(alice, overtimeHours);
            System.out.println("Detailed Breakdown: " + breakdown);
        }
        
        System.out.println();
    }
    
    private static void demonstrateReportGeneration(EmployeeService employeeService, 
                                                  PayslipGenerator payslipGenerator) {
        System.out.println("3. Report Generation (PayslipGenerator responsibility)");
        System.out.println("=====================================================");
        
        Employee bob = employeeService.getEmployee("EMP002");
        if (bob != null) {
            // Generate payslip
            payslipGenerator.generatePayslip(bob, 10); // 10 overtime hours
            
            // Generate payslip as string
            String payslipContent = payslipGenerator.generatePayslipAsString(bob, 10);
            System.out.println("\nPayslip as String:\n" + payslipContent);
        }
        
        System.out.println();
    }
    
    private static void demonstrateRepositoryOperations(EmployeeRepository repository) {
        System.out.println("4. Database Operations (EmployeeRepository responsibility)");
        System.out.println("=========================================================");
        
        // Find operations
        System.out.println("Total employees: " + repository.getEmployeeCount());
        
        // Find by department
        repository.findByDepartment("Engineering");
        
        // Update employee
        Employee emp = repository.findById("EMP001");
        if (emp != null) {
            emp.setSalary(80000); // Give a raise
            repository.update(emp);
        }
        
        // Check existence
        System.out.println("Employee EMP001 exists: " + repository.exists("EMP001"));
        System.out.println("Employee EMP999 exists: " + repository.exists("EMP999"));
        
        System.out.println();
    }
}

/**
 * Employee Service - Coordinates operations between different components
 * 
 * This demonstrates how SRP doesn't mean classes can't work together.
 * This service class orchestrates operations while each component
 * maintains its single responsibility.
 */
class EmployeeService {
    private final EmployeeRepository repository;
    private final SalaryCalculator calculator;
    private final PayslipGenerator payslipGenerator;
    private final EmailService emailService;
    
    public EmployeeService(EmployeeRepository repository, SalaryCalculator calculator, 
                         PayslipGenerator payslipGenerator, EmailService emailService) {
        this.repository = repository;
        this.calculator = calculator;
        this.payslipGenerator = payslipGenerator;
        this.emailService = emailService;
    }
    
    /**
     * Add a new employee (coordinates multiple operations)
     */
    public boolean addEmployee(Employee employee) {
        if (repository.save(employee)) {
            // Send welcome email
            emailService.sendWelcomeEmail(employee);
            return true;
        }
        return false;
    }
    
    /**
     * Process monthly payroll for an employee
     */
    public void processPayroll(String employeeId, int overtimeHours) {
        Employee employee = repository.findById(employeeId);
        if (employee != null) {
            // Generate payslip
            String payslipContent = payslipGenerator.generatePayslipAsString(employee, overtimeHours);
            
            // Send payslip via email
            emailService.sendPayslipEmail(employee, payslipContent);
            
            System.out.println("Payroll processed for " + employee.getName());
        }
    }
    
    /**
     * Give employee a raise
     */
    public boolean giveRaise(String employeeId, double newSalary) {
        Employee employee = repository.findById(employeeId);
        if (employee != null) {
            double oldSalary = employee.getSalary();
            employee.setSalary(newSalary);
            
            if (repository.update(employee)) {
                // Send raise notification
                String message = String.format("Congratulations! Your salary has been increased from $%.2f to $%.2f", 
                                             oldSalary, newSalary);
                emailService.sendEmail(employee.getEmail(), "Salary Update", message);
                return true;
            }
        }
        return false;
    }
    
    /**
     * Get employee by ID
     */
    public Employee getEmployee(String employeeId) {
        return repository.findById(employeeId);
    }
}

/**
 * Payslip Generator - Following Single Responsibility Principle
 * 
 * Responsibility: Generate employee payslips and reports
 */
class PayslipGenerator {
    private final SalaryCalculator calculator;
    
    public PayslipGenerator(SalaryCalculator calculator) {
        this.calculator = calculator;
    }
    
    /**
     * Generate and print payslip to console
     */
    public void generatePayslip(Employee employee, int overtimeHours) {
        SalaryCalculator.SalaryBreakdown breakdown = 
            calculator.getDetailedBreakdown(employee, overtimeHours);
        
        System.out.println("\n" + "=".repeat(50));
        System.out.println("                EMPLOYEE PAYSLIP");
        System.out.println("=".repeat(50));
        System.out.println("Employee ID: " + employee.getEmployeeId());
        System.out.println("Name: " + employee.getName());
        System.out.println("Department: " + employee.getDepartment());
        System.out.println("Position: " + employee.getPosition());
        System.out.println("-".repeat(50));
        System.out.printf("Gross Salary:    $%10.2f\n", breakdown.getGrossSalary());
        System.out.printf("Tax Deduction:   $%10.2f\n", breakdown.getTax());
        System.out.printf("Bonus:           $%10.2f\n", breakdown.getBonus());
        System.out.printf("Overtime Pay:    $%10.2f\n", breakdown.getOvertimePay());
        System.out.println("-".repeat(50));
        System.out.printf("NET SALARY:      $%10.2f\n", breakdown.getNetSalary());
        System.out.println("=".repeat(50));
    }
    
    /**
     * Generate payslip as string
     */
    public String generatePayslipAsString(Employee employee, int overtimeHours) {
        SalaryCalculator.SalaryBreakdown breakdown = 
            calculator.getDetailedBreakdown(employee, overtimeHours);
        
        StringBuilder sb = new StringBuilder();
        sb.append("PAYSLIP FOR: ").append(employee.getName()).append("\n");
        sb.append("Employee ID: ").append(employee.getEmployeeId()).append("\n");
        sb.append("Gross Salary: $").append(String.format("%.2f", breakdown.getGrossSalary())).append("\n");
        sb.append("Net Salary: $").append(String.format("%.2f", breakdown.getNetSalary())).append("\n");
        
        return sb.toString();
    }
}

/**
 * Email Service - Following Single Responsibility Principle
 * 
 * Responsibility: Handle all email communications
 */
class EmailService {
    private final String smtpServer;
    private final int port;
    
    public EmailService(String smtpServer, int port) {
        this.smtpServer = smtpServer;
        this.port = port;
    }
    
    /**
     * Send generic email
     */
    public void sendEmail(String recipientEmail, String subject, String message) {
        // Simulate email sending
        System.out.println("\n📧 EMAIL SENT:");
        System.out.println("To: " + recipientEmail);
        System.out.println("Subject: " + subject);
        System.out.println("Message: " + message);
        System.out.println("Sent via: " + smtpServer + ":" + port);
    }
    
    /**
     * Send welcome email to new employee
     */
    public void sendWelcomeEmail(Employee employee) {
        String subject = "Welcome to the Company!";
        String message = "Dear " + employee.getName() + ",\n\n" +
                        "Welcome to our company! We're excited to have you on board.\n" +
                        "Your employee ID is: " + employee.getEmployeeId() + "\n\n" +
                        "Best regards,\nHR Department";
        
        sendEmail(employee.getEmail(), subject, message);
    }
    
    /**
     * Send payslip email
     */
    public void sendPayslipEmail(Employee employee, String payslipContent) {
        String subject = "Monthly Payslip - " + employee.getName();
        String message = "Dear " + employee.getName() + ",\n\n" +
                        "Please find your monthly payslip below:\n\n" +
                        payslipContent + "\n\n" +
                        "Best regards,\nPayroll Department";
        
        sendEmail(employee.getEmail(), subject, message);
    }
}
