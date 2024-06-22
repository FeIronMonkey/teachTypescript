import { add, subtract } from '../../shared/utils/mathFunctions';

document.addEventListener('DOMContentLoaded', () => {
  addEventListeners();
});

function addEventListeners() {
  const addButton = document.getElementById('add-button');
  if (addButton) {
    addButton.onclick = (_: MouseEvent) => {
      const input1 = document.getElementById('add-element-1') as HTMLInputElement;
      const a = Number(input1?.value);
      const input2 = document.getElementById('add-element-1') as HTMLInputElement;
      const b = Number(input2?.value);

      const output = document.getElementById('add-output') as HTMLInputElement;
      output!.value = add(a, b).toString();
    };
  }

  const subtractButton = document.getElementById('subtract-button');
  if (subtractButton) {
    subtractButton.onclick = (_: MouseEvent) => {
      const input1 = document.getElementById('subtract-element-1') as HTMLInputElement;
      const a = Number(input1?.value);
      const input2 = document.getElementById('subtract-element-1') as HTMLInputElement;
      const b = Number(input2?.value);

      const output = document.getElementById('subtract-output') as HTMLInputElement;
      output!.value = subtract(a, b).toString();
    };
  }

  const multiplyButton = document.getElementById('multiply-button');
  if (multiplyButton) {
    multiplyButton.onclick = (event: MouseEvent) => {
      console.log(event);
    };
  }

  const divideButton = document.getElementById('divide-button');
  if (divideButton) {
    divideButton.onclick = (event: MouseEvent) => {
      console.log(event);
    };
  }

  const gtButton = document.getElementById('gt-button');
  if (gtButton) {
    gtButton.onclick = (event: MouseEvent) => {
      console.log(event);
    };
  }

  const ltButton = document.getElementById('lt-button');
  if (ltButton) {
    ltButton.onclick = (event: MouseEvent) => {
      console.log(event);
    };
  }

  const eqButton = document.getElementById('eq-button');
  if (eqButton) {
    eqButton.onclick = (event: MouseEvent) => {
      console.log(event);
    };
  }
}
