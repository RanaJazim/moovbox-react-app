import React from 'react'
import AppLoadingIndicator from './app_loading_indicator';

export default function SwitchComponent({ isLoading, Loading, Render }) {
    if (Loading == null)
        Loading = <AppLoadingIndicator />;

    return isLoading ? Loading : Render;
}
