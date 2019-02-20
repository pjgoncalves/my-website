import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider, Query } from "react-apollo";

import './SocialLinks/SocialLinks.css';

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjosirt3b3up301dgpdeu3113/master'
});


const SOCIALLINKS_QUERY = gql `
{
  socialLinkses {
    id
    networkName
    networkLink
    networkThumbnail
  }
}
`;

class SocialLinks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false
    }
  }

  componentDidMount() {
    /*
    console.log("✅ Componenet did mount");
    console.log("🏁 dataLoaded is " + this.state.dataLoaded);
    */
  }


  setDataLoaded(flag){
    this.setState({
      dataLoaded: flag
    });
    // console.log("🏁 dataLoaded is " + this.state.dataLoaded);
  }

  render() {
    return (
      <ApolloProvider client={client}>
          <Query query = { SOCIALLINKS_QUERY } >
            {({loading, data}) => {
              if(loading){
                return (
                  
                  <div className = "social-list">
                    <a className = "dynamic-field no-data" />
                    <a className = "dynamic-field no-data" />
                    <a className = "dynamic-field no-data" />
                    <a className = "dynamic-field no-data" />
                    <a className = "dynamic-field no-data" />
                  </div>
                )
              };

              const { socialLinkses } = data; 
              
              return (
                socialLinkses.map(
                  socialLink => 
                  <div className = "socialLink-block">
                    <a className = "dynamic-field loaded-data" href={socialLink.networkLink}>
                      <div className = {"thumbnail " + socialLink.networkName.toLowerCase()}> 

                      </div>
                      {socialLink.networkName}
                      
                    </a>
                  </div>
                )
              )
            }}
          </Query>

      </ApolloProvider>
    );
  }
}

export default SocialLinks;