var routes = [
    {
        path: '/info/:cid',
        url: './pages/info.html',
        name:'info',
        on: {
            // each object key means same name event handler
            pageInit: function (page) {
                console.log('info pageInit');
                // console.log(page);
                var cid = page.detail.route.query.cid;
                console.log(cid);
                infoArray.id = cid;
                $$('#infoTitle')[0].innerText = cid;
                /*info详情页数据绑定*/
                var infoArrayModel = ko.observableArray(infoArray);
                ko.applyBindings(infoArrayModel, document.getElementById('infoPage'));
            }
        }
    },
    {
        path: '/index/',
        url: './index.html',
        on: {
            // each object key means same name event handler
            pageInit: function (page) {
                console.log('index pageInit');

            }
        },
    },
    {
        path: '/about/',
        url: './pages/about.html'
    }
];
