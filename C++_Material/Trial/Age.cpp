#include <iostream>
using namespace std;

int main () {
    int age;
    cout << "Please input your age: " << endl;
    cin >> age;

    if (age >= 18) {
        cout << "You are allowed to go inside" <<endl;
    } else {
        cout << "please stop here" << endl;
    }

    cout << *(&age) << endl;
}