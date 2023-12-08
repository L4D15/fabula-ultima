
export class MagicDefense {
    static calculateMagicDefense(actorData) {
        let magicDefense = 0;

        magicDefense = actorData.system.attributes.insight.current;

        // TODO: Apply item bonuses

        return magicDefense;
    }
}