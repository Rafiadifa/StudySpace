#include <iostream>
#include <vector>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    long long f[81];
    
    f[0] = 1;
    f[1] = 1;
    
    for (int i = 2; i <= 80; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }

    int T;
    if (cin >> T) {
        while (T > 0) {
            int n;
            cin >> n;
            
            cout << f[n] << "\n";
            
            T--;
        }
    }

    return 0;
}