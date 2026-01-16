import React from 'react';
import { Platform, SafeAreaView, Text, Button, View, StyleSheet } from 'react-native';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import TIMEX_HTML from './AppAssets/timex_html';

export default function App() {
  if (Platform.OS === 'web') {
    return (
      <iframe
        title="timex-static"
        src="/timex.html"
        style={{ border: 0, width: '100%', height: '100vh' }}
      />
    );
  }

  // On native, if scraper produced an inlined HTML module, render it inside a WebView.
  if (TIMEX_HTML && TIMEX_HTML.length > 0) {
    return <WebView originWhitelist={["*"]} source={{ html: TIMEX_HTML }} style={{ flex: 1 }} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Timex static preview</Text>
      <Text style={styles.paragraph}>This app shows a static snapshot of www.timex.com on web.</Text>
      <View style={{ height: 12 }} />
      <Button
        title="Open Timex in external browser"
        onPress={() => Linking.openURL('https://www.timex.com')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 20, fontWeight: '600' },
  paragraph: { marginTop: 8, fontSize: 14 }
});
