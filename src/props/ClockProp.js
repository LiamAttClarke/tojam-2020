import Prop from './Prop';

const clockWidth = 150;

export default class ClockProp extends Prop {
  constructor(options = {}) {
    super(options);
    this.static = false;
    // Face
    this.sprite = window.assetManager.getSprite('clockFace');
    this.sprite.interactive = options.interactive;
    this.sprite.x = options.x;
    this.sprite.y = options.y;
    // Hour Hand
    this.hourHand = window.assetManager.getSprite('clockHourHand');
    this.hourHand.pivot.x = this.hourHand.width / 2;
    this.hourHand.pivot.y = this.hourHand.height / 2;
    this.hourHand.x = this.sprite.width / 2;
    this.hourHand.y = this.sprite.height / 2;
    this.sprite.addChild(this.hourHand);
    // Minute Hand
    this.minuteHand = window.assetManager.getSprite('clockMinuteHand');
    this.minuteHand.pivot.x = this.minuteHand.width / 2;
    this.minuteHand.pivot.y = this.minuteHand.height / 2;
    this.minuteHand.x = this.sprite.width / 2;
    this.minuteHand.y = this.sprite.height / 2;
    this.sprite.addChild(this.minuteHand);
    // Second Hand
    this.secondHand = window.assetManager.getSprite('clockSecondHand');
    this.secondHand.pivot.x = this.secondHand.width / 2;
    this.secondHand.pivot.y = this.secondHand.height / 2;
    this.secondHand.x = this.sprite.width / 2;
    this.secondHand.y = this.sprite.height / 2;
    this.sprite.addChild(this.secondHand);
    // Setting clockFace size last to correctly rescale all hands
    this.sprite.width = clockWidth;
    this.sprite.height = clockWidth;
  }

  get secondsElapsed() {
    return window.state.timeElapsed / 100;
  }

  get secondPosition() {
    return this.secondsElapsed % 60;
  }

  get minutePosition() {
    return (this.secondsElapsed / 60) % 60;
  }

  get hourPosition() {
    return (this.secondsElapsed / 3600) % 12;
  }

  update() {
    // Update clock hands
    const pi2 = Math.PI * 2;
    this.secondHand.rotation = pi2 * (Math.round(this.secondPosition) / 60);
    this.minuteHand.rotation = pi2 * (this.minutePosition / 60);
    this.hourHand.rotation = pi2 * (this.hourPosition / 12);
  }
}
