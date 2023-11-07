import { Eczar, Henny_Penny } from 'next/font/google'

const eczarFont = Eczar({
    weight: ['400', '600', '800'],
    subsets: ['latin']
})

const hennyPennyFont = Henny_Penny({
    weight: '400',
    subsets: ['latin']
})

export { eczarFont, hennyPennyFont }