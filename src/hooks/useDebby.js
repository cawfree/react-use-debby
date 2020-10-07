import {useState, useEffect, useCallback} from "react";
import isEqual from "react-fast-compare";
import debounce from "lodash.debounce";

const defaultOptions = Object.freeze({trailing: true});

export default function useDebby(wait = 150, options = defaultOptions) {
  const [rt] = useState([false]);
  const [state, setState] = useState([undefined]);
  const [debouncedSetState] = useState(() =>
    debounce(setState, wait, options)
  );
  return useCallback((nextState) => {
    if (!rt[0]) {
      rt[0] = !rt[0];
      return state[0] = nextState;
    }
    !isEqual(nextState, state[0])
      && debouncedSetState([nextState]);
    return state[0];
  }, [state, debouncedSetState, rt]);
}
