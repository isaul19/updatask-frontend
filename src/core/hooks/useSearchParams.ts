import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useSearchParam = (param: string): [string | null, (newValue: string | null) => void] => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramValue = searchParams.get(param);
    setValue(paramValue);
  }, [location.search, param]);

  const setSearchParam = (newValue: string | null) => {
    const searchParams = new URLSearchParams(location.search);
    if (newValue) {
      searchParams.set(param, newValue);
    } else {
      searchParams.delete(param);
    }
    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  return [value, setSearchParam];
};
