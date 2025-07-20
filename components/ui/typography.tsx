export type TypographyColor = 'red' | 'default';
export type TypographyBottomSpacing = 'default' | 'none';

export interface TypographyProps {
  children: string;
  color?: TypographyColor;
  bottomSpacing?: TypographyBottomSpacing;
}

function resolveColorClass(color?: TypographyColor) {
  if (color === 'red') {
    return 'text-red-700';
  }

  return '';
}

function resolveBottomSpacingClass(spacing?: TypographyBottomSpacing) {
  if (spacing === 'none') {
    return 'mb-0';
  }

  return 'mb-4';
}

function resolveCommonClasses({ color, bottomSpacing }: TypographyProps) {
  return `${resolveBottomSpacingClass(bottomSpacing)} ${resolveColorClass(color)}`;
}

export interface TitleProps extends TypographyProps {
  size: '3';
}

export function Title(props: TitleProps) {
  const { size, children } = props;

  if (size === '3') {
    const classes = `text-2xl font-semibold tracking-tight ${resolveCommonClasses(props)}`;
    return <h3 className={classes}>{children}</h3>;
  }

  return (<></>)
}

export function Paragraph(props: TypographyProps) {

  const { children } = props;

  const classes = `leading-7 ${resolveCommonClasses(props)}`;
  return (
    <p className={classes}>{children}</p>
  )
}