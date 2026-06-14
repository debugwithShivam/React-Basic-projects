import {create} from 'zustand'
import {persist} from 'zustand/middleware'

const useCountStore = create((set,get)=>({
    count : 0,
    logCount : ()=>{
            console.log(get().count)
    },
    increment : ()=>{
        if(get().count >= 15) return
        set((state)=>({
            count:state.count + 1
        }))
    },
    decrement : ()=>{
        if(get().count <= 0) return
        set((state)=>({
            count:state.count - 1
        }))
    }
}))

export default useCountStore