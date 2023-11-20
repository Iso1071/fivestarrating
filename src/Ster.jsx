import clsx from "clsx";
import "./ster.scss";

const Ster = ({ disabled, selected }) => {
  const styles = clsx({
    ster: true,
    disabled: disabled,
    selected: selected,
  });
  return <div className={styles}>Ster</div>;
};
export default Ster;
