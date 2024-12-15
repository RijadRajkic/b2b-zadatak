export const clear = (data: any): any => {
  const clearJson: any = {};
  Object.keys(data).forEach((key: string) => {
    if(data[key] != undefined && data[key] != null)
        clearJson[key] = data[key];
  });

  return clearJson;
};
