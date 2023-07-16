const createNav = () => { /**`do not understand functions so this place is quite confusing but i understand
that he was trying to aviod copying and pasting this inner html inside the other html files since this nav is
present in all html page he jst created an inner html in javascript and linked it to all the other html files.
what i dont understand is why he did this by creating a function when it can be done using simple inner html
without creating a function. i also dont understand this signs "= () => `*/
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
	<div class="nav">
<img src="file:///C:/Users/DJ%20PC/Desktop/RESEARCH%20WORK/CODING%20&%20PROGRAMMING/PROJECTS/ECOMMERCE%20WEBSITE/PUBLIC/img-20230421T075231Z-001/img/dark-logo.png" class="brand-logo" alt="">
<div class="nav-items">
<div class="search">
<input type="text" class="search-box" placeholder="search brand, product">
<button class="search-btn">search</button>
</div>
<a href="#"><img src="file:///C:/Users/DJ%20PC/Desktop/RESEARCH%20WORK/CODING%20&%20PROGRAMMING/PROJECTS/ECOMMERCE%20WEBSITE/PUBLIC/img-20230421T075231Z-001/img/user.png" alt=""></a>
<a href="#"><img src="file:///C:/Users/DJ%20PC/Desktop/RESEARCH%20WORK/CODING%20&%20PROGRAMMING/PROJECTS/ECOMMERCE%20WEBSITE/PUBLIC/img-20230421T075231Z-001/img/cart.png" alt=""></a>
</div>
</div>
</nav>
<!--nav bar -->
<ul class="links-container">
<li class="link-item"><a href="#" class="link">home</a>
<li class="link-item"><a href="#" class="link">women</a>
<li class="link-item"><a href="#" class="link">men</a>
<li class="link-item"><a href="#" class="link">kids</a>
<li class="link-item"><a href="#" class="link">accessories</a>
</ul>
    `; //the `` sign is to disable the ""(double quote) because it's affecting the code..
}

createNav();