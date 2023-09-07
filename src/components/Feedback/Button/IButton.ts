import { MouseEventHandler, ReactNode } from 'react'

export interface IButtonCommon {
    children: ReactNode
    occ_type: 'filled' | 'outlined' | 'text'
    size: 'small' | 'extended' | 'full'
    action?: MouseEventHandler<Element>
    /** 
    This Boolean attribute prevents the user from interacting with the button: it cannot be pressed or focused.
    */
    disabled?: boolean
    id?: string
    /** If are loading = ```true``` don't need put disabled on true, it is.  */
    loading?: boolean
    loadingText?: string
    /** Type del button, es importante aclararlo en muchos casos
     * Si el boton debe ser tratado como un link a nivel HTML por accesibilidad
     * Por accesibilidad igual deberían mandar action={history.push('link')} para
     * mandar al paciente
     */
    type: 'submit' | 'reset' | 'button' | 'link' | undefined
    /** Icon, sirve para añadir un icono al boton */
    icon?: string
    /** Cambia el color del botón a verde o rojo, como es algo excepcional lo pongo como state */
    state?: 'sucess' | 'error'
}

export interface IButtonNormal extends IButtonCommon {
    occ_type: 'filled' | 'outlined'

    /** Type del button, es importante aclararlo en muchos casos
     * Si el boton debe ser tratado como un link a nivel HTML por accesibilidad
     * Por accesibilidad igual deberían mandar action={history.push('link')} para
     * mandar al paciente
     */
    type: 'submit' | 'reset' | undefined
    align?: never
    href?: never
}

export interface IButtonLink extends IButtonCommon {
    occ_type: 'filled' | 'outlined' | 'text'
    type: 'link'
    href: string
    align?: 'start' | 'center' | 'end'
}

export interface IButtonText extends IButtonCommon {
    align?: 'start' | 'center' | 'end'
    href?: never
}
