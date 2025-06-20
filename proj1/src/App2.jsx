// import {useState, useCallback, useEffect, useRef} from 'react'
// function App2(){

//     const [length, setLength] = useState(8);
//     const [numAllowed, setNumAllowed] = useState(false);
//     const [charAllowed, setCharAllowed] = useState(false);
//     const [password, setPassword] = useState("");

//     const passwordGenerator = useCallback(() => {
//         let pass = "";
//         let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//         if(numAllowed){
//             str = str + "1234567890";
//         }
//         if(charAllowed){
//             str = str + "~!@#$%^&*()_+{}-:;'<>/?";
//         }

//         for(let i=1; i<=length; i++){
//             let char = Math.floor(Math.random()*str.length + 1);
//             pass += str.charAt(char);
//         }
//         setPassword(pass);

//     }, [length, numAllowed, charAllowed, setPassword])

//     const passwordRef = useRef(null);

//     const copyToclipboard = useCallback(() =>{
//         passwordRef.current?.select();
//         window.navigator.clipboard.writeText(password)
//         alert('password copied to clipboard');
//     }, [password] )

//     useEffect(()=>{
//         passwordGenerator();
//     },[length, numAllowed,charAllowed, passwordGenerator])

//     return(
//         <div className='max-w-5xl w-full text-center bg-white border-2 shadow-lg '>
//             <h1 className='text-2xl text-center mt-6 font-bold bg-black text-white'>
//             Password Generator </h1>
//             <div className='overflow-hidden'>
//                 <input 
//                 type="text"
//                 value = {password}
//                 placeholder='password'
//                 className='text-xl rounded-lg bg-gray-100 px-5 py-2 my-7 ' 
//                 readOnly/>
//                 <button className='px-3 py-1 ml-2 rounded-md shadow-lg bg-orange-600 text-white'
//                 onClick={copyToclipboard}>
//                 Copy</button>
//             </div>
//             <div className='my-2 mx-2 p-1 bg-green-400'>
//                 <input type="range" 
//                 min={8}
//                 max={15}
//                 value={length}
//                 className='cursor-pointer ml-1'
//                 onChange={(e)=>{setLength(e.target.value)}}/>
//                 <label 
//                     className='text-2xl'
//                     htmlFor="">  Length: {length}</label>

//                 <input type="checkbox"
//                 defaultChecked = {numAllowed}
//                 id = "numberInput"
//                 className='cursor-pointer ml-1'
//                 onChange={() =>{
//                     setNumAllowed((prev) => !prev) 
//                 }} />
//                 <label 
//                     className='text-2xl px-2'
//                     htmlFor="NumberInput">NumberInput</label>

//                 <input type="checkbox"
//                 defaultChecked = {charAllowed}
//                 id = "CharInput"
//                 className='cursor-pointer ml-1'
//                 onChange={() =>{
//                     setCharAllowed((prev) => !prev) 
//                 }} />
//                 <label 
//                     className='text-2xl px-2'
//                     htmlFor="CharInput">CharacterInput</label>
//             </div>


//         </div>
//     )
// }

// export default App2




import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const generatePassword = useCallback(() => {
        let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) charset += "0123456789";
        if (includeSymbols) charset += "~!@#$%^&*()_+{}-:;'<>/?";

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            newPassword += charset.charAt(randomIndex);
        }

        setPassword(newPassword);
    }, [length, includeNumbers, includeSymbols]);

    const copyToClipboard = useCallback(() => {
        if (passwordRef.current) {
            passwordRef.current.select();
            window.navigator.clipboard.writeText(password);
            alert("Password copied to clipboard");
        }
    }, [password]);

    useEffect(() => {
        generatePassword();
    }, [length, includeNumbers, includeSymbols, generatePassword]);

    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUFHnyKtSI54kKGcKqIcH0a_Fxpag7ILrBQ&s')",
            }}>
            <div className="bg-gray-200 p-6 rounded-xl shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-6">Random Password Generator</h1>

                <div className="flex items-center mb-4">
                    <input
                        type="text"
                        value={password}
                        ref={passwordRef}
                        readOnly
                        className="flex-grow bg-gray-100 px-3 py-2 rounded-l-md border border-r-0 border-gray-300"
                    />
                    <button
                        onClick={copyToClipboard}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r-md transition"
                    >
                        Copy
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center">
                        <label className="mr-2 font-medium">Length: {length}</label>
                        <input
                            type="range"
                            min={8}
                            max={16}
                            value={length}
                            onChange={(e) => setLength(parseInt(e.target.value))}
                            className="flex-grow cursor-pointer"
                        />
                    </div>

                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={includeNumbers}
                                onChange={() => setIncludeNumbers((prev) => !prev)}
                                className="mr-2"
                            />
                            Include Numbers
                        </label>

                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={includeSymbols}
                                onChange={() => setIncludeSymbols((prev) => !prev)}
                                className="mr-2"
                            />
                            Include Symbols
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;