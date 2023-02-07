
export default function Input( props ) {
    const { refText, handleLoad } = props;

    return(
        <div className="input-form" data-testid="input-container">
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_first_name" id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required ref={refText} data-testid="input" />
                <label htmlFor="floating_first_name"
                    className="block peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description
                </label>
            </div>
            <button type="submit" id="close" onClick={handleLoad} data-testid="submit"
                className="text-gray-500 bg-gray-200 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-1 mr-1 mb-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ml-6">Ajouter
            </button>
        </div>
    )
}