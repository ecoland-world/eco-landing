import React from "react"
import { Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react";

import useStore, { fetchJson } from "../useStore"

import Icons from "../components/Icons"
import Slidebar from "../components/Slidebar"

import BinanceImg				from "../assets/images/Partners/binance.webp"
import IlluviumImg				from "../assets/images/Partners/illuvium.webp"
import CoinbaseImg				from "../assets/images/Partners/coinbase.webp"
import MetaImg					from "../assets/images/Partners/meta.webp"
import CoinmarketcapImg			from "../assets/images/Partners/coinmarketcap.webp"
import BinanceDarkImg			from "../assets/images/Partners/binance-dark.webp"
import IlluviumDarkImg			from "../assets/images/Partners/illuvium-dark.webp"
import CoinbaseDarkImg			from "../assets/images/Partners/coinbase-dark.webp"
import MetaDarkImg				from "../assets/images/Partners/meta-dark.webp"
import CoinmarketcapDarkImg		from "../assets/images/Partners/coinmarketcap-dark.webp"

import Tree						from "../assets/images/Icons/8.webp"
import EarthPlant				from "../assets/images/Icons/2.webp"
import Jewel					from "../assets/images/Icons/13.webp"
import Pot						from "../assets/images/Icons/11.webp"

import Sharp1					from "../assets/images/Shapes/1.webp"
import Sharp2					from "../assets/images/Shapes/2.webp"
import Hero						from "../assets/images/Shapes/hero-1.png"

import Illustration1			from "../assets/images/Illustrations/1.webp"
import Illustration2			from "../assets/images/Illustrations/2.webp"
import Illustration3			from "../assets/images/Illustrations/3.webp"
import Illustration1Dark		from "../assets/images/Illustrations/1-Light.webp"
import Illustration2Dark		from "../assets/images/Illustrations/2-Light.webp"
import Illustration3Dark		from "../assets/images/Illustrations/3-Light.webp"

// import Effect1					from "../assets/images/Effect/1.webp"
import Effect2					from "../assets/images/Effect/2.webp"
import Effect3					from "../assets/images/Effect/3.webp"
// import Effect4					from "../assets/images/Effect/4.webp"
import Effect5					from "../assets/images/Effect/5.webp"

const fadeInUp = keyframes`
	0% {
		opacity: 0;
		-webkit-transform: translateY(100px);
		transform: translateY(100px);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
`;

const _WorkData = [
	{
		image: Illustration1,
		imageDark: Illustration1Dark,
		title: "Play",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
	},
	{
		image: Illustration2,
		imageDark: Illustration2Dark,
		title: "Earn",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
	},
	{
		image: Illustration3,
		imageDark: Illustration3Dark,
		title: "Plant",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
	}
] as CardObject[]

const _RoadmapData = [
	{
		title: "2022 Q2",
		items: [
			"idea",
			"Forming a team",
			"Advisor"
		],
		active: true
	},
	{
		title: "2022 Q3",
		items: [
			"Concept Art Trees",
			"Whitepaper",
			"Tokenomics",
			"MVP"
		],
		active: true
	},
	{
		title: "2022 Q4",
		items: [
			"Social activity",
			"Token mint",
			"Seed phase sale",
			"Private sale",
			"Team scale-up"
		],
		active: false
	},
	{
		title: "2023 Q2",
		items: [
			"Alpha launch (PC/Web)",
			"Marketplace",
			"iOS/Android version",
			"NFT sale",
			"Staking"
		],
		active: false
	},
	{
		title: "2023 Q1",
		items: [
			"Public sale",
			"Whitelist for NFT sale",
			"Whitelist NFT sale",
			"Public NFT sale",
			"Listing CEX/DEX",
		],
		active: false
	},
	{
		title: "2023 Q3",
		items: [
			"Tower Defence game",
			"EcoForest",
			"Planting Trees"
		],
		active: false
	},
	{
		title: "2023 Q4",
		items: [
			"Card game",
			"Land sale",
			"Anti-Frod system",
			"Planting Trees",
		],
		active: false
	},
	{
		title: "2024 Q1-Q4",
		items: [
			"Animals game",
			"NFT sale",
			"Beta launch",
			"Planting Trees"
		],
		active: false
	},
	{
		title: "2025 Q1-Q4",
		items: [
			"Bee game",
			"NFT sale",
			"Launch",
			"Planting Trees",
		],
		active: false
	}
]

const _FapData = [
	{
		label: "What is Ecoland?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "How does Ecoland work?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "How do you play the game?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "How to earn from playing?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "Where and how do the trees will be planted?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "Why this project is future?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "How to become an Ecomember",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "How to join waiting list?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	}
]

const _EverywhereData = [
	{
		image: require("../assets/images/Everywhere/1.jpg"),
		title: "#planting",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
	},
	{
		image: require("../assets/images/Everywhere/1.jpg"),
		title: "#planting",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
	},
	{
		image: require("../assets/images/Everywhere/1.jpg"),
		title: "#planting",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
	}
] as CardObject[]

interface HomeStatus {
	email: string
}

function Home () {
    const { theme } = useStore()

	const [status, setStatus] = React.useState<HomeStatus>({
		email: ""
	})

	const joinUs = async() => {
		if(status.email === "") {
			return;
		}

		let res: any = await fetchJson (
			process.env.REACT_APP_BACKENDURL + "/api/join-us",
			"post",
			{ email: status.email }
		)

		if (res.status === 200) {
			res = await res.json()
			console.log("success", res.data)
			alert("Success")
		}
	}

    return (
        <main>
			<Reveal
				className="onStep"
				keyframes={fadeInUp}
				delay={0}
				duration={1000}
				triggerOnce
			>
				<section className="banner">
					<div className="container">
						<div>
							<h1>Play Earn Plant!</h1>
							<p className="text-3">Build your environment both in digital and real Don’t forget, every tree counts</p>
							<div className="flex">
								<button className="btn-primary text-upper mr">Join waiting list</button>
								<button className="btn-none text-upper"><Icons.CaretRightCircle size={"2em"} />Watch now</button>
							</div>
						</div>
						<div>
							<img src={Hero} alt="Hero" />
						</div>
					</div>
				</section>
			</Reveal>
            <section>
                <div className="container">
					<div className="img-effect2">
						<img src={Effect2} alt="" />
					</div>
					<div className="partners">
						{theme === '' && (
							<>
								<div>
									<img src={BinanceImg} alt="" />
								</div>
								<div>
									<img src={IlluviumImg} alt="" />
								</div>
								<div>
									<img src={CoinbaseImg} alt="" />
								</div>
								<div>
									<img src={MetaImg} alt="" />
								</div>
								<div>
									<img src={CoinmarketcapImg} alt="" />
								</div>
							</>
						)}
						{theme === 'dark' && (
							<>
								<div>
									<img src={BinanceDarkImg} alt="" />
								</div>
								<div>
									<img src={IlluviumDarkImg} alt="" />
								</div>
								<div>
									<img src={CoinbaseDarkImg} alt="" />
								</div>
								<div>
									<img src={MetaDarkImg} alt="" />
								</div>
								<div>
									<img src={CoinmarketcapDarkImg} alt="" />
								</div>
							</>
						)}
					</div>
				</div>
            </section>
			
			<Reveal
				className="onStep"
				keyframes={fadeInUp}
				delay={0}
				duration={1000}
				triggerOnce
			>
				<section className="full about" id="about">
					<div className="subcontainer">
						<div className="row-3">
							<div className="col-xl-8">
								<h2>Ecoverse</h2>
								<p>We believe that all the innovations (discoveries/tools) in the world can be used for good. Thus, we believe that blockchain can also be used in a beneficial way and how fun we can make it. We are against the use of everything that mankind has invented to destroy the world. If you think so too, let's make the blockchain useful.</p>
								<p>This is our forest. We created it all together with you. This forest exists both in the real world and in our metaverse. You can find here all the people who are involved in the creation of this forest. By playing our games you are helping to save our planet. After all, we plant a tree on behalf of each of our users. If you don’t have time/desire to play games, but want to plant a tree and leave you name on the blockchain forever, then you can donate coins that will be sent to help protect our environ-</p>
							</div>
							<div className="col-xl-4">
								<div className="row-1">
									<div className="col-xl-6 col-xs-3">
										<div className="card card-primary px-1">
											<div className="card-img-6">
												<img src={Tree} alt="Tree" />
											</div>
											<span className="card-title-effect">Ecology</span>
										</div>
									</div>
									<div className="col-xl-6 col-xs-3">
										<div className="card card-primary px-1">
											<div className="card-img-6">
												<img src={EarthPlant} alt="EarthPlant" />
											</div>
											<span className="card-title-effect">Ecology</span>
										</div>
									</div>
									<div className="col-xl-6 col-xs-3">
										<div className="card card-primary px-1">
											<div className="card-img-6">
												<img src={Jewel} alt="Jewel" />
											</div>
											<span className="card-title-effect">Future</span>
										</div>
									</div>
									<div className="col-xl-6 col-xs-3">
										<div className="card card-primary px-1">
											<div className="card-img-6">
												<img src={Pot} alt="Pot" />
											</div>
											<span className="card-title-effect">Clean</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Reveal>
			
			<Reveal
				className="onStep"
				keyframes={fadeInUp}
				delay={0}
				duration={1000}
				triggerOnce
			>
				<section className="full">
					<div className="subcontainer">
						<h2 className="text-center">Our Features</h2>
						<div className="row-1">
							<div className="col-xl-4">
								<div className="card card-primary px-5">
									<div className="sharp2">
										<img src={Sharp2} alt="Sharp2" />
									</div>
									<div className="content">
										<h3>Play to <br />Earn</h3>
										<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
										<div>
											<button className="btn btn-sm px-3"><Icons.ArrowRightNarrow size={"1em"} /></button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-8">
								<div className="row mb-2">
									<div className="col-md-6">
										<div className="card card-primary">
											<h3>Education <br />content</h3>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
											<div>
												<button className="btn btn-sm px-3"><Icons.ArrowRightNarrow size={"1em"} /></button>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="card card-primary">
											<h3>Influencers <br />Volunteers</h3>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
											<div>
												<button className="btn btn-sm px-3"><Icons.ArrowRightNarrow size={"1em"} /></button>
											</div>
										</div>
									</div>
								</div>
								<div className="card card-primary">
									<div className="row">
										<div className="col-md-6">
											<h3>Events in <br />Real Life</h3>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
											<div>
												<button className="btn btn-sm px-3"><Icons.ArrowRightNarrow size={"1em"} /></button>
											</div>
										</div>
										<div className="col-md-6">
											<div className="sharp1">
												<img src={Sharp1} alt="Sharp1" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Reveal>

			<section className="full">
				<div className="subcontainer">
					<h2 className="text-center">How it works</h2>
					<Reveal
						className="onStep"
						keyframes={fadeInUp}
						delay={0}
						duration={1000}
						triggerOnce
					>
						<div className="row-2">
							{_WorkData.map((i:any, k:number) => (
								<div key={k} className="col-xl-4">
									<div className="card card-border-gray py-1">
										<div className="card-img sharp3 mb-3">
											{theme === '' ? (
												<img src={i.image} alt="Sharp1" />
											) : (
												<img src={i.imageDark} alt="Sharp1" />
											)}
										</div>
										<h3 className="mb-1">{i.title}</h3>
										<p className="mb-4">{i.content}</p>
										<div className="mb-2">
											<button className="btn btn-sm px-3"><Icons.ArrowRightNarrow size={"1em"} /></button>
										</div>
									</div>
								</div>
							))}
						</div>
					</Reveal>
					</div>
			</section>
			<section className="full roadmap" id="roadmap">
				<div className="subcontainer">
					<div className="img-effect3">
						<img src={Effect3} alt="" />
					</div>
					<div className="img-effect5">
						<img src={Effect5} alt="" />
					</div>
					<h2 className="text-center">Our Roadmap</h2>
						<div className="row mb-7 px-5 stepper-wrapper">
							{_RoadmapData.map((i:any, k:number) => (
								<div key={k} className={`stepper${i.active ? " active" : ""}`}>
									<Reveal
										className="onStep"
										keyframes={fadeInUp}
										delay={0}
										duration={1000}
										triggerOnce
									>
										<div className="stepper-content">
											<h3>{i.title}</h3>
											<ul>
												{i.items.map((li:string, k:number) => (
													<li key={k}>{k + 1}. {li}</li>
												))}
											</ul>
										</div>
									</Reveal>
								</div>
							))}
						</div>
					<p className="text-center mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor.</p>
					<div className="text-center">
						<button className="btn text-upper">WHITEPAPER</button>
					</div>
				</div>
			</section>
            <section className="full" id="doc">
				<div className="subcontainer">
					<h2 className="text-center">Frequently Asked Questions</h2>
					<Reveal
						className="onStep"
						keyframes={fadeInUp}
						delay={0}
						duration={1000}
						triggerOnce
					>
						<div>
							{_FapData.map((i:any, k:number) => (
								<Slidebar key={k} id={`fap-${k}`} header={(
									<h3 className="m-0">{i.label}</h3>
								)}>
									<p>{i.content}</p>
								</Slidebar>
							))}
						</div>
					</Reveal>
				</div>
            </section>
            <section className="full">
				<div className="subcontainer">
					<h2 className="text-center">We are everywhere!</h2>
					<Reveal
						className="onStep"
						keyframes={fadeInUp}
						delay={0}
						duration={1000}
						triggerOnce
					>
						<div className="row-2">
							{_EverywhereData.map((i:CardObject, k:number) => (
								<div key={k} className="col-md-4">
									<div className="card card-border-primary">
										<div className="card-img-full mb-3">
											<img src={i.image} alt="Sharp1" />
										</div>
										<div className="card-content">
											<h3 className="mb-1">{i.title}</h3>
											<p className="mb-4">{i.content}</p>
											<div>
												<button className="btn btn-sm px-3"><Icons.ArrowRightNarrow size={"1em"} /></button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</Reveal>
				</div>
            </section>
			<section id="contact" className="pt-0 mb-7">
				<div className="subcontainer">
					<Reveal
						className="onStep"
						keyframes={fadeInUp}
						delay={0}
						duration={1000}
						triggerOnce
					>
						<div className="row-2 vcenter">
							<div className="col-md-7">
								<h3>Join our community</h3>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut.</p>
							</div>
							<div className="col-md-5">
								<div className="input-form">
									<input type="text" placeholder="EMAIL ADDRESS" value={status.email} onChange={(e) => setStatus({email: e.target?.value})} />
									<button className="text-upper" onClick={joinUs}>Join</button>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</section>
        </main>
    )
}

export default Home