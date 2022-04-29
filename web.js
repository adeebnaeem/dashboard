// Revenue chart start from here

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// Revenue chart end here
// total sales chart start from here
const newChart1 = document.getElementById('newChart').getContext('2d');
const newChart = new Chart(newChart1, {
    type: 'doughnut',
    data: {

        datasets: [{
            data: [12, 19, 3],
            backgroundColor: [
                ' rgb(255, 123, 0)',
                ' rgb(0, 209, 246)',
                'rgb(255, 0, 98)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',

            ],
            borderWidth: 2
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
//
// total sales chart start from here
//
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June', 'January',
    'February',
    'March',
    'April',
    'May',
    'June'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Applications',
        backgroundColor: '#64c5b1',
        pointBackgroundColor: '#00c7d6',
        borderWidth: 1,
        borderColor: '#045398',
        pointHoverRadius: 5,
        pointBorderColor: '#fff',
        data: [100, 18, 80, 10, 105, 55, 100, 8, 10, 90, 85, 5]
    }]
};

const option = {
    plugins: {
        legend: {
            display: false
        }
    },
    responsve: true,
    maintainAspectRatio: true,
    animation: {
        easing: 'easeInOut',
        duration: 520
    },
    point: {
        backgroundColor: '#00c7d6'
    },
}

const config = {
    type: 'radar',
    lineWidth: 5,
    data: data,
    options: option
};
const chart = new Chart(
    document.getElementById('chart'),
    config
);
//

//    sidebar js start from here
let sidebar1 = document.querySelector(".sidebar1")
let sidebar2 = document.querySelector(".sidebar2")
let sidebar = document.querySelector(".sidebar")
let containerbdash = document.querySelector(".containerbdash")
let containerbdash1 = document.querySelector(".containerbdash1")
let mainheader1 = document.querySelector(".mainheader1")
let mainheader = document.querySelector(".mainheader")
let containerfluidleft = document.querySelector(".containerfluidleft")



let a = true

function rightsider() {
    if (a == true) {
        sidebar.classList.add("sidebar2");
        containerbdash.classList.add("containerfluidleft");

        a = false;
    } else {
        sidebar.classList.remove("sidebar2");
        containerbdash.classList.remove("containerfluidleft");
        a = true;
    }
}
let x = true;

function leftbar() {

    if (x == true) {
        sidebar.classList.remove("sidebar2");
        sidebar.classList.add("sidebar1");
        containerbdash.classList.remove("containerfluidleft");
        containerbdash.classList.add("containerbdash1")
        mainheader.classList.add("mainheader1")
        x = false;
    } else {
        sidebar.classList.remove("sidebar1");

        x = true;
    }


}
//    sidebar js end here

// cards section js start from here

let chat_section1 = document.querySelector(".chat_section")
let cards_section1 = document.querySelector(".cards_section")
let maindashboard_section1 = document.querySelector(".maindashboard_section")
let d_none = document.querySelector(".d_none")
let d_block = document.querySelector(".d_block")

let y = true

function dasboardsec() {

    if (y == true) {
        maindashboard_section1.classList.add("d_block");
        chat_section1.classList.remove("d_block");
        cards_section1.classList.remove("d_block");
        chat_section1.classList.add("d_none");
        cards_section1.classList.add("d_none");
        y = false;
    } else {
        maindashboard_section1.classList.add("d_block");
        chat_section1.classList.remove("d_block");
        cards_section1.classList.remove("d_block");
        y = true;
    }
}
let k = true

function chatsec() {

    if (k == true) {
        maindashboard_section1.classList.add("d_none");
        cards_section1.classList.remove("d_block");
        chat_section1.classList.add("d_block");
        k = false;
    } else {;
        cards_section1.classList.add("d_none");
        maindashboard_section1.classList.remove("d_block");
        maindashboard_section1.classList.add("d_none");
        chat_section1.classList.add("d_block");
        k = true;
    }
}
let l = true

function cardsec() {

    if (l == true) {
        chat_section1.classList.remove("d_block");
        maindashboard_section1.classList.add("d_none");
        cards_section1.classList.add("d_block");
        l = false;
    } else {;
        chat_section1.classList.add("d_none");
        cards_section1.classList.remove("d_none");
        maindashboard_section1.classList.remove("d_block");
        cards_section1.classList.add("d_block");

        l = true;
    }
}




// cards section js end here