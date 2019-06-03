import cx from 'bem-classnames'

import "./Header.scss"

const Header = (props = {}) => {
    const classes = {
        name: 'header',
        modifiers: ['color', 'size'],
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
        DARK: "dark",
    },
    SIZE: {
        LARGE: "lg",
        MEDIUM: "md",
        SMALL: "sm",
    }
}

Header.enums = Object.freeze(enums)

Header.defaultProps = {
    size: Header.enums.SIZE.LARGE,
    color: Header.enums.COLOR.DARK,
}

Header.propTypes = {
    color: PropTypes.oneOf(Header.enums.COLOR).isRequired,
    size: PropTypes.oneOf(Header.enums.SIZE),
    isContextOpen: PropTypes.bool.isRequired,
    isSidebarOpen: PropTypes.bool.isRequired,
    className: PropTypes.string,
}

export default Header
