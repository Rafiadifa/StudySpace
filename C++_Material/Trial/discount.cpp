#include <iostream>
using namespace std;

int main () {
    double price [] = {10.50, 4.00, 25.00, 8.00, 50.00};
    
    for (int i = 0; i < 5; i++) {
        if (price[i] > 20.00){
            price[i] = price[i]/2.0;

            cout << "Discounted pirce is: " << price[i] <<endl;
        } else {
            cout << "Original price is: " << price[i] << endl;
        }
    }

}