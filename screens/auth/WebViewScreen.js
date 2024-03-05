import React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";

const WebViewScreen = ({ handleRedirect, route }) => {
  const { uri } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        onNavigationStateChange={handleRedirect}
        source={{ uri }}
      />
    </View>
  );
};

export default WebViewScreen;