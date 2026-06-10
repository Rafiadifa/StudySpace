#include <iostream>
using namespace std;

void counter() {
    static int count = 0; // Initialized only ONCE
    count++;
    cout << count << " ";
}

int main() {
    counter(); // Prints 1
    counter(); // Prints 2 (It "remembered" the value!)
}