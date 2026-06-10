#include <iostream>
#include <vector>
#include <string>
#include <iomanip>
using namespace std;


class Shape {
protected:
    string id;
public:
    Shape(const string& id) : id(id) {}
    virtual ~Shape() {}
    string name() const { return id; }
    virtual double area() const = 0;
};

class Rectangle : public Shape {
private: 
    double width, height;
public: 
    Rectangle(const string& id, double w, double h) : Shape(id), width(w), height(h) {}

    double area() const override {
        return width * height;
    }
};

class Triangle : public Shape {
private: 
    double base, height;
public: 
    Triangle(const string& id, double b, double h) : Shape(id), base(b), height(h) {}

    double area() const override {
        return base * height * 0.5;
    }
};

class Circle : public Shape {
private: 
    double radius;
public: 
    Circle(const string& id, double r) : Shape(id), radius(r) {}

    double area() const override {
        const double PI = 3.141592653589793;
        return PI * (radius * radius);
    }
};

bool compareByArea(const Shape* a, const Shape* b) {
    return (a->area() < b->area());
}

int main() {
    int n; 
    cin >> n;

    vector<Shape*> shapes;

    for(int i = 0; i < n; i++){
        string name; 
        char type;
        cin >> name >> type;

        if (type== 'R'){
        double w, h;
        cin >> w >> h;

        shapes.push_back(new Rectangle(name, w, h));
        }

        if (type== 'T'){
        double b, h;
        cin >> b >> h;

        shapes.push_back(new Triangle(name, b, h));
        }

        if (type== 'C'){
        double r;
        cin >> r;

        shapes.push_back(new Circle(name, r));
        }
    }

    for(int i = 0; i < shapes.size() - 1; i++){
        for(int j = 0; j < shapes.size() - i - 1; j++){
            if(compareByArea(shapes[j+1], shapes[j])){
                Shape* temp = shapes[j];
                shapes[j] = shapes [j+1];
                shapes[j+1] = temp;
            }
        }
    }

    cout << fixed << setprecision(2); 
    
    for (int i = 0; i < shapes.size(); i++) {

        cout << shapes[i]->name() << " " << shapes[i]->area() << endl;
    }

    for (int i = 0; i < shapes.size(); i++) {
        delete shapes[i];
    }

    return 0;

}