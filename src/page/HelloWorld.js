import React from 'React';
import { Tabs, Tree, Button } from 'antd';
import styles from './css-modules-with-less/style.less';

const { TabPane } = Tabs;
const { TreeNode } = Tree;

class Content extends React.Component {
    state = {
        activeKey: '1',
    }

    onTabChange = (activeKey) => {
        this.setState({ activeKey });
    }
    render() {
        return (
            <div>
                <div>

                    <p>
                        <span className={styles['override-ant-btn']}>
                            <Button type="primary">Happy Sugar Life!</Button>
                        </span>
                    </p>

                    <p>
                        <Button type="primary">Main Page</Button>
                    </p>

                </div>
                <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                </Tabs>
                <Tree>
                    <TreeNode title="parent 1" key="0-0">
                        <TreeNode title="leaf" key="0-0-0" />
                        <TreeNode title="leaf" key="0-0-1" />
                    </TreeNode>
                </Tree>
            </div>
        );
    }
}

export default Content;

