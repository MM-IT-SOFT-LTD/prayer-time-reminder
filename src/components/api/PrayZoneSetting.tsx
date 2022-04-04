import { useState } from "react"
import { APIManager } from "../../api/manager"


export function PrayZoneSetting() {

    const provider = APIManager.getProvider();

    const [options, setOptions] = useState(provider.getOption() as any)

    const storeOption = () => {
        provider.setOption(options)
        location.reload()
    }

    return (
        <div className="p-4">
            <div className="w-full">
                <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">Method</label>
                <select value={options.method} onChange={e => setOptions({...options, method: e.currentTarget.value})} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Fetch method">
                    <option value={0}>IP address</option>
                    <option value={1}>City</option>
                    <option value={2}>Location</option>
                </select>
            </div>
            {options?.method == '1' && (
                <div className="w-full mt-4">
                    <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">City</label>
                    <select value={options?.city} onChange={e => setOptions({...options, city: e.currentTarget.value})} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="City">
                        <option value="shanghai">Shanghai - China</option>
                        <option value="istanbul">Istanbul - Turkey</option>
                        <option value="buenos-aires">Buenos Aires - Argentina</option>
                        <option value="mumbai">Mumbai - India</option>
                        <option value="mexico-city">Mexico City - Mexico</option>
                        <option value="beijing">Beijing - China</option>
                        <option value="karachi">Karachi - Pakistan</option>
                        <option value="tianjin">Tianjin - China</option>
                        <option value="guangzhou">Guangzhou - China</option>
                        <option value="delhi">Delhi - India</option>
                        <option value="moscow">Moscow - Russia</option>
                        <option value="shenzhen">Shenzhen - China</option>
                        <option value="dhaka-bd-bd-4933">Dhaka - Bangladesh</option>
                        <option value="seoul">Seoul	- Sout Korea</option>
                        <option value="sao-paulo">São Paulo - Brazil</option>
                        <option value="wuhan">Wuhan - China</option>
                        <option value="lagos-11021"	>Lagos - Nigeria</option>
                        <option value="jakarta">Jakarta	- Republic of Indonesia</option>
                        <option value="tokyo">Tokyo - Japan</option>
                        <option value="new-york">New York - Unite States</option>
                        <option value="dongguan">Dongguan - China</option>
                        <option value="taipei">Taipei - Taiwan</option>
                        <option value="kinshasa"> Kinshasa - Democratic Republic of the Congo</option>
                        <option value="lima">Lima - Peru</option>
                        <option value="cairo">Cairo - Egypt</option>
                        <option value="bogota-co">Bogotá - Colombia</option>
                        <option value="london">London - Unite Kingdom</option>
                        <option value="chongqing">Chongqing - China</option>
                        <option value="chengdu-cn">Chengdu - China</option>
                        <option value="baghdad">Baghdad - Iraq</option>
                    </select>
                </div>
            )}
            {options?.method == '2' && (
                <>
                <div className="w-full mt-2">
                    <div>
                        <label htmlFor="latitude" className="form-label inline-block mb-2 text-gray-700">Latitude</label>
                        <input type="number" step="0.00000000001" value={options?.latitude} onChange={e => setOptions({...options, latitude: e.currentTarget.value})} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="latitude" />
                    </div>
                </div>
                <div className="w-full mt-2">
                    <div>
                        <label htmlFor="longitude" className="form-label inline-block mb-2 text-gray-700">Longitude</label>
                        <input type="number" step="0.00000000001" value={options?.longitude} onChange={e => setOptions({...options, longitude: e.currentTarget.value})} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="longitude" />
                    </div>
                </div>
                <div className="w-full mt-2">
                    <div>
                        <label htmlFor="elevation" className="form-label inline-block mb-2 text-gray-700">Elevation</label>
                        <input type="number" step="0.001" value={options?.elevation} onChange={e => setOptions({...options, elevation: e.currentTarget.value})} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="elevation" />
                    </div>
                </div>
                </>
            )}
            <div className="w-fumll flex justify-end mt-4">
                <button onClick={storeOption} className="py-1 px-3 bg-green-300 text-green-800 font-semibold text-sm rounded">
                    Save
                </button>
            </div>
        </div>
    )
}