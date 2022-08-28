import React from "react"
import { Link } from "react-router-dom"
import { config, Logo } from "./useStore"

export default function Layout ({children}: {children: any}) {
    return (
        <div className="root dark">
            <header>
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <menu>
                        <ul className="menu">
                            {config.menu.map((i:LinkObject, k:number) => (
                                <li key={k}>
                                    <Link to={i.url}>{i.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </menu>
                    <div className="agency">
                        <ul>
                            {config.agency.map((i:LinkObject, k:number) => (
                                <li key={k}>
                                    <Link to={i.url}>{i.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
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
                            <div className="row-between">
                                {config.footerItems.map((i:FooterLinksObject, k:number) => (
                                    <div key={k} className="fill">
                                        <h3>{i.title}</h3>
                                        <ul>
                                            {i.items.map((item:LinkObject, lk:number) => (
                                                <li key={lk}>{item.label}</li>
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