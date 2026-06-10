#include <iostream>
using namespace std;

int main () {
    int grade [] = {85, 42, 92, 60, 33, 71};
    int passedCount = 0;
    int failedCount = 0;

    for (int i = 0; i < 6; i++) {
        if (grade[i] >= 60){
            passedCount = passedCount + 1;
        } else {
            failedCount = failedCount + 1;
        }
    }

    cout << "Total Passed: " << passedCount << endl;
    cout << "Total Failed: " << failedCount << endl;
}