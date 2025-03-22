import { PropsWithChildren } from "react";

type Props = {
  isActive: boolean;
  onRequestClose?: () => void;
} & PropsWithChildren;
const Modal = ({ isActive, onRequestClose, children }: Props) => {
  return (
    <div
      className="absolute inset-0 z-10"
      style={{
        display: `${isActive ? "initial" : "none"}`,
      }}
    >
      <div
        onClick={onRequestClose}
        className="absolute inset-0 bg-black transition-colors z-0"
        style={{
          opacity: `${isActive ? 60 : 0}%`,
        }}
      />
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};
export default Modal;
