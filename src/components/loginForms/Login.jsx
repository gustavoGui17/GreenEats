import style from './login.module.css'
import Button from 'react-bootstrap/Button';
import Comida from './img/Comida.jpg'

function Login() {
    
    return(
        <div className={style.main_login}>
            <div className={style.right_card}>
                <div className={style.login_card}>
                        <h1>Receba suas compras</h1>
                        <h1>em casa</h1>
                         <p>O melhor aplicativo de entrega da </p>
                         <p>cidade para entregar seus </p>
                         <p>mantimentos frescos diarios</p>
                        <div className={style.btn_login}>
                             <Button variant="success" size='lg' >Login</Button>{' '}
                        </div>
                        <div className={style.btn_cadastro}>
                             <Button variant="success" size='lg' w-75 >Cadastro</Button>{' '}
                       </div> 
                       <div>
                            <img className={style.img} src={Comida} alt="Imagens de comidas" />
                       </div> 
                 </div>             
            </div>  
        </div>
    )
}

export default Login