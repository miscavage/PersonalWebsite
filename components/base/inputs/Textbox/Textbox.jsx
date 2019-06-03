import cx from 'bem-classnames'

import "./Textbox.scss"

const Textbox = (props={}) => {
    const classes = {
        name: 'textbox',
    }

    return (
        <input className={cx(classes, props, props.className)} id={props.id} name={props.name} placeholder={props.placeholder} type={props.type} />
    )
}

Textbox.defaultProps = {
    type: 'text'
}

Textbox.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
}

export default Textbox
