How to set up the redux folder structure?
=> In the blogs we are able to know that how to create a nice folder structure in Redux;

     -> So first thing first is we are do this things with two ways, First one is create react app with the redux template. Which is create the redux folder structure(officially). And the other one is we create those things manually with ourself.

            =>If we want to obey the first rule, we can just put the command on our CMD;
                    # Redux + Plain JS template
                        npx create-react-app my-app --template redux

                    # Redux + TypeScript template
                        npx create-react-app my-app --template redux-typescript

            =>If we want to make the file structure manually, we can just follow the rule that i am going to maintain: -

                -- Create a folder name in src. inside of src we also have to create one file. app/Store.js

                -- Then we have to create another file which is Features. Inside of Features file we also have to create another folder which is Counter(src/Features/Counter).

                -- Inside the Counter Folder we have to create some files. One is Counter.js, another is CounterSlice.js
