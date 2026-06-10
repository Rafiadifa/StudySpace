#include <iostream>
using namespace std;

int main () {
    int array[5]={12, 45, 7, 23, 9};

    bool found = false;
    int check;
    int i = 0;

    cout << "What are you looking for?" << endl;
    cin >> check;

    for (int i = 0; i < 5; i++) {

    if (array[i] == check){
        found = true;
    }
     
    }
    if (found == true) {
        cout << "Number " << check << "is in the array" << endl;
    } else {
        cout << "Number is not in. the array" << endl;
    }



}