import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.*;
import java.util.Random;

public class NumberGuessingGame extends JFrame {
    private int randomNumber;
    private int chancesLeft;
    private int totalScore;
    private int roundCount;
    private JTextField guessField;
    private JTextArea resultArea;
    private JLabel scoreLabel;

    public NumberGuessingGame() {
        setTitle("Number Guessing Game");
        setSize(600, 400);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new BorderLayout());
        guessField = new JTextField();
        guessField.setPreferredSize(new Dimension(200, 30));
        JButton guessButton = new JButton("Guess");
        resultArea = new JTextArea();
        resultArea.setEditable(false);
        scoreLabel = new JLabel("Score: 0");
        JPanel inputPanel = new JPanel();
        inputPanel.add(new JLabel("Guess between (1-100)"));
        inputPanel.add(guessField);
        inputPanel.add(guessButton);
        add(inputPanel, BorderLayout.NORTH);
        add(new JScrollPane(resultArea), BorderLayout.CENTER);
        add(scoreLabel, BorderLayout.SOUTH);

        guessButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                makeGuess();
            }
        });
        guessField.addKeyListener(new KeyAdapter() {
            public void keyPressed(KeyEvent e) {
                if (e.getKeyCode() == KeyEvent.VK_ENTER) {
                    makeGuess();
                }
            }
        });
        startNewRound();
    }

    private void startNewRound() {
        randomNumber = new Random().nextInt(100) + 1;
        chancesLeft = 10;
        roundCount++;
        resultArea.setText("Round " + roundCount + ": You have " + chancesLeft + " chances\n");
    }

    private void makeGuess() {
        try {
            int guess = Integer.parseInt(guessField.getText());
            guessField.setText("");
            if (guess < 1 || guess > 100) {
                resultArea.append("Please enter a number between 1 and 100.\n");
                return;
            }
            chancesLeft--;
            if (guess < randomNumber) {
                resultArea.append("Lower!! Try again.\n");
            } else if (guess > randomNumber) {
                resultArea.append("Greater!! try again\n");
            } else {
                resultArea.append("Correct! you have guesses the number!!!!!\n");
                int scoreGained = calculateScore(10 - chancesLeft);
                totalScore += scoreGained;
                scoreLabel.setText("Score: " + totalScore);
                JOptionPane.showMessageDialog(this,
                        "🎉 Congratulations! You've guessed the number! 🎉\n" + scoreGained + " points gained!",
                        "Correct Guess!",
                        JOptionPane.INFORMATION_MESSAGE);
                resultArea.append("+" + scoreGained + " points gained!\n");
                startNewRound();
                return;
            }
            if (chancesLeft == 0) {
                resultArea.append("Out of chances! the correct number is " + randomNumber + " ./n");
                startNewRound();
            } else {
                resultArea.append("you have " + chancesLeft + " chances left.\n");
            }
            scoreLabel.setText("Score: " + totalScore);
        } catch (NumberFormatException e) {
            resultArea.append("Invalid input. Please enter a valid integer\n");
        }
    }

    private int calculateScore(int attempts) {
        switch (attempts) {
            case 1:
                return 10;
            case 2:
                return 9;
            case 3:
                return 8;
            case 4:
                return 7;
            case 5:
                return 6;
            case 6:
                return 5;
            case 7:
                return 4;
            case 8:
                return 3;
            case 9:
                return 2;
            case 10:
                return 1;
            default:
                return 0;
        }
    }

    public static void main(String args[]) {
        SwingUtilities.invokeLater(() -> {
            NumberGuessingGame game = new NumberGuessingGame();
            game.setVisible(true);
        });
    }
}
