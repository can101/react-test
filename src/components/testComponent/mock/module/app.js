import React from "react";
import { useFetch } from "./useFetch";

function App() {
    const { data, isLoading } = useFetch("https://jsonplaceholder.typicode.com/todos");
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <ul>
            {data.map((post) => (<li key={post.id}>{post.title}</li>))}
        </ul>
    )
}

export default App;