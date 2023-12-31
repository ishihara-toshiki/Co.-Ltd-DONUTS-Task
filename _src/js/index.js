//open-meteo

//weather1[today]のHTMLデータ取得
const weatherTitle1 = document.getElementById('js-weather1-title');
const weatherImg1 = document.getElementById('js-weather1-img');
const weatherTempMax1 = document.getElementById('js-weather1-temp-max');
const weatherTempMin1 = document.getElementById('js-weather1-temp-min');
const weatherTempMax1_before = document.getElementById('js-weather1-temp-max-before');
const weatherTempMin1_before = document.getElementById('js-weather1-temp-min-before');
const weatherPercent1_06 = document.getElementById('js-weather1-percent-06');
const weatherPercent1_612 = document.getElementById('js-weather1-percent-612');
const weatherPercent1_1218 = document.getElementById('js-weather1-percent-1218');
const weatherPercent1_1824 = document.getElementById('js-weather1-percent-1824');



//weather2[tommorow]のHTMLデータ取得
const weatherTitle2 = document.getElementById('js-weather2-title');
const weatherImg2 = document.getElementById('js-weather2-img');
const weatherTempMax2 = document.getElementById('js-weather2-temp-max');
const weatherTempMin2 = document.getElementById('js-weather2-temp-min');
const weatherTempMax2_before = document.getElementById('js-weather2-temp-max-before');
const weatherTempMin2_before = document.getElementById('js-weather2-temp-min-before');
const weatherPercent2_06 = document.getElementById('js-weather2-percent-06');
const weatherPercent2_612 = document.getElementById('js-weather2-percent-612');
const weatherPercent2_1218 = document.getElementById('js-weather2-percent-1218');
const weatherPercent2_1824 = document.getElementById('js-weather2-percent-1824');


//weather3のHTMLデータ取得
const weatherTitle3 = document.getElementById('js-weather3-title');
const weatherImg3 = document.getElementById('js-weather3-img');
const weatherTempMax3 = document.getElementById('js-weather3-temp-max');
const weatherTempMin3 = document.getElementById('js-weather3-temp-min');
const weatherTempMax3_before = document.getElementById('js-weather3-temp-max-before');
const weatherTempMin3_before = document.getElementById('js-weather3-temp-min-before');
const date3 = document.getElementById('js-date3');


//weather4のHTMLデータ取得
const weatherTitle4 = document.getElementById('js-weather4-title');
const weatherImg4 = document.getElementById('js-weather4-img');
const weatherTempMax4 = document.getElementById('js-weather4-temp-max');
const weatherTempMin4 = document.getElementById('js-weather4-temp-min');
const weatherTempMax4_before = document.getElementById('js-weather4-temp-max-before');
const weatherTempMin4_before = document.getElementById('js-weather4-temp-min-before');
const date4 = document.getElementById('js-date4');


//weather5のHTMLデータ取得
const weatherTitle5 = document.getElementById('js-weather5-title');
const weatherImg5 = document.getElementById('js-weather5-img');
const weatherTempMax5 = document.getElementById('js-weather5-temp-max');
const weatherTempMin5 = document.getElementById('js-weather5-temp-min');
const weatherTempMax5_before = document.getElementById('js-weather5-temp-max-before');
const weatherTempMin5_before = document.getElementById('js-weather5-temp-min-before');
const date5 = document.getElementById('js-date5');


//weather6のHTMLデータ取得
const weatherTitle6 = document.getElementById('js-weather6-title');
const weatherImg6 = document.getElementById('js-weather6-img');
const weatherTempMax6 = document.getElementById('js-weather6-temp-max');
const weatherTempMin6 = document.getElementById('js-weather6-temp-min');
const weatherTempMax6_before = document.getElementById('js-weather6-temp-max-before');
const weatherTempMin6_before = document.getElementById('js-weather6-temp-min-before');
const date6 = document.getElementById('js-date6');


//weather7のHTMLデータ取得
const weatherTitle7 = document.getElementById('js-weather7-title');
const weatherImg7 = document.getElementById('js-weather7-img');
const weatherTempMax7 = document.getElementById('js-weather7-temp-max');
const weatherTempMin7 = document.getElementById('js-weather7-temp-min');
const weatherTempMax7_before = document.getElementById('js-weather7-temp-max-before');
const weatherTempMin7_before = document.getElementById('js-weather7-temp-min-before');
const date7 = document.getElementById('js-date7');



window.addEventListener('load', function() {
    getWeather();
});

function getWeather() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=precipitation_probability&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1';

    fetch(url) 
    .then(response => {
        return response.json();
    }) 
    .then(data => {  
        //JSONデータから該当データの配列取得
        let weathercodes = data.daily.weathercode;
        let weathertempmaxs = data.daily.temperature_2m_max;
        let weathertempmins = data.daily.temperature_2m_min;
        let weatherpercents = data.hourly.precipitation_probability;
        let dates = data.daily.time;

        

        //weather1[today]のJSONデータ取得
        let weathercode1 = weathercodes[1];
        let weathertempmax1 = weathertempmaxs[1];
        let weathertempmin1 = weathertempmins[1];
        let before_weathertempmax1 = weathertempmaxs[1] - weathertempmaxs[0];
        let before_weathertempmin1 = weathertempmins[1] - weathertempmins[0];

        let weatherpercent1_06 = weatherpercents[27];
        let weatherpercent1_612 = weatherpercents[33];
        let weatherpercent1_1218 = weatherpercents[39];
        let weatherpercent1_1824 = weatherpercents[45];
       

        //weather2[tommorow]のJSONデータ取得
        let weathercode2 = weathercodes[2];
        let weathertempmax2 = weathertempmaxs[2];
        let weathertempmin2 = weathertempmins[2];
        let before_weathertempmax2 = weathertempmaxs[2] - weathertempmaxs[1];
        let before_weathertempmin2 = weathertempmins[2] - weathertempmins[1];

        let weatherpercent2_06 = weatherpercents[51];
        let weatherpercent2_612 = weatherpercents[57];
        let weatherpercent2_1218 = weatherpercents[63];
        let weatherpercent2_1824 = weatherpercents[69];


        //weather3のJSONデータ取得
        let weathercode3 = weathercodes[3];
        let weathertempmax3 = weathertempmaxs[3];
        let weathertempmin3 = weathertempmins[3];
        let before_weathertempmax3 = weathertempmaxs[3] - weathertempmaxs[2];
        let before_weathertempmin3 = weathertempmins[3] - weathertempmins[2];
        let date3 = dates[3];

        //weather4のJSONデータ取得
        let weathercode4 = weathercodes[4];
        let weathertempmax4 = weathertempmaxs[4];
        let weathertempmin4 = weathertempmins[4];
        let before_weathertempmax4 = weathertempmaxs[4] - weathertempmaxs[3];
        let before_weathertempmin4 = weathertempmins[4] - weathertempmins[3];
        let date4 = dates[4];

        //weather5のJSONデータ取得
        let weathercode5 = weathercodes[5];
        let weathertempmax5 = weathertempmaxs[5];
        let weathertempmin5 = weathertempmins[5];
        let before_weathertempmax5 = weathertempmaxs[5] - weathertempmaxs[4];
        let before_weathertempmin5 = weathertempmins[5] - weathertempmins[4];
        let date5 = dates[5];

        //weather6のJSONデータ取得
        let weathercode6 = weathercodes[6];
        let weathertempmax6 = weathertempmaxs[6];
        let weathertempmin6 = weathertempmins[6];
        let before_weathertempmax6 = weathertempmaxs[6] - weathertempmaxs[5];
        let before_weathertempmin6 = weathertempmins[6] - weathertempmins[5];
        let date6 = dates[6];

        //weather7のJSONデータ取得
        let weathercode7 = weathercodes[7];
        let weathertempmax7 = weathertempmaxs[7];
        let weathertempmin7 = weathertempmins[7];
        let before_weathertempmax7 = weathertempmaxs[7] - weathertempmaxs[6];
        let before_weathertempmin7 = weathertempmins[7] - weathertempmins[6];
        let date7 = dates[7];



        getWeathercodeChange1(weathercode1, weathertempmax1, weathertempmin1, before_weathertempmax1, before_weathertempmin1, weatherpercent1_06, weatherpercent1_612, weatherpercent1_1218, weatherpercent1_1824);
        getWeathercodeChange2(weathercode2, weathertempmax2, weathertempmin2, before_weathertempmax2, before_weathertempmin2, weatherpercent2_06, weatherpercent2_612, weatherpercent2_1218, weatherpercent2_1824);
        getWeathercodeChange3(weathercode3, weathertempmax3, weathertempmin3, before_weathertempmax3, before_weathertempmin3, date3);
        getWeathercodeChange4(weathercode4, weathertempmax4, weathertempmin4, before_weathertempmax4, before_weathertempmin4, date4);
        getWeathercodeChange5(weathercode5, weathertempmax5, weathertempmin5, before_weathertempmax5, before_weathertempmin5, date5);
        getWeathercodeChange6(weathercode6, weathertempmax6, weathertempmin6, before_weathertempmax6, before_weathertempmin6, date6);
        getWeathercodeChange7(weathercode7, weathertempmax7, weathertempmin7, before_weathertempmax7, before_weathertempmin7, date7);

    })
    .catch(error => {
        console.error(error);
    });
}


//weather1[today]
function getWeathercodeChange1(weathercode, weathertempmax, weathertempmin, before_weathertempmax, before_weathertempmin, weatherpercent_06, weatherpercent_612, weatherpercent_1218,weatherpercent_1824) {

    //最高最低気温
    weatherTempMax1.innerText = weathertempmax;
    weatherTempMin1.innerText = weathertempmin;

    //時間ごとの降水確率
    weatherPercent1_06.innerText = weatherpercent_06 + "%";
    weatherPercent1_612.innerText = weatherpercent_612 + "%";
    weatherPercent1_1218.innerText = weatherpercent_1218 + "%";
    weatherPercent1_1824.innerText = weatherpercent_1824 + "%";

    //前日との気温差
    let weathertempmax_before_pn = Math.floor(before_weathertempmax * 10) / 10;
    let weathertempmin_before_pn = Math.floor(before_weathertempmin * 10) / 10;


    if (weathertempmax_before_pn >= 0) {
        weathertempmax_before_pn = "+" + weathertempmax_before_pn;
    } 

    if (weathertempmin_before_pn >= 0) {
        weathertempmin_before_pn = "+" + weathertempmin_before_pn;
    } 

    weatherTempMax1_before.innerText = "[" + weathertempmax_before_pn + "]";
    weatherTempMin1_before.innerText = "[" + weathertempmin_before_pn + "]";


    //weathercodeの変換
    if (weathercode === 0) {
        weatherTitle1.innerText = "快晴";
        weatherImg1.src = "./static/img/100.svg";
    } else if (weathercode === 1) {
        weatherTitle1.innerText = "晴れ";
        weatherImg1.src = "./static/img/100.svg";
    } else if (weathercode === 2) {
        weatherTitle1.innerText = "一部曇";
        weatherImg1.src = "./static/img/101.svg";
    } else if (weathercode === 3) {
        weatherTitle1.innerText = "曇り";
        weatherImg1.src = "./static/img/200.svg";
    } else if (weathercode <= 49) {
        weatherTitle1.innerText = "霧";
        weatherImg1.src = "./static/img/200.svg";
    } else if (weathercode <= 59) {
        weatherTitle1.innerText = "霧雨";
        weatherImg1.src = "./static/img/202.svg";
    } else if (weathercode <= 69) {
        weatherTitle1.innerText = "雨";
        weatherImg1.src = "./static/img/300.svg";
    } else if (weathercode <= 79) {
        weatherTitle1.innerText = "雪";
        weatherImg1.src = "./static/img/400.svg";
    } else if (weathercode <= 84) {
        weatherTitle1.innerText = "俄か雨";
        weatherImg1.src = "./static/img/302.svg";
    } else if (weathercode <= 94) {
        weatherTitle1.innerText = "雪・雹";
        weatherImg1.src = "./static/img/400.svg";
    } else if (weathercode <= 99) {
        weatherTitle1.innerText = "雷雨";
        weatherImg1.src = "./static/img/300.svg";
    } else {
        weatherTitle1.innerText = "エラー";
        weatherImg1.src = "./static/img/100.svg";
    }
}


//weather2[tommmorow]
function getWeathercodeChange2(weathercode, weathertempmax, weathertempmin, before_weathertempmax, before_weathertempmin, weatherpercent_06, weatherpercent_612, weatherpercent_1218,weatherpercent_1824) {
    
    //最高最低気温
    weatherTempMax2.innerText = weathertempmax;
    weatherTempMin2.innerText = weathertempmin;

    //時間ごとの降水確率
    weatherPercent2_06.innerText = weatherpercent_06 + "%";
    weatherPercent2_612.innerText = weatherpercent_612 + "%";
    weatherPercent2_1218.innerText = weatherpercent_1218 + "%";
    weatherPercent2_1824.innerText = weatherpercent_1824 + "%";

    //前日との気温差
    let weathertempmax_before_pn = Math.floor(before_weathertempmax * 10) / 10;
    let weathertempmin_before_pn = Math.floor(before_weathertempmin * 10) / 10;

    if (weathertempmax_before_pn >= 0) {
        weathertempmax_before_pn = "+" + weathertempmax_before_pn;
    } 

    if (weathertempmin_before_pn >= 0) {
        weathertempmin_before_pn = "+" + weathertempmin_before_pn;
    } 


    weatherTempMax2_before.innerText = "[" + weathertempmax_before_pn + "]";
    weatherTempMin2_before.innerText = "[" + weathertempmin_before_pn + "]";


    //weathercodeの変換
    if (weathercode === 0) {
        weatherTitle2.innerText = "快晴";
        weatherImg2.src = "./static/img/100.svg";
    } else if (weathercode === 1) {
        weatherTitle2.innerText = "晴れ";
        weatherImg2.src = "./static/img/100.svg";
    } else if (weathercode === 2) {
        weatherTitle2.innerText = "一部曇";
        weatherImg2.src = "./static/img/101.svg";
    } else if (weathercode === 3) {
        weatherTitle2.innerText = "曇り";
        weatherImg2.src = "./static/img/200.svg";
    } else if (weathercode <= 49) {
        weatherTitle2.innerText = "霧";
        weatherImg2.src = "./static/img/200.svg";
    } else if (weathercode <= 59) {
        weatherTitle2.innerText = "霧雨";
        weatherImg2.src = "./static/img/202.svg";
    } else if (weathercode <= 69) {
        weatherTitle2.innerText = "雨";
        weatherImg2.src = "./static/img/300.svg";
    } else if (weathercode <= 79) {
        weatherTitle2.innerText = "雪";
        weatherImg2.src = "./static/img/400.svg";
    } else if (weathercode <= 84) {
        weatherTitle2.innerText = "俄か雨";
        weatherImg2.src = "./static/img/302.svg";
    } else if (weathercode <= 94) {
        weatherTitle2.innerText = "雪・雹";
        weatherImg2.src = "./static/img/400.svg";
    } else if (weathercode <= 99) {
        weatherTitle2.innerText = "雷雨";
        weatherImg2.src = "./static/img/300.svg";
    } else {
        weatherTitle2.innerText = "エラー";
        weatherImg2.src = "./static/img/100.svg";
    }

}



//weather3
function getWeathercodeChange3(weathercode, weathertempmax, weathertempmin, before_weathertempmax, before_weathertempmin, date) {
    //日付
    date3.innerText = date;

    //最高最低気温
    weatherTempMax3.innerText = weathertempmax;
    weatherTempMin3.innerText = weathertempmin;

    //前日との気温差
    let weathertempmax_before_pn = Math.floor(before_weathertempmax * 10) / 10;
    let weathertempmin_before_pn = Math.floor(before_weathertempmin * 10) / 10;

    if (weathertempmax_before_pn >= 0) {
        weathertempmax_before_pn = "+" + weathertempmax_before_pn;
    } 

    if (weathertempmin_before_pn >= 0) {
        weathertempmin_before_pn = "+" + weathertempmin_before_pn;
    } 


    weatherTempMax3_before.innerText = "[" + weathertempmax_before_pn + "]";
    weatherTempMin3_before.innerText = "[" + weathertempmin_before_pn + "]";


    //weathercodeの変換
    if (weathercode === 0) {
        weatherTitle3.innerText = "快晴";
        weatherImg3.src = "./static/img/100.svg";
    } else if (weathercode === 1) {
        weatherTitle3.innerText = "晴れ";
        weatherImg3.src = "./static/img/100.svg";
    } else if (weathercode === 2) {
        weatherTitle3.innerText = "一部曇";
        weatherImg3.src = "./static/img/101.svg";
    } else if (weathercode === 3) {
        weatherTitle3.innerText = "曇り";
        weatherImg3.src = "./static/img/200.svg";
    } else if (weathercode <= 49) {
        weatherTitle3.innerText = "霧";
        weatherImg3.src = "./static/img/200.svg";
    } else if (weathercode <= 59) {
        weatherTitle3.innerText = "霧雨";
        weatherImg3.src = "./static/img/202.svg";
    } else if (weathercode <= 69) {
        weatherTitle3.innerText = "雨";
        weatherImg3.src = "./static/img/300.svg";
    } else if (weathercode <= 79) {
        weatherTitle3.innerText = "雪";
        weatherImg3.src = "./static/img/400.svg";
    } else if (weathercode <= 84) {
        weatherTitle3.innerText = "俄か雨";
        weatherImg3.src = "./static/img/302.svg";
    } else if (weathercode <= 94) {
        weatherTitle3.innerText = "雪・雹";
        weatherImg3.src = "./static/img/400.svg";
    } else if (weathercode <= 99) {
        weatherTitle3.innerText = "雷雨";
        weatherImg3.src = "./static/img/300.svg";
    } else {
        weatherTitle3.innerText = "エラー";
        weatherImg3.src = "./static/img/100.svg";
    }
}


//weather4
function getWeathercodeChange4(weathercode, weathertempmax, weathertempmin, before_weathertempmax, before_weathertempmin, date) {
    
    //日付
    date4.innerText = date;

    //最高最低気温
    weatherTempMax4.innerText = weathertempmax;
    weatherTempMin4.innerText = weathertempmin;

    //前日との気温差
    let weathertempmax_before_pn = Math.floor(before_weathertempmax * 10) / 10;
    let weathertempmin_before_pn = Math.floor(before_weathertempmin * 10) / 10;

    if (weathertempmax_before_pn >= 0) {
        weathertempmax_before_pn = "+" + weathertempmax_before_pn;
    } 

    if (weathertempmin_before_pn >= 0) {
        weathertempmin_before_pn = "+" + weathertempmin_before_pn;
    } 


    weatherTempMax4_before.innerText = "[" + weathertempmax_before_pn + "]";
    weatherTempMin4_before.innerText = "[" + weathertempmin_before_pn + "]";


    //weathercodeの変換
    if (weathercode === 0) {
        weatherTitle4.innerText = "快晴";
        weatherImg4.src = "./static/img/100.svg";
    } else if (weathercode === 1) {
        weatherTitle4.innerText = "晴れ";
        weatherImg4.src = "./static/img/100.svg";
    } else if (weathercode === 2) {
        weatherTitle4.innerText = "一部曇";
        weatherImg4.src = "./static/img/101.svg";
    } else if (weathercode === 3) {
        weatherTitle4.innerText = "曇り";
        weatherImg4.src = "./static/img/200.svg";
    } else if (weathercode <= 49) {
        weatherTitle4.innerText = "霧";
        weatherImg4.src = "./static/img/200.svg";
    } else if (weathercode <= 59) {
        weatherTitle4.innerText = "霧雨";
        weatherImg4.src = "./static/img/202.svg";
    } else if (weathercode <= 69) {
        weatherTitle4.innerText = "雨";
        weatherImg4.src = "./static/img/300.svg";
    } else if (weathercode <= 79) {
        weatherTitle4.innerText = "雪";
        weatherImg4.src = "./static/img/400.svg";
    } else if (weathercode <= 84) {
        weatherTitle4.innerText = "俄か雨";
        weatherImg4.src = "./static/img/302.svg";
    } else if (weathercode <= 94) {
        weatherTitle4.innerText = "雪・雹";
        weatherImg4.src = "./static/img/400.svg";
    } else if (weathercode <= 99) {
        weatherTitle4.innerText = "雷雨";
        weatherImg4.src = "./static/img/300.svg";
    } else {
        weatherTitle4.innerText = "エラー";
        weatherImg4.src = "./static/img/100.svg";
    }
}


//weather5
function getWeathercodeChange5(weathercode, weathertempmax, weathertempmin, before_weathertempmax, before_weathertempmin, date) {

    //日付
    date5.innerText = date;

    //最高最低気温
    weatherTempMax5.innerText = weathertempmax;
    weatherTempMin5.innerText = weathertempmin;

    //前日との気温差
    let weathertempmax_before_pn = Math.floor(before_weathertempmax * 10) / 10;
    let weathertempmin_before_pn = Math.floor(before_weathertempmin * 10) / 10;

    if (weathertempmax_before_pn >= 0) {
        weathertempmax_before_pn = "+" + weathertempmax_before_pn;
    } 

    if (weathertempmin_before_pn >= 0) {
        weathertempmin_before_pn = "+" + weathertempmin_before_pn;
    } 


    weatherTempMax5_before.innerText = "[" + weathertempmax_before_pn + "]";
    weatherTempMin5_before.innerText = "[" + weathertempmin_before_pn + "]";


    //weathercodeの変換
    if (weathercode === 0) {
        weatherTitle5.innerText = "快晴";
        weatherImg5.src = "./static/img/100.svg";
    } else if (weathercode === 1) {
        weatherTitle5.innerText = "晴れ";
        weatherImg5.src = "./static/img/100.svg";
    } else if (weathercode === 2) {
        weatherTitle5.innerText = "一部曇";
        weatherImg5.src = "./static/img/101.svg";
    } else if (weathercode === 3) {
        weatherTitle5.innerText = "曇り";
        weatherImg5.src = "./static/img/200.svg";
    } else if (weathercode <= 49) {
        weatherTitle5.innerText = "霧";
        weatherImg5.src = "./static/img/200.svg";
    } else if (weathercode <= 59) {
        weatherTitle5.innerText = "霧雨";
        weatherImg5.src = "./static/img/202.svg";
    } else if (weathercode <= 69) {
        weatherTitle5.innerText = "雨";
        weatherImg5.src = "./static/img/300.svg";
    } else if (weathercode <= 79) {
        weatherTitle5.innerText = "雪";
        weatherImg5.src = "./static/img/400.svg";
    } else if (weathercode <= 84) {
        weatherTitle5.innerText = "俄か雨";
        weatherImg5.src = "./static/img/302.svg";
    } else if (weathercode <= 94) {
        weatherTitle5.innerText = "雪・雹";
        weatherImg5.src = "./static/img/400.svg";
    } else if (weathercode <= 99) {
        weatherTitle5.innerText = "雷雨";
        weatherImg5.src = "./static/img/300.svg";
    } else {
        weatherTitle5.innerText = "エラー";
        weatherImg5.src = "./static/img/100.svg";
    }
}


//weather6
function getWeathercodeChange6(weathercode, weathertempmax, weathertempmin, before_weathertempmax, before_weathertempmin, date) {

    //日付
    date6.innerText = date;    

    //最高最低気温
    weatherTempMax6.innerText = weathertempmax;
    weatherTempMin6.innerText = weathertempmin;

    //前日との気温差
    let weathertempmax_before_pn = Math.floor(before_weathertempmax * 10) / 10;
    let weathertempmin_before_pn = Math.floor(before_weathertempmin * 10) / 10;

    if (weathertempmax_before_pn >= 0) {
        weathertempmax_before_pn = "+" + weathertempmax_before_pn;
    } 

    if (weathertempmin_before_pn >= 0) {
        weathertempmin_before_pn = "+" + weathertempmin_before_pn;
    } 


    weatherTempMax6_before.innerText = "[" + weathertempmax_before_pn + "]";
    weatherTempMin6_before.innerText = "[" + weathertempmin_before_pn + "]";


    //weathercodeの変換
    if (weathercode === 0) {
        weatherTitle6.innerText = "快晴";
        weatherImg6.src = "./static/img/100.svg";
    } else if (weathercode === 1) {
        weatherTitle6.innerText = "晴れ";
        weatherImg6.src = "./static/img/100.svg";
    } else if (weathercode === 2) {
        weatherTitle6.innerText = "一部曇";
        weatherImg6.src = "./static/img/101.svg";
    } else if (weathercode === 3) {
        weatherTitle6.innerText = "曇り";
        weatherImg6.src = "./static/img/200.svg";
    } else if (weathercode <= 49) {
        weatherTitle6.innerText = "霧";
        weatherImg6.src = "./static/img/200.svg";
    } else if (weathercode <= 59) {
        weatherTitle6.innerText = "霧雨";
        weatherImg6.src = "./static/img/202.svg";
    } else if (weathercode <= 69) {
        weatherTitle6.innerText = "雨";
        weatherImg6.src = "./static/img/300.svg";
    } else if (weathercode <= 79) {
        weatherTitle6.innerText = "雪";
        weatherImg6.src = "./static/img/400.svg";
    } else if (weathercode <= 84) {
        weatherTitle6.innerText = "俄か雨";
        weatherImg6.src = "./static/img/302.svg";
    } else if (weathercode <= 94) {
        weatherTitle6.innerText = "雪・雹";
        weatherImg6.src = "./static/img/400.svg";
    } else if (weathercode <= 99) {
        weatherTitle6.innerText = "雷雨";
        weatherImg6.src = "./static/img/300.svg";
    } else {
        weatherTitle6.innerText = "エラー";
        weatherImg6.src = "./static/img/100.svg";
    }
}



//weather7
function getWeathercodeChange7(weathercode, weathertempmax, weathertempmin, before_weathertempmax, before_weathertempmin, date) {
    
    //日付
    date7.innerText = date;

    //最高最低気温
    weatherTempMax7.innerText = weathertempmax;
    weatherTempMin7.innerText = weathertempmin;

    //前日との気温差
    let weathertempmax_before_pn = Math.floor(before_weathertempmax * 10) / 10;
    let weathertempmin_before_pn = Math.floor(before_weathertempmin * 10) / 10;

    if (weathertempmax_before_pn >= 0) {
        weathertempmax_before_pn = "+" + weathertempmax_before_pn;
    } 

    if (weathertempmin_before_pn >= 0) {
        weathertempmin_before_pn = "+" + weathertempmin_before_pn;
    } 


    weatherTempMax7_before.innerText = "[" + weathertempmax_before_pn + "]";
    weatherTempMin7_before.innerText = "[" + weathertempmin_before_pn + "]";


    //weathercodeの変換
    if (weathercode === 0) {
        weatherTitle7.innerText = "快晴";
        weatherImg7.src = "./static/img/100.svg";
    } else if (weathercode === 1) {
        weatherTitle7.innerText = "晴れ";
        weatherImg7.src = "./static/img/100.svg";
    } else if (weathercode === 2) {
        weatherTitle7.innerText = "一部曇";
        weatherImg7.src = "./static/img/101.svg";
    } else if (weathercode === 3) {
        weatherTitle7.innerText = "曇り";
        weatherImg7.src = "./static/img/200.svg";
    } else if (weathercode <= 49) {
        weatherTitle7.innerText = "霧";
        weatherImg7.src = "./static/img/200.svg";
    } else if (weathercode <= 59) {
        weatherTitle7.innerText = "霧雨";
        weatherImg7.src = "./static/img/202.svg";
    } else if (weathercode <= 69) {
        weatherTitle7.innerText = "雨";
        weatherImg7.src = "./static/img/300.svg";
    } else if (weathercode <= 79) {
        weatherTitle7.innerText = "雪";
        weatherImg7.src = "./static/img/400.svg";
    } else if (weathercode <= 84) {
        weatherTitle7.innerText = "俄か雨";
        weatherImg7.src = "./static/img/302.svg";
    } else if (weathercode <= 94) {
        weatherTitle7.innerText = "雪・雹";
        weatherImg7.src = "./static/img/400.svg";
    } else if (weathercode <= 99) {
        weatherTitle7.innerText = "雷雨";
        weatherImg7.src = "./static/img/300.svg";
    } else {
        weatherTitle7.innerText = "エラー";
        weatherImg7.src = "./static/img/100.svg";
    }
}