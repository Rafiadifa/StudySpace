#include <iostream> 
using namespace std;

int main () {
    int option;
    double balance = 100;
    double amount = 0;

    do {

    cout << "Press 1 to Deposit" << endl;
    cout << "Press 2 to Withdraw" << endl;
    cout << "Press 3 to Exit" << endl;

    cin >> option;

    if (option == 1) {
        cout << "Input amount" << endl;
        cin >> amount;

        balance += amount;
        cout << "Your new balance is: " << balance << endl;
    } else if (option == 2) {
        cout << "input amount" << endl;
        cin >> amount;

        if (amount > balance) {
            cout << "Your balance is insufficient!" << endl;
        } else {
        balance -= amount;
        cout << "Your new balance is: " << balance << endl;
        }

    } else if (option == 3) {
        cout << "Thank you for banking with us!" << endl;
    }

    } while (option != 3);
}