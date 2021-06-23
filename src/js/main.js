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



