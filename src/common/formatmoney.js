export default function formatMoney(value){
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD',
    }).format(value)
}