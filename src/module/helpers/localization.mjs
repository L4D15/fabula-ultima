
export const Localization = {
    weapons: {
        getCategory: (category) => {
            let key = category;
            let text = game.i18n.localize(
                CONFIG.FABULAULTIMA.weaponCategories[key]
            );

            return text;
        },

        getType: (type) => {
            let key = type;
            let text = game.i18n.localize(CONFIG.FABULAULTIMA.weaponTypes[key]);

            return text;
        },

        getDamageType: (damageType) => {
            let key = damageType;
            let text = game.i18n.localize(CONFIG.FABULAULTIMA.damageTypes[key]);

            return text;
        },

        getMainHandEquippedStatus: () => {
            let key = "FABULAULTIMA.MainHand";
            let text = game.i18n.localize(key);

            return text;
        },

        getOffHandEquippedStatus: () => {
            let key = "FABULAULTIMA.OffHand";
            let text = game.i18n.localize(key);

            return text;
        },

        getTwoHandsEquippedStatus: () => {
            let key = "FABULAULTIMA.EquipTwoHanded";
            let text = game.i18n.localize(key);

            return text;
        },

        getNotEquippedStatus: () => {
            return "";
        },
    }
};