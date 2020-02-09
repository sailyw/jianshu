import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from '../style';

class Topic extends PureComponent{
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img 
                                    className='topic-pic'
                                    src={item.get('imgUrl')}
                                    alt=''
                                />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}// 从store里面拿数据
const mapStateToProps = (state) => ({
    // list: state.get('home').get('topicList')
    list: state.getIn(['home','topicList'])
});


//只需要去拿到store里的数据，不需要去改数据，所以不需要dispatch
export default connect(mapStateToProps,null)(Topic);