# react-native 71 feature - Separately enable TM/Fabric

Thank to those 2 PRs:

- https://github.com/facebook/react-native/pull/35117/
- https://github.com/facebook/react-native/pull/35091

We can turn off or turn on TM/Fabric. This repository is an example, where you can test this new functionality, which will be shipped in RN 71. It might make your migration much easier.

If you would like to turn off the fabric, please use the below approach:

### Android 🤖

Add additional parameters to a below method:

https://github.com/troZee/RN0710RC4/blob/main/android/app/src/main/java/com/rn0710rc4/MainApplication.java#L58

### iOS 🍏

Override `fabricEnabled` and `turboModuleEnabled` inside `AppDelegate.mm`

https://github.com/troZee/RN0710RC4/blob/main/ios/RN0710RC4/AppDelegate.mm#L27-L38
