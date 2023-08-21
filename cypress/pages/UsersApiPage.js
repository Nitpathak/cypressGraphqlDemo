// usersApiPage.js

// This class represents a page object for interacting with the GraphQL API.
class UsersApiPage {
  // Get the API URL from the Cypress configuration
  apiUrl = Cypress.config("baseUrl");

  // GraphQL mutation template
  mutation = `
    query ($name: String!) {
      __type(name: $name) {
        name
      }
    }
  `;

  // Send a GraphQL request with specified variables
  sendGraphQLRequest(variables) {
    // Use the cy.request() command to send a POST request to the API
    return cy.api("POST", this.apiUrl, {
      query: this.mutation,
      variables,
    });
  }
}

// Export an instance of the UsersApiPage class to make it a Singleton
export default new UsersApiPage();
