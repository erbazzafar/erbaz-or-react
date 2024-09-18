import {useState, useCallback, useEffect, useRef} from 'react'
function App2(){

    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
        if(numAllowed){
            str = str + "1234567890";
        }
        if(charAllowed){
            str = str + "~!@#$%^&*()_+{}-:;'<>/?";
        }

        for(let i=1; i<=length; i++){
            let char = Math.floor(Math.random()*str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);

    }, [length, numAllowed, charAllowed, setPassword])

    const passwordRef = useRef(null);

    const copyToclipboard = useCallback(() =>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
        // alert('password copied to clipboard');
    }, [password] )

    useEffect(()=>{
        passwordGenerator();
    },[length, numAllowed,charAllowed, passwordGenerator])

    return(
        <div className='w-full text-center bg-green-600'>
            <h1 className='text-2xl text-center mt-6 font-bold bg-black text-white'>
            Password Generator </h1>
            <div className='overflow-hidden'>
                <input 
                type="text"
                value = {password}
                placeholder='password'
                className='rounded-lg bg-gray-400 my-7 ' 
                readOnly/>
                <button className='ml-2 rounded-md shadow-lg bg-orange-600 text-white'
                onClick={copyToclipboard}>
                Copy</button>
            </div>
            <div className='my-2 mx-2 p-1'>
                <input type="range" 
                min={8}
                max={15}
                value={length}
                className='cursor-pointer ml-1'
                onChange={(e)=>{setLength(e.target.value)}}/>
                <label htmlFor="">length: {length}</label>

                <input type="checkbox"
                defaultChecked = {numAllowed}
                id = "numberInput"
                className='cursor-pointer ml-1'
                onChange={() =>{
                    setNumAllowed((prev) => !prev) 
                }} />
                <label htmlFor="NumberInput">NumberInput</label>

                <input type="checkbox"
                defaultChecked = {charAllowed}
                id = "CharInput"
                className='cursor-pointer ml-1'
                onChange={() =>{
                    setCharAllowed((prev) => !prev) 
                }} />
                <label htmlFor="CharInput">CharacterInput</label>
            </div>
            
            
        </div>
    )
}

export default App2