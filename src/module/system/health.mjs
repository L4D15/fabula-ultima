
export class Health {
    /**
    * Calculate max HP for a character.
    * @param {*} actorData Character data.
    * @returns Max amount of HP.
    */
    static calculateHealthPointsCapacity(actorData) {
        let mightScore = actorData.system.attributes.might.current;
        let level = actorData.system.level.value;
        let classesBonus = 0;
        
        for (let heroeClass in actorData.classes) {
            classesBonus += Number(heroeClass.system.healthBonus);
            
            for (let skill in heroeClass.skills) {
                classesBonus += Number(skill.system.passive.hpBonus) * skill.system.level;
            }
        }
        
        let hpCapacity = level + mightScore * 5 + classesBonus;
        
        return hpCapacity;
    }
}
