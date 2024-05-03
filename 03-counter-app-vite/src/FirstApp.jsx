import PropTypes from 'prop-types'; //para definir tipos de datos en las props

const getSaludo = () =>{
    return ('Hola Bric');
}

export const FirstApp = ({title}) => { //o (props), deseamos destructurar el objeto props

    //console.log(props);

    return (
    <>
        <h1>{ title }</h1>
        {/* <code>{JSON.stringify(newMessage)</code> */}
    </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    title: 'Soy un default title',
}