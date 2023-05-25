import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result: string = '';

  appendToResult(value: string) {
    const operators = ['+', '-', '*', '/'];

    if (this.result === '' && operators.includes(value)) {
      return; // Ignore operator if it is the first input
    }

    if (operators.includes(value)) {
      // Replace the last operation with the latest one
      if (this.result.length > 0 && operators.includes(this.result[this.result.length - 1])) {
        this.result = this.result.slice(0, -1);
      }
    }

    this.result += value;
  }

  clearResult() {
    this.result = '';
  }

  backspace() {
    if (this.result.length > 0) {
      this.result = this.result.slice(0, -1);
    }
  }

  updateResult() {
  try {
    const evaluatedResult = eval(this.result);
    this.result = evaluatedResult !== undefined ? evaluatedResult : '';
  } catch (error) {
    this.result = '';
  }
}
}
