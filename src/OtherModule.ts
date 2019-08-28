// OtherModule.ts
//
// Just a regular module.

class OtherModule {
    private theProperty: number;

    constructor() {

    }

    set property(theValue: number) {
        this.theProperty = theValue;
    }

    get property(): number {
        return(this.theProperty);
    }
}

export {OtherModule};