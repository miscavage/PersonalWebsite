import cx from 'bem-classnames'

import "./Caption.scss"

const Caption = (props = {}) => {
    const classes = {
        name: 'caption'
    }

    return (
        <span className={cx(classes, props, props.className)} htmlFor={props.htmlFor}>
            {props.children}
        </span>
    )
}

Caption.propTypes = {
    className: PropTypes.string,
    htmlFor: PropTypes.string
}

export default Caption
