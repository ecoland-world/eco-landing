import React from "react"

interface IconProps {
    size?: number | string
    color?: string
}

const Icons = {
    CaretRightCircle: ({size, color}: IconProps) => (
        <svg fill={ color || "var(--color)" } viewBox="0 0 24 24" height={ size || "1em" } width={ size || "1em" }>
            <path d="m10 17 6-5-6-5z"></path>
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
        </svg>
    ),
    ArrowRightNarrow: ({size, color}: IconProps) => (
        <svg fill={ color || "var(--color)" } viewBox="0 0 24 24" height={ size || "1em" } width={ size || "1em" }>
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"></path>
        </svg>
    ),
    ArrowChevronDown: ({size, color}: IconProps) => (
        <svg fill={ color || "var(--color)" } viewBox="0 0 16 16" height={ size || "1em" } width={ size || "1em" }>
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
        </svg>
    )
}

export default Icons