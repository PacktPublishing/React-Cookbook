// Base Actions
export const request = ACTION => ({
  type: ACTION.request()
});

export const received = (ACTION, data) => ({
  type: ACTION.success(),
  payload: data
});
