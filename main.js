const container = document.querySelector('.container')
const calc_case = document.createElement('div')
const lcd = document.createElement('div');


let buttons = [
  'AC', '+/-', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='];

lcd.className = 'lcd';
calc_case.className = 'case';

calc_case.appendChild(lcd);
container.appendChild(calc_case);

for (let col = 0; col < 5; col++) {
  const column = document.createElement('div');
  column.className = 'column';
  calc_case.appendChild(column);
  for (let i = 0; i < 4; i++) {
    if (buttons.length > 0) {
      const btn = document.createElement("btn");
      (buttons[0] < 10) ? btn.className = 'num' : btn.className = 'op';
      btn.textContent = `${buttons[0]}`;
      btn.addEventListener("click", () => {
        if (btn.textContent < 10)
          lcd.textContent = btn.textContent;
      })
      column.appendChild(btn);
      buttons.shift();
    }
  }
}


calc_case.prepend(lcd);
container.appendChild(calc_case);




