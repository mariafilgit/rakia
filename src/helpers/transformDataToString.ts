import { DataDto } from '../types';

export const transformDataToString = (data: DataDto[]) => {
  const transformResult = JSON.stringify(data).replace(/[}{]/g, '');
  return transformResult.substring(1, transformResult.length - 1);
};
