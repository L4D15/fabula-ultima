/**
 * 
 */
export class FabulaUltimaBondSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["fabulaultima", "sheet", "item"],
            width: 520,
            height: 480,
            tabs: [
                {
                    navSelector: ".sheet-tabs",
                    contentSelector: ".sheet-body",
                    initial: "description",
                },
            ],
        });
    }

    get template() {
        const path = "systems/fabulaultima/templates/item";
        // Return a single sheet for all item types.
        // return `${path}/item-sheet.html`;

        // Alternatively, you could use the following return statement to do a
        // unique item sheet by type, like `weapon-sheet.html`.
        return `${path}/item-${this.item.type}-sheet.html`;
    }
}