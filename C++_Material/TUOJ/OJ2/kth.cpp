#include <iostream>
#include <vector>
#include <algorithm> // Required for std::sort

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k;
    if (cin >> n >> k) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }

        sort(arr.begin(), arr.end());

        cout << arr[k - 1] << "\n";
    }

    return 0;
}