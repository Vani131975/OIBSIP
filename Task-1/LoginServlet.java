import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.*;
import java.sql.*;

public class LoginServlet extends HttpServlet {
    private Connection con;

    public void init() throws ServletException {
        super.init();
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
            con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "system", "system");
        } catch (ClassNotFoundException e) {
            throw new ServletException("JDBC Driver not found: " + e.getMessage());
        } catch (Exception e) {
            throw new ServletException("Database connection error: " + e.getMessage());
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        try {
            PreparedStatement ps = con
                    .prepareStatement("SELECT * FROM reserve1 WHERE Username = ? AND Password = ?");
            ps.setString(1, username);
            ps.setString(2, password);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                HttpSession session = request.getSession();
                session.setAttribute("username", username);
                response.sendRedirect("index.html");
            } else {
                response.getWriter().println("Invalid login credentials!");
            }
            ps.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
