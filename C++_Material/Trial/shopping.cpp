#include <iostream>
using namespace std;

int main (){ 
    int num;
    double price;
    double total = 0;

    cout << "How many items are you buying?" << endl;
    cin >> num;

    for (int i = 1; i <= num; i++ ) {
        cout << "Price of your item:";
        cin >> price;

        total += price;
    }

    cout << "You total is: " << total << endl;


}