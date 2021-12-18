import { appendClass } from "..";

export function Center({ children, ...props }) {
  return (
    <div className={appendClass('flex justify-center items-center', props.className)}>
      {children}
    </div>
  );
}

export function CenterFull({ children, ...props }) {
  return (
    <div className={appendClass('flex justify-center items-center h-screen', props.className)}>
      {children}
    </div>
  );
}