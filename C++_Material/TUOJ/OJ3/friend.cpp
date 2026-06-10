#include <iostream>
#include <vector>
using namespace std;

int getDigitSum(int value){
    int temp = value;
    int sum = 0;

    while (temp > 0){
        int last_digit = temp % 10;
        sum += last_digit;
        temp /= 10;
    }

    return sum;
}

bool isPalindrome(int value){
    int temp = value;
    int newvalue = 0;

    while (temp > 0){
        int last_digit = temp % 10;
        newvalue = (newvalue*10) + last_digit;
        temp /= 10;
    }

    if (newvalue == value){
        return true;
    } else {
        return false;
    }
}

bool isPrime(int value){
    if (value <= 1) return false;

    for (int i = 2; i * i <= value; i++){
        if(value % i == 0) {
            return false;
        }
    }

    return true;
}


class NumberRecord {
private:
    int index;
    int value;
public:
    NumberRecord(int idx, int val) : index(idx), value(val) {}
    int getIndex() const { return index; }
    int getValue() const { return value; }

    int getScore() const {
        int score = getDigitSum(value); 

        if (isPrime(value)) {
            score += 100;
        }
        if (isPalindrome(value)) {
            score += 50;
        }
        return score;
    }

    friend bool betterRecord(const NumberRecord& a, const NumberRecord& b);
};

bool betterRecord(const NumberRecord& a, const NumberRecord& b) {
    if (a.getScore() != b.getScore()) {
        return a.getScore() > b.getScore();
    }
    
    if (a.value != b.value) {
        return a.value < b.value;
    }
    
    return a.index < b.index;
}


int main () {
    int n, q; 
    if (!(cin >> n >> q)) return 0;

    vector<NumberRecord> records;
    records.push_back(NumberRecord(0,0));

    for (int i = 1; i <= n; i++){
        int val; 
        cin >> val;
        records.push_back(NumberRecord(i, val));
    }

    for (int i = 0; i < q; i++) {
        int a, b;
        cin >> a >> b;

       
        if (betterRecord(records[a], records[b])) {
           
            cout << records[a].getIndex() << " " << records[a].getScore() << endl;
        } else {
            
            cout << records[b].getIndex() << " " << records[b].getScore() << endl;
        }
    }

    return 0;
}

