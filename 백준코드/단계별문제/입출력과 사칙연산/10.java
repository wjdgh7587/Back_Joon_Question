import java.util.*;

class Main10 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a, b, c;

        a = sc.nextInt();
        b = sc.nextInt();
        c = sc.nextInt();

        // First Line
        System.out.println((a + b) % c);
        // Second Line
        System.out.println(((a % c) + (b % c)) % c);
        // Third Line
        System.out.println((a * b) % c);
        // Fourth Line
        System.out.println(((a % c) * (b % c)) % c);

    }
}