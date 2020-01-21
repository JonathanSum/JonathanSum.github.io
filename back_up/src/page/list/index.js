import React from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import { connect } from 'dva';
import SampleChart from '../../component/SampleChart';

const FormItem = Form.Item;





class List extends React.Component {

    state = {
        visible: false,
        statisticVisible: false,
        id: null,
    };


    componentDidMount() {
        this.props.dispatch({
            type: 'cards/queryList',
        });
    }
    columns = [
        {
            title: '名称',
            dataIndex: 'name',
        },
        {
            title: '描述',
            dataIndex: 'desc',
        },
        {
            title: '链接',
            dataIndex: 'url',
            render: value => <a href={value}>{value}</a>,
        },
        {
            title: '',
            dataIndex: 'statistic',
            render: (_, { id }) => {
                return (
                    <Button onClick={() => { this.showStatistic(id); }}>图表</Button>
                );
            },
        },
    ];

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }
    handleOk = () => {
        const { dispatch, form: { validateFields } } = this.props;

        validateFields((err, values) => {
            if (!err) {
                dispatch({
                    type: 'cards/addOne',
                    payload: values,
                });
                // reset the state var. `visible` to false to close the input box
                this.setState({ visible: false });
            }
        });
    }

    showStatistic = (id) => {
        this.props.dispatch({
          type: 'cards/getStatistic',
          payload: id,
        });
        // update state，pop up the graph box
        this.setState({ id, statisticVisible: true });
      };
    
      handleStatisticCancel = () => {
        this.setState({
          statisticVisible: false,
        });
      }


    render() {
        const { cardsList, cardsLoading, form: { getFieldDecorator }, statistic  } = this.props;
        const { visible, statisticVisible, id } = this.state;

        return (
            <div>
                <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
                <Button onClick={this.showModal}>新建</Button>

                <Modal
                    title="新建记录"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <FormItem label="名称">
                            {getFieldDecorator('name', {
                                rules: [{ required: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="描述">
                            {getFieldDecorator('desc')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="链接">
                            {getFieldDecorator('url', {
                                rules: [{ type: 'url' }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                    </Form>
                </Modal>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        cardsList: state.cards.cardsList,
        cardsLoading: state.loading.effects['cards/queryList'],
    };
}
export default connect(mapStateToProps)(Form.create()(List));