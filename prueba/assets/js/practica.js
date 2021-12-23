function getAllCountries() {
    $.ajax({
        type: 'GET',
        url: 'https://corona-api.com/countries',
        dataType: "json",
        async: true,
        success: function (data) { renderAllCountries(data.data) },
        error: function () { errorMessage() },

    });
}

function renderAllCountries(data) {
    for (let i = 0; i < data.length; i++) {
        $("#countries").append(`<option value="${data[i].code}">${data[i].name}</option>`);
    }
}

function getAllCountries() {
    $.ajax({
        type: 'GET',
        url: `https://corona-api.com/countries/${country}`,
        dataType: "json",
        async: true,
        success: function (data) { },
        error: function () { errorMessage() },

    });
}

function renderAllCountries(data) {
    for (let i = 0; i < data.length; i++) {
        $("#countries").append(`<option value="${data[i].code}">${data[i].name}</option>`);
    }
}