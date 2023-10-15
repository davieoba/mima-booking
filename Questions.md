# Questions

## 1. Describe your experience with consuming APIs in a frontend application. 
-  I have good knowledge on how to consume APIs 

## 2. What methods have you used for making requests, and how have you handled responses, especially errors?
- I have used React-Query, Next SWR, Redux thunk and useEffect hook. 
I personally like React-Query, because of some of the features that comes with it such as loading state, error handling, caching, cache revalidation etc
in react-query one can easily handle a response from an api like this

```js
# react-query v3.93.^
...

const { isLoading, error, data } = useQuery({
  queryKey: ['api/data'],
  queryFn: () =>
    fetch('https://api/endpoint').then(
      (res) => res.json(),
    ),
})

# from here i can easliy check my api response as follows

if (isLoading) return <p> Loading... </p>
if (error) return <p> Error Loading data ... </p> // handle error graciously

return (
  <div> {data && <p> {data} </p>} </div>
)
```

## 3. What are some of the best practices you follow when working with React and Next.js? 
- I configure eslint and follow airBnb javascript style guide
- I create reusable components for parts of my code I am using over and over again
- I make use of component libraries so that testing and debugging can be handled more easily
- I convert images to webp so that images dont't slow down my app
- I create dependabot workflow to alert me when a package can be updated / upgraded
- I configure github workflow to verify my code before I it merges any pull request to the master branch
- I make my code as simple to read as much as possible by giving readable and meaningful names to my variable and leaving appropriate comments when there is need for it.

## 4. Can you give some examples from your past projects?
- E-commerce application *Frontend* [link](https://glasses-delta.vercel.app/)
- Book store application *Frontend* [link](https://watermarks-v2.vercel.app/)
- E-commerce application *fullstack* [link](https://e-commerce-app-ts-nextjs.vercel.app/)

## 5. In your own words, explain the concept of Server-Side Rendering (SSR) and how it is implemented in Next.js.
When working with React, we could only do Client-Side rendering that means that the application will be bundled at runtime. when a client made a request to the server the server will respond and send the react app to the client, this makes navigating pages very fast in client side rendering but it had it's limitations such as problems working with S.E.O and a concept know as *thick client*. This is one of the major issue Next.js solved. In **Server Side Rendering** all the pages are stored on the server and when a request is made, the server respondes by sending the appropriate page to the user. 

## 6. Why is it important?
- We can do things like S.E.O because of SSR
- We can reduce the load on the client and have sort of a balance between *thick client* and *thin server*
- We can easily authenticate and authorize a user from SSR
- We can implement edge networks and serve users in remote places