// MainModule.ts
//
// This is just the skeleton of a TypeScript module
// with enough code to give an idea of some basic things.
//

import {OtherModule} from "./OtherModule.js";

interface TheInterface {
    theString: string;
}

const THE_CONSTANT = "assets/StarterTS.png";

class MainModule {
    static STATIC_VALUE = 5;

    theImage: HTMLImageElement;
    otherModule: OtherModule;

    constructor(public theConstructorArgument: string) {
        this.otherModule = new OtherModule();
        this.otherModule.property = MainModule.STATIC_VALUE;
        this.theImage = document.getElementById("theImage") as HTMLImageElement;
        let imageName = {theString: THE_CONSTANT} as TheInterface;
        this.theImage.src = imageName.theString;
        this.theRegularFunction();
    }

    theRegularFunction() {
        window.addEventListener('resize', () => {this.theArrowFunction()}, false);
    }

    theArrowFunction() {
        let theH1 = document.getElementById("theH1") as HTMLHeadingElement;
        MainModule.theStaticFunction(theH1, this.theConstructorArgument);
    }

    static theStaticFunction(theElement: HTMLHeadingElement, theText: string) {
      theElement.innerText = theText;
    }
}

export {MainModule};