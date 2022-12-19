/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  UIManager,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {multiply} from 'react-native-swift-support';
import Toast from 'react-native-simple-toast';
import PagerView from 'react-native-pager-view';

const result = multiply(3, 7);

type SectionProps = PropsWithChildren<{
  title: string;
}>;

import WebView from 'react-native-webview';

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Hello World</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: red;
      }
    </style>
  </head>
  <body>
    <p>LIBRARY, WHICH DOES NOT SUPPORT FABRIC</p>
  </body>
</html>
`;

const showToast = () => {
  Toast.show('EXAMPLE TURBOMODULE', Toast.SHORT);
};

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(props: Object): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View style={{height: 120}}>
          <WebView
            source={{html: HTML}}
            automaticallyAdjustContentInsets={false}
            style={{backgroundColor: '#00000000'}}
          />
        </View>
        <PagerView
          style={{width: '100%', height: 120, backgroundColor: 'green'}}
          initialPage={0}>
          <View key="1">
            <Text>LIBRARY WHICH SUPPORTS BOTH FABRIC AND PAPER</Text>
          </View>
          <View key="2">
            <Text>Second page</Text>
          </View>
        </PagerView>
        <Text>
          __turboModuleProxy RESULT: {/* @ts-expect-error */}
          {global.__turboModuleProxy != null ? 'true' : 'false'}
        </Text>
        <Text>TURBO MODULE SYNC RESULT: {result}</Text>
        <Button title="Toggle Toast" onPress={() => showToast()} />
        <Text>INITIAL PROPS</Text>
        {Object.keys(props).map(key => (
          // @ts-ignore
          <Text key={`${key}${props[key]}`}>
            {/* @ts-ignore */}
            {key}: {String(props[key])}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
