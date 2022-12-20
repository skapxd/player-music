import { useEffect } from "react";

export const useRemoveScrollY = () => {

  useEffect(() => {
    const html = document.querySelector("html")!

    html.style.overflowY = "hidden"
    document.body.style.overflowY = "hidden"

    return () => {
      html.style.overflowY = "auto"
      document.body.style.overflowY = "auto"
    };
  }, []);
}