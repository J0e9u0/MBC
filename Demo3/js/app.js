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

        }
    }
});

var mainView = app.views.create('.view-main');


$$(document).on('app:init', function (e) {
    console.log('app:init');
});
$$(document).on('page:init', function (e, page) {
    // console.log(page);
});

$$(document).on('page:mounted', function (e) {
    console.log('page:mounted:Event will be triggered when new page just inserted to DOM');
});
$$(document).on('page:init', function (e) {
    console.log('page:init:Event will be triggered after Framework7 initialize required page\'s components and navbar');
});
$$(document).on('page:reinit', function (e) {
    console.log('page:reinit:This event will be triggered in case of navigating to the page that was already initialized.');
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

// Pull to refresh content
let $ptrContent = $$('.ptr-content');
// Add 'refresh' listener on it
$ptrContent.on('ptr:refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
        let newCard = $$("#cardExample");
        // Prepend new list element
        app.dialog.alert('Pull to refresh content');
        $ptrContent.find('#cardContainer').prepend(newCard);
        // When loading done, we need to reset it
        app.ptr.done(); // or e.detail();
    }, 2000);
});

$$('#approval').on('click', function () {
    // Alert username and password
    app.dialog.alert('click approval');
});

var test = {
    cid: 'CER2018-0513',
    state: 'Pending for FINCON',
    totalAmount: '$2,500,000',
    unbudgete: '—',
    applicant: 'CHRISTINE S YAO',
    revenveMode: 'Acquisiton'
};

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
        app.router.navigate({
            name: 'info',
            query:{ cid: card.cid },
            params:{ cid: card.cid }
        });
    }
}
ko.applyBindings(new AppViewModel(), document.getElementById('todoPage'));