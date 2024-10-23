const questions = {
    Servlets: [
    { question: "What is the lifecycle method in servlets?", options: ["init()", "service()", "destroy()", "All of the above"], answer: "All of the above" },
    { question: "Which protocol is primarily used by servlets?", options: ["HTTP", "FTP", "SMTP", "TCP"], answer: "HTTP" },
    { question: "Which of the following is not a valid HttpServlet method?", options: ["doGet()", "doPost()", "doPush()", "doDelete()"], answer: "doPush()" },
    { question: "Which method is used to read form data from a client?", options: ["getParameter()", "getInputStream()", "getOutputStream()", "getWriter()"], answer: "getParameter()" },
    { question: "Which interface must be implemented by all servlets?", options: ["HttpServlet", "GenericServlet", "Servlet", "ServletConfig"], answer: "Servlet" },
    { question: "What does the service method do in a servlet?", options: ["Initializes the servlet", "Handles requests", "Destroys the servlet", "None of the above"], answer: "Handles requests" },
    { question: "What is the purpose of the init() method?", options: ["To destroy the servlet", "To initialize servlet parameters", "To read client requests", "To send responses"], answer: "To initialize servlet parameters" },
    { question: "What is the typical use of the destroy() method?", options: ["Initialize resources", "Release resources", "Send responses", "None of the above"], answer: "Release resources" },
    { question: "What class do servlets extend?", options: ["Servlet", "HttpServlet", "GenericServlet", "ServletRequest"], answer: "HttpServlet" },
    { question: "What is a servlet context?", options: ["Request parameter", "Global information for the servlet", "User session", "Data source"], answer: "Global information for the servlet" },
    { question: "What is the difference between doGet() and doPost()?", options: ["GET is for form submission, POST is for data retrieval", "GET is for data retrieval, POST is for form submission", "Both are the same", "None of the above"], answer: "GET is for data retrieval, POST is for form submission" },
    { question: "Which object is used to send a response from the servlet?", options: ["HttpServletResponse", "HttpResponse", "ServletResponse", "RequestResponse"], answer: "HttpServletResponse" },
    { question: "What does the getServletConfig() method return?", options: ["Servlet context", "Servlet name", "Servlet configuration", "None of the above"], answer: "Servlet configuration" },
    { question: "How are servlets mapped to URLs?", options: ["Through annotations", "Through web.xml", "Both A and B", "None of the above"], answer: "Both A and B" },
    { question: "Which of the following is true about servlets?", options: ["They are platform-independent", "They run on the client-side", "They can handle multiple requests concurrently", "None of the above"], answer: "They can handle multiple requests concurrently" }
],
JSP: [
    { question: "What does JSP stand for?", options: ["Java Server Pages", "Java Simple Pages", "Java Script Pages", "Java Style Pages"], answer: "Java Server Pages" },
    { question: "Which tag is used to include a file in JSP?", options: ["<jsp:include>", "<jsp:import>", "<jsp:includeFile>", "<jsp:useBean>"], answer: "<jsp:include>" },
    { question: "Which directive is used to declare a variable in JSP?", options: ["<jsp:variable>", "<%!>", "<%>", "<%-- >"], answer: "<%!" },
    { question: "Which of the following is not a valid JSP action?", options: ["<jsp:forward>", "<jsp:include>", "<jsp:action>", "<jsp:useBean>"], answer: "<jsp:action>" },
    { question: "How do you set a cookie in JSP?", options: ["response.setCookie()", "response.addCookie()", "request.setCookie()", "request.addCookie()"], answer: "response.addCookie()" },
    { question: "What is the main purpose of JSP?", options: ["To generate HTML", "To manage server-side logic", "To handle client requests", "To connect to a database"], answer: "To generate HTML" },
    { question: "What is the syntax to declare a scriptlet in JSP?", options: ["<%! ... %>", "<% ... %>", "<jsp:scriptlet>", "<%-- ... --%>"], answer: "<% ... %>" },
    { question: "Which tag is used to create a bean in JSP?", options: ["<jsp:bean>", "<jsp:useBean>", "<jsp:setProperty>", "<jsp:getProperty>"], answer: "<jsp:useBean>" },
    { question: "Which method is called to handle requests in JSP?", options: ["doGet()", "doPost()", "service()", "None of the above"], answer: "service()" },
    { question: "What is the difference between include and forward in JSP?", options: ["Include is for dynamic content, forward is for static content", "Include includes content at request time, forward sends the request to another resource", "Both are the same", "None of the above"], answer: "Include includes content at request time, forward sends the request to another resource" },
    { question: "How can you access request parameters in JSP?", options: ["request.getParameter()", "response.getParameter()", "session.getParameter()", "context.getParameter()"], answer: "request.getParameter()" },
    { question: "Which of the following is true about JSP expressions?", options: ["They can contain scriptlets", "They are evaluated and converted to string", "They cannot include HTML", "None of the above"], answer: "They are evaluated and converted to string" },
    { question: "What is the default file extension for JSP files?", options: [".jsp", ".js", ".html", ".java"], answer: ".jsp" },
    { question: "How do you comment in JSP?", options: ["// comment", "/* comment */", "<%-- comment --%>", "//comment"], answer: "<%-- comment --%>" },
    { question: "What does the <jsp:forward> action do?", options: ["Redirects to another page", "Includes another page", "Sends data to the client", "None of the above"], answer: "Redirects to another page" },
    { question: "Which of the following is a valid way to use scriptlets in JSP?", options: ["<% out.println(\"Hello World\"); %>", "<jsp:scriptlet>out.println(\"Hello World\");</jsp:scriptlet>", "<%-- out.println(\"Hello World\"); --%>", "<jsp:output>out.println(\"Hello World\");</jsp:output>"], answer: "<% out.println(\"Hello World\"); %>" }
],
"Basic HTML": [
{ question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Multi Language", "None of the above"], answer: "HyperText Markup Language" },
{ question: "Which HTML tag is used for the largest heading?", options: ["<h1>", "<heading>", "<h6>", "<head>"], answer: "<h1>" },
{ question: "Which HTML element defines the title of a document?", options: ["<title>", "<head>", "<meta>", "<link>"], answer: "<title>" },
{ question: "Which attribute is used to specify the URL of an image in the <img> tag?", options: ["src", "href", "alt", "link"], answer: "src" },
{ question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<br>", "<lb>", "<line>"], answer: "<br>" },
{ question: "Which tag is used to create an unordered list?", options: ["<ul>", "<ol>", "<list>", "<item>"], answer: "<ul>" },
{ question: "What is the purpose of the <a> tag in HTML?", options: ["To create a hyperlink", "To display an image", "To format text", "To create a table"], answer: "To create a hyperlink" },
{ question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", options: ["alt", "title", "src", "href"], answer: "alt" },
{ question: "What does the <form> tag in HTML define?", options: ["A table", "An input form", "A hyperlink", "A section of a webpage"], answer: "An input form" },
{ question: "Which tag is used to define an input field?", options: ["<input>", "<textfield>", "<forminput>", "<field>"], answer: "<input>" },
{ question: "What is the correct HTML for creating a checkbox?", options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<input checkbox>"], answer: "<input type='checkbox'>" },
{ question: "Which HTML tag is used for creating a table?", options: ["<table>", "<tab>", "<tbody>", "<tr>"], answer: "<table>" },
{ question: "What is the purpose of the <meta> tag in HTML?", options: ["To define metadata about an HTML document", "To create links", "To display images", "To format text"], answer: "To define metadata about an HTML document" },
{ question: "Which HTML element is used to define the footer for a document or section?", options: ["<footer>", "<bottom>", "<section>", "<aside>"], answer: "<footer>" },
{ question: "Which tag is used to create a dropdown list?", options: ["<select>", "<dropdown>", "<list>", "<options>"], answer: "<select>" }
],

"Bootstrap": [
{ question: "What is Bootstrap?", options: ["A JavaScript library", "A CSS framework", "A PHP framework", "A HTML tag"], answer: "A CSS framework" },
{ question: "Which class is used to create a button in Bootstrap?", options: ["btn", "button", "btn-primary", "btn-success"], answer: "btn" },
{ question: "What is the default container class used in Bootstrap?", options: [".container-fluid", ".container", ".container-box", ".container-default"], answer: ".container" },
{ question: "Which Bootstrap class is used for a responsive image?", options: ["img-responsive", "img-fluid", "responsive-img", "img-responsive-center"], answer: "img-fluid" },
{ question: "What does the class 'alert alert-success' do in Bootstrap?", options: ["Displays a success message", "Creates a warning", "Creates an error message", "No effect"], answer: "Displays a success message" },
{ question: "Which Bootstrap component is used to create a navigation bar?", options: ["navbar", "nav", "navigation", "nav-bar"], answer: "navbar" },
{ question: "Which class is used to create a grid layout in Bootstrap?", options: [".row", ".grid", ".container", ".column"], answer: ".row" },
{ question: "What is the purpose of the 'data-toggle' attribute in Bootstrap?", options: ["To add functionality to buttons", "To create tooltips", "To control modal visibility", "To trigger JavaScript actions"], answer: "To control modal visibility" },
{ question: "How do you specify a primary button in Bootstrap?", options: ["class='btn-primary'", "class='btn-primary btn'", "class='btn success'", "class='btn primary'"], answer: "class='btn-primary'" },
{ question: "What does the class 'card' represent in Bootstrap?", options: ["A modal", "A layout component", "A container for content", "A button"], answer: "A container for content" },
{ question: "Which class would you use to align content to the center in Bootstrap?", options: ["text-center", "align-center", "content-center", "middle"], answer: "text-center" },
{ question: "Which class is used to create a form in Bootstrap?", options: ["form", "form-group", "form-container", "form-input"], answer: "form-group" },
{ question: "What is the purpose of the 'col-*' classes in Bootstrap?", options: ["To define column width", "To define row height", "To create buttons", "To format text"], answer: "To define column width" },
{ question: "How can you create a dropdown menu in Bootstrap?", options: ["Using .dropdown class", "Using .dropdown-menu class", "Using .menu class", "Using .drop class"], answer: "Using .dropdown class" },
{ question: "What Bootstrap class is used to create a responsive table?", options: [".table-responsive", ".table-fluid", ".responsive-table", ".table"], answer: ".table-responsive" }
],

    "Data Storage and Manipulation": [
{ question: "Which of the following is a method for data storage?", options: ["Relational Database", "Flat Files", "NoSQL", "All of the above"], answer: "All of the above" },
{ question: "What is SQL used for?", options: ["Data retrieval", "Data manipulation", "Database creation", "All of the above"], answer: "All of the above" },
{ question: "What does the acronym 'CRUD' stand for?", options: ["Create, Read, Update, Delete", "Create, Retrieve, Update, Delete", "Control, Read, Update, Delete", "Create, Read, Upload, Delete"], answer: "Create, Read, Update, Delete" },
{ question: "Which SQL statement is used to extract data from a database?", options: ["GET", "SELECT", "EXTRACT", "PICK"], answer: "SELECT" },
{ question: "What is a primary key in a database?", options: ["A unique identifier for a record", "A foreign key reference", "A type of data", "A constraint"], answer: "A unique identifier for a record" },
{ question: "What does 'normalization' do in a database?", options: ["Reduces redundancy", "Increases complexity", "Creates views", "None of the above"], answer: "Reduces redundancy" },
{ question: "Which of the following is a NoSQL database?", options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"], answer: "MongoDB" },
{ question: "What is an 'index' in a database?", options: ["A way to speed up queries", "A type of database", "A storage method", "A data type"], answer: "A way to speed up queries" },
{ question: "Which SQL clause is used to filter records?", options: ["FILTER", "WHERE", "HAVING", "GROUP BY"], answer: "WHERE" },
{ question: "Which command is used to add new records to a database?", options: ["INSERT", "ADD", "UPDATE", "CREATE"], answer: "INSERT" },
{ question: "What is a foreign key?", options: ["A key used to identify a record", "A key linking two tables", "A key in a single table", "A data type"], answer: "A key linking two tables" },
{ question: "Which SQL statement is used to modify existing records?", options: ["UPDATE", "MODIFY", "EDIT", "CHANGE"], answer: "UPDATE" },
{ question: "What is a 'view' in SQL?", options: ["A virtual table", "A physical table", "A stored procedure", "A data type"], answer: "A virtual table" },
{ question: "Which SQL command is used to delete a table?", options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "CLEAR TABLE"], answer: "DROP TABLE" },
{ question: "What is the purpose of a 'join' in SQL?", options: ["To combine rows from two or more tables", "To separate tables", "To create a backup", "To remove duplicates"], answer: "To combine rows from two or more tables" }
],
    "Basics": [
{ question: "What does DBMS stand for?", options: ["Database Management System", "Data Backup Management System", "Database Master System", "Data Business Management System"], answer: "Database Management System" },
{ question: "Which of the following is a type of DBMS?", options: ["Relational DBMS", "Hierarchical DBMS", "Network DBMS", "All of the above"], answer: "All of the above" },
{ question: "What is the primary purpose of a DBMS?", options: ["Data storage", "Data manipulation", "Data retrieval", "All of the above"], answer: "All of the above" },
{ question: "Which language is primarily used to interact with a DBMS?", options: ["HTML", "SQL", "Python", "Java"], answer: "SQL" },
{ question: "What is a schema in a database?", options: ["A blueprint of the database structure", "A table in a database", "A type of query", "A database user"], answer: "A blueprint of the database structure" },
{ question: "What is a data model?", options: ["A representation of data structures", "A physical storage method", "A data retrieval method", "A programming language"], answer: "A representation of data structures" },
{ question: "Which of the following is not a characteristic of DBMS?", options: ["Data independence", "Data integrity", "Redundancy", "Data security"], answer: "Redundancy" },
{ question: "What is a transaction in the context of a DBMS?", options: ["A single unit of work", "A database backup", "A data retrieval process", "An error in the database"], answer: "A single unit of work" },
{ question: "What does ACID stand for in database management?", options: ["Atomicity, Consistency, Isolation, Durability", "Automatic, Consistent, Isolated, Durable", "Atomic, Controlled, Isolated, Durable", "Atomicity, Control, Isolation, Data"], answer: "Atomicity, Consistency, Isolation, Durability" },
{ question: "Which of the following is an advantage of using a DBMS?", options: ["Improved data sharing", "Increased data redundancy", "Increased data inconsistency", "Reduced data security"], answer: "Improved data sharing" },
{ question: "What is a data dictionary?", options: ["A repository of metadata", "A type of database", "A user manual", "A programming tool"], answer: "A repository of metadata" },
{ question: "What does a relational database use to connect tables?", options: ["Keys", "Indexes", "Foreign keys", "All of the above"], answer: "All of the above" },
{ question: "Which of the following statements is true regarding DBMS?", options: ["DBMS eliminates data redundancy", "DBMS increases data isolation", "DBMS is more secure than flat files", "All of the above"], answer: "All of the above" },
{ question: "Which type of DBMS organizes data in a tree-like structure?", options: ["Relational DBMS", "Hierarchical DBMS", "Network DBMS", "Object-oriented DBMS"], answer: "Hierarchical DBMS" },
{ question: "What is an entity in a database?", options: ["A real-world object or concept", "A database table", "A data type", "A user"], answer: "A real-world object or concept" }
],

    "SQL": [
{ question: "What does SQL stand for?", options: ["Structured Query Language", "Structured Question Language", "Schematic Query Language", "None of the above"], answer: "Structured Query Language" },
{ question: "Which SQL statement is used to extract data from a database?", options: ["GET", "SELECT", "EXTRACT", "PULL"], answer: "SELECT" },
{ question: "Which SQL clause is used to filter records?", options: ["WHERE", "FILTER", "HAVING", "SELECT"], answer: "WHERE" },
{ question: "Which SQL statement is used to insert new data into a table?", options: ["ADD", "INSERT INTO", "PUT", "ADD RECORD"], answer: "INSERT INTO" },
{ question: "Which of the following is used to update existing records in a table?", options: ["MODIFY", "UPDATE", "SET", "CHANGE"], answer: "UPDATE" },
{ question: "What is the purpose of the DELETE statement in SQL?", options: ["To remove records", "To modify records", "To extract records", "To add records"], answer: "To remove records" },
{ question: "Which SQL function is used to count the number of rows in a table?", options: ["COUNT()", "SUM()", "TOTAL()", "ADD()"], answer: "COUNT()" },
{ question: "What keyword is used to sort the result-set in SQL?", options: ["ORDER BY", "SORT BY", "GROUP BY", "FILTER BY"], answer: "ORDER BY" },
{ question: "Which SQL command is used to create a new table?", options: ["CREATE TABLE", "NEW TABLE", "ADD TABLE", "MAKE TABLE"], answer: "CREATE TABLE" },
{ question: "What is a primary key?", options: ["A unique identifier for a record", "A foreign key", "A type of index", "A table constraint"], answer: "A unique identifier for a record" },
{ question: "Which operator is used to compare a value to a specified list of values?", options: ["BETWEEN", "IN", "LIKE", "ANY"], answer: "IN" },
{ question: "What does the JOIN clause do in SQL?", options: ["Combines rows from two or more tables", "Filters data", "Sorts data", "Creates a new table"], answer: "Combines rows from two or more tables" },
{ question: "Which SQL statement is used to retrieve unique records from a table?", options: ["DISTINCT", "UNIQUE", "FILTER", "SELECT DISTINCT"], answer: "SELECT DISTINCT" },
{ question: "Which SQL function is used to find the maximum value in a column?", options: ["MAX()", "LARGEST()", "BIGGEST()", "TOP()"], answer: "MAX()" },
{ question: "What is the purpose of the GROUP BY clause in SQL?", options: ["To group rows that have the same values", "To filter rows", "To sort rows", "To join tables"], answer: "To group rows that have the same values" }
],

    "PL/SQL": [
{ question: "What does PL/SQL stand for?", options: ["Procedural Language/SQL", "Programming Language/SQL", "Programming Language/Structured Query Language", "None of the above"], answer: "Procedural Language/SQL" },
{ question: "Which of the following is a feature of PL/SQL?", options: ["Block structure", "Error handling", "Modularity", "All of the above"], answer: "All of the above" },
{ question: "What is a PL/SQL block?", options: ["A single statement", "A collection of statements", "A procedure", "A function"], answer: "A collection of statements" },
{ question: "Which keyword is used to define a PL/SQL procedure?", options: ["DEFINE", "PROCEDURE", "BEGIN", "FUNCTION"], answer: "PROCEDURE" },
{ question: "How do you declare a variable in PL/SQL?", options: ["VAR variable_name datatype;", "variable_name datatype;", "DECLARE variable_name datatype;", "DEFINE variable_name datatype;"], answer: "DECLARE variable_name datatype;" },
{ question: "Which of the following is used to handle exceptions in PL/SQL?", options: ["EXCEPTION", "ERROR", "CATCH", "HANDLE"], answer: "EXCEPTION" },
{ question: "What does the keyword 'RETURN' do in a PL/SQL function?", options: ["Exits the block", "Returns a value", "Creates a variable", "Declares an exception"], answer: "Returns a value" },
{ question: "What is the purpose of the 'LOOP' statement in PL/SQL?", options: ["To execute a block of code repeatedly", "To define a variable", "To handle exceptions", "To declare a procedure"], answer: "To execute a block of code repeatedly" },
{ question: "Which PL/SQL construct is used for conditional processing?", options: ["IF...THEN", "CASE", "SWITCH", "A and B"], answer: "A and B" },
{ question: "What is a cursor in PL/SQL?", options: ["A database connection", "A pointer to the result set", "A variable", "A block of code"], answer: "A pointer to the result set" },
{ question: "What is the purpose of the 'COMMIT' statement in PL/SQL?", options: ["To save changes to the database", "To rollback changes", "To define a variable", "To create a procedure"], answer: "To save changes to the database" },
{ question: "How can you define a PL/SQL function?", options: ["FUNCTION function_name RETURN datatype", "FUNCTION function_name datatype", "CREATE FUNCTION function_name", "DEFINE FUNCTION function_name"], answer: "FUNCTION function_name RETURN datatype" },
{ question: "What is the difference between a procedure and a function in PL/SQL?", options: ["A function returns a value, while a procedure does not", "A procedure returns a value, while a function does not", "They are the same", "A function is faster"], answer: "A function returns a value, while a procedure does not" },
{ question: "Which PL/SQL statement is used to define a cursor?", options: ["DECLARE CURSOR cursor_name AS", "CURSOR cursor_name", "DEFINE cursor_name AS", "BEGIN cursor_name AS"], answer: "DECLARE CURSOR cursor_name AS" },
{ question: "What happens when an exception is raised in PL/SQL?", options: ["Execution stops", "Control transfers to the EXCEPTION section", "It is ignored", "It is logged"], answer: "Control transfers to the EXCEPTION section" }
],

    "ACID Properties": [
        { question: "What does ACID stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Atomicity, Consistency, Integration, Durability", "Atomicity, Clarity, Isolation, Durability", "None of the above"], answer: "Atomicity, Consistency, Isolation, Durability" },
        { question: "What does 'Atomicity' in ACID properties ensure?", options: ["All or nothing execution", "Data integrity", "Transaction isolation", "None of the above"], answer: "All or nothing execution" },
    ],
    "Views and Joins": [
        { question: "What is a view in SQL?", options: ["A virtual table", "A physical table", "A type of join", "None of the above"], answer: "A virtual table" },
        { question: "What type of join returns all records from the left table and matched records from the right table?", options: ["Inner Join", "Outer Join", "Left Join", "Right Join"], answer: "Left Join" },

    ],
    "Designing Learning Systems": [
        { question: "What is the first step in designing a learning system?", options: ["Collecting data", "Data preprocessing", "Defining the problem", "Model evaluation"], answer: "Defining the problem" },
        { question: "What does feature selection involve?", options: ["Choosing the best model", "Selecting relevant features", "Scaling data", "All of the above"], answer: "Selecting relevant features" },
    ],
    "Supervised Learning": [
        { question: "What is supervised learning?", options: ["Learning with labeled data", "Learning without labeled data", "Learning from reinforcement", "None of the above"], answer: "Learning with labeled data" },
        { question: "Which algorithm is commonly used in supervised learning?", options: ["K-Means", "Decision Trees", "DBSCAN", "PCA"], answer: "Decision Trees" },
    ],
    "Unsupervised Learning": [
        { question: "What is unsupervised learning?", options: ["Learning with labeled data", "Learning without labeled data", "Learning from feedback", "None of the above"], answer: "Learning without labeled data" },
        { question: "Which algorithm is commonly used in unsupervised learning?", options: ["K-Means", "Linear Regression", "Logistic Regression", "Random Forest"], answer: "K-Means" },
    ],
    "Reinforcement Learning": [
        { question: "What is reinforcement learning?", options: ["Learning from labeled examples", "Learning from trial and error", "Learning with supervision", "None of the above"], answer: "Learning from trial and error" },
        { question: "Which of the following is a common application of reinforcement learning?", options: ["Game playing", "Spam detection", "Image classification", "All of the above"], answer: "Game playing" },
    ],
    Clustering: [
        { question: "What is clustering?", options: ["Grouping similar items", "Sorting items", "Labeling items", "None of the above"], answer: "Grouping similar items" },
        { question: "Which algorithm is commonly used for clustering?", options: ["K-Means", "Linear Regression", "SVM", "Decision Trees"], answer: "K-Means" },
    ],
    "Deep Learning": [
        { question: "What is deep learning?", options: ["A subset of machine learning", "A programming language", "A database technology", "None of the above"], answer: "A subset of machine learning" },
        { question: "What does a neural network consist of?", options: ["Neurons", "Connections", "Layers", "All of the above"], answer: "All of the above" },
    ],
    Robotics: [
        { question: "What is robotics?", options: ["The science of robots", "The study of machines", "The design of intelligent systems", "All of the above"], answer: "The science of robots" },
        { question: "Which of the following is a type of robot?", options: ["Industrial robot", "Service robot", "Medical robot", "All of the above"], answer: "All of the above" },
    ],
    NLP: [
        { question: "What does NLP stand for?", options: ["Natural Language Processing", "Neural Language Programming", "Natural Logic Processing", "None of the above"], answer: "Natural Language Processing" },
        { question: "What is the main goal of NLP?", options: ["To understand human language", "To generate images", "To play games", "All of the above"], answer: "To understand human language" },
    ],
    RAG: [
        { question: "What does RAG stand for?", options: ["Retrieval-Augmented Generation", "Robotics and Automation Group", "Rapid Action Group", "None of the above"], answer: "Retrieval-Augmented Generation" },
        { question: "What is the purpose of RAG models?", options: ["To enhance language models", "To generate images", "To perform clustering", "None of the above"], answer: "To enhance language models" },

    ],
    "IoT": [
        { question: "What does IoT stand for?", options: ["Internet of Things", "Interconnected Objects", "Integrated Online Technology", "None of the above"], answer: "Internet of Things" },
        { question: "Which of the following is an example of IoT?", options: ["Smart thermostat", "Smartphone", "Laptop", "All of the above"], answer: "Smart thermostat" },

    ],
    "Recommender Systems": [
        { question: "What is a recommender system?", options: ["A system that provides suggestions", "A database technology", "A programming language", "None of the above"], answer: "A system that provides suggestions" },
        { question: "Which of the following is a type of recommender system?", options: ["Collaborative filtering", "Content-based filtering", "Hybrid systems", "All of the above"], answer: "All of the above" },

    ],

    "Digital Image Fundamentals": [
        { question: "What is a digital image?", options: ["A matrix of pixels", "A continuous signal", "A type of video", "None of the above"], answer: "A matrix of pixels" },
        { question: "Which of the following represents the color of a pixel?", options: ["RGB values", "CMYK values", "HSV values", "All of the above"], answer: "RGB values" },

    ],
    "Image Enhancement": [
        { question: "What is image enhancement?", options: ["Improving the quality of an image", "Compressing an image", "Reducing the size of an image", "None of the above"], answer: "Improving the quality of an image" },
        { question: "Which technique is commonly used for image enhancement?", options: ["Histogram equalization", "Image compression", "Image segmentation", "All of the above"], answer: "Histogram equalization" },

    ],
    "Image Restoration and Segmentation": [
        { question: "What is image restoration?", options: ["Recovering an image from degradation", "Improving an image's contrast", "Filtering an image", "None of the above"], answer: "Recovering an image from degradation" },
        { question: "What is image segmentation?", options: ["Dividing an image into parts", "Enhancing an image", "Restoring an image", "None of the above"], answer: "Dividing an image into parts" },

    ],
    "Image Representation, Recognition": [
        { question: "What is image representation?", options: ["How an image is stored", "How an image is processed", "How an image is compressed", "None of the above"], answer: "How an image is stored" },
        { question: "What does image recognition involve?", options: ["Identifying objects in images", "Segmenting images", "Enhancing images", "All of the above"], answer: "Identifying objects in images" },

    ],
    "Image Compression": [
        { question: "What is image compression?", options: ["Reducing the size of an image", "Improving image quality", "Enhancing colors", "None of the above"], answer: "Reducing the size of an image" },
        { question: "Which format is commonly used for compressed images?", options: ["JPEG", "PNG", "GIF", "All of the above"], answer: "JPEG" },

    ]
};
let selectedQuestions = [];
let currentQuestionIndex = 0;
let timeRemaining = 900; 
let timerInterval;
let userAnswers = [];
let reviewedQuestions = new Set();

function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function loadTest() {
    const chapter = getQueryParameter('chapter');
    selectedQuestions = questions[chapter];
    if (!selectedQuestions) {
        document.body.innerHTML = '<h2>No questions available for this chapter</h2>';
        return;
    }
    currentQuestionIndex = 0;
    userAnswers = Array(selectedQuestions.length).fill(null);
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const questionContainer = document.getElementById('questionsContainer');
    questionContainer.innerHTML = '';
    const question = selectedQuestions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `<strong>Question ${questionNumber}:</strong> ${question.question}`;
    if (reviewedQuestions.has(currentQuestionIndex)) {
            questionElement.classList.add('reviewed');
        }
    questionContainer.appendChild(questionElement);

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        const userAnswer = userAnswers[currentQuestionIndex];
        const isChecked = userAnswer === option ? 'checked' : '';
        optionElement.innerHTML = `<input type="radio" name="option" value="${option}" ${isChecked} onclick="saveAnswer('${option}')"> ${option}`;
        questionContainer.appendChild(optionElement);
    });
}

function saveAnswer(selectedOption) {
    userAnswers[currentQuestionIndex] = selectedOption;
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitTest();
        } else {
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            document.getElementById('time').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }, 1000);
}

function submitTest() {
    alert("Test submitted!");
    clearInterval(timerInterval);
    let score = 0;
    const results = selectedQuestions.map((question, index) => {
        const isCorrect = userAnswers[index] === question.answer;
        if (isCorrect) score++;
        return {
            questionNumber:index+1,
            question: question.question,
            userAnswer: userAnswers[index],
            correctAnswer: question.answer,
            isCorrect: isCorrect
        };
    });
    let resultHTML = `<h2 style='text-align:center;'>Test Results</h2><p style='text-align:center;'>Your Score: ${score} out of ${selectedQuestions.length}</p>`;
    results.forEach(result => {
        resultHTML += `
            <div class='score'>
                <p><strong>Question ${result.questionNumber}:</strong> ${result.question}</p>
                <p>Your Answer: ${result.userAnswer || 'Not answered'}</p>
                <p>Correct Answer: ${result.correctAnswer}</p>
                <p style="color: ${result.isCorrect ? 'green' : 'red'};">
                    ${result.isCorrect ? 'Correct' : 'Incorrect'}
                </p>
            </div>
        `;
    });

    document.getElementById('answerContainer').innerHTML = resultHTML;
}

function goToHome() {
    window.location.href = 'home.html';
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function markForReview() {
    if (reviewedQuestions.has(currentQuestionIndex)) {
        reviewedQuestions.delete(currentQuestionIndex); 
    } else {
        reviewedQuestions.add(currentQuestionIndex); 
    }
    loadQuestion(); 
}

window.onload = loadTest;
