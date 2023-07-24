import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)

        this.state = {
            count: 0,
        }
    }

    render() {
       const {name} = this.props;

       const {count} = this.state;
        <div>
            <h1>{name}</h1>
            <h2>Count : {count}</h2>
            <button onClick={() => {
                this.setState ({
                    count: count+1,
                })

            }}>increament count</button>
        </div>
    }
}
export default UserClass;