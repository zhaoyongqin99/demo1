import React from 'react'
// import {graphql} from 'react-apollo';
// import gql from 'graphql-tag'
import Head from './components/header/head'
import './css/output.css'
// const ChannelsList = ({ data: { loading, error, channels } }) => {
//     if (loading) {
//         return <p>Loading ...</p>;
//     }
//     if (error) {
//         return <p>{error.message}</p>;
//     }
//     return <ul>
//         {channels.map( ch => <li key={ch.id}>{ch.name}</li> )}
//     </ul>;
// };

// const channelsListQuery = gql`
//    query ChannelsListQuery {
//      channels {
//        id
//        name
//      }
//    }
//  `;
// const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);
export default function App() {
    return (
        <div className="h-full">
            <Head />
            {/* {ChannelsListWithData} */}
        </div>
    )
}
