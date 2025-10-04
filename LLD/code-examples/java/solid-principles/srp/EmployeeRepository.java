import java.util.*;

/**
 * Employee Repository - Following Single Responsibility Principle
 * 
 * Responsibility: Handle all database/storage operations for employees
 * 
 * This class demonstrates SRP by focusing solely on data persistence operations.
 * It doesn't handle calculations, business logic, or user interface operations.
 */
public class EmployeeRepository {
    
    // In-memory storage for demonstration (in real app, this would be a database)
    private Map<String, Employee> employeeStorage;
    private DatabaseConnection connection;
    
    /**
     * Constructor - initializes the repository with a database connection
     */
    public EmployeeRepository(DatabaseConnection connection) {
        this.connection = connection;
        this.employeeStorage = new HashMap<>();
    }
    
    /**
     * Save or update an employee in the database
     */
    public boolean save(Employee employee) {
        try {
            // Simulate database operation
            if (connection.isConnected()) {
                employeeStorage.put(employee.getEmployeeId(), employee);
                System.out.println("Employee " + employee.getName() + " saved successfully to database");
                return true;
            } else {
                System.err.println("Database connection failed - cannot save employee");
                return false;
            }
        } catch (Exception e) {
            System.err.println("Error saving employee: " + e.getMessage());
            return false;
        }
    }
    
    /**
     * Find employee by ID
     */
    public Employee findById(String employeeId) {
        try {
            if (connection.isConnected()) {
                Employee employee = employeeStorage.get(employeeId);
                if (employee != null) {
                    System.out.println("Employee found: " + employee.getName());
                } else {
                    System.out.println("Employee with ID " + employeeId + " not found");
                }
                return employee;
            } else {
                System.err.println("Database connection failed - cannot retrieve employee");
                return null;
            }
        } catch (Exception e) {
            System.err.println("Error finding employee: " + e.getMessage());
            return null;
        }
    }
    
    /**
     * Find employees by department
     */
    public List<Employee> findByDepartment(String department) {
        List<Employee> result = new ArrayList<>();
        
        try {
            if (connection.isConnected()) {
                for (Employee employee : employeeStorage.values()) {
                    if (employee.getDepartment().equalsIgnoreCase(department)) {
                        result.add(employee);
                    }
                }
                System.out.println("Found " + result.size() + " employees in " + department + " department");
            } else {
                System.err.println("Database connection failed - cannot retrieve employees");
            }
        } catch (Exception e) {
            System.err.println("Error finding employees by department: " + e.getMessage());
        }
        
        return result;
    }
    
    /**
     * Get all employees
     */
    public List<Employee> findAll() {
        try {
            if (connection.isConnected()) {
                List<Employee> allEmployees = new ArrayList<>(employeeStorage.values());
                System.out.println("Retrieved " + allEmployees.size() + " employees from database");
                return allEmployees;
            } else {
                System.err.println("Database connection failed - cannot retrieve employees");
                return new ArrayList<>();
            }
        } catch (Exception e) {
            System.err.println("Error retrieving all employees: " + e.getMessage());
            return new ArrayList<>();
        }
    }
    
    /**
     * Delete employee by ID
     */
    public boolean delete(String employeeId) {
        try {
            if (connection.isConnected()) {
                Employee removed = employeeStorage.remove(employeeId);
                if (removed != null) {
                    System.out.println("Employee " + removed.getName() + " deleted successfully");
                    return true;
                } else {
                    System.out.println("Employee with ID " + employeeId + " not found for deletion");
                    return false;
                }
            } else {
                System.err.println("Database connection failed - cannot delete employee");
                return false;
            }
        } catch (Exception e) {
            System.err.println("Error deleting employee: " + e.getMessage());
            return false;
        }
    }
    
    /**
     * Update employee information
     */
    public boolean update(Employee employee) {
        try {
            if (connection.isConnected()) {
                if (employeeStorage.containsKey(employee.getEmployeeId())) {
                    employeeStorage.put(employee.getEmployeeId(), employee);
                    System.out.println("Employee " + employee.getName() + " updated successfully");
                    return true;
                } else {
                    System.out.println("Employee with ID " + employee.getEmployeeId() + " not found for update");
                    return false;
                }
            } else {
                System.err.println("Database connection failed - cannot update employee");
                return false;
            }
        } catch (Exception e) {
            System.err.println("Error updating employee: " + e.getMessage());
            return false;
        }
    }
    
    /**
     * Check if employee exists
     */
    public boolean exists(String employeeId) {
        try {
            if (connection.isConnected()) {
                return employeeStorage.containsKey(employeeId);
            } else {
                System.err.println("Database connection failed - cannot check employee existence");
                return false;
            }
        } catch (Exception e) {
            System.err.println("Error checking employee existence: " + e.getMessage());
            return false;
        }
    }
    
    /**
     * Get employee count
     */
    public int getEmployeeCount() {
        try {
            if (connection.isConnected()) {
                return employeeStorage.size();
            } else {
                System.err.println("Database connection failed - cannot get employee count");
                return 0;
            }
        } catch (Exception e) {
            System.err.println("Error getting employee count: " + e.getMessage());
            return 0;
        }
    }
    
    /**
     * Clear all employees (for testing purposes)
     */
    public void clearAll() {
        try {
            if (connection.isConnected()) {
                employeeStorage.clear();
                System.out.println("All employees cleared from database");
            } else {
                System.err.println("Database connection failed - cannot clear employees");
            }
        } catch (Exception e) {
            System.err.println("Error clearing employees: " + e.getMessage());
        }
    }
}

/**
 * Simple Database Connection class for demonstration
 */
class DatabaseConnection {
    private boolean connected;
    private String connectionString;
    
    public DatabaseConnection(String connectionString) {
        this.connectionString = connectionString;
        this.connected = false;
    }
    
    public boolean connect() {
        try {
            // Simulate connection process
            Thread.sleep(100); // Simulate connection delay
            this.connected = true;
            System.out.println("Connected to database: " + connectionString);
            return true;
        } catch (InterruptedException e) {
            System.err.println("Connection interrupted: " + e.getMessage());
            return false;
        }
    }
    
    public void disconnect() {
        this.connected = false;
        System.out.println("Disconnected from database");
    }
    
    public boolean isConnected() {
        return connected;
    }
    
    public String getConnectionString() {
        return connectionString;
    }
}
