// Import the UsersApiPage module to access the Page Object
import UsersApiPage from '../../pages/UsersApiPage';

// Describe block for the test scenario
describe('Test Scenario01: GraphQL API Tests with POM Model ', () => {
    // Test case: Should execute the provided mutation successfully
    it('Should execute the provided mutation successfully', () => {
        // Step 1: Log the start of the test
        cy.log("Step 1: Starting the test");

        // Define the variables for the GraphQL query
        const userNameVariables = {
            name: "users",
        };

        // Step 2: Start the GraphQL API test
        cy.log('Step 2: Starting the GraphQL API test');

        // Send the GraphQL request using the Page Object method
        UsersApiPage.sendGraphQLRequest(userNameVariables).then((response) => {
            // Assertion: Verify the response status and content
            expect(response.status).to.equal(200);
            expect(response.body.data.__type.name).to.equal('users');

            // Log: Assertion passed - Response contains the expected name
            cy.log('Step 5: Assertion passed: Response contains the expected name');
        });
    });
});