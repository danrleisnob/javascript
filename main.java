import java.util.scanner

public class Desafio {

    public static void main(string[] args) {
        Scanner leiorDeEntrada = new Scanner(System.in);
        float valorSalario = leiorDeEntrada.nextFloat();
        float valorBeneficios = leiorDeEntrada.nextFloat();

        float valorImposto = 0;
        if (valorSalario >= 0 && valorSalario <= 1100) {
            valorImposto = 0.05F * valorSalario;
        }
        else if (valorSalario >= 1100.01 && valorSalario <= 2500.00) {
            valorImposto = 0.10F * valorSalario;
        }
        else {
            valorImposto = 0.15F * valorSalario;
        }
        
        float saida = valorSalario - valorImposto + valorBeneficios;
        System.out.println(string.format("%.2f", saida));
    }
}
