// Add your code here
// submitData()
//     1) makes a POST request to /users with a name and email
//     2) handles the POST request response, retrieves the new id value and appends it to the DOM
//     3) handles a failed POST request using catch, appends the error message to the DOM



function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }