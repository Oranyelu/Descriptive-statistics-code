
  //measure of central tendency
  class CentralTendency {
    constructor(data) {
      this.data = data;
    }
  
    mean() {
      let sum = this.data.reduce((a, b) => a + b, 0);
      return sum / this.data.length;
    }
  
    median() {
      let sorted = [...this.data].sort((a, b) => a - b);
      let middle = Math.floor(sorted.length / 2);
  
      if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
      } else {
        return sorted[middle];
      }
    }
  
    mode() {
      let counts = {};
      for (let num of this.data) {
        counts[num] = (counts[num] || 0) + 1;
      }
  
      let maxCount = Math.max(...Object.values(counts));
      let modes = Object.keys(counts).filter(num => counts[num] === maxCount);
  
      return modes.length === Object.keys(counts).length ? [] : modes;
    }
  }
  
  let data = [1, 2, 3, 4, 4, 5, 5, 5];
  let stats = new CentralTendency(data);
  
  console.log(`Mean: ${stats.mean()}`);
  console.log(`Median: ${stats.median()}`);
  console.log(`Mode: ${stats.mode()}`);

  
  //measure of dispersion
  class Dispersion {
    constructor(data) {
      this.data = data;
    }
  
    range() {
      let max = Math.max(...this.data);
      let min = Math.min(...this.data);
      return max - min;
    }
  
    variance() {
      let mean = this.data.reduce((a, b) => a + b, 0) / this.data.length;
      let variance = this.data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / this.data.length;
      return variance;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  }
  
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let stats = new Dispersion(data);
  
  console.log(`Range: ${stats.range()}`);
  console.log(`Variance: ${stats.variance()}`);
  console.log(`Standard Deviation: ${stats.standardDeviation()}`);
