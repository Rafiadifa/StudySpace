#include <iostream>
#include <vector>
#include <algorithm> 
#include <climits>  

using namespace std;

int main() {
    int n;
    if (!(cin >> n)) return 0;

    int minPrice = INT_MAX; 
    int maxProfit = 0;

    for (int i = 0; i < n; i++) {
        int currentPrice;
        cin >> currentPrice;

        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }

        int currentProfit = currentPrice - minPrice;

        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
    }

    cout << maxProfit << endl;

    return 0;
}