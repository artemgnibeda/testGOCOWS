var infoTebleParent = document.getElementById('info-table');
var infoTebleChild = infoTebleParent.querySelector('tbody');
var showMoreBtn = document.querySelector('.show-more');
var xhr = new XMLHttpRequest();

xhr.open("GET", "data.json", true);

xhr.onload = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var list = '';
            if (data.length > 11) {
              var  k = 11;
              showMoreBtn.style.display = 'flex';
            } else {
                var  k = data.length;
            }
            for (var i = 0; i < k;  i++  ) {
                list += '<tr><td>'  + data[i].ticker + '</td><td>'  + data[i].Name + '</td><td>'  + data[i].SCTR + '</td></tr>';
            }
            infoTebleChild.innerHTML = list;

        } else {
            console.error(xhr.statusText);
        }
    }


    showMoreBtn.addEventListener('click', event => {
        for (var i = 11; i < data.length;  i++  ) {
            list += '<tr><td>'  + data[i].ticker + '</td><td>'  + data[i].Name + '</td><td>'  + data[i].SCTR + '</td></tr>';
        }
        infoTebleChild.innerHTML = list;
        showMoreBtn.style.display = 'none';
    });
};

xhr.onerror = function (e) {
    console.error(xhr.statusText);
};

xhr.send(null);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBpbmZvVGVibGVQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby10YWJsZScpO1xudmFyIGluZm9UZWJsZUNoaWxkID0gaW5mb1RlYmxlUGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XG52YXIgc2hvd01vcmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1tb3JlJyk7XG52YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbnhoci5vcGVuKFwiR0VUXCIsIFwiZGF0YS5qc29uXCIsIHRydWUpO1xuXG54aHIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSAnJztcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDExKSB7XG4gICAgICAgICAgICAgIHZhciAgayA9IDExO1xuICAgICAgICAgICAgICBzaG93TW9yZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgIGsgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgazsgIGkrKyAgKSB7XG4gICAgICAgICAgICAgICAgbGlzdCArPSAnPHRyPjx0ZD4nICArIGRhdGFbaV0udGlja2VyICsgJzwvdGQ+PHRkPicgICsgZGF0YVtpXS5OYW1lICsgJzwvdGQ+PHRkPicgICsgZGF0YVtpXS5TQ1RSICsgJzwvdGQ+PC90cj4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5mb1RlYmxlQ2hpbGQuaW5uZXJIVE1MID0gbGlzdDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcih4aHIuc3RhdHVzVGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNob3dNb3JlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gMTE7IGkgPCBkYXRhLmxlbmd0aDsgIGkrKyAgKSB7XG4gICAgICAgICAgICBsaXN0ICs9ICc8dHI+PHRkPicgICsgZGF0YVtpXS50aWNrZXIgKyAnPC90ZD48dGQ+JyAgKyBkYXRhW2ldLk5hbWUgKyAnPC90ZD48dGQ+JyAgKyBkYXRhW2ldLlNDVFIgKyAnPC90ZD48L3RyPic7XG4gICAgICAgIH1cbiAgICAgICAgaW5mb1RlYmxlQ2hpbGQuaW5uZXJIVE1MID0gbGlzdDtcbiAgICAgICAgc2hvd01vcmVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbn07XG5cbnhoci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKHhoci5zdGF0dXNUZXh0KTtcbn07XG5cbnhoci5zZW5kKG51bGwpOyJdLCJmaWxlIjoibWFpbi5qcyJ9
