'use client'

import Spacer from '../../Base/Spacer/Spacer'
import { IButtonLink, IButtonNormal, IButtonText } from './IButton'
import { useState } from 'react'

type IButton = IButtonLink|IButtonNormal|IButtonText


function Loader({size} : {size: number, color: string}){
    return (<div>
        cargando...
    </div>
    )
}

function Icon({name}:{name: string, size: string, color: string} ){
    return (<div>
        Iconoo...
    </div>
    )
}

function ButtonLoader({occ_type} : Pick<IButton, 'occ_type'>){
    return   <>
        <Loader
            size={13}
            color={
                occ_type === 'filled'
                    ? 'background-light'
                    : 'grey-3'
            }
        />
        <Spacer value="6px" />
    </>
}

function ButtonIcon({icon} : Required<Pick<IButton, 'icon'>>){
    return   <>
        <Icon
            name={icon}
            size="xxs"
            color="inherit"
        />
        <Spacer value="6px" />
    </>
}

function ButtonRipple( {rippleX, rippleY} : { rippleX: number; rippleY: number }){
    return  <span
          className="ripple"
          style={{
            left: rippleX + 'px',
            top: rippleY + 'px',
          }}
        ></span>
}

function Button({
    disabled = false,
    loading = false,
    loadingText = 'Cargando...',
    occ_type = 'filled',
    size = 'full',
    type = 'button',
    ...props
}: IButton) {
    const [ripple, setRipple] = useState<{ rippleX: number; rippleY: number } | null>(null);

      /**
     * Maneja el clic en el botón y muestra el efecto ripple.
     *
     * @param {MouseEvent} e - Evento de clic.
     */
    const handleClick = (e: React.MouseEvent<HTMLButtonElement|HTMLAnchorElement>) => {
        // Obtén las coordenadas del clic
        const rect = e.currentTarget.getBoundingClientRect();
        const rippleX = e.clientX - rect.left;
        const rippleY = e.clientY - rect.top;

        // Configura las coordenadas del ripple
        setRipple({
        rippleX,
        rippleY,
        });

        // Ejecuta la función onClick proporcionada (si la hay)
        if (props.action) {
        props.action(e);
        }

        // Elimina el ripple después de un tiempo
        setTimeout(() => {
        setRipple(null);
        }, 1000);
    };

    if (type === 'link') {
        return (
            <>
                <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

                { ripple ? <ButtonRipple rippleX={ripple?.rippleX} rippleY={ripple?.rippleY} /> : null}
                <a
                    className={`Button-${occ_type}-${size}-${disabled}-${loading}-${props.state}-${props.align}`}
                    onClick={disabled || loading ? undefined : handleClick}
                    /** Si esta cargando se desactiva sólo, no necesitas aclararlo */
                >
                    {loading ? <ButtonLoader occ_type={occ_type}/> : null}
                    {props.icon ? <ButtonIcon icon={props.icon}/> : null}
                    {loading ? loadingText : props.children}
                </a>
            </>
        )
    }

    return (
        <>
            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

                <button
                    className={`Button-${occ_type}-${size}-${disabled}-${loading}-${props.state}-${props.align}`}
                    onClick={disabled || loading ? undefined : handleClick}
                    /** Si esta cargando se desactiva sólo, no necesitas aclararlo */
                >
                    {loading ? <ButtonLoader occ_type={occ_type}/> : null}
                    {props.icon ? <ButtonIcon icon={props.icon}/> : null}
                    {loading ? loadingText : props.children}
                </button>
        </>
    )
}

export default Button
