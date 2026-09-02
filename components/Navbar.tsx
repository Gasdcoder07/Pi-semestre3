const Navbar = () => {
    return (
        <nav className="bg-white border-b border-neutral-300">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="flex items-center gap-4">
                    <img
                        src="https://cdn.aglty.io/scotia-bank-mexico/Attachments/NewItems/lomas-palmas-sucursal_20231018233625_0.png"
                        className="w-10 h-auto shrink-0 object-contain rounded-md"
                        alt="Sucursal"/>

                    <div className="flex flex-col">
                        <p className="text-neutral-500 text-xs font-medium whitespace-nowrap">Sucursal</p>
                        <p className="text-sm font-semibold whitespace-nowrap">Las Brisas</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqEaflQNU8d9UlWxY5FjaOnbyTDhR5REpvqBgaM-sBK1WHF8IuVuTEHK9&s=10"
                        className="w-10 h-auto shrink-0 object-cover rounded-full"
                        alt="Sucursal"/>

                    <div className="flex flex-col">
                        <p className="text-sm font-medium whitespace-nowrap">Alejo Serna</p>
                        <p className="text-neutral-500 text-xs font-semibold whitespace-nowrap">Admin</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
