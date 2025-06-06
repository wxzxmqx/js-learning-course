/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

const result = john.bmi > mark.bmi 
  ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  : `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`;

console.log(result);
//