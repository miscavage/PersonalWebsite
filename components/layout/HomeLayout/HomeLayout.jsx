import "./HomeLayout.scss"

class HomeLayout extends Component {
    render() {
        return (
            <div className='layout rel rel--full'>
                { this.props.children }
            </div>
        )
    }
}

export default HomeLayout
