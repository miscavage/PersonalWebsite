const Gab = ({
    fill = "#fff",
    width = "38px",
    height = "38px",
    className = "",
    viewBox = "-9 27.5 115 115",
    background = "-5 25 115 115"
}) => (
    <svg
        width={width}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={`svg-icon ${className}`}
        style={{
            enableBackground: `new ${background}`
        }}
    >
        <path
            d='M36.7,43.6c8.3-3,18.7-1.4,24.6,5.6c0-1.8,0-3.5,0-5.2c5.9,0,11.9,0,17.8,0c0,16.8,0,33.7,0,50.5c-0.2,9-2.6,18.7-9.4,25.1c-5.2,5.1-12.5,7.3-19.5,7.9h-5.9c-6.7-0.7-13.2-2.8-18.5-7c2.3-4.5,4.8-8.9,7.1-13.3c5,3.3,11.3,5.5,17.3,3.9c4.4-0.9,8.1-4.1,9.8-8.3c1.5-3.4,1.5-7.1,1.5-10.7c-7.8,9-22.3,8.9-31.4,2C23,89,19,80.6,18.5,72.2v-3.3C19,57.9,26.1,47.2,36.7,43.6z M43.9,59.2c-5.4,2.3-8.9,8.7-7.3,14.4c1.4,5.9,7.6,10.3,13.7,9.4c6.7-0.8,12-7.7,10.7-14.4C60,61,51,55.8,43.9,59.2z'
            fill={fill} />
    </svg>
)

export default Gab
