import javax.swing.*;
import java.awt.*;
import java.sql.*;

public class ATMApp extends JFrame {
    private JTextField userIdField;
    private JPasswordField pinField;
    private JPanel loginPanel, menuPanel;
    private double balance;
    private String currentUserId;

    public ATMApp() {
        setTitle("ATM INTERFACE");
        setLayout(new CardLayout());
        loginPanel = new JPanel(new GridLayout(3, 2));
        JLabel userIdLabel = new JLabel("User ID:");
        userIdField = new JTextField();
        JLabel pinLabel = new JLabel("PIN: ");
        pinField = new JPasswordField();
        JButton login = new JButton("Login");
        login.addActionListener(e -> handleLogin());
        loginPanel.add(userIdLabel);
        loginPanel.add(userIdField);
        loginPanel.add(pinLabel);
        loginPanel.add(pinField);
        loginPanel.add(login);

        menuPanel = new JPanel(new GridLayout(6, 1));
        JButton viewBalanceBtn = new JButton("View Balance");
        JButton depositBtn = new JButton("Deposit");
        JButton withdrawBtn = new JButton("Withdraw");
        JButton transferBtn = new JButton("Transfer");
        JButton historyBtn = new JButton("Transaction History");
        JButton quitBtn = new JButton("Quit");
        viewBalanceBtn.addActionListener(e -> JOptionPane.showMessageDialog(null, "Current Balance: " + balance));
        depositBtn.addActionListener(e -> performDeposit());
        withdrawBtn.addActionListener(e -> performWithdraw());
        transferBtn.addActionListener(e -> performTransfer());
        historyBtn.addActionListener(e -> displayTransactionHistory());
        quitBtn.addActionListener(e -> System.exit(0));
        menuPanel.add(viewBalanceBtn);
        menuPanel.add(depositBtn);
        menuPanel.add(withdrawBtn);
        menuPanel.add(transferBtn);
        menuPanel.add(historyBtn);
        menuPanel.add(quitBtn);
        add(loginPanel, "Login Panel");
        add(menuPanel, "Menu Panel");
        menuPanel.setVisible(false);
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    private void handleLogin() {
        String userId = userIdField.getText().trim();
        String pin = new String(pinField.getPassword()).trim();
        if (authenticateUser(userId, pin)) {
            loadUserDetails(userId);
            currentUserId = userId;
            loginPanel.setVisible(false);
            menuPanel.setVisible(true);
        } else {
            JOptionPane.showMessageDialog(null, "Invalid userId or PIN!");
        }
    }

    private boolean authenticateUser(String userId, String pin) {
        try {
            Connection con = DatabaseConnection.getConnection();
            PreparedStatement pst = con.prepareStatement("select * from atm1 where userid=? and pin=?");
            pst.setString(1, userId);
            pst.setString(2, pin);
            ResultSet rs = pst.executeQuery();
            return rs.next();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    private void loadUserDetails(String userId) {
        try {
            Connection con = DatabaseConnection.getConnection();
            PreparedStatement pst = con.prepareStatement("select balance from atm1 where userid=?");
            pst.setString(1, userId);
            ResultSet rs = pst.executeQuery();
            if (rs.next()) {
                balance = rs.getDouble("balance");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void performDeposit() {
        String amountStr = JOptionPane.showInputDialog("Enter amount to deposit: ");
        if (amountStr != null) {
            try {
                double amount = Double.parseDouble(amountStr);
                if (amount > 0) {
                    balance += amount;
                    saveTransaction("Deposit", amount, null);
                    updateBalance(currentUserId);
                    JOptionPane.showMessageDialog(null, "Deposit Successful!!");
                } else {
                    JOptionPane.showMessageDialog(null, "Enter a positive amount!");
                }
            } catch (NumberFormatException e) {
                JOptionPane.showMessageDialog(null, "Invalid amount entered!");
            }
        }
    }

    private void performWithdraw() {
        String amountStr = JOptionPane.showInputDialog("Enter amount to Withdraw: ");
        if (amountStr != null) {
            try {
                double amount = Double.parseDouble(amountStr);
                if (amount <= balance && amount > 0) {
                    balance -= amount;
                    saveTransaction("Withdraw", amount, null);
                    updateBalance(currentUserId);
                    JOptionPane.showMessageDialog(null, "Withdraw Successful!!");
                } else {
                    JOptionPane.showMessageDialog(null, "Insufficient balance!");
                }
            } catch (NumberFormatException e) {
                JOptionPane.showMessageDialog(null, "Invalid amount entered!");
            }
        }
    }

    private void performTransfer() {
        String account = JOptionPane.showInputDialog("Enter recipient's account number: ");
        String amountStr = JOptionPane.showInputDialog("Enter Amount to transfer: ");
        if (amountStr != null && account != null) {
            try {
                double amount = Double.parseDouble(amountStr);
                if (amount <= balance) {
                    balance -= amount;
                    saveTransaction("Transfer", amount, account);
                    updateBalance(currentUserId);
                    JOptionPane.showMessageDialog(null, "Transfer Successful!!");
                } else {
                    JOptionPane.showMessageDialog(null, "Insufficient balance!");
                }
            } catch (NumberFormatException e) {
                JOptionPane.showMessageDialog(null, "Invalid amount entered!");
            }
        }
    }

    private void saveTransaction(String transactionType, double amount, String recipientAccount) {
        try {
            Connection con = DatabaseConnection.getConnection();
            PreparedStatement pst = con.prepareStatement(
                    "INSERT INTO transactions (user_id, transaction_type, amount, recipient_account) VALUES (?, ?, ?, ?)");
            pst.setString(1, currentUserId);
            pst.setString(2, transactionType);
            pst.setDouble(3, amount);
            pst.setString(4, recipientAccount);
            pst.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void displayTransactionHistory() {
        StringBuilder history = new StringBuilder();
        try {
            Connection con = DatabaseConnection.getConnection();
            PreparedStatement pst = con.prepareStatement(
                    "SELECT transaction_type, amount, recipient_account, transaction_time FROM transactions WHERE user_id = ? ORDER BY transaction_time DESC");
            pst.setString(1, currentUserId);
            ResultSet rs = pst.executeQuery();
            while (rs.next()) {
                String transactionType = rs.getString("transaction_type");
                double amount = rs.getDouble("amount");
                String recipientAccount = rs.getString("recipient_account");
                Timestamp transactionTime = rs.getTimestamp("transaction_time");
                history.append(String.format("%s: %.2f %s %s\n", transactionType, amount,
                        (recipientAccount != null ? "to " + recipientAccount : ""), transactionTime));
            }
            if (history.length() == 0) {
                history.append("No Transactions");
            }
            JOptionPane.showMessageDialog(null, history.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void updateBalance(String userId) {
        try {
            Connection con = DatabaseConnection.getConnection();
            PreparedStatement pst = con.prepareStatement("update atm1 set balance=? where userid=?");
            pst.setDouble(1, balance);
            pst.setString(2, userId);
            pst.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String args[]) {
        new ATMApp();
    }
}
