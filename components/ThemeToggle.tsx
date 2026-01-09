import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { TouchableOpacity } from "react-native";

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const handleToggle = () => {
    toggleColorScheme();
  };

  return (
    <TouchableOpacity
      onPress={handleToggle}
      className={`w-12 h-12 rounded-full items-center justify-center ${
        isDark ? "bg-indigo-900" : "bg-amber-100"
      }`}
      activeOpacity={0.7}
    >
      {isDark ? (
        <Ionicons name="moon" size={24} color="#fbbf24" />
      ) : (
        <Ionicons name="sunny" size={24} color="#f59e0b" />
      )}
    </TouchableOpacity>
  );
}
