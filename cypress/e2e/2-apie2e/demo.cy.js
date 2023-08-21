// Describe block for the test scenario
describe('Test Scenario01: GraphQL API Tests without POM Model', () => {
    // Test case: Verify that API should provide 200 status code with correct data
    it('Test Case01: Verify that API should provide 200 status code with correct data', () => {
        // Step 1: Read the API URL from the configuration
        const apiUrl = Cypress.config("baseUrl");
        cy.log("Step 1: API URL:", apiUrl); // Log the API URL

        // Define the GraphQL mutation
        const graphqlMutation = `
        query ($name: String!) {
          __type(name: $name) {
            name
          }
        }
      `;

        // Define the variables
        const variables = {
            name: 'users',
        };

        // Step 2: Start the GraphQL API test
        cy.log('Step 2: Starting the GraphQL API test');

        // Step 3: Send a POST request to the API
        cy.api({
            method: 'POST',
            url: apiUrl,
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                query: graphqlMutation,
                variables,
            },
        }).then((response) => {
            // Step 4: API request successful
            cy.log('Step 4: API request successful');

            // Step 5: Verify the response contains the expected name
            expect(response.body.data.__type.name).to.equal('users');
            cy.log('Step 5: Assertion passed: Response contains the expected name');
        });
    });
});  