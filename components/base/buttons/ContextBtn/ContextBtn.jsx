import classNames from "classnames"

import "./ContextBtn.scss"

const ContextBtn = (props={}) => {
    const containerClasses = classNames({
        'context-btn-container': true,
        'ease--left': true,
        'preserve-3d': true,
        'is-active': props.isContextOpen,
        'fixed': props.isContextOpen,
        'abs': !props.isContextOpen,
    })

    return (
        <div className={containerClasses}>
            <a className='context-btn ease rel rel--full'
                title='View Context'
                onClick={() => props.toggleContextSidebar()}>
                <i />
            </a>
        </div>
    )
}

ContextBtn.propTypes = {
    isContextOpen: PropTypes.bool.isRequired,
    toggleContextSidebar: PropTypes.func.isRequired,
}

export default ContextBtn
