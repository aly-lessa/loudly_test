export enum EButtonType {
  big = 'big',
  medium = 'medium',
  tiny = 'tiny',
}

export type TButtonProps = {
  onClick: VoidFunction;
  icon?: string;
  type?: EButtonType;
};
