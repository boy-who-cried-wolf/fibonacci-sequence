const evolve = (n, f = x => (x > 1 ? f(x-1) + f(x-2) : x)) => f(n);

// The Fibonacci sequence modulo 9 repeats every 24 numbers
const PATTERN_LENGTH = 24;

const generateMatrix = (size) => Array.from({length: size}, (_, i) => 
    Array.from({length: size}, (_, j) => {
        // Calculate the position in the pattern
        const pos = (i + j) % PATTERN_LENGTH;
        // Use evolve for the actual calculation
        return evolve(pos) % 9;
    }));

// Test with a larger matrix
console.log(generateMatrix(200));