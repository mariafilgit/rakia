import { CatalogDTO } from '../types';

export const transformDataToString = (data: CatalogDTO[]) => {
  const transformResult = JSON.stringify(data).replace(/[}{]/g, '');
  return transformResult.substring(1, transformResult.length - 1);
};
