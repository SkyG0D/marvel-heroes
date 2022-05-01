import { HTMLAttributes } from 'react';
import * as S from './styles';

export type IconProps = {
  color?: string;
  fill?: string;
  stroke?: string;
  size?: number;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
};

export type GradientIconProps = {
  start: { color: string; offset: number };
  end: { color: string; offset: number };
  horizontal?: boolean;
} & Omit<IconProps, 'color'>;

export function renderIcon(
  {
    color = 'black',
    fill = color,
    stroke = color,
    size = 16,
    width = size,
    height = size,
    style,
    wrapperProps,
  }: IconProps,
  Icon: JSX.Element,
) {
  return (
    <S.IconWrapper
      {...wrapperProps}
      style={style}
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
    >
      {Icon}
    </S.IconWrapper>
  );
}

export function renderGradientIcon(
  {
    size = 16,
    width = size,
    height = size,
    start,
    end,
    horizontal = false,
    wrapperProps,
  }: GradientIconProps,
  viewBox: string,
  IconContent: JSX.Element,
) {
  return (
    <S.GradientIcon
      {...wrapperProps}
      width={width}
      height={height}
      start={start.color}
      end={end.color}
    >
      <svg fill="none" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        <linearGradient
          id="gradient"
          gradientTransform={`rotate(${horizontal ? 0 : 90})`}
        >
          <stop className="main-stop" offset={`${start.offset}%`} />
          <stop className="alt-stop" offset={`${end.offset}%`} />
        </linearGradient>
        {IconContent}
      </svg>
    </S.GradientIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return renderIcon(
    props,
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 19.5H10.75M2 4.5H22H2ZM2 12H22H2Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
  );
}

export function SearchIcon(props: IconProps) {
  return renderIcon(
    props,
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 22L15.3333 15.3333L22 22ZM17.5556 9.77778C17.5556 10.7992 17.3544 11.8106 16.9635 12.7542C16.5726 13.6978 15.9997 14.5553 15.2775 15.2775C14.5553 15.9997 13.6978 16.5726 12.7542 16.9635C11.8106 17.3544 10.7992 17.5556 9.77778 17.5556C8.75639 17.5556 7.74499 17.3544 6.80135 16.9635C5.85771 16.5726 5.00029 15.9997 4.27806 15.2775C3.55582 14.5553 2.98292 13.6978 2.59205 12.7542C2.20118 11.8106 2 10.7992 2 9.77778C2 7.71498 2.81944 5.73667 4.27806 4.27806C5.73667 2.81944 7.71498 2 9.77778 2C11.8406 2 13.8189 2.81944 15.2775 4.27806C16.7361 5.73667 17.5556 7.71498 17.5556 9.77778Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
  );
}

export function MarvelIcon(props: GradientIconProps) {
  return renderGradientIcon(
    props,
    '0 0 95 34',
    <path
      d="M82.5499 6.38066V0.00476114H65.196L62.3421 21.3053L59.518 0.00486458H53.2599L53.961 5.68855C53.2381 4.23252 50.6759 0.00486458 45.0374 0.00486458C45.0002 0.00238059 38.7708 0.00486458 38.7708 0.00486458L38.7468 31.0521L34.1854 0.00486458L25.9894 0L21.2705 32.1692L21.273 0.00465769H13.4289L10.6011 18.0742L7.84662 0.00486458H0V34.9781H6.17906V18.121L8.98978 34.9776H12.2748L15.046 18.121V34.9776H26.9582L27.681 29.5962H32.477L33.1974 34.9776L44.8923 34.985H44.9018V34.9776H44.9091H44.9164V23.6253L46.3501 23.4118L49.3183 34.985H49.3255H55.3602H55.3673L55.3649 34.9776H55.3756H55.3829L51.4878 21.4133C53.4618 19.9206 55.6905 16.1299 55.0973 12.5036V12.5012C55.1044 12.5503 58.7738 35 58.7738 35L65.9682 34.9776L70.8841 3.27732V34.9777H82.5502V28.6878H77.0125V20.6669H82.5502V14.2812H77.0125V6.38066H82.5499ZM28.4089 24.0502L30.1054 9.09856L31.8669 24.0502H28.4089ZM46.3702 17.1464C45.8946 17.3822 45.3988 17.5001 44.9161 17.5001V6.25056C44.9245 6.25056 44.9342 6.24828 44.9462 6.24828C45.4301 6.2458 49.038 6.39794 49.038 11.8139C49.038 14.647 47.8109 16.432 46.3702 17.1464ZM95 28.6829V34.9728H83.6196V0H89.7471V28.6829H95Z"
      fill="url(#gradient)"
      stroke="url(#gradient)"
    />,
  );
}