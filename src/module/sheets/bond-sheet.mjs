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
    
    activateListeners(html) {
        super.activateListeners(html);

        html.find(".feeling-selector").change(this._onFeelingSelectorChanged.bind(this));
    }

    _onFeelingSelectorChanged(event) {
        // event.preventDefault();

        // const parent = $(event.currentTarget).parents(".feeling");
        // const groupID = parent.data("feeling-group");
        // const value = event.target.value;
        // let feelings = this.item.system.feelings;

        // console.log(`Changed value of feeling ${groupID} to ${value}`);

        // feelings[groupID] = value;

        // this.item.update({
        //     "system.feelings": feelings
        // });
    }
}