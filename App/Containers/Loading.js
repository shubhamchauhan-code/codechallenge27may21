import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { connect } from 'react-redux';
import { checkAuthenticate } from '../redux-store/actions/userAction';

const Loading = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.checkLogin();
        }, 2000);
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color="#0000ff" size={"large"} />
            <Text>
                {"Please wait..."}
            </Text>
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkLogin: () => dispatch(checkAuthenticate()),
    };
};

export default connect(null, mapDispatchToProps)(Loading)
