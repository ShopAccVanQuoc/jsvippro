/*
Quantumult X Script:
Module: Fake Response for Specific API Request

Description:
This script intercepts HTTP requests to 103.77.240.59/~vanquoci/api/Test/ and modifies the response to always return a predefined JSON object.

Usage:
- Copy the script into Quantumult X script editor.
- Configure the URL rewrite rule to point to this script.

Author: Your Name
*/

// Quantumult X Rewrite Script

// Define the URL to intercept
const targetUrl = "http://103.77.240.59/~vanquoci/api/Test/";

// Define the fake response
const fakeResponse = {
  success: true,
  errors: [
    {
      message: "Done.",
      code: "AUTHENTICATION_FAILED"
    }
  ]
};

// Check if the URL matches the target URL
if ($request.url === targetUrl) {
  // Modify the response
  $done({
    response: {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fakeResponse)
    }
  });
} else {
  // If the URL does not match, pass through the request as-is
  $done({});
}
