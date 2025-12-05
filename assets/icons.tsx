import { AntDesign, Feather, FontAwesome6, Fontisto } from "@expo/vector-icons";

type IconProps = {
  color?: string;
  size?: number;
};

const DEFAULT_SIZE = 26;

export const icons = {
  index: ({ color, size = DEFAULT_SIZE }: IconProps) => (
    <AntDesign name="home" size={size} color={color} />
  ),
  settings: ({ color, size = DEFAULT_SIZE }: IconProps) => (
    <Feather name="settings" size={size} color={color} />
  ),
  list: ({ color, size = DEFAULT_SIZE }: IconProps) => (
    <FontAwesome6 name="clipboard-list" size={size} color={color} />
  ),
  money: ({ color, size = DEFAULT_SIZE }: IconProps) => (
    <Fontisto name="money-symbol" size={size} color={color} />
  ),
};
