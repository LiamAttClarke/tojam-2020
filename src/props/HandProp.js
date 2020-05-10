import Prop from './Prop';

export default class HandProp extends Prop {
  constructor(options = {}) {
    super(options);
    this.sprite = window.assetManager.getSprite('handIdle');
    this.sprite.interactive = options.interactive;
    this.sprite.x = options.x;
    this.sprite.y = options.y;
    this.sprite.pivot.x = 25;
    this.sprite.pivot.y = 40;
  }
}
