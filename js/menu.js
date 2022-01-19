/**

    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">首頁</a></li>
    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">關於我們</a></li>
    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">商品展示</a></li>
    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">購物車</a></li>
 */
let menuHtml = `
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">首頁</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">關於我們</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">商品展示</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">購物車</a></li>
`;
let menu = document.getElementById('menu');
menu.innerHTML = menuHtml;

// console.log(menu);

let menuData = [
    {
        title:'首頁',
        url:',index.html'
    },
    {
        title:'About',
        url:'About.html',
    },
    {
        title:'Products',
        url:'Products.html',
    },
    {
        title:'store',
        url:'store.html',
    }
];

let menuHtml = '';
for( let row of menuHtml){
    menuHtml += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href=">'+ row.url+'">'+row.title +'</a></li>';

}
// console.log(console.log( menuData[0].title ));//Home