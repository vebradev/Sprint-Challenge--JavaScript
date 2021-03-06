// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const classyCuboid = new CuboidMakerClass(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(classyCuboid.volume()); // 100
console.log(classyCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
  constructor(length) {
    super(length);
    this.length = length;
  }

  volume() {
    return Math.pow(this.length, 3);
  }
  surfaceArea() {
      return 6 * Math.pow(this.length, 2);
  }
}

const classyCube = new CubeMaker(2); 

console.log(classyCube.volume()); // 8 expected
console.log(classyCube.surfaceArea()); // 24 expected
