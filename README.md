This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### Localization using simple java script file
Refer locales/en.js es.js tn.js i18n.js\
i18n.js\
This file defines a simple i18n object with two methods: t, which is used to retrieve translated strings, and changeLanguage, which allows changing the current language.

### usage
Refer App.tsx\
import i18n from './locales/i18n';\
i18n.changeLanguage('tn')\
<Text>{i18n.t('greeting')}</Text>\
<Text>{i18n.t('introduction')}</Text>

