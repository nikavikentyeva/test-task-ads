import '../scss/app.scss';
// core version + navigation, pagination modules:
import Swiper, {Navigation, Pagination} from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);


// Toggle menu

const menuBurger = document.querySelector(".header__burger");
const nav = document.querySelector(".menu");
const body = document.querySelector("body");
if (menuBurger) {
    menuBurger.addEventListener("click", function (e) {
        menuBurger.classList.toggle("active");
        nav.classList.toggle("active");
        body.classList.toggle("lock");
    });
}


const tabsBtn = document.querySelectorAll(".tabs__content");
const tabsItems = document.querySelectorAll(".data__item");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function (item) {
            item.classList.remove("active");
        });

        tabsItems.forEach(function (item) {
            item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");

    });
});
document.querySelector(".tabs__content").click();


const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [1, 2, 3, 4],
                cutout: '85%',
                backgroundColor: [
                    'rgb(255, 76, 97)',
                    'rgb(111, 82, 237)',
                    'rgb(255, 184, 0)',
                    'rgb(51, 214, 159)',
                ],
            }

        ]
    },

    options: {
        responsive: false,
        elements: {
            arc: {
                borderWidth: 0,
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            }
        }
    },
});

const ctx2 = document.getElementById('chart2').getContext('2d');

const getGradient = (ctx, chartArea, start_color, stop_color) => {
    let width, height, gradient;
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, stop_color);
        gradient.addColorStop(1, start_color);
    }
    return gradient;
}
let gradient1 = function (context) {
    const chart = context.chart;
    const {
        ctx,
        chartArea
    } = chart;
    if (!chartArea) {
        return null;
    }
    return getGradient(ctx, chartArea, "rgba(78, 34, 185, 0.8)", "rgba(44, 3, 217, 0.5)");
}

let gradient2 = function (context) {
    const chart = context.chart;
    const {
        ctx,
        chartArea
    } = chart;
    if (!chartArea) {
        return null;
    }
    return getGradient(ctx, chartArea, "rgba(0, 139, 242, 0.8)", "rgba(0, 139, 242, 0.5)");
}

let myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["Jun", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                // label: 'Filled',
                lineTension: 0.6,
                fill: true,
                backgroundColor: gradient1,
                cubicInterpolationMode: 'monotone',
                data: [100, 120, 50, 70, 90, 80, 20],
            }, {
                // label: 'Filled',
                lineTension: 0.6,
                backgroundColor: gradient2,
                cubicInterpolationMode: 'monotone',
                data: [10, 40, 110, 100, 120, 160, 170],
                fill: true,
            }
        ]

    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: 'Chart.js Line Chart'
            },
            legend: {
                display: false,
            },
        },
        interaction: {
            mode: 'index',
            intersect: false
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: false,
                    text: 'Month'
                }
            },
            y: {
                display: true,
                beginAtZero: true,
                title: {
                    display: false,
                    text: 'Value'
                }
            }
        }
    },
});


const ctx3 = document.getElementById('chart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
            {
                label: 'Dataset 1',
                cutout: '70%',
                data: [1, 2, 3, 4],
                backgroundColor: [
                    '#2AC5A9',
                    '#FF4B4B',
                    '#2C03D9',
                ],
            }
        ]
    },
    options: {
        responsive: false,
        elements: {
            arc: {
                borderWidth: 0,
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            }
        }
    },
});

const ctx4 = document.getElementById('chart4').getContext('2d');
const myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ["Jun", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
                barPercentage: 0.5,
                barThickness: 15,
                maxBarThickness: 8,
                minBarLength: 2,
                label: 'Dataset 1',
                data: [20, 15, 25, 10, 15, 10, 20],
                backgroundColor: [
                    '#6F52ED',
                ],
            }, {
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
                barPercentage: 0.5,
                barThickness: 15,
                maxBarThickness: 8,
                minBarLength: 2,
                label: 'Dataset 1',
                data: [17, 8, 12, 7, 6, 5, 15],
                backgroundColor: [
                    '#FF7A00',
                ],
            }

        ]
    },

    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        options: {
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    beginAtZero: true,
                    stacked: true
                }
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            }
        }
    },
});

