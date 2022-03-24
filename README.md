# Technology Choices

Node.js was chose for both the client and server.

Express.js was chose for the HTTP server framework, due to it is lightweight and is extensible.

Command.js was chose for parsing user input via CLI with different command.

# API Design

Unable to create the Mongodb component and the DB layer in API server architecture due to time constraint.

# Improvements

1. Add another layer between CLI layer in the client and the API methods, namely separate api calls from the operation. Therefore the operations is decoupled from the fetching tools.
2. Deploy the server via serverless to lambda, due to its lightweight, it can be packed into a single lambda invocation and only starts by event triggers. The issue like cold start can be solved by 'Keep warm' technique.