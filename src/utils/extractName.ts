export const extractName = (fullName: string) => {
  const splitName = fullName.split(" ")
  const [familyName, name] = [splitName[0], splitName[1]]
  return { name, familyName }
};
