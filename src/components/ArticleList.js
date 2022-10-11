import React from 'react';
import Article from './Article';


function ArticleList({posts}){
    return (
        <main>
            {
                posts.map(({id,title, preview, date}) =>{
                    return (
                        <Article 
                        key={id}
                        title = {title}
                        preview = {preview}
                        date = {date} />
                    );
                })
            }
        </main>
    );
}
export default ArticleList;