import ImageUtils from "../ImageUtils.js";
import Animatronic from "./Animatronic.js";

export default class AnimatronicSystem {
	private animatronics: Animatronic[];

	public async setup() {
		this.animatronics = [
			new Animatronic("Freddy"),
			new Animatronic("Chica"),
			new Animatronic("Bonnie")
		];

		this.animatronics[0].addSprite(await ImageUtils.loadImageFromUrl("images/animatronics/freddy.png"));
		this.animatronics[1].addSprite(await ImageUtils.loadImageFromUrl("images/animatronics/chica.png"));
		this.animatronics[2].addSprite(await ImageUtils.loadImageFromUrl("images/animatronics/bonnie.png"));
	}

	// testing only
	public moveFreddy() {
		this.animatronics[0].cameraIndex++;
	}

	public getAnimatronics() {
		return this.animatronics;
	}

	
	public renderAnimatronic(ctx: CanvasRenderingContext2D, animatronicIndex: number) {
		this.animatronics[animatronicIndex].render(ctx);
	}
}