import { useState } from 'react';

// ARRAY STRINGHE
const initialBlog = ['Team rocket', 'eggrocketcollector', 'unianime', 'berserkfans'];

//COMPONENTE
export default function BlogList() {

    // STATO BLOG LIST
    const [blogs, setBlogs] = useState(initialBlog);
    // STATO INPUT DI INSERIMENTO NUOVO BLOG
    const [newblog, setNewBlog] = useState('');

    // FUNZIONE AGGIUNTA BLOG ALLA LISTA 

    return (
        <>
            <form>
                <input type='text' value={newblog}
                    oneChange={event => { setNewBlog(event.target.value) }}
                />
                <button>INVIA</button>
            </form>
            {/* output blog */}
            {blogs.map((blog, i) =>
                <li key={i}>{blog}</li>
            )}
        </>
    )
}

