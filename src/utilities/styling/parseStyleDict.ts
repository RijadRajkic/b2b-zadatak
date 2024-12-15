export const parseStyleDict = (styleDict: any) => {
  const pStyleDict: any = {};
  Object.keys(styleDict).forEach((key) => {
    let pKey = "";

    for (let i = 0; i < key.length; i++) {
      if (key[i] === key[i].toLowerCase()) pKey += key[i];
      else pKey += `-${key[i].toLowerCase()}`;
    }

    pStyleDict[pKey] = styleDict[key];
  });

  return pStyleDict;
};
