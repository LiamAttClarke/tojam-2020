import Prop from './Prop';

const clockWidth = 150;

export default class ClockProp extends Prop {
  constructor(assetManager, options) {
    super(assetManager, options);
    this.static = false;
    this.secondsElapsed = (options && options.secondsElapsed) || 0; // seconds
    // Face
    this.clockFace = this._assetManager.getSprite('clockFace');
    this.clockFace.pivot.x = this.clockFace.width / 2;
    this.clockFace.pivot.y = this.clockFace.height / 2;
    this.root.addChild(this.clockFace);
    // Hour Hand
    this.hourHand = this._assetManager.getSprite('clockHourHand');
    this.hourHand.pivot.x = this.hourHand.width / 2;
    this.hourHand.pivot.y = this.hourHand.height / 2;
    this.hourHand.x = this.clockFace.width / 2;
    this.hourHand.y = this.clockFace.height / 2;
    this.clockFace.addChild(this.hourHand);
    // Minute Hand
    this.minuteHand = this._assetManager.getSprite('clockMinuteHand');
    this.minuteHand.pivot.x = this.minuteHand.width / 2;
    this.minuteHand.pivot.y = this.minuteHand.height / 2;
    this.minuteHand.x = this.clockFace.width / 2;
    this.minuteHand.y = this.clockFace.height / 2;
    this.clockFace.addChild(this.minuteHand);
    // Second Hand
    this.secondHand = this._assetManager.getSprite('clockSecondHand');
    this.secondHand.pivot.x = this.secondHand.width / 2;
    this.secondHand.pivot.y = this.secondHand.height / 2;
    this.secondHand.x = this.clockFace.width / 2;
    this.secondHand.y = this.clockFace.height / 2;
    this.clockFace.addChild(this.secondHand);
    // Setting clockFace size last to correctly rescale all hands
    this.clockFace.width = clockWidth;
    this.clockFace.height = clockWidth;
  }

  get secondPosition() {
    return this.secondsElapsed % 60;
  }

  get minutePosition() {
    return (this.secondsElapsed % 3600) / 60;
  }

  get hourPosition() {
    return (this.secondsElapsed % 43200) / 3600;
  }

  update(delta) {
    // Update clock hands
    const secondsDelta = delta / 60;
    this.secondsElapsed += secondsDelta;
    const pi2 = Math.PI * 2;
    this.secondHand.rotation = pi2 * (Math.round(this.secondPosition) / 60);
    this.minuteHand.rotation = pi2 * (this.minutePosition / 60);
    this.hourHand.rotation = pi2 * (this.hourPosition / 12);
  }
}