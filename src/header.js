document.documentElement.style.visibility = 'hidden';

window.onload = () => {
    let mypage = document.createElement('span');
    mypage.classList.add('mynavi-button-a');
    mypage.innerHTML = 'マイページ';

    let mynaviButtonHome = document.getElementsByClassName("mynavi-button-home")[0];
    mynaviButtonHome.setAttribute('onclick', "window.location.href = 'home';")
    mynaviButtonHome.innerHTML = '';
    mynaviButtonHome.appendChild(mypage);

    let course = document.createElement('span');
    course.classList.add('mynavi-button-a');
    course.innerHTML = 'コース';

    let mynaviButtonCourse = document.getElementsByClassName("mynavi-button-course")[0];
    mynaviButtonCourse.setAttribute('onclick', "window.location.href = 'home_course';")
    mynaviButtonCourse.innerHTML = '';
    mynaviButtonCourse.appendChild(course);

    let portfolio = document.createElement('span');
    portfolio.classList.add('mynavi-button-a');
    portfolio.innerHTML = 'ポートフォリオ';

    let mynaviButtonPortfolio = document.getElementsByClassName("mynavi-button-portfolio")[0];
    mynaviButtonPortfolio.setAttribute('onclick', "window.location.href = 'home_coursetable';")
    mynaviButtonPortfolio.innerHTML = '';
    mynaviButtonPortfolio.appendChild(portfolio);

    let unsubmitted = document.createElement('span');
    unsubmitted.classList.add('mynavi-button-a');
    unsubmitted.innerHTML = '未提出課題';

    let div1 = document.createElement('div');
    div1.classList.add('mynavi-button-home');
    div1.setAttribute('onclick', "window.location.href = 'home_library_query';")
    div1.appendChild(unsubmitted);

    let reminder = document.createElement('span');
    reminder.classList.add('mynavi-button-a');
    reminder.innerHTML = 'リマインダ';

    let div2 = document.createElement('div');
    div2.classList.add('mynavi-button-home');
    div2.setAttribute('onclick', "window.location.href = 'home_library_reminder';")
    div2.appendChild(reminder);

    let mynavi = document.getElementById("mynavi");
    mynavi.innerHTML += '';
    mynavi.appendChild(div1);
    mynavi.appendChild(div2);

    let english = document.createElement('span');
    english.classList.add('mynavi-button-a');
    english.innerHTML = 'English';

    let japanese = document.createElement('span');
    japanese.classList.add('mynavi-button-a');
    japanese.innerHTML = '日本語';

    if (document.getElementsByClassName("mylang-ja")[0]) {
        let mylangJa = document.getElementsByClassName("mylang-ja")[0];
        mylangJa.innerHTML = '';
        mylangJa.setAttribute('onclick', "window.location.href = 'home_lang_en';")
        mylangJa.appendChild(english);
    } else {
        let mylangEn = document.getElementsByClassName("mylang-en")[0];
        mylangEn.innerHTML = '';
        mylangEn.setAttribute('onclick', "window.location.href = 'home_lang_ja';")
        mylangEn.appendChild(japanese);
    }


    let memo = document.createElement('span');
    memo.classList.add('mynavi-button-a');
    memo.innerHTML = 'メモ一覧';

    let memoDiv = document.createElement('div');
    memoDiv.classList.add('memo-div');
    memoDiv.setAttribute('onclick', "window.location.href = 'home_usermemo';")
    memoDiv.appendChild(memo);

    let respon = document.createElement('img');
    respon.classList.add('mynavi-button-a');
    respon.setAttribute('src', '/respon8.png');
    respon.setAttribute('target', '_blank');

    let responDiv = document.createElement('div');
    responDiv.classList.add('respon-div');
    responDiv.setAttribute('onclick', "window.location.href = 'https://atmnb.tsukuba.ac.jp/attend/tsukuba?relogin=1';")
    responDiv.appendChild(respon);

    let mybuttonMenu = document.getElementById('mybutton-menu');
    mybuttonMenu.innerHTML = '';
    mybuttonMenu.appendChild(responDiv);
    mybuttonMenu.appendChild(memoDiv);

    document.getElementsByClassName("align")[0].remove();

    document.documentElement.style.visibility = '';

    if (document.getElementsByClassName("pageheader-course").length) {
        document.getElementsByClassName("pageheader-course")[0].remove();
    }

    document.getElementById("mylinks");
}