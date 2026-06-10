#include <iostream>
#include "student.h" 

using namespace std;

int main() {
    Student alice; 
    alice.id = 1001;
    alice.name = "Alice Chen";
    alice.gpa = 3.85;

    cout << alice.name << " has a standing of: " << alice.getStanding() << endl;

    Student james; 
    james.id = 1002;
    james.name = "James Brooklyn";
    james.gpa = 3.0;

    cout << james.name << " has a standing of: " << james.getStanding() << endl;

    Student bob; 
    bob.id = 1003;
    bob.name = "Bob Wang";
    bob.gpa = 2.7;

    cout << bob.name << " has a standing of: " << bob.getStanding() << endl;

    return 0;
}