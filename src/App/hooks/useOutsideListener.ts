import {RefObject, useEffect} from 'react'

export function useOutsideListener<t = any>(ref: RefObject<t>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      // @ts-ignore
      if (ref?.current && !ref?.current?.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
