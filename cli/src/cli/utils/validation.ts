export const validateHookName = (name: string): boolean => {
  return /^[a-zA-Z0-9_-]+$/.test(name);
};
