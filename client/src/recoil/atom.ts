import { atom } from "recoil";

interface userDataType {
    name: string,
    email: string,
}

const userDataAtom = atom({
    key: 'user', // unique ID (with respect to other atoms/selectors)
    default: { name: '', email: '' } as userDataType, // default value (aka initial value)
});

const screenWidthAtom = atom({
    key: 'screenwidth',
    default: window.innerWidth
})

interface toastParamType {
    title: string,
    desc: string,
    hasFunc: boolean,
    func?: () => void
}

const toastParamAtom = atom({
    key: 'toastParam',
    default: {title: '', desc: '', hasFunc: false, func: () => {}} as toastParamType
})


export {
    userDataAtom,
    screenWidthAtom,
    toastParamAtom,

}