interface CustomContainerProps {
    w: number,
    bigg: boolean
}

export const CustomContainer = ( { w, bigg } : CustomContainerProps ) => {
    return (
        <div 
            className={`bg-black/10 w-[${w}%] rounded-4xl p-10 m-1`}
        >
            <h1 className="text-black/50 text-2xl  font-bold mb-10">Ventas este mes</h1>
            <div className="w-[50%] h-20 bg-black/10 rounded-4xl"/>
        </div>
    )
}