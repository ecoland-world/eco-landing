import React from "react"

interface SlidebarProps {
    header: JSX.Element | String
    children: JSX.Element | String
    id: String
}

const Slidebar = ({ header, children, id }: SlidebarProps) => {
    return (
        <div className="slidebar">
            <label className="header" htmlFor={`slide-${id}`}>
                { header }
            </label>
            <input type="checkbox" id={`slide-${id}`} />
            <div className="content">
                { children }
            </div>
        </div>
    )
}

export default Slidebar