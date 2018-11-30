// Dom7
var $$ = Dom7;

// Theme
// var theme = 'auto';
// if (document.location.search.indexOf('theme=') >= 0) {
//     theme = document.location.search.split('theme=')[1].split('&')[0];
// }

// Init App
var app = new Framework7({
    id: 'io.framework7.testapp',
    root: '#app',
    theme: 'auto',
    routes: routes,
    on: {
        init: function () {
            console.log('App initialized');

        },
        pageInit: function () {
            console.log('Page initialized');

        },
        popupOpen: function (popup) {
            // do something on popup open
            console.log('Popup Open');
            console.log(popup);
        }
    }
});

var mainView = app.views.create('.view-main');

/*右侧面板开启事件*/
app.on('panelOpen', function (panel) {
    console.log('Panel ' + panel.side + ' opened');
});

$$(document).on('app:init', function (e) {
    console.log('app:init');
});
$$(document).on('page:init', function (e, page) {
    console.log(page);
});

$$(document).on('page:mounted', function (e) {
    console.log('page:mounted:Event will be triggered when new page just inserted to DOM');
});
$$(document).on('page:init', function (e) {
    console.log('page:init:Event will be triggered after Framework7 initialize required page\'s components and navbar');
});
$$(document).on('page:reinit', function (e, page) {
    console.log('page:reinit:This event will be triggered in case of navigating to the page that was already initialized.');
    console.log(page);
});
$$(document).on('page:beforein', function (e) {
    console.log('page:beforein:Event will be triggered when everything initialized and page is ready to be transitioned into view (into active/current position)');
});
$$(document).on('page:afterin', function (e) {
    console.log('page:afterin:Event will be triggered after page transitioned into view');
});
$$(document).on('page:beforeout', function (e) {
    console.log('page:beforeout:Event will be triggered right before page is going to be transitioned out of view');
});
$$(document).on('page:afterout', function (e) {
    console.log('page:afterout:Event will be triggered after page transitioned out of view');
});
$$(document).on('page:beforeremove', function (e) {
    console.log('page:beforeremove:Event will be triggered right before Page will be removed from DOM');
});

$$(document).on('swipeback:move', function (e) {
    console.log('swipeback:move:Event will be triggered during swipe back move');
});


$$('#approval').on('click', function () {
    // Alert username and password
    app.dialog.alert('click approval');
    // mainView.router.load('/404/')
    mainView.router.back();
});


var panelArray = [{
    cid: 'CER2018-0513',
    state: 'Pending for FINCON',
    totalAmount: '$2,500,001',
    unbudgete: null,
    applicant: 'HELEN TONG',
    revenveMode: 'Acquisiton'
}, {
    cid: 'CER2018-0063',
    state: 'Initial Checking',
    totalAmount: '$250,001',
    unbudgete: null,
    applicant: 'HELEN TONG',
    revenveMode: null
}, {
    cid: 'CER2018-0475',
    state: 'Initial Checking',
    totalAmount: '$2,500,000',
    unbudgete: null,
    applicant: 'CHRISTINE S YAO',
    revenveMode: 'Acquisiton'
}, {
    cid: 'CER2018-0458',
    state: 'Initial Checking',
    totalAmount: '$50,000,001',
    unbudgete: '$50,000,002',
    applicant: 'HELEN TONG',
    revenveMode: 'Acquisiton'
}];

var infoArray = [{
    id: 'CER2018-0513',
    basicInfo: {
        applicant: 'GLADYS CHIU',
        assetType: 'OLL warehouses, depots, trucks & others',
        companyName: 'Gold Talent Business Consulting (Shanghai)...',
        description: 'Subject: ${FORM_TYPE} Form Number...'
    },
    haveBudgeted: {
        totalLeaseCommitment: '--',
        previousApplications: '--',
        application: '$123,456,789',
        budgetVariance: '--',
    },
    supportingDocument: [{
        fileId: '1',
        fileName: 'A4_CER1101.DOC',
        fileDescription: 'A4 CER1101'
    }, {
        fileId: '2',
        fileName: 'A4_CER1101.DOC',
        fileDescription: 'A4 OLD1101'
    }]
}];

/*todo页数据绑定*/
console.log('todo页数据绑定');
function AppViewModel() {
    var self = this;
    self.panelArray = ko.observableArray(panelArray);
    /*卡片点击事件跳转info*/
    self.getInfo = function(card) {
        console.log(card);
        // mainView.router.loadPage('/info/');
        app.router.navigate('/info/' + card.cid);
    }
}
var todoViewModule = new AppViewModel();
ko.applyBindings(todoViewModule, document.getElementById('todoPage'));

function randomId(){
    let id = 'CER2018-0';
    for(let i = 0; i < 3; i++){
        id += (parseInt(Math.random()*9,10)+1);
    }
    return id;
}

/* 下拉刷新事件 Pull to refresh content*/
let $ptrContent = $$('.ptr-content');
// Add 'refresh' listener on it
$ptrContent.on('ptr:refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
        let test = {
            cid: 'CER2018-0001',
            state: 'Initial Checking',
            totalAmount: '$7,500,000',
            unbudgete: null,
            applicant: 'JONATHAN JOSDA',
            revenveMode: 'Acquisiton'
        };
        // Prepend new list element
        // app.dialog.alert('Pull to refresh content');
        test.cid = randomId();
        todoViewModule.panelArray.splice(0,0,test);
        //$ptrContent.find('#cardContainer').prepend(newCard);
        // When loading done, we need to reset it
        app.ptr.done(); // or e.detail();
    }, 2000);
});