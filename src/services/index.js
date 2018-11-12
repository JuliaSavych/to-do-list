import * as localStorageAdapter from './local-storage/adapter';

const adapters = {
  localStorage: localStorageAdapter
};

export const getAdapter = name => {
  return adapters[name];
};
