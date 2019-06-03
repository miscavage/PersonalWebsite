import cx from 'bem-classnames'

import "./Subheader.scss"

const Subheader = (props = {}) => {
    const classes = {
        name: 'subheader',
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
        DARK: "dark"
    }
}

Subheader.enums = Object.freeze(enums)

Subheader.defaultProps = {
    color: Subheader.enums.COLOR.DARK,
}

Subheader.propTypes = {
    color: PropTypes.oneOf(Subheader.enums.COLOR).isRequired,
    className: PropTypes.string,
}

export default Subheader
