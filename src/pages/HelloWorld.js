import React from 'React';
import { Typography, Divider, Tabs, Tree, Button, Carousel, Card } from 'antd';
import styles from './css-modules-with-less/style.less';

const { TabPane } = Tabs;
const { TreeNode } = Tree;
const { Title, Paragraph, Text } = Typography;
class Content extends React.Component {
    state = {
        activeKey: '1',
    }

    onTabChange = (activeKey) => {
        this.setState({ activeKey });
    }
    render() {
        // todo. Switch the tab to be Carousel later
        return (
            <div>
                <div>
                    {/* <Title>Happy Sugar Life</Title> */}
                    <Typography>
                        <Title>Happy Sugar Life</Title>
                        <Title level={2}>
                            What I hope for this place (Work in progress):
                        </Title>
                        <Paragraph>
                            1. Build some web app based on deep learning.
                    </Paragraph>
                        <Paragraph>
                            2. Write some papers about them for me to understand better.
                    </Paragraph>
                        <Paragraph>
                            3. A small place for myself
                    </Paragraph>
                    </Typography>
                </div>


                <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
                    <TabPane tab="Deep Learning App" key="1">Deep Learning App</TabPane>
                    <TabPane tab="For me to understand better" key="2">For me to understand better</TabPane>
                    <TabPane tab="A Place for myself" key="2">A place for myself</TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Content;

