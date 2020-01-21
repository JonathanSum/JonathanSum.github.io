import { Layout, Menu, Icon, Button } from 'antd';
import { Component } from 'react';
import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi-plugin-locale';
const { Header, Footer, Sider, Content } = Layout;

export default class GlobalHeader extends Component {

    changLang() {
        const locale = getLocale();
        if (!locale || locale === 'zh-CN') {
            setLocale('en-US');
        } else {
            setLocale('zh-CN');
        }
    }
    render() {
        return (


            <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>        <Button
                size="small"
                onClick={() => {
                    this.changLang();
                }}
            >
                <FormattedMessage id="lang" />
            </Button></Header>

        )
    }
}