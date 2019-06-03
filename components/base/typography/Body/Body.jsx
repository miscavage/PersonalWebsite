import cx from 'bem-classnames'

import "./Body.scss"

const Body = (props = {}) => {
    const classes = {
        name: 'body',
        modifiers: ['color'],
    }

    return (
        <span className={cx(classes, props, props.className)}>
            {props.children}
        </span>
    )
}

const enums = {
    COLOR: {
        LIGHT: "light",
        GREY: "grey",
        DARK: "dark",
    }
}

Body.enums = Object.freeze(enums)

Body.propTypes = {
    color: PropTypes.oneOf(Body.enums.COLOR).isRequired,
    className: PropTypes.string,
}

export default Body
