import React from "react"
import { Link } from "react-router-dom"
import useStore, { config } from "./useStore"

export default function Layout ({children}: {children: any}) {
    const { theme, Logo } = useStore()

    return (
        <div className={`root ${theme}`} id="home">
            <header>
                <div className="header">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <input type="checkbox" id="menu-checkbox" />
                    <menu>
                        <ul className="menu">
                            {config.menu.map((i:LinkObject, k:number) => (
                                <li key={k}>
                                    <a href={i.url}>{i.label}</a>
                                </li>
                            ))}
                            {config.agency.map((i:LinkObject, k:number) => (
                                <li key={k}>
                                    <a href={i.url}>{i.label}</a>
                                </li>
                            ))}
                        </ul>
                    </menu>
                    <div className="agency">
                        <ul>
                            {config.agency.map((i:LinkObject, k:number) => (
                                <li key={k}>
                                    <a href={i.url}>{i.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <label htmlFor="menu-checkbox" className="hamburger">
                        <span></span>
                    </label>
                </div>
            </header>
            { children }
            <footer>
                <div className="footer">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="logo">
                                <img src={Logo} alt="Logo" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipisc-ing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex</p>
                        </div>
                        <div className="col-xl-7">
                            <div className="row-between links">
                                {config.footerItems.map((i:FooterLinksObject, k:number) => (
                                    <div key={k}>
                                        <h3>{i.title}</h3>
                                        <ul>
                                            {i.items.map((item:LinkObject, lk:number) => (
                                                <li key={lk}>
                                                    <a href="/">{item.label}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}