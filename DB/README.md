<!--───────────────────────────────────────────-->
<h1 align="center"> 🌎 DATABASE </h1>
<p align="center">
</p>

---

🧑‍💻 **Author:** RK ROY

> 🧾 _"Databases aren’t just about data—they’re about trust, speed, and reliability."_

---

- <p style = "color:orange"> 📚 Data </p>
    
    - Data is a collections of raw, unorganized facts and details like numbers, text, images, and more.
    - Data is measured in terms of bits and bytes.
    - Data can be recorded and does not have any meaning unless processed.
- <p style = "color:orange"> ㊙️ Types of data </p>
    
    - <p style = "color:"> Quantitative data </p>
        
        - Numerical Form.
        - weight, volume, temperature, etc.
    - Qualitative data
        - Descriptive, but not numerical.
        - Gender, ethnicity, religion, etc.

- <p style = "color:orange"> Information </p>
    
    - Provides context of the data and enables decision making.

- <p style = "color:orange"> Database </p>
      
    - Database is an electronic place/system where data is stored in a way that it can be easily accessed, managed, and updated.
    - To make real use Data, we need Database management systems. (DBMS)

- <p style = "color:orange"> DBMS </p>
   
    - A DBMS (Database Management System) is software that interacts with users, applications, and the database itself to store, manage, and retrieve data efficiently and securely.
    - Advantages :
        - Data Integrity and Consistency : Ensures accuracy and consistency of data across the database.
        - Data Sharing : Multiple users and applications can access the database simultaneously
        - Data Security : Allows different users to have different levels of access.
        - Data Redundancy Control : Eliminates duplicate data by centralizing storage.

<br>

<div align = "center"> <h1 style = "color:purple"> 📚 DBMS Architecture </h1> </div>

- <p style = "color:orange"> View of Data (Three Schema Architecture) </p>
    
    - The purpose is to hide unnecessary details from users and make databases easier to use through three levels of abstraction:
        
    - <p style = "color:green"> Physical Level (Internal Level) </p>
            
        - Describes how data is actually stored in memory (files, indexes, etc.).
        - Deals with low-level data structures, storage allocation, compression, encryption.
        - Goal: Store data efficiently.
    - <p style = "color:green"> Logical Level (Conceptual Level) </p>
                
        - Describes what data is stored and relationships among data.
        - Users at this level don’t worry about physical storage details.
        - Database designers (DBAs) use this level to plan the database structure.
        - Goal: Make database easy to design and manage.
    - <p style = "color:green"> View Level (External Level) </p>
       
        - Describes how users see the data.
        - Different users can have different views of the same database.
        - Uses views/schemas to show only relevant parts of the data.
        - Also helps secure data by restricting what each user group can see.
        - Goal: Provide personalized, secure data views.

<div align = "center">
    <img src = 'Pictures/architecture.png'  style="border-radius: 15px; height : 450 width: 300px;"> </img> 
</div>

- <p style = "color:orange"> Data Models </p>
      
    - Provides a way to describe the design of a DB at logical level.
    - Underlying the structure of the DB is the Data Model; a collection of conceptual tools for describing
  data, data relationships, data semantics & consistency constraints.
   - E.g., ER model, Relational Model, object-oriented model, object-relational data model etc.

- <p style = "color:orange"> Database Languages </p>
     
     
    - Data definition language (DDL) to specify the database schema.
    - Data manipulation language (DML) to express database queries and updates.
    - Practically, both language features are present in a single DB language, e.g., SQL language.
    - DDL
        - We specify consistency constraints, which must be checked, every time DB is updated.
    - DML
        - Data manipulation involves
            - Retrieval of information stored in DB.
            - Insertion of new information into DB.
            - Deletion of information from the DB.
            - Updating existing information stored in DB.
        - Query language, a part of DML to specify statement requesting the retrieval of information.

<br> 
<div align = "center"> <h1 style = "color:purple"> 📖 Relational Model </h1> </div>

- Relational Model organizes the data in the form of tables.
- Tuple : A single row of the table representing a single data point / a unique record.
- Degree of table: number of attributes/columns in a given table/relation.
- Cardinality: Total no. of tuples in a given relation
- 🗽 Integrity constraints : Integrity constraints in databases are rules that ensure the accuracy, consistency, and validity of data stored in a relational database. They prevent invalid data from being entered and maintain the logical correctness of relationships among tables.
    - Domain integrity :
        - Ensures that values in a column are valid according to the column’s data type, range, or format.
        - Example :
            ```SQL
            age INT CHECK (age >= 0);
            ```

    - Entity Integrity :
        - Ensures that every table has a primary key, and that primary key values are unique and not NULL.
        - Prevents duplicate or missing identifiers for rows.
        - Example :
            ```SQL
            student_id INT PRIMARY KEY;
            ```

    - Referential Integrity :
        - Ensures consistency between foreign keys and the primary key they reference.
        - Prevents “orphan” records (foreign key referring to a non-existent row).
        - Example :
            ```SQL
            FOREIGN KEY (course_id) REFERENCES Course(course_id);
            ```

    - Key Integrity :
        - Guarantee uniqueness of data in certain columns.
        - Includes Primary Key, Unique Key, and Foreign Key constraint
        - Example :
            ```SQL
            email VARCHAR(100) UNIQUE;
            ```

    - Check Constraints
        - Define a condition that each row must satisfy.
        - Example :
            ```SQL
            salary DECIMAL CHECK (salary > 0);
            ```

- <p style = "color:green"> Relational Model keys </p>
   
    - 🔑 Simple Key : Key with only one attribute.
    - 🔑 Primary Key :
        - A column or set of columns that uniquely identifies each row in a table.
        - Cannot have null values.
        - There is only one primary key per table.
        - Example : student_id in student table.
    - 🔑 Candidate Key :
        - Set of all unique keys.
        - Any column (or combination of columns) that can uniquely identify a row.
        - A table can have multiple candidate keys, but only one is chosen as the primary key
        - Example : In an employee table, employee_id and employee_email both are candidate key, but one is choosen as primary key, and other remains as candidate key.
    - 🔑 Super Key :
        - Candidate Key Union U any other attributes.
        - A set of one or more attributes that can uniquely identify a row.
        - Candidate key ⊆ Super key.
        - A super key may contain extra columns.
        - Example : In a Books table:
            - ISBN is a candidate key.
              ISBN + title is also a super key (but not a candidate key since it has extra column).
    - 🔑 Alternate Key :
        - A candidate key that is not chosen as the primary key.
        - Still uniquely identifies rows.
        - Example : In a Users table:
            - Candidate keys: user_id, email.
              If user_id is chosen as the primary key, email becomes an alternate key.
    - 🔑 Foreign Key :
        - A column in one table that refers to the primary key of another table.
        - Used to link tables together.
        - Example :
            - In an Orders table, customer_id can be a foreign key that refers to customer_id in the Customers table.
    - 🔑 Composite Key :
        - A key made up of two or more columns that together uniquely identify a row.
        - Used when a single column is not enough.
        - Example :
            - In an Enrollment table:
              (student_id, course_id) together can be a composite primary key (because a student can take multiple courses).
    - 🔑 Unique Key :
        - Like a candidate key: ensures all values are unique, but can allow one null value (depends on DBMS).
        - Can be used to enforce uniqueness on non-primary attributes.
        - Example :
            - In an Employees table:
              email can be a unique key if it's not the primary key.
    - 🔑 Compound Key :
        - PK which is formed using 2 foreign keys.
        - Key with more than one attribute.

<div align = "center"> 
    <img src = 'Pictures/keys.png'  style="border-radius: 15px; height : 450 width: 300px;"> </img>
</div>

# 🔐 Key Constraints

- Key Constraints: The six types of key constraints present in the Database management system are:-

- <p style = "color:green"> NOT NULL </p>
   
    - This constraint will restrict the user from not having a NULL value. It ensures that every element in
      the database has a value.

- <p style = "color:green"> UNIQUE </p>
   
    - This constraint ensures that the values in the column are unique.

- <p style = "color:green"> DEFAULT </p> 
   
   - it is used to set the default value to the column. The default value is added to the columns if no value
  is specified for them.

- <p style = "color:green"> CHECK </p>
   
    - It is one of the integrity constraints in DBMS. It keeps the check that integrity of data is maintained
      before and after the completion of the CRUD.

- <p style = "color:green">  PRIMARY KEY </p>
   
    - This is an attribute or set of attributes that can uniquely identify each entity in the entity set. The
      primary key must contain unique as well as not null values.

- <p style = "color:green"> FOREIGN KEY </p>
   
    - Whenever there is some relationship between two entities, there must be some common
      attribute between them. This common attribute must be the primary key of an entity set and will become the
      foreign key of another entity set. This key will prevent every action which can result in loss of connection
      between tables.

<br> 
<div align = "center"> <h1 style = "color:purple"> 📳 Entity RelationShip Model </h1>  </div>

- <p style = "color:orange"> Data Models </p>
    
    - Collection of conceptual tools for describing data, data relationships, data semantics, and consistency constraints.

- <p style = "color:orange"> ER Model </p>
   
    - it is a high level data model based on a perception of a real world that consists of a collection of basic objects, called entities and of relationships among these objects.
    - Graphical representation of ER Model is ER diagram, which acts as a blueprint of DB.

- <p style = "color:orange"> Entity </p>
   
    - An Entity is a “thing” or “object” in the real world that is distinguishable from all other objects.
        - Entity can be uniquely identified. (By a primary attribute, aka Primary Key)
        - Strong Entity: Can be uniquely identified.
        - Weak Entity: Can’t be uniquely identified., depends on some other strong entity.
        - Weak entity depends on strong entity for existence.

- <p style = "color:orange"> Attributes </p>
   
    - An entity is represented by a set of attributes.
    - Each entity has a value for each of its attributes.
    - For each attribute, there is a set of permitted values, called the domain, or value set, of that attribute.
    - E.g., Student Entity has following attributes
        - studentId
        - studentName
        - course

- <p style = "color:orange"> Types of Attributes </p>
   
   - Simple
        - Attributes which can’t be divided further.
        - E.g., Customer’s account number in a bank, Student’s Roll number etc
    - Composite
        - Can be divided into subparts (that is, other attributes).
        - E.g., Name of a person, can be divided into first-name, middle-name, last-name.
        - Address can also be divided, street, city, state, PIN code.
    - Single Valued
        - Only one value attribute.
        - e.g., Student ID, loan-number for a loan.
    - Multi-Valued
        - Attribute having more than one value.
        - e.g., phone-number, nominee-name on some insurance, dependent-name etc.
    - Derived
        - Value of this type of attribute can be derived from the value of other related attributes.
        - e.g., Age, loan-age, membership-period etc.

- <p style = "color:orange"> Relationships </p>
   
    - Association among two or more entities.
    - e.g., Person has vehicle, Parent has Child, Customer borrow loan etc.
    - Strong Relationship, between two independent entities.
    - Weak Relationship, between weak entity and its owner/strong entity.
        - e.g., Loan <instalment-payments> Payment.
    - Degree of Relationship
        - Number of entities participating in a relationship.
        - Unary, Only one entity participates. e.g., Employee manages employee.
        - Binary, two entities participates. e.g., Student takes Course.
        - Ternary relationship, three entities participates. E.g, Employee works-on branch, employee works-on job.

- Entity Relationship Diagram (ERD)
    - An entity relationship diagram (ER diagram or ERD) is a visual representation of how items in a database relate to each other.

- Relationship
    - One to One
        <div> <img src = 'Pictures/one2one.png'  style="border-radius: 15px; height : 450 width: 300px;"> </img> </div>

    - One to Many
        <div> <img src = 'Pictures/one2many.png'  style="border-radius: 15px; height : 450 width: 300px;"> </img> </div>

    - Many to One
          <div> <img src = 'Pictures/many2one.png'  style="border-radius: 15px; height : 450 width: 300px;"> </img> </div>

    - Many to Many
          <div> <img src = 'Pictures/many2many.png'  style="border-radius: 15px; height : 450 width: 300px;"> </img> </div>

- Strong Entity :
    - An entity that can be uniquely identified by its own attributes, without depending on any other entity.
    - Has a primary key that uniquely identifies each record.
    - In an ER diagram, a strong entity is shown with a single rectangle.

- Weak Entity :
    - An entity that cannot be uniquely identified by its own attributes alone.
    - Depends on a strong entity (called the owner entity) for its identification.
    - In an ER diagram, a weak entity is shown with a double rectangle, and its identifying relationship is shown with a double diamond.

<br> 
<div align = "center"> <h1 style = "color:purple"> 📙 Normalization </h1> </div>

- DBMS Normalization is a systematic approach to decompose (break down) tables to eliminate data redundancy(repetition)
- It is a multi-step process that puts data into tabular form, removes duplicate data, and set up the relationship between tables.

- <p style = "color:green"> 🧠 Why we need Normalization in DBMS ? </p>
   
    - Eliminating redundant(useless) data.
    - Normalization helps in keeping data consistent by storing the data in one table and referencing it everywhere else.
    - Storage optimization although that is not an issue these days because Database storage is cheap
    - Breaking down large tables into smaller tables with relationships, so it makes the database structure more scalable and adaptable.

- <p style = "color:green">  Problems without Normalization in DBMS </p>
   
   - If a table is not properly normalized and has data redundancy(repetition) then it will not only eat up extra memory space but will also make it difficult for you to handle and update the data in the database, without losing data.
    - Insertion, Updation, and Deletion Anomalies are very frequent if the database is not normalized.
    - To understand these anomalies let us take an example of a Student table.

<div align = "center">

| rollno | name | branch | hod  | office_tel |
| :----- | :--- | :----- | :--- | :--------- |
| 401    | Akon | CSE    | Mr.X | 123        |
| 402    | Bkon | CSE    | Mr.X | 123        |
| 403    | Ckon | CSE    | Mr.X | 123        |
| 404    | Dkon | CSE    | Mr.X | 123        |

</div>

- In the table above, we have data for four Computer Sci. students.
    - As we can see, data for the fields branch, hod(Head of Department), and office_tel are repeated for the students who are in the same branch in the college, this is Data Redundancy.

- <p style = "color:green"> Insertion Anomaly in DBMS </p>
   
    - Suppose for a new admission, until and unless a student opts for a branch, data of the student cannot be inserted, or else we will have to set the branch information as NULL.
    - Also, if we have to insert data for 100 students of the same branch, then the branch information will be repeated for all those 100 students.
        - These scenarios are nothing but Insertion anomalies.

- <p style = "color:green"> Updation Anomaly in DBMS </p>
   
    - What if Mr. X leaves the college? or Mr. X is no longer the HOD of the computer science department? In that case, all the student records will have to be updated, and if by mistake we miss any record, it will lead to data inconsistency.
    - This is an Updation anomaly because you need to update all the records in your table just because one piece of information got changed.

- <p style = "color:green"> Deletion Anomaly in DBMS </p>
   
    - In our Student table, two different pieces of information are kept together, the Student information and the Branch information.
    - So if only a single student is enrolled in a branch, and that student leaves the college, or for some reason, the entry for the student is deleted, we will lose the branch information too.
    - So never in DBMS, we should keep two different entities together, which in the above example is Student and branch,

- The solution for all the three anomalies described above is to keep the student information and the branch information in two different tables. And use the branch_id in the student table to reference the branch.

# 📖 Types of DBMS Normal Forms

- <p style = "color:green"> First Normal Form (1NF) </p>
    
    - For a table to be in the First Normal Form, it should follow the following rules:
        - It should only have single(atomic) valued attributes/columns.
        - All the columns in a table should have unique names.
        - Example :

<div align = "center">

Not in 1NF

| StudentID | Name | Subjects           |
| --------- | ---- | ------------------ |
| 1         | Raj  | Math, Physics      |
| 2         | Roy  | Chemistry, Biology |

In 1NF

| StudentID | Name | Subject   |
| --------- | ---- | --------- |
| 1         | Raj  | Math      |
| 1         | Raj  | Physics   |
| 2         | Roy  | Chemistry |
| 2         | Roy  | Biology   |

</div>

- <p style = "color:green"> Second Normal Form (2NF) </p>
   
    - For a table to be in the Second Normal Form, it should follow the following rules:
        - It should be in the First Normal form.
        - It should not have partial dependencies.
        - 🧠 what is a partial dependency ?
            - When a table has a primary key that is made up of two or more columns, then all the columns(not included in the primary key) in that table should depend on the entire primary key and not on a part of it. If any column(which is not in the primary key) depends on a part of the primary key then we say we have Partial dependency in the table.
        - Example

<div align = "center"> 
Not in 2NF

| StudentID | SubjectID | StudentName | SubjectName |
| --------- | --------- | ----------- | ----------- |
| 1         | 101       | Raj         | Math        |
| 1         | 102       | Raj         | Physics     |
| 2         | 103       | Roy         | Chemistry   |

Not in 2NF Because here lets say we have a primary key (studentId, SubjectId) then StudentName here is having a partial dependency as StudentName is only dependent on studentId but on SubjectId;

In 2NF (split it into 3 tables)

| StudentID | StudentName |
| --------- | ----------- |
| 1         | Raj         |
| 2         | Roy         |

| SubjectID | SubjectName |
| --------- | ----------- |
| 101       | Math        |
| 102       | Physics     |
| 103       | Chemistry   |

| StudentID | SubjectID |
| --------- | --------- |
| 1         | 101       |
| 1         | 102       |
| 2         | 103       |

</div>

- <p style = "color:green"> Third Normal Form (3NF) </p>
   
    - For a table to be in the Third Normal Form, it should follow the following rules:
        - It should be in 1NF and 2NF.
        - And, it doesn't have Transitive Dependency.
        - 🧠 what is a Transitive Dependency ?
            - In a table we have some column that acts as the primary key and other columns depends on this column. But what if a column that is not the primary key depends on another column that is also not a primary key or part of it? Then we have Transitive dependency in our table.
        - Example :

<div align = "center"> 
Not in 3NF

| EmployeeID | EmployeeName | DeptID | DeptName | DeptLocation |
| ---------- | ------------ | ------ | -------- | ------------ |
| 1          | Aman         | 10     | IT       | Mumbai       |
| 2          | Neha         | 20     | HR       | Delhi        |

Not in 3BNF because here, DeptName and DeptLocation are non-prime attributes and depend on DeptID, which is not a key but still determines them.

In 3NF (split it into 2 tables)

| EmployeeID | EmployeeName | DeptID |
| ---------- | ------------ | ------ |
| 1          | Aman         | 10     |
| 2          | Neha         | 20     |

| DeptID | DeptName | DeptLocation |
| ------ | -------- | ------------ |
| 10     | IT       | Mumbai       |
| 20     | HR       | Delhi        |

</div>

- <p style = "color:green"> Boyce-Codd Normal Form (BCNF) </p>
   
    - For a table to be in the Boyce-Codd Normal Form, it should follow the following rules:
        - This form deals with a certain type of anomaly that is not handled by 3NF.
        - Must be in 3NF.
        - and, for each functional dependency ( X → Y ), X should be a Super Key.
        - Example :

<div align = "center">
Not in BCNF

| studentId | Course | Instructor |
| --------- | ------ | ---------- |
| 1         | DBMS   | Raj        |
| 2         | DS     | Raj        |
| 3         | AI     | Roy        |

Not in BCNF as Candidate key = (StudentID, CourseID) and CourseID is not a key, but it determines Instructor

In BCNF

| Course | Instructor |
| ------ | ---------- |
| DBMS   | Raj        |
| DS     | Raj        |
| AI     | Roy        |

| studentId | Course |
| --------- | ------ |
| 1         | DBMS   |
| 2         | DS     |
| 3         | AI     |

</div>

- <p style = "color:green"> Fourth Normal Form (4NF) </p>
   
    - For a table to be in the Fourth Normal Form, it should follow the following rules:
        - It is in the Boyce-Codd Normal Form.
        - And, it doesn't have Multi-Valued Dependency.
        - Example :

<div align = "center">
Not in 4NF

| Student | Course | Hobby   |
| ------- | ------ | ------- |
| Raj     | DBMS   | Cricket |
| Raj     | DBMS   | Music   |
| Raj     | AI     | Cricket |
| Raj     | AI     | Music   |

Not in 4NF because here, student can have multiple courses and multiple hobbies, but here course and hobby are independent of each other.

In 4NF

| Student | Course |
| ------- | ------ |
| Raj     | DBMS   |
| Raj     | AI     |

| Student | Hobby   |
| ------- | ------- |
| Raj     | Cricket |
| Raj     | Music   |

</div>

- <p style = "color:green"> Fifth Normal Form (5NF) </p>
   
    - For a table to be in the Fifth Normal Form, it should follow the following rules:
        - It is in the Fourth Normal Form.
        - The fifth normal form is also called the PJNF - Project-Join Normal Form
        - It is the most advanced level of Database Normalization.
        - Using Fifth Normal Form you can fix Join dependency and reduce data redundancy.
        - It also helps in fixing Update anomalies in DBMS design.
        - cannot be decomposed into smaller tables without losing data or introducing redundancy.
        - Example :

<div align = "center"> 
    
| Supplier | Part | Project |
| -------- | ---- | ------- |
| s1        | P1   | j1      |
| s1        | P1   | j2     |
| s1 | p2 | j1|
|s1 | p2 | j2|

Not in 5NF because here a supplier can supply many parts, a supplier can work on many projects and a part can be used in many projects, here all 3 facts are mixed leading to redundant combinations.

In 5NF

| Supplier | Part |
| -------- | ---- |
| S1       | P1   |
| S1       | P2   |

| Supplier | Project |
| -------- | ------- |
| S1       | J1      |
| S1       | J2      |

| Part | Project |
| ---- | ------- |
| P1   | J1      |
| P1   | J2      |
| P2   | J1      |
| P2   | J2      |

</div>

- Advantages of Normal Forms :
    - Reduced data redundancy
    - Improved data consistency
    - Simplified database design
    - Improved query performance
    - Easier database maintenance

- 🧠 When to Use Normalization and Denormalization ?
    - Normalization is best suited for transactional systems where data integrity is paramount, such as banking systems and enterprise applications.
    - Denormalization is ideal for read-heavy applications like data warehousing and reporting systems where performance and query speed are more critical than data integrity.

<br> 
<div align = "center"> <h1 style = "color:purple"> 🤑 Transaction & Concurrency Control </h1> </div>

- A transaction refers to a sequence of one or more operations (such as read, write, update, or delete) performed on the database as a single logical unit of work.

- A transaction ensures that either all the operations are successfully executed (committed) or none of them take effect (rolled back)

- Transactions are designed to maintain the integrity, consistency and reliability of the database, even in the case of system failures or concurrent access.

- <p style = "color:green"> Properties of Transaction </p>
   
    - Transactions in DBMS must ensure data is accurate and reliable. They follow four key ACID properties:
        - Atomicity: A transaction is all or nothing. If any part fails, the entire transaction is rolled back. Example: While transferring money, both debit and credit must succeed. If one fails, nothing should change.
        - Consistency: A transaction must keep the database in a valid state, moving it from one consistent state to another. Example: If balance is ₹1000 and ₹200 is withdrawn, the new balance should be ₹800.
        - Isolation: Transactions run independently. One transaction’s operations should not affect another’s intermediate steps. Example: Two users withdrawing from the same account must not interfere with each other’s balance updates.
        - Durability: Once a transaction is committed, its changes stay even if the system crashes. Example: After a successful transfer, the updated balance remains safe despite a power failure.

- <p style = "color:green"> Transaction Schedules </p>
   
    - When multiple transaction requests are made at the same time, we need to decide their order of execution. Thus, a transaction schedule can be defined as a chronological order of execution of multiple transactions. Example: After a successful transfer, the updated balance remains safe despite a power failure.
    - There are broadly two types of transaction schedules discussed as follows:
        - Serial Schedule :
            - In a serial schedule, transactions execute one at a time, ensuring database consistency but increasing waiting time and reducing system throughput. To improve throughput while maintaining consistency, concurrent schedules with strict rules are used, allowing safe simultaneous execution of transactions.
        - Non-Serial Schedule
            - Non-serial schedule is a type of transaction schedule where multiple transactions are executed concurrently, interleaving their operations, instead of running one after another. It improves system efficiency but requires concurrency control to maintain database consistency.

- <p style = "color:green">  🧠 What is meant by a transaction in DBMS ? </p>
   
    - In DBMS, a transaction is a set of logical operations performed to access and modify the contents of the database as per the user's request.

- <p style = "color:green"> 🧠 What is meant by ACID properties in transactions ? </p>
   
    - ACID is an acronym used for the properties of transaction in DBMS. It is used to denote the properties of transactions, i.e. Atomicity, Consistency, Isolation and Durability.

- <p style = "color:green"> 🧠 What is meant by schedules of transactions in DBMS ? </p>
   
    - When multiple transaction requests are made at the same time, we need to decide the order of execution of these transactions. This chronological order of execution of transactions is called as a schedule of transactions in DBMS. It is mainly of two types, i.e. Serial Schedules and Non Serial Schedules.

- <p style = "color:green"> 🧠What do you mean by serializability in DBMS ? </p>
   
    - Serializability is the property of a schedule of transactions in DBMS which determines whether the database would be in consistent state or not if the transactions are executed following the given schedule.

- <p style = "color:green"> Concurrency Control(higher throughput) </p>
   
   
    - Concurrency control is a critical mechanism in DBMS that ensures the consistency and integrity of data when multiple transactions are performed at the same time.
    - Concurrency control is a concept in Database Management Systems (DBMS) that ensures multiple transactions can simultaneously access or modify data without causing errors or inconsistencies.
    - The main goal of concurrency control is to ensure that simultaneous transactions do not lead to data conflicts or violate the consistency of the database. The concept of serializability is often used to achieve this goal.

- <p style = "color:green"> Problems due to Concurreny </p>
   
    - Dirty Read – A transaction reads uncommitted data from another transaction
    - Lost Update – Two transactions overwrite each other’s changes.
    - Unrepeatable Read – A transaction reads the same data twice but gets different values because another transaction modified it in between.
    - Phantom Read – A transaction re-executes a query and finds new rows inserted by another transaction.
- DBMS uses concurrency control (like locks, timestamps, isolation levels) to avoid these issues.

<br> 
<div align = "center"> <h1 style = "color:purple"> 📚 Indexing in DBMS </h1> </div>

<div align = "center"> <h2 style = "color:orange"> Disk Structure </h2> </div>
<div align = "center">
    <img src = 'Pictures/disk.png'  style="border-radius: 15px; height: 500px; width: 700px;"> </img>
</div>

- Assume each block is of size 512B.
- assume we have a table named Employee of 100 records or rows.

<div align = "center">

| eid     | name    | dep     | sec     | add     |
| ------- | ------- | ------- | ------- | ------- |
| Item1.1 | Item2.1 | Item3.1 | Item4.1 | Item5.1 |
| Item1.2 | Item2.2 | Item3.2 | Item4.2 | Item5.2 |

</div>

- Assume each row is of size 128B then in a block we can store 512 / 128 = 4 rows.
- So, if we want to store each of these 100 records we need to create 100 / 4 = 25 blocks.
- By doing so if we want to search some record we need to traverse all 25 blocks.
- We can do better by creating a index table for Employee table which will store the key value pair i.e Key(eid) and value is a pointer pointing to the block itself saying in which block the information of this record is stored in the disk.
- For each record we will have their entry.
- We store index table in the disk as well.
- Lets say the index table size is 16B then we can st store 512 / 16 = 32 blocks.
- And total blocks required to store all the index table = 100 / 32 = 4 blocks.
- For at most we need any 4 blocks to search through the index table and then we can find the block for the record.
- So in total we need only 4 + 1 = 5 blocks to be searched to find the record not 25 blocks as required without indexing.
- But what if the size of the index table itself is much bigger due to larger number of data in the original table itself.
- In that case we can create a multi-level indexing structure mainting another index table for all the index tables.
- And this the reason why we need to B and B+ Trees.

<div align = "center"> <h2 style = "color:Orange"> B Trees <h2>  </div>

- A B-Tree is a specialized m-way tree designed to optimize data access, especially on disk-based storage systems.
- In a B-Tree of order m, each node can have up to m children and m-1 keys, allowing it to efficiently manage large datasets.
- The value of m is decided based on disk block and key sizes.
- One of the standout features of a B-Tree is its ability to store a significant number of keys within a single node, including large key values. It significantly reduces the tree’s height, hence reducing costly disk operatio
- B Trees allow faster data retrieval and updates, making them an ideal choice for systems requiring efficient and scalable data management. By maintaining a balanced structure at all times,
- B-Trees deliver consistent and efficient performance for critical operations such as search, insertion, and deletion.

<div align = "center"> 
    <img src = 'Pictures/btree.png'  style="border-radius: 15px; height : 450 width: 300px;"> </img>
</div>

- Properties of B Trees :
    - All leaf nodes of a B tree are at the same level, i.e. they have the same depth (height of the tree).
    - The keys of each node of a B tree (in case of multiple keys), should be stored in the ascending order.
    - In a B tree, all non-leaf nodes (except root node) should have at least $m/2$ children.
    - All nodes (except root node) should have at least $m/2 - 1$ keys.
    - A non-leaf node with $n - 1$ key values should have n non NULL children.
    - Keys are inserted in buttom up manner.
    - Height when the B-tree is completely full (i.e., all nodes have the maximum m children):
        - $h_{\min} = \lceil \log_{m}(n+1) \rceil - 1$
    - Height when the B-tree is least filled (each node has the minimum t children):
        - $h_{\max} = \lceil \log_{t}(n+1) \rceil$

<div align = "center"> <h2 style = "color:orange"> B+ Trees </h2> </div>

- A B+ Tree is an advanced data structure used in database systems and file systems to maintain sorted data for fast retrieval, especially from disk. It is an extended version of the B Tree, where all actual data is stored only in the leaf nodes, while internal nodes contain only keys for navigation.

- Components of B+ Tree :
    - Leaf nodes store all the key values and pointers to the actual data.
    - Internal nodes store only the keys that guide searches.
    - All leaf nodes are linked together, supporting efficient sequential and range queries.

# BST vs B-Tree

A **BST (Binary Search Tree)** and a **B-Tree** both store data in sorted order, but they are designed for different use cases.  
The main reason to use a **B-Tree** over a **BST** is **performance in disk-based or large data systems**.

---

## 🔹 Binary Search Tree (BST)

- Each node has at most **2 children**.
- **Operations** (search, insert, delete):
    - **O(log n)** in best/average case (if balanced).
    - **O(n)** in worst case (if skewed/unbalanced).
- Stored usually in **memory (RAM)**, where accessing nodes is cheap (constant time).

---

## 🔹 B-Tree

- A **generalization of BST** → each node can have **many keys** and **many children** (not limited to 2).
- Nodes are designed to match the **block size of disks/pages** in databases.
- Each read/write loads an entire **block**, reducing **disk I/O**.
- **Operations** (search, insert, delete): **O(log n)**, but with **fewer disk reads**.
- Always kept **balanced** (height is low).

---

## ⚡ Why B-Tree over BST?

1. **Disk I/O minimization**
    - Accessing disk is **millions of times slower** than RAM.
    - BST may require traversing many small nodes → many disk reads.
    - B-Tree packs many keys in one node → fewer disk accesses.

2. **Guaranteed balance**
    - B-Tree is **always balanced** (low height).
    - BST can become skewed like a linked list unless extra balancing (AVL, Red-Black).

3. **Databases & File Systems**
    - Used in **databases, indexing, and file systems** (NTFS, EXT4, HFS+).
    - Optimized for **range queries** and **sequential access**.

---

## 👉 In short

- **Use BST** when data fits in memory and you want simplicity.
- **Use B-Tree** when data is on **disk/storage** and you need efficient indexing with **minimal disk reads**.

# 🔹 Difference between B-Tree and B+ Tree

---

## 1. Where keys and data are stored

- **B-Tree**
    - Both **keys + data** (records/pointers to records) can be stored in **internal nodes** and **leaf nodes**.
    - Searching might **stop at an internal node**.

- **B+ Tree**
    - Internal nodes store **only keys** (indexing), **no data**.
    - Leaf nodes store **all actual data/record pointers**.
    - All leaves are **linked together** (linked list).

---

## 2. Search Efficiency

- **B-Tree**: Search may **stop early** at internal nodes → not consistent.
- **B+ Tree**: Always goes to the **leaf level** → predictable search time.

---

## 3. Range Queries

- **B-Tree**: No direct way to scan sequentially → need **in-order traversal**.
- **B+ Tree**: Leaves are linked → **fast sequential access** and **range queries** (e.g., `WHERE age BETWEEN 20 AND 30`).

---

## 4. Space Utilization

- **B-Tree**: Internal nodes hold both **keys + data** → fewer keys per node → **larger height**.
- **B+ Tree**: Internal nodes hold **only keys** → more branching factor → **smaller height**, fewer disk I/Os.

---

## ⚡ Why DBMS and File Systems Prefer B+ Tree

- **Better disk read efficiency** → shorter, broader tree (internal nodes are smaller).
- **Fast range queries** → leaf nodes are linked list.
- **Consistent access time** → every search goes to leaf.
- **Efficient sequential scans** of entire table/index.

---

## 🔹 Example

Suppose **block size = 4 KB**:

- **B-Tree**: Internal node stores **keys + record pointers**, so it may hold ~50 keys.
- **B+ Tree**: Internal node stores **only keys**, so it can hold ~200+ keys.

👉 Tree height shrinks a lot → fewer disk accesses.

---

## ✅ In short

We use **B+ Tree** over **B-Tree** because it gives:

- Smaller height (**fewer disk I/Os**)
- Better **range queries** (linked leaves)
- **Predictable search time** (always goes to leaves)

# 🔍 Need of Indexing in DBMS

Indexing in DBMS is like the **index of a book** – instead of scanning every page to find a topic, you directly go to the page number from the index.

Without indexing, the database might need to **scan the entire table (linear search)**, which is very slow for large datasets.

---

## ✅ Why Indexing is Needed?

### 1. Faster Data Retrieval

- Speeds up queries by avoiding full table scans.
- Example: Searching for `EmployeeID = 105` in a table of **1M rows** → index allows quick access instead of scanning all rows.

### 2. Efficient Searching

- Index uses **tree structures** (B-Tree, B+ Tree) or **hashing**.
- Reduces search complexity from **O(n)** → **O(log n)** or even **O(1)**.

### 3. Improves Range Queries

- Ordered indexes make queries like:

# 📂 Dense Index vs Sparse Index

## 🔹 1. Dense Index

**Definition**: For every search key value in the data file, there exists an index entry.

### How it works:

- Suppose we have records `A, B, C, D, F, H`.
- The index contains an entry for **every key** (`A, B, C, D, F, H`).
- Each index entry points directly to the location of that record in the data file.

### ✅ Advantages:

- Very fast lookups (because every record has an index entry).
- Direct access to any record.

### ❌ Disadvantages:

- More space overhead (since index stores one entry for each record).
- Slower inserts/deletes (index must also be updated for every change).

**Use case**: When fast retrieval is critical, and space overhead is acceptable.

## 🔹 2. Sparse Index

**Definition**: Index records are created **only for some search key values** (not all).

### How it works:

- Index stores only a **few keys** (e.g., first record of each block/page: `A, D, G, L...`).
- To search:
    1. Use the index to find the **closest key ≤ search value**.
    2. Then scan sequentially in the data file until the exact record is found.

### ✅ Advantages:

- Much smaller index size (less space needed).
- Faster to maintain (fewer updates).

### ❌ Disadvantages:

- Slower lookups (may require scanning records within a block).
- Works only if data file is stored in **sorted order**.

**Use case**: When dataset is huge, and space efficiency is more important than fastest possible lookup.

<img src = "Pictures/denseandsparse.png"> </img>

## ⚡ Key Differences (Dense vs Sparse)

| Feature                | Dense Index 🟢            | Sparse Index 🟡                           |
| ---------------------- | ------------------------- | ----------------------------------------- |
| **Index entries**      | One for **every record**  | One for **few records** (e.g., per block) |
| **Space requirement**  | High                      | Low                                       |
| **Search speed**       | Very fast (direct access) | Slower (needs sequential scan)            |
| **Maintenance**        | Costly (frequent updates) | Easier (fewer updates)                    |
| **Works with sorted?** | Not necessary             | **Necessary**                             |

👉 **In short**:

- **Dense Index** → Faster, but larger index.
- **Sparse Index** → Smaller, but slower (requires sequential scan).

# 📌 Single Level Indexing vs Multilevel Indexing

---

## 📌 Single Level Indexing

- In this approach, **one index file** is created for the data file.
- The index file contains **pointers to the actual data records**.

### 🔎 Searching process:

1. Look up the index.
2. Use it to directly access the data file.

👉 Works fine for **small datasets**, but as data grows, the index itself becomes too large, leading to **slow searches**.

---

## 📌 Multilevel Indexing

- Instead of keeping **one large index**, we create **indexes on indexes**.
- The first-level index points to **second-level indexes**, which in turn point to the **data blocks**.

### 🔎 Searching process:

1. Start from the **top-level index**.
2. Narrow down step by step until you reach the data file.

👉 This reduces the **search time drastically** because each index file is smaller and can be searched quickly.

---

<img src = "Pictures/sm.png"> </img>

## ⚡ Comparison

| Feature               | Single Level Indexing 🟢     | Multilevel Indexing 🟡             |
| --------------------- | ---------------------------- | ---------------------------------- |
| **Structure**         | One index file               | Multiple levels of indexes         |
| **Search time**       | Slower for large data (O(n)) | Much faster (like O(log n))        |
| **Space requirement** | Requires large index file    | Smaller indexes at multiple levels |
| **Use case**          | Small databases              | Large databases                    |

---

## ✅ Real-Life Analogy

- **Single Level Indexing** → Like having a book with **one index list** at the back. If the index is huge, it takes time to find.
- **Multilevel Indexing** → Like having a **dictionary with tabs (A, B, C…)** → first you go to the tab, then to the word → faster navigation.

---

👉 **In short**:

- **Single Level Index** → Simple but inefficient for huge data.
- **Multilevel Index** → Hierarchical structure (like **B-Tree**), reduces search time and improves efficiency for large databases.

<div align = "center"> <h2 style = "color:orange"> Indexing </h2> </div>

- Indexing in DBMS is used to speed up data retrieval by minimizing disk scans.
- When an index is created, it stores sorted key values and pointers to actual data rows. This reduces the number of disk accesses, improving performance especially on large datasets.

<div align = "center"> 
    <img src = 'Pictures/indexing.png'  style="border-radius: 15px; height : 450 width: 300px;"> </img>
</div>

- The data in which in the form of table are logically represented but are not actually stored in db.
- They are stored in the form of Data Pages.
- DBMS creates Data Pages (generally of 8KB depends upon db to db).
- Each page can store multiple table rows in it.

<div> 
    <img src = 'Pictures/datapages.png'  style="border-radius: 15px; height : 450 width: 300px;"> </img>
</div>

- These data pages untimately gets stored in the data block in physical memory.
- <p style = "color:green"> 🧠 what is a data block ? </p>
   
    - Data block is the minimum amount of data which can be read/write by and I/O operation.
    - It is managed by underlying storage system like disks.
    - Data block size can range from 4KB to 32KB.

- DBMS maintains the mapping of Data Page and Data Block.

- Atrributes of indexing :
    - Access Types: This refers to the type of access such as value-based search, range access, etc.
    - Access Time: It refers to the time needed to find a particular data element or set of elements.
    - Insertion Time: It refers to the time taken to find the appropriate space and insert new data.
    - Deletion Time: Time taken to find an item and delete it as well as update the index structure.
    - Space Overhead: It refers to the additional space required by the index.

# 📚 Types of Indexing in DBMS

Indexing is a data structure technique to quickly retrieve records from a database.  
It improves the speed of operations but may add overhead in terms of storage and maintenance.

<div align = "center">

```mermaid
graph TD
    A[Indexing]
    A --> B[Primary Indexing]
    A --> C[Secondary Indexing]
    A --> D[Clustering Indexing]
    B --> E[Dense]
    B --> F[Sparse]
```

</div>

<div align = "center">

| Ordered Files   | Primary Index(Sparse) | Clustered Index |
| --------------- | --------------------- | --------------- |
| Unordered Files | Secondary Index       | Secondary Index |
|                 | Key                   | Non-Key         |

</div>

- Primary Index
    - Defined on the **primary key** of a table.
    - The index entries are **sorted on the primary key field**.
    - Each record in the data file is uniquely identified.
    - ✅ Example:
        - StudentID (Primary Key) → Points to Student Record.

<div align = "center">
<img src = 'Pictures/primaryIndex.png'> </img>
</div>

- Here sparse is index is used (since the key is unique and they are sorted in tables as well).
- Just in case if the keys in table is unique but they are not in sorted order then for each entries we need to make the pointer to its address or block in index table, making is dense.

- Secondary Index
    - Defined on a **non-primary key (candidate key or other attribute)**.
    - Provides an additional path to retrieve data efficiently.
    - Can have multiple secondary indexes for different attributes.
    - ✅ Example:
        - Name (Secondary Key) → Points to Student Record(s)

- Clustered Index
    - The **ordering of the index** determines the **physical order of records** in the data file.
    - A table can have **only one clustered index**.
    - Often created on primary key by default.
    - ✅ Example:
        - Clustered on RollNo → Records stored in sorted order of RollNo.

- Non-Clustered Index
    - The **index is stored separately** from the actual data.
    - Contains pointers to the data location.
    - A table can have **multiple non-clustered indexes**.
    - ✅ Example:
        - Non-Clustered on Name → Index table points to actual record locations.

- Dense Index
    - Index entry for **every search key value** in the data file.
    - Faster lookup but requires more storage.
    - ✅ Example:
        - Key: 10 → Record Address - Key: 20 → Record Address - Key: 30 → Record Address

- Sparse Index
    - Index entries only for **some search key values**.
    - Saves space but lookup may take longer.
    - ✅ Example:
        - Key: 10 → Record Address - Key: 30 → Record Address - (Skips 20, must traverse from 10 or 30)

# 📊 Summary Table

| Index Type      | Key Field        | Record Order | Multiple Allowed | Storage Usage |
| --------------- | ---------------- | ------------ | ---------------- | ------------- |
| Primary Index   | Primary Key      | Sorted       | ❌ No            | Medium        |
| Secondary Index | Non-Primary Key  | Unsorted     | ✅ Yes           | High          |
| Clustered Index | Any (usually PK) | Sorted       | ❌ No            | Medium        |
| Non-Clustered   | Any Attribute    | Unsorted     | ✅ Yes           | High          |
| Dense Index     | All Keys         | Direct Map   | -                | High          |
| Sparse Index    | Some Keys        | Indirect Map | -                | Low           |

