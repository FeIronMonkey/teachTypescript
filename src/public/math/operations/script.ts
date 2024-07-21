import {
  add,
  subtract,
  multiply,
  divide,
  isLessThan,
  isGreaterThan,
  areEqual,
} from '../../shared/utils/mathFunctions.js';

document.addEventListener('DOMContentLoaded', () => {
  addEventListeners();
});

function addEventListeners() {
  const addButton = document.getElementById('add-button');
  if (addButton) {
    addButton.onclick = () => {
      const input1 = document.getElementById('add-input-1') as HTMLInputElement;
      const a = Number(input1?.value);
      const input2 = document.getElementById('add-input-2') as HTMLInputElement;
      const b = Number(input2?.value);

      const output = document.getElementById('add-output') as HTMLInputElement;
      output!.value = add(a, b).toString();
    };
  }

  const subtractButton = document.getElementById('subtract-button');
  if (subtractButton) {
    subtractButton.onclick = () => {
      const input1 = document.getElementById('subtract-input-1') as HTMLInputElement;
      const a = Number(input1?.value);
      const input2 = document.getElementById('subtract-input-2') as HTMLInputElement;
      const b = Number(input2?.value);

      const output = document.getElementById('subtract-output') as HTMLInputElement;
      output!.value = subtract(a, b).toString();
    };
  }

  const multiplyButton = document.getElementById('multiply-button');
  if (multiplyButton) {
    multiplyButton.onclick = () => {
      const input1 = document.getElementById('multiply-input-1') as HTMLInputElement;
      const a = Number(input1?.value);
      const input2 = document.getElementById('multiply-input-2') as HTMLInputElement;
      const b = Number(input2?.value);

      const output = document.getElementById('multiply-output') as HTMLInputElement;
      output!.value = multiply(a, b).toString();
    };
  }

  const divideButton = document.getElementById('divide-button');
  if (divideButton) {
    divideButton.onclick = () => {
      const input1 = document.getElementById('divide-input-1') as HTMLInputElement;
      const a = Number(input1?.value);
      const input2 = document.getElementById('divide-input-2') as HTMLInputElement;
      const b = Number(input2?.value);

      const output = document.getElementById('divide-output') as HTMLInputElement;
      output!.value = divide(a, b).toString();
    };
  }

  const gtButton = document.getElementById('gt-button');
  if (gtButton) {
    gtButton.onclick = () => {
      const input1 = document.getElementById('gt-input-1') as HTMLInputElement;
      const a = Number(input1?.value);
      const input2 = document.getElementById('gt-input-2') as HTMLInputElement;
      const b = Number(input2?.value);

      const output = document.getElementById('gt-output') as HTMLInputElement;
      output!.value = isGreaterThan(a, b) ? 'Yes' : 'No';
    };
  }

  const ltButton = document.getElementById('lt-button');
  if (ltButton) {
    ltButton.onclick = () => {
      const input1 = document.getElementById('lt-input-1') as HTMLInputElement;
      const a = Number(input1?.value);
      const input2 = document.getElementById('lt-input-2') as HTMLInputElement;
      const b = Number(input2?.value);

      const output = document.getElementById('lt-output') as HTMLInputElement;
      output!.value = isLessThan(a, b) ? 'Yes' : 'No';
    };
  }

  const eqButton = document.getElementById('eq-button');
  if (eqButton) {
    eqButton.onclick = () => {
      const input1 = document.getElementById('eq-input-1') as HTMLInputElement;
      const a = Number(input1?.value);
      const input2 = document.getElementById('eq-input-2') as HTMLInputElement;
      const b = Number(input2?.value);

      const output = document.getElementById('eq-output') as HTMLInputElement;
      output!.value = areEqual(a, b) ? 'Yes' : 'No';
    };
  }
}
