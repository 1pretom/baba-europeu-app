declare module "@react-native-community/datetimepicker" {
  import { ViewStyle } from "react-native";

  export interface DateTimePickerProps {
    value: Date;
    onChange: (event: Event, selectedDate: Date | undefined) => void;
    mode?: "date" | "time" | "datetime" | "countdown";
    display?: "default" | "spinner" | "clock" | "calendar";
    style?: ViewStyle;
  }

  const DateTimePicker: React.FC<DateTimePickerProps>;

  export default DateTimePicker;
}
