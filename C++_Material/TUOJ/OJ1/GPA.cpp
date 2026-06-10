#include <iostream>
#include <iomanip>

using namespace std;

double getGradePoint(int s) {
    if (s >= 90) return 4.0;
    else if (s >= 85) return 3.6;
    else if (s >= 80) return 3.3;
    else if (s >= 77) return 3.0;
    else if (s >= 73) return 2.6;
    else if (s >= 70) return 2.3;
    else if (s >= 67) return 2.0;
    else if (s >= 63) return 1.6;
    else if (s >= 60) return 1.3;
    else return 0.0;
}

int main() {
    int n;
    if (!(cin >> n)) return 0;

    double totalWeightedGP = 0.0;
    int totalCredits = 0;

    for (int i = 0; i < n; i++) {
        int c, s;
        cin >> c >> s;

        double gp = getGradePoint(s);
        
        totalCredits += c;
        totalWeightedGP += (c * gp);
    }

    double finalGPA = 0.0;
    if (totalCredits > 0) {
        finalGPA = totalWeightedGP / totalCredits;
    }

    cout << fixed << setprecision(2) << finalGPA << endl;

    return 0;
}