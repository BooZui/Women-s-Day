export default function typeWriter(text) {
  const str = text.innerHTML;
  let progress = 0;

  text.innerHTML = ''

  const timer = setInterval(() => {
    const current = str.substr(progress, 1);
    let letter = '';

    if (current == '<') {
      progress = str.indexOf('>', progress) + 1;
    } else if (current == '&') {
      progress = str.indexOf(';', progress) + 1;
    } else {
      progress++;
    }

    letter = str.substring(0, progress) + (progress & 1 ? '_' : '');
    text.innerHTML = letter;

    if (progress >= str.length) {
      clearInterval(timer);
    }
  }, 75);
}