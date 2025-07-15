import type React from "react";

export type LikertScaleTypes = {
  node: number | null;
  setNode: React.Dispatch<React.SetStateAction<number | null>>;
};
