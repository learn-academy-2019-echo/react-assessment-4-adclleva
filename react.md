# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1a. Indicate which of the following statements about React are false:

1 - React is a modern, efficient answer to complex UI applications (true/false) 
2 - React will only render on the server using Node.js (true/false) 
3 - React is a full stack framework for modern web applications (true/false) 
4 - React is a flexible library that plays the role of V in an MVC framework (true/false) 
5 - You should always update a component's state directly using this.state (true/false) 
6 - React is made up of encapsulated components that manage their own state (true/false) 
7 - React components render HTML (true/false) true?

- My Answers
1 true
2 true? 
3 true?
4 true? 
5 false
6 true?
7 true?

- Researched Answers
1 true 
2 false? 
3 true
4 true
5 false
6 true
7 false


1b. Add an interesting TRUE fact about React to the list.

2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer:
    Smart components are those that utilize state while dumb components don't use state. We make a distinction between them so we can determine which components utilize state or not.

  Researched answer:
    Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on.
    Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.

    Source: https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43

3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer:
    yarn is a package manager that is pulling up the packages needed? 


  Researched answer:
    In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. 
    This means running yarn add [package-name] to install it into your project.
    This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.
    Most packages will be installed from the npm registry and referred to by simply their package name. For example, yarn add react will install the react package from the npm registry.

    Source: https://yarnpkg.com/lang/en/docs/cli/add/


4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer:
    When a component has a state, it means that, that specific data in it's current render state.
    While props are used to pass in information from the 'parent' component down to its 'child component' to do something with the data

  Researched answer:
    State - This is data maintained inside a component. It is local or owned by that specific component. The component itself will update the state using the setState function.

    Props - Data passed in from a parent component. props are read-only in the child component that receives them. However, callback functions can also be passed, which can be executed inside the child to initiate an update.

    The difference is all about which component owns the data. State is owned locally and updated by the component itself. Props are owned by a parent component and are read-only. Props can only be updated if a callback function is passed to the child to trigger an upstream change.

    Source: https://dev.to/cloud_developr/what-is-the-difference-between-state-and-props-in-reactjs-2g42

5. How would you explain state to a friend who doesn't know code?

  Your answer:
    State is some sort of data that can be accessed and manipulated within a file. It's a pretty cool concept becuase the page on a website would refresh the part where the state is changing, thus making the page load much faster than before.
