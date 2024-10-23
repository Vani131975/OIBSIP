import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;

public class GetUserDetailsServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");

        try {
            Connection connection = DatabaseConnection.getConnection();
            PreparedStatement ps = connection
                    .prepareStatement("SELECT name, email, phone FROM users1 WHERE username = ?");
            ps.setString(1, username);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                String name = rs.getString("name");
                String email = rs.getString("email");
                String phone = rs.getString("phone");

                response.setContentType("application/json");
                response.getWriter().write(
                        String.format("{\"name\":\"%s\", \"email\":\"%s\", \"phone\":\"%s\"}", name, email, phone));
            } else {
                response.getWriter().write("{}");
            }
            ps.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
