const React = require('react');
const Default = require('./layouts/Default');

function Show({ bread, index }) { // Ensure 'index' or an equivalent identifier is passed as a prop
    return (
        <Default>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten
                    ? <span> does </span>
                    : <span> does NOT </span>
                }
                have gluten.
            </p>
           <li><a href="/breads">Go home</a></li>
           
           <img src={bread.image} alt={bread.name} />
<p>{bread.getBakedBy()}</p>
<a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>          


       

            {/* Delete Form */}
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                 <input type='submit' value="DELETE"/>
        </form>




        </Default>
    );
}

module.exports = Show;
