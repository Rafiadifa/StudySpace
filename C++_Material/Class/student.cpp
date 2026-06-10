#include <iostream>
#include "student.h"
using namespace std;

string Student::getStanding(){
    if (gpa >= 3.5) {
        return "Excellent";
    } else if (gpa >= 3.0) {
        return "Good";
    } else if (gpa >= 2.0) {
        return "Satisfactory";
    } else {
        return "Warning";
    }
};