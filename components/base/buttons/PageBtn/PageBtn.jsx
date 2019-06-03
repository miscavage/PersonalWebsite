import Body from "../../typography/Body/Body.jsx"

import "./PageBtn.scss"

const PageBtn = (props={}) => (
    <div className='page-btn-container'>
        <a className='page-btn ease' type={props.type} title={props.title}>
            <Body className='page-btn__title'>
                {props.title}
            </Body>
            {
                props.href ? ' →' : ''
            }
        </a>
    </div>
)

PageBtn.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
    type: PropTypes.string,
}

export default PageBtn
