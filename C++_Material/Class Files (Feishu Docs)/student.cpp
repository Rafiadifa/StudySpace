#include <iostream>
using namespace std;

class Student {
private:
    int id;
    string name;
    static int totalStudents;  // Shared by ALL students
    
public:
    Student(int i, const string& n) : id(i), name(n) {
        totalStudents++;
        cout << "Student created. Total: " << totalStudents << endl;
    }
    
    ~Student() {
        totalStudents--;
        cout << "Student destroyed. Total: " << totalStudents << endl;
    }
    
    static int getTotalStudents() {
        return totalStudents;
    }
};

// REQUIRED: Define static member outside class
int Student::totalStudents = 0;

int main() {
    cout << "Initial total: " << Student::getTotalStudents() << endl;
    
    Student s1(1001, "Alice");  // Total: 1
    Student s2(1002, "Bob");    // Total: 2
    
    {
        Student s3(1003, "Carol");  // Total: 3
    }  // s3 destroyed, Total: 2
    
    cout << "Final total: " << Student::getTotalStudents() << endl;  // 2
    return 0;
}