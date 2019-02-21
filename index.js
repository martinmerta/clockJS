class Secondshand {
  constructor(time, secondshand) {
    this.time = time;
    this.secondshand = secondshand;
    this.secondsdegrees = (this.time.getSeconds() / 60) * 360 + 90;
    this.setSeconds = this.secondshand.style.transform = `rotate(${
      this.secondsdegrees
    }deg)`;
  }
}
class Minuteshand {
  constructor(time, minuteshand) {
    this.time = time;
    this.minuteshand = minuteshand;
    this.minutesdegrees = (this.time.getMinutes() / 60) * 360 + 90;
    this.setMinutes = this.minuteshand.style.transform = `rotate(${
      this.minutesdegrees
    }deg)`;
  }
}
class Hourshand {
  constructor(time, hourshand) {
    this.time = time;
    this.hourshand = hourshand;
    this.hoursdegrees = (this.time.getHours() / 24) * 360 + 90;
    this.setHours = this.hourshand.style.transform = `rotate(${
      this.hoursdegrees
    }deg)`;
  }
}
class Clock {
  constructor() {
    this.time = new Date();
    this.secondshand = document.querySelector('.second-hand');
    this.seconds = new Secondshand(this.time, this.secondshand);
    this.minuteshand = document.querySelector('.min-hand');
    this.minutes = new Minuteshand(this.time, this.minuteshand);
    this.hourshand = document.querySelector('.hour-hand');
    this.hours = new Hourshand(this.time, this.hourshand);
    this.displaySeconds = document.querySelector(
      '.displaySeconds'
    ).innerText = `${
      this.time.getSeconds() < 10
        ? '0' + this.time.getSeconds()
        : this.time.getSeconds()
    }`;
    this.displayMinutes = document.querySelector(
      '.displayMinutes'
    ).innerText = `${
      this.time.getMinutes() < 10
        ? '0' + this.time.getMinutes()
        : this.time.getMinutes()
    }`;
    this.displayHours = document.querySelector('.displayHours').innerText = `${
      this.time.getHours() < 10
        ? '0' + this.time.getHours()
        : this.time.getHours()
    }`;
  }
}
const funClock = () => {
  const clock = new Clock();
};
setInterval(funClock, 1000);
