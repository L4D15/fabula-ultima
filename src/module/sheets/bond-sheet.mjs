/**
* Sheet for a bond between a character and another element of the world.
*/
export class FabulaUltimaBondSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["fabulaultima", "sheet", "bond"],
            width: 400,
            height: 400,
        });
    }
    
    get template() {
        return `systems/fabulaultima/templates/item/item-bond-sheet.html`;
    }

    /** override */
    async getData() {
        const context = super.getData();

        return context;
    }
    
    activateListeners(html) {
        super.activateListeners(html);
    }
}