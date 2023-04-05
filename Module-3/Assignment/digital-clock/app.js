// showTime Function
const showTime = () => {
  // The setInterval() method repeats a block of code at every given timing event.
  setInterval(() => {
    // time Object
    const time = new Date();
    let hours = time.getHours(); // hours
    let minutes = time.getMinutes(); // minutes
    let seconds = time.getSeconds(); // seconds
    let dayOrNight = 'AM'; // AM or PM

    // if hours equal to zero, hours value assign 12
    if (hours === 0) {
      hours = 12;
    }
    // if hours greater then 12, hours = hours -12 and dayOrNight = 'PM'
    if (hours > 12) {
      hours = hours - 12;
      dayOrNight = 'PM';
    }

    // time format
    let currentTime = `${hours} : ${minutes} : ${seconds} ${dayOrNight}`;

    // set currentTime
    document.getElementById('displayTime').innerText = currentTime;
  }, 1000);
};

// function call
showTime();
