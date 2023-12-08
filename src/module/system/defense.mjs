
export class Defense {
    static calculateDefense(actorData) {
        let defense = 0;

        defense = actorData.system.attributes.dexterity.current;

        // TODO: Apply items bonuses

        return defense;
    }
}