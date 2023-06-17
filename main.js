const container = document.querySelector('.container')
const calc_case = document.createElement('div')
const lcd = document.createElement('div');
let first = 0, op = 0, third = 0;

let buttons = [
  'AC', '+/-', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='];

lcd.className = 'lcd';
lcd.textContent = '0';
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
        console.log(btn.id);
        if (btn.textContent < 10 && lcd.textContent.length < 9) {
          if (lcd.textContent == 0) lcd.textContent = '';
          lcd.textContent += btn.textContent;
          if (op < 0) first = lcd.textContent;
        }
        else if (btn.textContent == 'AC') {
          lcd.textContent = '0';
          first = 0;
          op = 0;
          third = 0;
        }
        else if (btn.textContent == '+/-') {
          lcd.textContent = -lcd.textContent;
        }
        else if (btn.textContent == '%') {
          lcd.textContent = lcd.textContent / 100;
          if (first < 0) first = lcd.textContent;
          else if (first > 0) third = lcd.textContent;

        }
        else if (btn.textContent == '.' && !lcd.textContent.includes('.')) {
          lcd.textContent += btn.textContent;
        }
        else if (['*', '+', '-', '/'].includes(btn.textContent)) {
          if (op >= 0)
            first = lcd.textContent;
          op = btn.textContent;
        }
        else if (btn.textContent == '=') {
          lcd.textContent = `${first} ${op} ${second}`;
        }
      })
      column.appendChild(btn);
      buttons.shift();
    } else {

    }
  }
}




calc_case.prepend(lcd);
container.appendChild(calc_case);
