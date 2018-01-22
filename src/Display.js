import React, {
    Component
} from 'react';
var moment = require('moment');
class Display extends React.Component {
        
    convertTime = (timeInStr) => {
        const timestamp = moment(timeInStr).format("h:mm:ss a");
        const minutesFromNow = moment(timeInStr).fromNow("mm:ss");
        return {
            timestamp,
            minutesFromNow,
        }
        
    } 
    render() {
            return (        
                <ul> 
                {
                    this.props.items.map(item => {
                       const { timestamp, minutesFromNow } = this.convertTime(item.id)
                        return (
                            <li key={item.id}> 
                                { `${minutesFromNow} ${timestamp} ${item.text}` } 
                            </li>
                        )
                    })
                }
                </ul>
            )
        }
    }

        export default Display;