import IndexHeader from "@/src/component/IndexHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HintCard = (props: {
  title: string;
  titleIcon: React.ReactNode;
  value: string;
}) => {
  const { title, titleIcon, value } = props;

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        borderRadius: 8,
        paddingHorizontal: 6,
        paddingVertical: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 4,
        }}
      >
        {titleIcon}
        <Text style={{ fontSize: 16, fontWeight: "400", color: "#808080" }}>
          {title}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          paddingStart: 8,
          paddingVertical: 4,
        }}
      >
        RM {value}
      </Text>
    </TouchableOpacity>
  );
};

export default function Index() {
  const inset = useSafeAreaInsets();

  const pieData = [
    {
      value: 47,
      color: "#009FFF",
      gradientCenterColor: "#006DFF",
      focused: true,
    },
    { value: 40, color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
    { value: 16, color: "#BDB2FA", gradientCenterColor: "#8F80F3" },
    { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97" },
  ];

  return (
    <View style={[styles.container, { paddingTop: inset.top }]}>
      <IndexHeader />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          marginTop: 8,
        }}
      >
        <HintCard
          title="Total Expenses"
          titleIcon={
            <MaterialIcons name="attach-money" size={20} color="#808080" />
          }
          value="1088"
        />
        <HintCard
          title="Total Incomes"
          titleIcon={
            <MaterialIcons name="attach-money" size={20} color="#808080" />
          }
          value="5000"
        />
      </View>

      <View style={{ flexDirection: "row", marginTop: 8 }}>
        <HintCard
          title="Net Balance"
          titleIcon={
            <MaterialIcons name="attach-money" size={20} color="#808080" />
          }
          value="3912"
        />
      </View>

      <View style={{ flex: 1 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
