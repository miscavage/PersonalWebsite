import cx from 'bem-classnames'

import "./Title.scss"

const Title = (props = {}) => {
    const classes = {
        name: 'title',
    }

    return (
        <h1 className={cx(classes, props, props.className)}>
            {props.children}
        </h1>
    )
}

Title.propTypes = {
    className: PropTypes.string,
}

export default Title
