/**
 * Employee Data Class - Following Single Responsibility Principle
 * 
 * Responsibility: Store and manage employee data only
 * 
 * This class demonstrates SRP by focusing solely on employee data management.
 * It doesn't handle calculations, database operations, or external communications.
 */
public class Employee {
    private String employeeId;
    private String name;
    private String email;
    private double salary;
    private String department;
    private String position;
    
    /**
     * Constructor to create a new Employee
     */
    public Employee(String employeeId, String name, String email, double salary, 
                   String department, String position) {
        this.employeeId = employeeId;
        this.name = name;
        this.email = email;
        this.salary = salary;
        this.department = department;
        this.position = position;
    }
    
    // Getters and Setters - Data access only
    public String getEmployeeId() {
        return employeeId;
    }
    
    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public double getSalary() {
        return salary;
    }
    
    public void setSalary(double salary) {
        this.salary = salary;
    }
    
    public String getDepartment() {
        return department;
    }
    
    public void setDepartment(String department) {
        this.department = department;
    }
    
    public String getPosition() {
        return position;
    }
    
    public void setPosition(String position) {
        this.position = position;
    }
    
    @Override
    public String toString() {
        return String.format("Employee{id='%s', name='%s', email='%s', salary=%.2f, department='%s', position='%s'}", 
                           employeeId, name, email, salary, department, position);
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        
        Employee employee = (Employee) obj;
        return employeeId.equals(employee.employeeId);
    }
    
    @Override
    public int hashCode() {
        return employeeId.hashCode();
    }
}
