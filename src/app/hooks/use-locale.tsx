import { useCallback, useContext } from "react";
export const useLocale = (): [string, (lng: string) => void] => {
  const { locale, setLocale } = useContext(Context);
  return [locale, setLocale];
};
