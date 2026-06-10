#include <iostream> 
using namespace std;

double calculateTotal (double price, double taxRate) {
    double finalPrice = price + (price*taxRate);
    return finalPrice;
}

double calculateSquare(double number) {
    double square = number*number;
    return square;
}

double add (double A, double B){
    double addResult = A + B;
    return addResult;
}

double subtract (double A, double B) {
    double subtractResult = A - B;
    return subtractResult;
}

double mult (double A, double B) {
    double multResult = A*B;
    return multResult;
}

double div (double A, double B) {
    double divResult = A/B;
    if (B==0) {
        cout << "Error! Division by 0" << endl;
        return 0;
    }
    return divResult;
}

int main () {
    int choice;
    double A,B;
    double result = 0;

    cout << "Enter two numbers: ";
    cin >> A >> B;

    cout << "Select operation (1: Add, 2: Sub, 3: Mult, 4: Div): ";
    cin >> choice;

    switch (choice) {
    case 1:
        result = add(A, B);
        cout << A << " + " << B << " = " << result << endl;
        break;
    case 2:
        result = subtract(A, B);
        cout << A << " - " << B << " = " << result << endl;
        break;
    case 3:
        result = mult(A, B);
        cout << A << "*" << B << " = " << result << endl;
        break;
    case 4:
        result = div(A, B);
        cout << A << "/" << B << " = " << result << endl;
        break;
    default:
        cout << "Invalid choice!";
}

   
}