#include <iostream> 
#include <vector>
using namespace std;

int main () {
    vector<int> scores = {80,90,100};
    int temp;

    cout << "Enter your score: " << endl;
    cin >> temp;
    scores.push_back(temp);

    for (int i = 0; i < scores.size();i++) {
        cout << scores[i] << endl;

    }
}