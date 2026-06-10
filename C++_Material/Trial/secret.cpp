#include <iostream> 
using namespace std;

int main () {
    int secret = 31;
    int guess;

    cout << "Pick a random number!" << endl;
    cin >> guess; 

    while (guess != secret){
        if (guess > secret){
            cout << "Too high! pick another number." << endl;
        } else {
            cout << "Too low! pick another number." << endl;
        }

        cin >> guess;
    }

    cout << "Bingo!";



}