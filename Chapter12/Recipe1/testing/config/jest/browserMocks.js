// Browser Mocks
const requestAnimationFrameMock = callback => {
  setTimeout(callback, 0);
};

Object.defineProperty(window, 'requestAnimationFrame', {
  value: requestAnimationFrameMock
});

const localStorageMock = (() => {
  let store = {}

  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => store[key] = value.toString(),
    removeItem: key => delete store[key],
    clear: () => store = {}
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});
