import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi-plugin-locale';
  // src/page/HelloWorld.js
  export default () => {
    return <div><FormattedMessage id="helloworld" /></div>;
  }