
export class Inventory {
    /**
    * Calculate max IP for a cahracter.
    * @param {*} context Character data.
    * @returns Max amount of IP.
    */
    static calculateInventoryPointsCapacity(context) {
        let inventoryCapacity = 6;
        let classesBonus = 0;
        
        for (let heroeClass in context.classes) {
            classesBonus += Number(heroeClass.system.inventoryBonus);
            
            for (let skill in heroeClass.skills) {
                classesBonus += Number(skill.system.passive.ipBonus);
            }
        }
        
        return inventoryCapacity + classesBonus;
    }
}