
export class Bond {
    static FeelingsKeys = {
        "-": "FABULAULTIMA.FeelingsNone",
        "admiration": "FABULAULTIMA.FeelingsAdmiration",
        "inferiority": "FABULAULTIMA.FeelingsInferiority",
        "loyalty": "FABULAULTIMA.FeelingsLoyalty",
        "mistrust": "FABULAULTIMA.FeelingsMistrust",
        "affection": "FABULAULTIMA.FeelingsAffection",
        "hatred": "FABULAULTIMA.FeelingsHatred",
    };

    static getLabelForFeeling(feelingID) {
        const key = this.FeelingsKeys[feelingID];
        return game.i18n.localize(key);
    }

    static generateFeelingsListLabel(bond) {
        let result = "";
        let localizedLabels = [];

        if (bond.system.feelings.group1 !== "-") {
            const label = Bond.getLabelForFeeling(bond.system.feelings.group1);
            localizedLabels.push(label);
        }

        if (bond.system.feelings.group2 !== "-") {
            const label = Bond.getLabelForFeeling(bond.system.feelings.group2);
            localizedLabels.push(label);
        }

        if (bond.system.feelings.group3 !== "-") {
            const label = Bond.getLabelForFeeling(bond.system.feelings.group3);
            localizedLabels.push(label);
        }

        console.log(`Generated localized feelings list:`);
        console.dir(localizedLabels);

        for (let i in localizedLabels) {
            if (i > 0) result += ", ";
            result += localizedLabels[i];
        }

        return result;
    }
}