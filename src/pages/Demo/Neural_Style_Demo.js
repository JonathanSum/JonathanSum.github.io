// import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi-plugin-locale';
import React, { Component } from 'react'
import { Typography, } from 'antd';
import ReactPlayer from 'react-player'

const { Title, Paragraph, Text } = Typography;


class Video extends Component {
  render () {
    return (
      <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url='https://www.youtube.com/watch?v=TgOVGg1VNCg'
        width='18%'
        height='50%'
      />
    </div>
    )
  }
}



//<div><FormattedMessage id="helloworld" /></div>
// src/page/HelloWorld.js
export default () => {
    return (
        <div>
            <Typography>
                <Title>Generate New Art from the many famous artists</Title>
                <Title level={2}>
                    You can also do it by yourself:
            </Title>
                <Paragraph>
                    Check it here, you only need to upload the style image and the image that you want to change.
        </Paragraph>
                <Paragraph>
                    1. First picture is the picture that you want to add the style you want.
        </Paragraph>
                <Paragraph>
                    2. Second picture is the one that has the style you want to transfer.
        </Paragraph>
                <Paragraph>
                    3. Upload two pictures, use Google's GPU, the code, and the file I shared from Google Drive to run(train) it from 5 to 10 mins.<br />
                    <a href="https://colab.research.google.com/drive/1-IybUsBVNW4GGw5MdZlkXj4jTccqLL7s">Click me to upload and run the code.</a>

                </Paragraph>
                <Paragraph>
                    Result:
        </Paragraph>
                <Paragraph>
                    <img src="/pcc_art.png"></img>
                </Paragraph>
            </Typography>
            <Paragraph>
            I showed it on my Speech Class:
            <Video/>
            </Paragraph>
        </div>)
}