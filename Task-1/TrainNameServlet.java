import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class TrainNameServlet extends HttpServlet {
    private Connection con;

    @Override
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

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
        String trainNo = req.getParameter("trainNo");
        res.setContentType("text/plain");
        PrintWriter out = res.getWriter();

        PreparedStatement pst = null;
        ResultSet rs = null;

        try {
            pst = con.prepareStatement("SELECT trainName FROM trains WHERE trainNo = ?");
            pst.setString(1, trainNo);
            rs = pst.executeQuery();

            if (rs.next()) {
                String trainName = rs.getString("trainName");
                out.println(trainName);
            } else {
                out.println("Train not found!");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            out.println("Database error: " + e.getMessage());
        }
    }
}
