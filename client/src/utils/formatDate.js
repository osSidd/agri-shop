export default function formatDate(date){
    const locale = "en-US"
    const options = {
        day:'numeric', 
        month:'long', 
        year:'numeric'
    }
    return new Date(date).toLocaleDateString(locale, options)
}