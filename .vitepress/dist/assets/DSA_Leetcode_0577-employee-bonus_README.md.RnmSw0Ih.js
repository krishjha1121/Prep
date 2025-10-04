import{_ as n,c as o,o as t,ag as a}from"./chunks/framework.DUDLMHYb.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"DSA/Leetcode/0577-employee-bonus/README.md","filePath":"DSA/Leetcode/0577-employee-bonus/README.md"}'),r={name:"DSA/Leetcode/0577-employee-bonus/README.md"};function s(p,e,l,m,i,u){return t(),o("div",null,[...e[0]||(e[0]=[a(`<h2><a href="https://leetcode.com/problems/employee-bonus">577. Employee Bonus</a></h2><h3>Easy</h3><hr><p>Table: <code>Employee</code></p><pre>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| empId       | int     |
| name        | varchar |
| supervisor  | int     |
| salary      | int     |
+-------------+---------+
empId is the column with unique values for this table.
Each row of this table indicates the name and the ID of an employee in addition to their salary and the id of their manager.
</pre><p> </p><p>Table: <code>Bonus</code></p><pre>+-------------+------+
| Column Name | Type |
+-------------+------+
| empId       | int  |
| bonus       | int  |
+-------------+------+
empId is the column of unique values for this table.
empId is a foreign key (reference column) to empId from the Employee table.
Each row of this table contains the id of an employee and their respective bonus.
</pre><p> </p><p>Write a solution to report the name and bonus amount of each employee with a bonus <strong>less than</strong> <code>1000</code>.</p><p>Return the result table in <strong>any order</strong>.</p><p>The result format is in the following example.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> 
Employee table:
+-------+--------+------------+--------+
| empId | name   | supervisor | salary |
+-------+--------+------------+--------+
| 3     | Brad   | null       | 4000   |
| 1     | John   | 3          | 1000   |
| 2     | Dan    | 3          | 2000   |
| 4     | Thomas | 3          | 4000   |
+-------+--------+------------+--------+
Bonus table:
+-------+-------+
| empId | bonus |
+-------+-------+
| 2     | 500   |
| 4     | 2000  |
+-------+-------+
<strong>Output:</strong> 
+------+-------+
| name | bonus |
+------+-------+
| Brad | null  |
| John | null  |
| Dan  | 500   |
+------+-------+
</pre>`,15)])])}const c=n(r,[["render",s]]);export{h as __pageData,c as default};
