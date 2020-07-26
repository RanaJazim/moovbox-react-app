import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieCard from '../components/movie_card';
import withLoader from '../hoc/with_loader';

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
export default withLoader(SampleScreen);