export function isBrowser() {
  return typeof window !== 'undefined';
}

export function cx(...classes) {
  return classes.join(' ');
}

/**
 * Gets a new state
 *
 * @param {object} state State
 * @param {object} newState New State
 * @returns {object} New State
 */
export function getNewState(state, newState) {
  return Object.assign({}, state, newState);
}

/**
 * Returns true if is the first render
 *
 * @param {array} items Items
 * @returns {boolean} True if is first render
 */
export function isFirstRender(items) {
  return typeof items === 'undefined' || items.length === 0 || Object.keys(items).length === 0;
}
