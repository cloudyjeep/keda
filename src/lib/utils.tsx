export function fixProps<T extends object, K extends object>(
  props: T,
  keys: K
): Omit<T, keyof K> {
  if (typeof props === "object" && keys) {
    for (const i in keys) {
      if (i in props) {
        // @ts-ignore
        props[i] = undefined;
      }
    }
  }
  return props;
}

export function clsx(...klass: any[]): string {
  let className = "";
  for (let i = -1; ++i < klass.length; ) {
    if (klass[i]) {
      className += i ? ` ${klass[i]}` : klass[i];
    }
  }
  return className;
}
