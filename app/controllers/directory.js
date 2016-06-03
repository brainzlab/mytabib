var items = [
    {
        name 		: { text : "Nora Turner" },
        speciality	: { text : "Bariatric Surgeon"},
        rating 		: { text : "4.3" },
        reviews		: { text : "15 reviews" },
        image		: { image : "http://api.randomuser.me/portraits/women/0.jpg" }
    },
    
    {
        name 		: { text : "Server Miraviyev" },
        speciality	: { text : "Web Designer"},
        rating 		: { text : "4,2" },
        reviews		: { text : "9 reviews" },
        image		: { image : "http://api.randomuser.me/portraits/men/0.jpg" }
    },
    
    {
        name 		: { text : "Nadire Umerova" },
        speciality	: { text : "Copywriter"},
        rating 		: { text : "4.8" },
        reviews		: { text : "10 reviews" },
        image		: { image : "http://api.randomuser.me/portraits/women/3.jpg" }
    },
    
    {
        name 		: { text : "Maxim Drozhd" },
        speciality	: { text : "Web Developer"},
        rating 		: { text : "4,9" },
        reviews		: { text : "9 reviews" },
        image		: { image : "http://api.randomuser.me/portraits/men/2.jpg" }
    },
    
    {
        name 		: { text : "Elmira Bekirova" },
        speciality	: { text : "HTML Coder"},
        rating 		: { text : "4.3" },
        reviews		: { text : "15 reviews" },
        image		: { image : "http://api.randomuser.me/portraits/women/6.jpg" }
    },
    
    {
        name 		: { text : "Enver Umerov" },
        speciality	: { text : "Doctor"},
        rating 		: { text : "5,0" },
        reviews		: { text : "9 reviews" },
        image		: { image : "http://api.randomuser.me/portraits/men/12.jpg" }
    },
    
    {
        name 		: { text : "Fatime Miraviyeva" },
        speciality	: { text : "Eldest Daughter"},
        rating 		: { text : "4.1" },
        reviews		: { text : "24 reviews" },
        image		: { image : "http://api.randomuser.me/portraits/women/14.jpg" }
    },
    
    {
        name 		: { text : "Niyara Miraviyeva" },
        speciality	: { text : "Youngest Daughter"},
        rating 		: { text : "2,0" },
        reviews		: { text : "103 reviews" },
        image		: { image : "http://api.randomuser.me/portraits/women/26.jpg" }
    },
];
$.elementsList.sections[0].setItems(items);

// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
