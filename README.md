# GitHub-Repositories-dependency-Array

By working through this project,
you'll gain hands-on experience with using
the dependency array in React.
The useEffect hook with an empty dependency
array ensures that the API request is made
only once when the component mounts.

Step 1:

Set up a new React project using
Create React App or your preferred method.

Step 2:

Create a new component called RepositoryList.
This component will be responsible for fetching
and displaying a list of GitHub repositories.

Step 3:

Inside the RepositoryList component,
initialize a state variable called repositories
using the useState hook. The initial
value should be an empty array.

Step 4:

Create a function called fetchRepositories
that will make an API request to the
GitHub API to retrieve repositories.
Inside this function, use the fetch or
axios library to make the API request
and retrieve the list of repositories.

Step 5:

In the fetchRepositories function,
update the repositories state variable
with the fetched repositories by 
using the setRepositories function.

Step 6:

Use the useEffect hook inside the
RepositoryList component to call the
fetchRepositories function.
Pass an empty dependency array to
the useEffect hook to ensure the
API request is made only once
when the component mounts.

Step 7:

Render the repositories inside the
RepositoryList component. Iterate over
the repositories array using the map
function and render each repository
as a list item or a card.

Step 8:

Style your components using CSS or
a styling library to make the repository
list visually appealing.
You can use CSS frameworks like Bootstrap
or Tailwind CSS to help with the styling.

Step 10:

Test your application by fetching and
displaying repositories from the GitHub API.
Ensure that the repositories are rendered
correctly and any additional information
you want to display, such as repository name,
description, or stars, is included.

Step 11:

Add error handling to the fetchRepositories
function to handle any API request errors.
Display an error message or a fallback UI
when an error occurs during the API request.

Step 12:

Optionally, add pagination functionality
to the repository list to fetch and display
more repositories when the user reaches
the end of the current list. You can use
the GitHub API's pagination parameters to achieve this.

