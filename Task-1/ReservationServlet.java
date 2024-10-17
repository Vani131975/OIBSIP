import jakarta.servlet.http.*;
import java.io.*;
import java.security.SecureRandom;
import java.sql.*;
import jakarta.servlet.*;
import java.util.UUID;

public class ReservationServlet extends HttpServlet {
    private Connection con;

    @Override
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

    private String generatePNR(int length) {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        SecureRandom random = new SecureRandom();
        StringBuilder pnr = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            int index = random.nextInt(characters.length());
            pnr.append(characters.charAt(index));
        }
        return pnr.toString();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        try {
            String name = request.getParameter("name");
            String trainNo = request.getParameter("trainNo");
            String trainName = request.getParameter("trainName");
            String classType = request.getParameter("classType");
            String doj = request.getParameter("doj");
            String startFrom = request.getParameter("startFrom");
            String destination = request.getParameter("destination");
            String pnr = generatePNR(9);
            String sql = "INSERT INTO reservation (pnr_number, Name, TrainNo, TrainName, ClassType, DateOfJourney, StartingFrom, Destination) VALUES (?, ?, ?, ?, ?, TO_DATE(?, 'YYYY-MM-DD'), ?, ?)";
            try (PreparedStatement pst = con.prepareStatement(sql)) {
                pst.setString(1, pnr);
                pst.setString(2, name);
                pst.setString(3, trainNo);
                pst.setString(4, trainName);
                pst.setString(5, classType);
                pst.setString(6, doj);
                pst.setString(7, startFrom);
                pst.setString(8, destination);

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
                            "<h1 style='border:2px solid white; backdrop-filter: blur(10px);color:white;'>Reservation successful! Your PNR number is: "
                                    + pnr + "</h1>");
                    out.println("</body>");
                    out.println("</html>");
                } else {
                    out.println("<h3>Error during reservation.</h3>");
                }
            }
        } catch (Exception e) {
            out.println("<h3>Error during reservation: " + e.getMessage() + "</h3>");
            e.printStackTrace(out);
        } finally {
            out.println("<a href='reservation.html'>Go back to reservation form</a>");
            out.close();
        }
    }
}
