import { PropsWithChildren } from "react";

export default function Error({ children }: PropsWithChildren) {
  if (!children) return null;
  return <small className="block text-red-600 text-xs">{children}</small>;
}
