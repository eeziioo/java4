let ism = prompt('ismungizni kiriting')
let javob = confirm('katta harfda yoziladi')

if (javob) {
    console.log(`${ism.toLocaleUpperCase} ismingiz katta harflarda oqirildi va ${ism.length} ta harfdan iborat`);
} else {
    console.log(`${ism.toLocaleLowerCase} ismingiz kichkina harflarda oqirildi va ${ism.length} ta harfdan iborat`);
}
