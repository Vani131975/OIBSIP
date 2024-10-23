import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;

public class UpdateProfileServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String newUsername = request.getParameter("username");
        String newPassword = request.getParameter("password");
        String newEmail = request.getParameter("email");
        String newPhone = request.getParameter("phone");
        String newName = request.getParameter("name");

        HttpSession session = request.getSession(false);
        String currentUsername = (session != null) ? (String) session.getAttribute("username") : null;

        if (currentUsername != null) {
            try {
                Connection connection = DatabaseConnection.getConnection();
                PreparedStatement ps = connection
                        .prepareStatement(
                                "UPDATE users1 SET username = ?, password = ?, email = ?, phone = ?, name = ? WHERE username = ?");
                ps.setString(1, newUsername);
                ps.setString(2, newPassword);
                ps.setString(3, newEmail);
                ps.setString(4, newPhone);
                ps.setString(5, newName);
                ps.setString(6, currentUsername);
                int result = ps.executeUpdate();

                if (result > 0) {
                    session.setAttribute("username", newUsername);
                    response.getWriter().println("Profile updated successfully!");
                } else {
                    response.getWriter().println("Update failed!");
                }
                ps.close();
            } catch (SQLException e) {
                e.printStackTrace();
                response.getWriter().println("Database error: " + e.getMessage());
            }
        } else {
            response.getWriter().println("No user logged in.");
        }
    }
}
