
const navigation = `

    <header>
        <ul>
            <li><img src="asset/roxas_city_government.png" alt="roxas_city_government" style="width:200px;" ></li>
            <li><img src="asset/tourism_logo.png" alt="tourism_logo" style="height: 65px; margin-right: 20px; margin-left: 20px;"></li>
            <button class="hamburger">☰</button>
            <li class="hide-on-mobile">Roxas City Capiz Tourism</li>
        </ul>
    </header>


    
    <nav>
        <ul>
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li class="dropdown">
            <a href="places.html" class="nav-link dropbtn">Places</a>
                <div class="dropdown-content">
                    <a href="paseo-del-rio.html">Paseo del Rio</a>
                    <a href="provincial_park.html">Provincial Park</a>
                    <a href="culajao_mangrove.html">Culajao Mangrove</a>
                    <a href="alcantaraz.html">The ruins of Alcantaraz</a>
                    <a href="plantanan-park.html">Plantanan Park</a>
                    <a href="sacred-heart-of-jesus.html">Sacred Hear of Jesus</a>
                    <a href="flatrock-beach-resort.html">Flat Rock Beach Report</a>
                    <a href="baybay-beach.html">Baybay Beach</a>
                    <a href="olotayan-island.html">Olotayan Island</a>
                </div>
            </li>
            <li><a href="cultural.html" class="nav-link">Cultural</a></li>
            <li><a href="foods.html" class="nav-link">Foods</a></li>
            <li><a href="news.html" class="nav-link">News</a></li>
            <li><a href="about_us.html" class="nav-link">About us</a></li>
            <li><a href="contact_us.html" class="nav-link">Contact</a></li>
        </ul>
    </nav>
    
`;

const asideContent = `
    <aside id="first-aside" class="first-aside">
        <ul>
            <ul>
                <li><img src="asset/roxas_city_government.png" alt="roxas_city_government" style="width:400px;" ></li>
                <li><img src="asset/tourism_logo.png" alt="tourism_logo" style="height: 130px; margin-right: 20px; margin-left: 20px;"></li>
                <li>Capiz Tourism</li>
            </ul>
        </ul>
        <p style="text-align: center;">OFFICIAL WEBSITE OF THE CITY GOVERNMENT OF ROXAS <br>
            About this website <br>
            Contact us at roxascitygovph@gmail.com
        </p>
    </aside>
`;


const secondAsideContent = `

    <aside id="second-aside" class="second-aside">
        <div class="aside-wrapper">
            <div class="column">
                <h2 style="color: #333; margin-bottom: 2rem; ">GOVERNMENT LINKS</h2>
                <a href="https://president.gov.ph/">Office of the President</a> <br>
                <a href="https://ovp.gov.ph/">Office of the Vice President</a> <br>
                <a href="https://legacy.senate.gov.ph/">Senate of the Phlippines</a> <br>
                <a href="https://www.congress.gov.ph/">House of the Representatives</a> <br>
                <a href="https://sc.judiciary.gov.ph/">Supreme Court</a> <br>
                <a href="https://ca.judiciary.gov.ph/">Court of Appeals</a> <br>
                <a href="https://sb.judiciary.gov.ph/">Sandiganbayan</a>
            </div>
            <div class="column">
                <img src="asset/coat-of-arms.png" alt="coat of arms">
                <p style="font-weight: 600; color: #333; margin-top: 2rem">
                    REPUBLIC OF THE PHILIPPINES
                </p>
                <p style="color: #333"">
                    All content is in the public domain unless otherwise stated.
                </p>
            </div>
        </div>   
    </aside>
`;

const footerContent = `
<footer style="text-align:center; margin-top: 5rem;">© 2024 ALL RIGHTS RESERVED​</footer>
`;


// Insert the aside into the #aside element
document.getElementById('aside').innerHTML = asideContent;

document.getElementById('second-aside').innerHTML = secondAsideContent;

// Insert the footer into the #footer element
document.getElementById('footer').innerHTML = footerContent;

// Insert the navigation into the #navigation element
document.getElementById('navigation').innerHTML = navigation;

// JavaScript to toggle nav
document.querySelector('.hamburger').addEventListener('click', function() {
    const navList = document.querySelector('nav ul');
    if (navList.style.display === 'block') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
});

window.addEventListener('resize', function() {
    const navList = document.querySelector('nav ul');
    if (window.innerWidth > 768) {
        navList.removeAttribute('style');
    }
});
