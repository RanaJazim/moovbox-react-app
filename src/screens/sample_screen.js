import React from 'react'
import 'react-toastify/dist/ReactToastify.css';

class SampleScreen extends React.Component {
    state = { age: 19 };

    render() {
        console.log(this.props);
        return (
            <div>
                <p>Sampele Screen</p>
            </div>
        );
    }
}
export default SampleScreen;