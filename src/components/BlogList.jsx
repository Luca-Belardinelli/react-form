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
    const addBlog = e => {
        e.preventDefault();
        // VERSIONE CON CREAZIONE DI NUOVO ARRAY
        const updateBlogs = [...blogs, newblog];
        setBlogs(updateBlogs);
        // AZZERIAMO IL VALORE DI NEWBLOG
        setNewBlog('');
    }

    return (
        <>
            <form onSubmit={addBlog}>
                <input type='text' value={newblog}
                    onChange={event => { setNewBlog(event.target.value) }}
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

