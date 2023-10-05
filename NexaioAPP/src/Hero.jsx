import './Hero.css';
import Team from './assets/Team.png';
function Button(){
    return (
        <button className="cta">Start a Project</button>
    )
}
function Services(){
return (
<div className="services">
        <Ourteam />
        <ReachUs />
</div>
)
}
function ReachUs(){
return (
    <div className='reach'>
    <h1 className="available">24/7</h1>
    <h5 className="caption">We are in touch</h5>
    </div>
)
}
function Ourteam(){
    return (
        <div className='ourteam'>
        <ul className="imageList">
            <li><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" /></li>
            <li><img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="" /></li>
            <li><img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="https://images.unsplash.com/photo-1544714042-5c0a53d63ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" /></li>
            <li><img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" /></li>
        </ul>
        <h5 className="caption">We provide diverse range of skills</h5>
        <div className="link"><a href="#">See our services</a></div>
        </div>
    )
}

function Leftcontainer(){
return (
<div className="left">
    <h1 className="title">Smart Agency Fuels Business Success</h1>
    <h5 className="caption">Expert marketing freelancer and micro agencies meticulously screened for their demonstrated achievements</h5>
    <Button />

    <Services />

</div>
)
}
function Rightcontainer(){
return (
<div className="right">
<img src={Team} alt="Team png" />
</div>
)
}

function Main(){
return (
<div className="container">
    <Leftcontainer />
    <Rightcontainer />
</div>
)
} 

export default function Hero(){
    return (
        <>
        <Main />
        </>
    )
}