import gql from "graphql-tag";

export const GET_APP_STATE = gql`
  query getAppState {
    loggedIn @client
    appLoading @client
    showMessage @client
    message @client {
      severity
      text
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query getAppState {
    loggedIn @client
  }
`;

export const ME = gql`
  query {
    me {
      id
    }
  }
`;

export const IS_APP_LOADING = gql`
  query getAppState {
    appLoading @client
  }
`;

export const MESSAGE = gql`
  query getAppState {
    showMessage @client
    message @client {
      severity
      text
    }
  }
`;
