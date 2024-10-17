import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

public class RegisterServlet extends HttpServlet {
    private Connection con;

    public void init() throws ServletException {
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
            con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "system", "system");
        } catch (ClassNotFoundException e) {
            throw new ServletException("JDBC Driver not found: " + e.getMessage());
        } catch (SQLException e) {
            throw new ServletException("Database connection error: " + e.getMessage());
        }
    }

    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        try {
            String firstName = req.getParameter("first_name");
            String lastName = req.getParameter("last_name");
            String dob = req.getParameter("dob");
            String phone = req.getParameter("phone");
            String email = req.getParameter("email");
            String gender = req.getParameter("gender");
            String language = req.getParameter("language");
            String username = req.getParameter("username");
            String password = req.getParameter("password");
            String checkSQL = "SELECT COUNT(*) FROM reserve1 WHERE Username = ? OR Email = ?";
            try (PreparedStatement checkStmt = con.prepareStatement(checkSQL)) {
                checkStmt.setString(1, username);
                checkStmt.setString(2, email);
                ResultSet rs = checkStmt.executeQuery();
                rs.next();
                int count = rs.getInt(1);
                if (count > 0) {
                    out.println("<h3>Username or Email already exists. Please choose a different one.</h3>");
                    out.println("<a href='register.html'>Go back to registration</a>");
                    return;
                }
            }
            String sql = "INSERT INTO reserve1 (FirstName, LastName, DOB, Phone, Email, Gender, Language, Username, Password) VALUES (?, ?, TO_DATE(?, 'YYYY-MM-DD'), ?, ?, ?, ?, ?, ?)";
            try (PreparedStatement pst = con.prepareStatement(sql)) {
                pst.setString(1, firstName);
                pst.setString(2, lastName);
                pst.setString(3, dob);
                pst.setString(4, phone);
                pst.setString(5, email);
                pst.setString(6, gender);
                pst.setString(7, language);
                pst.setString(8, username);
                pst.setString(9, password);
                int i = pst.executeUpdate();
                if (i > 0) {
                    out.println("<h3>Record inserted successfully!</h3>");
                } else {
                    out.println("<h3>Error inserting record.</h3>");
                }
                out.println("<a href='register.html'>Go back to registration</a>");
            }
        } catch (Exception e) {
            out.println("<h3>Error during registration: " + e.getMessage() + "</h3>");
            out.println("<a href='register.html'>Go back to registration</a>");
        }
    }
}
