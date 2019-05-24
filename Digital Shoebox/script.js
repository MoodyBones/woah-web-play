


// isomorphic-fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');
 
fetch('//offline-news-api.herokuapp.com/stories')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
        console.log(stories);
    });


import { Dropbox } from 'dropbox';

const accessToken = 'yYhSdP2i9mQAAAAAAAAAydw9It31Uz7KOBuzyKh-8nN-gg-tkAKr3D1ZmS-YK0iq';

const dbx = new Dropbox({
  accessToken,
  fetch
});

// will take the folder and list out the files in the folder
dbx.filesListFolder({
  // empty string '' specifies root path
  // the root of our app folder (not dropbox account)
  path: ''
}).then(res => console.log(res))