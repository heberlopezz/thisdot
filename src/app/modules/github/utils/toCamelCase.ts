export const toCamel = (key: string) => {
  return key.replace(/([-_][a-z])/gi, (text) => {
    return text.toUpperCase().replace('-', '').replace('_', '');
  });
};

export const keysToCamel = (object) => {
  const parsedObject = {};
  Object.keys(object).forEach((key) => {
    parsedObject[toCamel(key)] = object[key];
  });
  return parsedObject;
};
