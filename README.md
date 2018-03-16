# create-native-di
> Creates an npm package that is ES6, TDD, and React Ready.
เป็น react native cli ที่มีตัวอย่างโครงสร้างพื้นฐานพร้อมใช้งานประกอบไปด้วย package หลักๆ เช่น native-base, mobx, moment, lodash และรองรับ ES6 และมี di สำหรับ inject Store ที่จะติดต่อ api หรือ fake.store ที่สร้างขึ้น ^^

## Installation

First, install [Yeoman](http://yeoman.io) and generator-create-npm-package using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
sudo npm install -g yo
sudo npm install -g generator-native-di
```

Then generate your new project:

```bash
yo native-di
```

Then install package:

```bash
npm install
```

If your project has any issues with the native folders, you can rebuild them by deleting both the ios and android directories at the root level of your project and running this command:

```bash
react-native eject
```

Then link package 
[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
[react-native-signature-capture](https://github.com/RepairShopr/react-native-signature-capture):

```bash
react-native link react-native-vector-icons
react-native link react-native-signature-capture
```

Run project:

```bashb 
npm run ios
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT© Maximumz
