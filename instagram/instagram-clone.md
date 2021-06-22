**instagram clone practice**

References

- [facebook/create-react-app](https://github.com/facebook/create-react-app) (GitHub)
- :tv:[Create an Instagram Clone with React, Tailwind CSS, Firebase - Tutorial](https://youtu.be/mDgEqoQUBgk?t=1290)

https://youtu.be/mDgEqoQUBgk?t=1574

```shell
$ yarn create react-app instagram
```

```shell
## add dependancies and verify in package.json
$ yarn add date-fns
$ yarn add firebase
$ yarn add react-loading-skeleton
```

## Remove unwanted files

- `src/logo.svg`, `reportWebVitals.js`, `setupTests.js`, `App.test.js`, `App.css`, `index.css` etc.


 ## Create structure

```shell
// client side rendering
  // firebase
  // react-loading-skeleton
  // tailwing
  // architecture
    // components, 
    // constants,
    // contexts,
    
// Folder Structure
  // src
    // components
    // contstants
    // context
    // helpers
    // hooks 
    // lib (firebase will be here)
    // pages
    // services (firebase functions here)
    // styles (tailwind )
```

# Setup Firebase

https://firebase.google.com/
[Console](https://console.firebase.google.com/u/0/?pli=1)

-> Cloud Database -> Create Database -> Test mode

Roles ->
```shell
// development roles
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2021, 7, 22);
    }
  }
}

// production roles

rules_version = '3';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
    	allow read;
      allow write: if request.auth.uid != null;
    }
  }
}
```

### Create collection
- photos
- users

## Authentication

- enalbe email address verification
- create user and copy user ID to `seed.js`
- Import photos and users to firebase - one time job

## Enable app in project settings

- copy the firebaseconfig details to `firebase.js-> config`
- Import photos and users to firebase - one time job

# Create Login Page

- https://reactrouter.com/web/guides/quick-start


```shell
yarn add react-router-dom
## or
npm install react-router-dom
```

```shell
yarn add tailwindcss -D
yarm add prop-tpyes -D
yarm add postcss-cli -D
yarm add postcss -D
yarm add npm-run-all -D
yarm add autoprefixer -D
```



# Troubleshooting

```shell
## cleaning cache
npm cache clean --force
```

# References

- :tv:[Create an Instagram Clone with React, Tailwind CSS, Firebase - Tutorial](https://www.youtube.com/watch?v=mDgEqoQUBgk&t=2s)