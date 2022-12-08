import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const scrollControlsAndElement = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};

export function scrollTop() {
  window.scroll({
    top: 0,
    left: 0,
  });
}
