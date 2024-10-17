import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.*;
import java.sql.*;

public class CancellationServlet extends HttpServlet {
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
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        String pnrNumber = request.getParameter("pnrNumber");
        String action = request.getParameter("action");
        try {
            if ("fetch".equals(action)) {
                String fetchSql = "SELECT * FROM reservation WHERE PNR_NUMBER = ?";
                try (PreparedStatement pst = con.prepareStatement(fetchSql)) {
                    pst.setString(1, pnrNumber);
                    ResultSet rs = pst.executeQuery();
                    if (rs.next()) {
                        out.println("<html>");
                        out.println("<head>");
                        out.println("<link href='styles.css' rel='stylesheet'>");
                        out.println("<style>");
                        out.println("main {"
                                + "font-family: Arial, sans-serif;"
                                + "margin: 0;"
                                + "padding: 0;"
                                + "display: flex;"
                                + "flex-direction: column;"
                                + "justify-content: center;"
                                + "align-items: center;"
                                + "height: 100vh;"
                                + "}");
                        out.println(".container {"
                                + "background-color: white;"
                                + "border-radius: 8px;"
                                + "padding: 20px;"
                                + "max-width: 500px;"
                                + "box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"
                                + "text-align: center;"
                                + "margin: auto;"
                                + "}");
                        out.println("h2 {"
                                + "color: #333;"
                                + "}");
                        out.println("</style>");
                        out.println("</head>");
                        out.println("<body>");
                        out.println("<div class='container1'>");
                        out.println("<nav class='navbar'>");
                        out.println("<h2>Train Reservation</h2>");
                        out.println("<ul class='navlinks'>");
                        out.println("<li><a href='index.html'>Home</a></li>");
                        out.println("<li><a href='reservation.html'>Reservation</a></li>");
                        out.println("<li><a href='cancellation.html'>Cancel</a></li>");
                        out.println("<li><a href='contactUs.html'>Contact Us</a></li>");
                        out.println("</ul>");
                        out.println("</nav>");
                        out.println("</div>");
                        out.println("<main>");
                        out.println("<div class='container' style='justify-content:center;'>");
                        out.println("<h2>Reservation Details</h2>");
                        out.println("<p><b>PNR Number:</b> " + rs.getString("pnr_number") + "</p>");
                        out.println("<p><b>Passenger Name:</b> " + rs.getString("NAME") + "</p>");
                        out.println("<p><b>Train Number:</b> " + rs.getString("TRAINNO") + "</p>");
                        out.println("<p><b>Train Name:</b> " + rs.getString("TRAINNAME") + "</p>");
                        out.println("<p><b>Class Type:</b> " + rs.getString("CLASSTYPE") + "</p>");
                        out.println("<p><b>Date of Journey:</b> " + rs.getString("DATEOFJOURNEY") + "</p>");
                        out.println("<p><b>Starting From:</b> " + rs.getString("STARTINGFROM") + "</p>");
                        out.println("<p><b>Destination:</b> " + rs.getString("DESTINATION") + "</p>");
                        out.println("<form action='CancellationServlet' method='post'>");
                        out.println("<input type='hidden' name='pnrNumber' value='" + pnrNumber + "'>");
                        out.println("<input type='hidden' name='action' value='cancel'>");
                        out.println(
                                "<input type='submit' value='Cancel Reservation' style='background-color:lightblue';color:white>");
                        out.println("</form>");
                        out.println("</div>");
                        out.println("</main>");
                        out.println("</body>");
                        out.println("</html>");
                    } else {
                        out.println("<h3>No reservation found with PNR " + pnrNumber + ".</h3>");
                    }
                }
            } else if ("cancel".equals(action)) {
                String cancelSql = "DELETE FROM reservation WHERE pnr_number = ?";
                try (PreparedStatement pst = con.prepareStatement(cancelSql)) {
                    pst.setString(1, pnrNumber);
                    int rowsAffected = pst.executeUpdate();
                    if (rowsAffected > 0) {
                        out.println("<html>");
                        out.println("<head>");
                        out.println("<link href='styles.css' rel='stylesheet'>");
                        out.println("</head>");
                        out.println("<body>");
                        out.println("<div class='container1'>");
                        out.println("<nav class='navbar'>");
                        out.println("<h2>Train Reservation</h2>");
                        out.println("<ul class='navlinks'>");
                        out.println("<li><a href='index.html'>Home</a></li>");
                        out.println("<li><a href='reservation.html'>Reservation</a></li>");
                        out.println("<li><a href='cancellation.html'>Cancel</a></li>");
                        out.println("<li><a href='contactUs.html'>Contact Us</a></li>");
                        out.println("</ul>");
                        out.println("</nav>");
                        out.println("</div>");
                        out.println(
                                "<h1 style='border:2px solid white; backdrop-filter: blur(10px);color:white;'>Reservation with PNR "
                                        + pnrNumber + " has been cancelled successfully!</h1>");
                        out.println("</body>");
                        out.println("</html>");
                    } else {
                        out.println("<h3>No reservation found with PNR " + pnrNumber + ".</h3>");
                    }
                }
            }
        } catch (Exception e) {
            out.println("<h3>Error: " + e.getMessage() + "</h3>");
        } finally {
            out.close();
        }
    }
}
