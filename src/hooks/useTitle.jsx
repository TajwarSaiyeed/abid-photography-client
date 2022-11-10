import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Abid PhotoGraphy`;
  }, [title]);
  return <div></div>;
};

export default useTitle;
