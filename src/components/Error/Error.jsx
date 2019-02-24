import React, { PureComponent } from 'react';
import './Error.less';

export default class Error extends PureComponent {
    render() {
        const { error } = this.props;
        return (<div className="error">{error.message}</div>);
    }
}