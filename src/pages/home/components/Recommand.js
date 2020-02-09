import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommandWrapper, RecommandItem } from '../style';

class Recommand extends PureComponent{
    render() {
        const { list } = this.props;
        return (
            <RecommandWrapper>
                {
                    list.map((item) => {
                        return <RecommandItem imgUrl={item.get('imgUrl')} key = {item.get('id')}></RecommandItem>
                    })
                }
            </RecommandWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home','recommendList'])
})

export default connect(mapStateToProps,null)(Recommand);