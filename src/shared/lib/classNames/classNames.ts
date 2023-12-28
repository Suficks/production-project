type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => [
  cls,
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
  ...additional.filter(Boolean),
].join(' ');
