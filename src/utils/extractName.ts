export const extractName = (fullName: string) => {
  const splitName = fullName.split(" ")
  const [name, surname] = [splitName[0], splitName[1]]
  return { name, surname }
};
