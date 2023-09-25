import { useEffect, useState } from "react"

const useLocalStorage = <T extends Object>( key: string, initialValue: T | (() => T) ) => {
  
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue) {
            return JSON.parse(jsonValue)
        } else {
            return typeof initialValue === 'function' ? initialValue() : initialValue
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);   

    return [value, setValue] as [T, typeof setValue]
}

export default useLocalStorage