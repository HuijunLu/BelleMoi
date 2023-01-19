// general uniform button component used through out the website

// three types: google sign in; inverted, normal
import  './button.styles.scss'

const Button_type_class = {
  google:'google-sign-in',
  inverted:'inverted',
}

const Button = ({children, ButtonType, ...otherButtonProps}) => {
  console.log(ButtonType)
  return (
    <button className={`button-container ${Button_type_class[ButtonType]}`}{...otherButtonProps}>{children}</button>
  )
}

export default Button;