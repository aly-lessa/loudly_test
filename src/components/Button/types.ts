export enum EButtonType {
  big = 'big',
  small = 'small',
  tiny = 'tiny',
}

export type TButtonProps = {
  onClick: VoidFunction;
  icon?: string;
  type?: EButtonType;
};
