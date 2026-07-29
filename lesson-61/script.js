// Tutorial #63: JavaScript Arrays & Methods

let marks = [91, 82, 63, 84, 55];

// 1. Accessing and modifying
console.log(marks[0]); // 91
marks[2] = 99; // Index 2 ki value update kar di

// 2. Common Methods
marks.push(100); // End mein add karega
marks.pop();     // End se remove karega
console.log(marks.toString()); // Poore array ko string bana dega

// 3. Loops with Arrays (The standard way)
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}