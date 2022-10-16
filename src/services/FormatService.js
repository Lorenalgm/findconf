export const FormatService = {
    monetaryValue(value){
       return value.toLocaleString('pt-br',{minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})
    },
    limitText(text = '', maxLength) {
        if(text.length < maxLength){
            return text;
        }
        return text.slice(0,maxLength) + '...';
    }
}