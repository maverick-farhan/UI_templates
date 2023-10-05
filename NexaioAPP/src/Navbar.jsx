import './Navbar.css';

function Logo(){
return (
    <>
    <h1 className="logo">Nexaio</h1>
    </>
)
}
function Midmenu(){
return (
    <>
    <ul className="menu mdmenu">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Projects</li>
    </ul>
    </>

)}
function Button(){
    return (
    <button className='btn'>Contact</button>
    )
}
function Rightmenu(){
return (
<>
<ul className="menu rtmenu">
    <li className='lang'>Eng |</li>
    <li>Log In</li>
<Button />
</ul>
</>

)
}
function Wrapper(){
    return (
    <div className="wrapper">
        <Logo />
        <Midmenu />
        <Rightmenu />
    </div>

    )
} 

export default function Navbar(){
    return (
        <>
        <Wrapper />
        </>
    )
}