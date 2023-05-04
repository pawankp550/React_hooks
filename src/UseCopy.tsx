import { useEffect } from "react";

export function UseCopy(ref: any) {
  useEffect(() => {
    navigator.clipboard.writeText("text");
  });

  return <></>;
}
