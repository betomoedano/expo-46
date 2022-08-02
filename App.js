import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, SafeAreaView } from 'react-native';
import {Canvas, Circle, Fill, Group} from "@shopify/react-native-skia";
import { FlashList } from "@shopify/flash-list";
 
const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item"
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item"
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item"
  }
];

const MyList = () => {
  return (
    <FlashList
      data={DATA}
      contentContainerStyle={{paddingVertical: 50}}
      renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      ListHeaderComponent={() => <Text style={styles.title}>Hello Expo 46</Text>}
      estimatedItemSize={200}
    />
  );
};

const HelloWorld = () => {
  const size = 256;
  const r = size * 0.33;
  return (
    <Canvas style={{width: '100%', height: '100%', position: 'absolute'}}>
        <Fill color={"#181818"} />
      <Group >
        <Circle cx={r} cy={r} r={r} color="orange" />
        <Circle cx={size} cy={r} r={r} color="magenta" />
        <Circle
          cx={size/2}
          cy={size}
          r={r}
          color="yellow"
        />
      </Group>
    </Canvas>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorld />
      <MyList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#ffffff90',
    margin: 15,
    padding: 15,
  },
  title: {
    fontSize: 42,
    color: 'white',
    fontWeight: '900',
    textAlign: 'center',
  }
});
