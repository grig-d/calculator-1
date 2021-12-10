// очистка
// удаление одного символа
// равно
// вставка символа в текстовое поле

function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = '';
}

function back() {
    const expession = document.form.textview.value;
    document.form.textview.value = expession.slice(0, expession.length - 1);
}

function equal() {
    const expession = document.form.textview.value;
    if(expession) {
        document.form.textview.value = eval(expession);
    }
}