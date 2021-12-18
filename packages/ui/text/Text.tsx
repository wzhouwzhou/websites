import { appendClass } from "..";

export const TextComponent = {
  h1: props => <h1 className={appendClass('text-8xl font-bold', props.className)}>{props.children}</h1>,
  h2: props => <h2 className={appendClass('text-7xl font-bold', props.className)}>{props.children}</h2>,
  h3: props => <h3 className={appendClass('text-6xl font-semibold', props.className)}>{props.children}</h3>,
  h4: props => <h4 className={appendClass('text-5xl font-semibold', props.className)}>{props.children}</h4>,
  h5: props => <h5 className={appendClass('text-4xl', props.className)}>{props.children}</h5>,
  h6: props => <h6 className={appendClass('text-3xl', props.className)}>{props.children}</h6>,
  lg: props => <p className={appendClass('text-xl', props.className)}>{props.children}</p>,
  p: props => <p className={appendClass('text-base', props.className)}>{props.children}</p>,
}

export const TextComponentCentered = {
  h1: props => <h1 className={appendClass('text-8xl font-bold text-center', props.className)}>{props.children}</h1>,
  h2: props => <h2 className={appendClass('text-7xl font-bold text-center', props.className)}>{props.children}</h2>,
  h3: props => <h3 className={appendClass('text-6xl font-semibold text-center', props.className)}>{props.children}</h3>,
  h4: props => <h4 className={appendClass('text-5xl font-semibold text-center', props.className)}>{props.children}</h4>,
  h5: props => <h5 className={appendClass('text-4xl text-center', props.className)}>{props.children}</h5>,
  h6: props => <h6 className={appendClass('text-3xl text-center', props.className)}>{props.children}</h6>,
  lg: props => <p className={appendClass('text-xl text-center', props.className)}>{props.children}</p>,
  p: props => <p className={appendClass('text-base text-center', props.className)}>{props.children}</p>,
}

export function Text({ variant, ...props }) {
  const TextVariant = props.center ? TextComponentCentered[variant] : TextComponent[variant];
  return <TextVariant {...props} />;
}