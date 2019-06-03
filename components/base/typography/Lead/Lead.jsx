import cx from 'bem-classnames'

import "./Lead.scss"

const Lead = (props = {}) => {
    const classes = {
        name: 'lead',
        modifiers: ['color'],
    }

    return (
        <h1 className={cx(classes, props, props.className)}>
            {props.children}
        </h1>
    )
}

const enums = {
    COLOR: {
        LIGHT: "light",
        DARK: "dark"
    }
}

Lead.enums = Object.freeze(enums)

Lead.propTypes = {
    color: PropTypes.oneOf(Lead.enums.COLOR).isRequired,
    className: PropTypes.string,
}

export default Lead
