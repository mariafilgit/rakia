export const transformString = (str: string) => {
  const splittedStr = str.split('"id":');

  const res = splittedStr.reduce(
    (acc, cur) => {
      const transformCur = cur.replace('{', '').replace('}', '');
      if (!transformCur.length) {
        return acc;
      }

      const nameSplit = transformCur.split('"n":');
      const id = nameSplit[0]?.replace(/[",]/g, '');
      const categorySplit = nameSplit[1].split('"c":');
      const n = categorySplit[0]?.replace(/[",]/g, '');
      const c = categorySplit[1]
        ?.replace(/[^A-Za-z, ]/g, '')
        .split(',')
        .filter((string) => !!string.length)
        .join(', ');

      return [...acc, { id, n, c }];
    },
    [] as { id: string; n: string; c: string }[]
  );

  return res;
};
