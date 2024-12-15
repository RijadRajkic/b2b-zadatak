import { parseStyleDict } from "./parseStyleDict";

export const extractCssStyle = (styleDict: any, prefix?: string) => {
 if (!styleDict) return "";

 const pStyleDict = parseStyleDict(styleDict);

 return Object.keys(pStyleDict)
  .filter((key) => (pStyleDict[key] ? true : false))
  .map((key) => {
   return !prefix ? `${key}:${pStyleDict[key]};` : `${prefix}-${key}:${pStyleDict[key]};`;
  })
  .join("");
};
