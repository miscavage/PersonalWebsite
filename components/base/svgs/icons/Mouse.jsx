const Mouse = ({
    fill = "#fff",
    width = "512px",
    height = "512px",
    className = "",
    viewBox = "-105 0 512 512"
}) => (
    <svg
        height={height}
        width={width}
        viewBox={viewBox}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className}`}
    >
        <path d="m150.6 0c-83.04 0-150.6 67.5-150.6 150.6v210.8c0 83 67.5 150.6 150.6 150.6 83 0 150.6-67.5 150.6-150.6v-210.8c0-83-67.5-150.6-150.6-150.6zm119.89 361.4c0 66.1-53.78 119.89-119.89 119.89-66.1 0-119.89-53.78-119.89-119.89v-210.8c0-66.1 53.78-119.89 119.89-119.89 66.1 0 119.89 53.78 119.89 119.89zm0 0"/>
        <path d="m150.6 101.85c-8.5 0-15.35 6.875-15.35 15.35v70.7c0 8.5 6.875 15.35 15.35 15.35 8.5 0 15.35-6.8 15.35-15.35v-70.7c0-8.48-6.875-15.35-15.35-15.35zm0 0"/>
    </svg>
)

export default Mouse