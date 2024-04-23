export type TPosition = {
  label: string;
  value: string;
  icon?: string;
  testID?: string;
};

export type FormDataProps = {
  name: string;
  email: string;
  nickname?: string;
  position?: string;
  password: string;
  passwordConfirm?: string;
  dateOfBirth?: string;
};
