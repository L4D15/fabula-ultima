/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

      // Actor partials.
      "systems/fabulaultima/templates/actor/parts/actor-features.html",
      "systems/fabulaultima/templates/actor/parts/actor-items.html",
      "systems/fabulaultima/templates/actor/parts/actor-spells.html",
      "systems/fabulaultima/templates/actor/parts/actor-effects.html",
      "systems/fabulaultima/templates/actor/parts/actor-bonds.html",
      "systems/fabulaultima/templates/actor/parts/actor-limits.html",
      "systems/fabulaultima/templates/actor/parts/actor-main.html",
      "systems/fabulaultima/templates/actor/parts/actor-bonds-list.html",
      "systems/fabulaultima/templates/partials/progress-bar.html",
      "systems/fabulaultima/templates/item/parts/item-bond-line.html",
      "systems/fabulaultima/templates/item/parts/item-summary.html",
  ]);
};
