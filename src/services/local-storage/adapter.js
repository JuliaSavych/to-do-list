import {localStorageService} from './index';

export const remove = value => {
  const currentCookie = localStorageService.read('todolist');
  const cookie = currentCookie
    .split('&')
    .filter(item => item !== value)
    .join('&');

  localStorageService.write('todolist', cookie);
};

export const save = value => {
  const currentCookie = localStorageService.read('todolist');
  const currentValue = currentCookie ? `${currentCookie}&` : '';

  localStorageService.write('todolist', `${currentValue}${value}`);
};

export const read = () => {
  const result = localStorageService.read('todolist');

  return result ? Promise.resolve(result.split('&')) : Promise.resolve([]);
  console.error('data', data);
};

export const removeAll = () => {
  localStorageService.remove('todolist');
};
