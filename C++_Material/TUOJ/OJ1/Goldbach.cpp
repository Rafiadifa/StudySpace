#include <iostream>
#include <cmath>

using namespace std;

bool isPrime(int num) {
    if (num < 2) return false;
    
    for (int i = 2; i <= sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

int main() {
    int n;
    cin >> n;

    for (int p = 2; p <= n / 2; p++) {
        int q = n - p;

        if (isPrime(p) && isPrime(q)) {
            cout << p << " " << q << endl;
            break; 
        }
    }

    return 0;
}