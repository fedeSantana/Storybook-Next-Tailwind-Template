interface ISpacer {
    dataTestId?: string,
    direction?: 'horizontal' | 'vertical',
    /** https://tailwindcss.com/docs/width , put the value but not the w or h, just 2.5, 3, 4... etc.*/
    value: string,
    /** make visible lines to see how big spacer is */
    show?: boolean
}

function Spacer({
    direction,
    show=true,
    dataTestId= 'occ-spacer',
    value = '2.5',
} : ISpacer){

    let showType = show ? 'border-dashed border-2 border-sky-500' : ''

    if (direction === 'vertical'){
        return <div className={`h-${value} w-2.5 ${showType}`} aria-hidden='true' data-test-id={dataTestId}/>
    }

    if (direction === 'horizontal'){
                return <div className={`h-2.5 w-${value} ${showType}`} aria-hidden='true' data-test-id={dataTestId}/>
    }

    return <div className={`h-${value} w-${value} ${showType}`} aria-hidden='true' data-test-id={dataTestId}/>
}

export default Spacer