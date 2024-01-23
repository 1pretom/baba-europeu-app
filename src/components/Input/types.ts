import { TextInput, TextInputProps } from "react-native";

export type TInputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};
