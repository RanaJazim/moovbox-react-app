import React from 'react';
import AppLoadingIndicator from '../components/app_loading_indicator';

function withLoader(WrappedComponent) {
    return class LoaderHOC extends React.Component {
        render() {
            // console.log(this.props);
            return (
                this.props.isLoading
                    ?
                    <AppLoadingIndicator />
                    :
                    <WrappedComponent {...this.props} />
            );
        }
    }
}

export default withLoader;