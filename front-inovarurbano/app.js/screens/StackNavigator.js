const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#000" }, // Fundo do cabeçalho preto
          headerTintColor: "#fff", // Texto branco
          headerTitleAlign: "center",
          headerTitle: () => (
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../assets/logo.png")} // Coloque sua logo aqui
                style={{ width: 120, height: 40 }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
