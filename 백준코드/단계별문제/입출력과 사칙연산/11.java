import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class Main11 {
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

        String n1 = bf.readLine();
        String n2 = bf.readLine();

        int stringN1 = Integer.parseInt(n1);
        int stringN2 = Integer.parseInt(n2);

        for (int i = n2.length() - 1; i >= 0; i--) {
            String sub = n2.substring(i, i + 1);
            int subInt = Integer.parseInt(sub);
            System.out.println(subInt * stringN1);
        }

        System.out.println(stringN1 * stringN2);

    }
}