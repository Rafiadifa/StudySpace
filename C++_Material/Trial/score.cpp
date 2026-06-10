#include <iostream> 
using namespace std;

int main () {

    int array [] = {12, 5, 78, 34, 90, 2};
    int i = 0;
    int max = array [0];

    for (int i = 0; i < 5; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    cout << "Max Number inside the array is: " << max << endl;
    

}