var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', '../data.json');

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
    // обработать ошибку
    console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
    // вывести результат
    console.log(JSON.parse(xhr.responseText)); // responseText -- текст ответа.
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuLy8gMi4g0JrQvtC90YTQuNCz0YPRgNC40YDRg9C10Lwg0LXQs9C+OiBHRVQt0LfQsNC/0YDQvtGBINC90LAgVVJMICdwaG9uZXMuanNvbidcbnhoci5vcGVuKCdHRVQnLCAnLi4vZGF0YS5qc29uJyk7XG5cbi8vIDMuINCe0YLRgdGL0LvQsNC10Lwg0LfQsNC/0YDQvtGBXG54aHIuc2VuZCgpO1xuXG4vLyA0LiDQldGB0LvQuCDQutC+0LQg0L7RgtCy0LXRgtCwINGB0LXRgNCy0LXRgNCwINC90LUgMjAwLCDRgtC+INGN0YLQviDQvtGI0LjQsdC60LBcbmlmICh4aHIuc3RhdHVzICE9IDIwMCkge1xuICAgIC8vINC+0LHRgNCw0LHQvtGC0LDRgtGMINC+0YjQuNCx0LrRg1xuICAgIGNvbnNvbGUubG9nKCB4aHIuc3RhdHVzICsgJzogJyArIHhoci5zdGF0dXNUZXh0ICk7IC8vINC/0YDQuNC80LXRgCDQstGL0LLQvtC00LA6IDQwNDogTm90IEZvdW5kXG59IGVsc2Uge1xuICAgIC8vINCy0YvQstC10YHRgtC4INGA0LXQt9GD0LvRjNGC0LDRglxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpOyAvLyByZXNwb25zZVRleHQgLS0g0YLQtdC60YHRgiDQvtGC0LLQtdGC0LAuXG59Il0sImZpbGUiOiJtYWluLmpzIn0=
