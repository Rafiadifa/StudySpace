#include <fstream>   // Step 0: include header
#include <iostream>

int main() {
    // Step 1: Create stream object (opens file automatically)
    std::ofstream out("data.txt");   // Output stream, creates/truncates "data.txt"
    
    // Step 2: Check if open succeeded (CRITICAL!)
    if (!out) {                        // If open failed
        std::cerr << "Failed to open file!\n";
        return 1;                      // Exit with error
    }
    
    // Step 3: Write data (like using std::cout)
    out << "Hello, file!" << std::endl;  // Writes to file, not screen
    out << 42 << '\n';                   // Numbers become text
    
    // Step 4: Close (automatic via destructor, but can be explicit)
    out.close();                       // Optional: file closes when 'out' goes out of scope
    
    return 0;
}   // Destructor closes file here if not already closed