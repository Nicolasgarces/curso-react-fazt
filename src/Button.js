//usando los la biblioteca proptypes 
import propTypes from 'prop-types'

export function Button({text, name = 'Nicolas'}){
    console.log(text);
    return <button>
       {text} - {name}
    </button>
}
//usando los la biblioteca proptypes 
Button.propTypes = {
    text: propTypes.string
}