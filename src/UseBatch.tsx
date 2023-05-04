import { useEffect } from "react";

const chopCalls = (calls: any, size: number) => {
  console.log(calls);
  const batchedCalls = [];
  for (let i = 0; i < calls.length; i++) {
    let curr = [];
    curr.push(calls[i]);

    if (curr.length === size || i === calls.length - 1) {
      batchedCalls.push(curr);
      curr = [];
    }
  }

  return batchedCalls;
};

export function UseBatch(calls: any, size: number) {
  const executeBatch = () => {
    const batches = chopCalls(calls, size);
    console.log(batches);
  };

  useEffect(() => {
    executeBatch();
  }, []);
}
