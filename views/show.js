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
                has gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
            <li><a href="/breads">Go home</a></li>

           


            {/* Delete Form */}
            <form action={`/breads/${index}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>

        </Default>
    );
}

module.exports = Show;
