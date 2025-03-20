const evolve = (n, f = x => (x > 1 ? f (x -1) + f (x -2 ) : x )) => f (n);

const generateMatrix = (size) => Array.from({length: size}, (_, i) => 
Array.from({length: size}, (_, j) => evolve(i + j) % 9));

console.log(generateMatrix(6));