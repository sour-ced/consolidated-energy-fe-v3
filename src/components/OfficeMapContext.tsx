"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Office } from "@/lib/offices";

type OfficeMapContextValue = {
  focused: Office | null;
  focus: (office: Office) => void;
};

const OfficeMapContext = createContext<OfficeMapContextValue | null>(null);

export function OfficeMapProvider({ children }: { children: ReactNode }) {
  const [focused, setFocused] = useState<Office | null>(null);
  return (
    <OfficeMapContext.Provider value={{ focused, focus: setFocused }}>
      {children}
    </OfficeMapContext.Provider>
  );
}

export function useOfficeMap() {
  const ctx = useContext(OfficeMapContext);
  if (!ctx) {
    throw new Error("useOfficeMap must be used within an OfficeMapProvider");
  }
  return ctx;
}
