
export class Mind {
    /**
    * Calculate max MP for a character.
    * @param {*} context Character data.
    * @returns Max amount of MP.
    */
    static calculateMindPointsCapacity(context) {
        let willpowerScore = context.system.attributes.willpower.current;
        let level = context.system.level.value;
        let classesBonus = 0;
        
        for (let heroeClass in context.classes) {
            classesBonus += Number(heroeClass.system.mindBonus);
            
            for (let skill in heroeClass.skills) {
                classesBonus +=
                Number(skill.system.passive.mpBonus) * skill.system.level;
            }
        }
        
        let mpCapacity = level + willpowerScore * 5 + classesBonus;
        
        return mpCapacity;
    }
}