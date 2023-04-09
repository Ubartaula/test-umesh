import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    let prevTitle = document.title;
    prevTitle = title;

    return () => (document.title = prevTitle);
  }, [title]);
};

export default useTitle;
