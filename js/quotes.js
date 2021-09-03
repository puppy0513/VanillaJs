const quotes =[
    {
        quote: "강한자가 살아나는 것이 아니라 살아남은 사람이 강한것이다. ",
        author: "김유신",
    },
    {
        quote: "The way to get started is to quit talking and begin doing ",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happen when you're busy making other plan",
        author: "John Lennon",
    },
    {
        quote: "내가 남을 알지 못하는 것이 죄일 뿐 남이 나를 알아주지 않는 게 무슨 죄란 말인가?",
        author: "장영실",
    },
    {
        quote: "배우는 사람은 모름지기 심신을 수련해야한다. ",
        author: "퇴계 이황",
    },
    {
        quote: "뜻이 서지 않으면 만사가 성공하지 않는다. 먼저 반듯이 뜻을 세워야 한다. ",
        author: "율곡 이이",
    },
    {
        quote: "말은 망령되게 하지 말아야한다. 기품을 지키되 사치하지 말고, 지성을 갖추되 자랑하지 말라. ",
        author: "심사임당",
    },
    {
        quote: "내가 남을 알지 못하는 것이 죄일 뿐 남이 나를 알아주지 않는 게 무슨 죄란 말인가?",
        author: "장영실",
    },
    {
        quote: "모든일에 있어서 시간이 없을까 걱정하지 말고, 다만 내가 마음을 다바쳐 최선을 다할 수 있을지를 걱정하라.",
        author: "정조대왕",
    },
    {
        quote: "죽고자 하면 살고, 살고자 하면 죽을 것이다. ",
        author: "이순신",
    }
];

const quote1 = document.querySelector("#quotes span:first-child");                   // quotes의 첫번째 span 선택
const author1 = document.querySelector("#quotes span:last-child");                   // quotes의 두번째 span 선택

const todayQuote =quotes[Math.floor(Math.random() * quotes.length)];                // 배열의 길이만큼 버림으로 랜덤 숫자 생성.

quote1.innerText = todayQuote.quote;
author1.innerText = todayQuote.author;