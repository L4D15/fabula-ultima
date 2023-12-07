
export class Attribute {
    /**
    * Calculate the final dice size for the attribute after
    * applying buffs and debuffs.
    * @param actorData Character data.
    * @param attributeID ID of the attribute to calculate.
    */
    static calculateAttributeCurrentValue(actorData, attributeID) {
        let value = actorData.system.attributes[attributeID].base;
        
        // TODO: Check status effects
        
        return value;
    }
    
    static lowerDiceSize(diceSize) {
        if (diceSize == 6) return 6;
        if (diceSize == 8) return 6;
        if (diceSize == 10) return 8;
        if (diceSize == 12) return 10;
        
        return diceSize;
    }
    
    static riseDiceSize(diceSize) {
        if (diceSize == 6) return 8;
        if (diceSize == 8) return 10;
        if (diceSize == 10) return 12;
        if (diceSize == 12) return 12;
        
        return diceSize;
    }

    static valueToDiceSize(value) {
        return `d${value}`;
    }
}