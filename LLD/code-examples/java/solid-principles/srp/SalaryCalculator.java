/**
 * Salary Calculator - Following Single Responsibility Principle
 * 
 * Responsibility: Handle all salary-related calculations
 * 
 * This class demonstrates SRP by focusing solely on salary computations.
 * It doesn't handle data storage, notifications, or other unrelated operations.
 */
public class SalaryCalculator {
    
    // Tax rates - could be made configurable or loaded from external source
    private static final double DEFAULT_TAX_RATE = 0.25;
    private static final double SENIOR_TAX_RATE = 0.30;
    private static final double BONUS_RATE = 0.10;
    private static final double OVERTIME_RATE = 1.5;
    
    /**
     * Calculate income tax based on salary and employee level
     */
    public double calculateTax(Employee employee) {
        double taxRate = getTaxRate(employee);
        return employee.getSalary() * taxRate;
    }
    
    /**
     * Calculate annual bonus based on salary and department
     */
    public double calculateBonus(Employee employee) {
        double baseBonus = employee.getSalary() * BONUS_RATE;
        
        // Different bonus rates for different departments
        switch (employee.getDepartment().toLowerCase()) {
            case "sales":
                return baseBonus * 1.5; // 15% for sales
            case "engineering":
                return baseBonus * 1.3; // 13% for engineering
            case "management":
                return baseBonus * 1.2; // 12% for management
            default:
                return baseBonus; // 10% for other departments
        }
    }
    
    /**
     * Calculate overtime pay
     */
    public double calculateOvertimePay(Employee employee, int overtimeHours) {
        if (overtimeHours <= 0) {
            return 0.0;
        }
        
        // Assuming 2000 working hours per year (40 hours * 50 weeks)
        double hourlyRate = employee.getSalary() / 2000;
        return hourlyRate * OVERTIME_RATE * overtimeHours;
    }
    
    /**
     * Calculate net salary after tax deductions
     */
    public double calculateNetSalary(Employee employee) {
        double grossSalary = employee.getSalary();
        double tax = calculateTax(employee);
        double bonus = calculateBonus(employee);
        
        return grossSalary - tax + bonus;
    }
    
    /**
     * Calculate total compensation including overtime and bonuses
     */
    public double calculateTotalCompensation(Employee employee, int overtimeHours) {
        double netSalary = calculateNetSalary(employee);
        double overtimePay = calculateOvertimePay(employee, overtimeHours);
        
        return netSalary + overtimePay;
    }
    
    /**
     * Determine tax rate based on employee position and salary
     */
    private double getTaxRate(Employee employee) {
        // Senior positions or high salaries get higher tax rate
        if (employee.getPosition().toLowerCase().contains("senior") || 
            employee.getPosition().toLowerCase().contains("manager") ||
            employee.getSalary() > 80000) {
            return SENIOR_TAX_RATE;
        }
        return DEFAULT_TAX_RATE;
    }
    
    /**
     * Get a detailed salary breakdown
     */
    public SalaryBreakdown getDetailedBreakdown(Employee employee, int overtimeHours) {
        double grossSalary = employee.getSalary();
        double tax = calculateTax(employee);
        double bonus = calculateBonus(employee);
        double overtimePay = calculateOvertimePay(employee, overtimeHours);
        double netSalary = grossSalary - tax + bonus + overtimePay;
        
        return new SalaryBreakdown(grossSalary, tax, bonus, overtimePay, netSalary);
    }
    
    /**
     * Inner class to represent detailed salary breakdown
     */
    public static class SalaryBreakdown {
        private final double grossSalary;
        private final double tax;
        private final double bonus;
        private final double overtimePay;
        private final double netSalary;
        
        public SalaryBreakdown(double grossSalary, double tax, double bonus, 
                             double overtimePay, double netSalary) {
            this.grossSalary = grossSalary;
            this.tax = tax;
            this.bonus = bonus;
            this.overtimePay = overtimePay;
            this.netSalary = netSalary;
        }
        
        // Getters
        public double getGrossSalary() { return grossSalary; }
        public double getTax() { return tax; }
        public double getBonus() { return bonus; }
        public double getOvertimePay() { return overtimePay; }
        public double getNetSalary() { return netSalary; }
        
        @Override
        public String toString() {
            return String.format(
                "SalaryBreakdown{grossSalary=%.2f, tax=%.2f, bonus=%.2f, overtimePay=%.2f, netSalary=%.2f}",
                grossSalary, tax, bonus, overtimePay, netSalary
            );
        }
    }
}
