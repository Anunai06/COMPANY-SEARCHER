let companies = [
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com", industry: "IT", founded: "1976", headquarters: "Cupertino, USA" },
  { name: "Google", logo: "https://logo.clearbit.com/google.com", industry: "IT", founded: "1998", headquarters: "Mountain View, USA" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com", industry: "IT", founded: "1975", headquarters: "Redmond, USA" },
  { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com", industry: "IT", founded: "1981", headquarters: "Bangalore, India" },
  { name: "Dragonfly Business Solutions", logo: "https://logo.clearbit.com/dragonflybusinesssolutions.co.uk", industry: "IT", founded: "2021", headquarters: "Reading, UK" },
  { name: "Snapchat", logo: "https://logo.clearbit.com/snapchat.com", industry: "IT", founded: "2011", headquarters: "California, USA" },
  { name: "Spotify", logo: "https://logo.clearbit.com/spotify.com", industry: "IT", founded: "2006", headquarters: "Stockholm, Sweden" },
  { name: "GitHub", logo: "https://logo.clearbit.com/github.com", industry: "IT", founded: "2008", headquarters: "San Francisco, USA" },
  { name: "GitLab", logo: "https://logo.clearbit.com/gitlab.com", industry: "IT", founded: "2011", headquarters: "San Francisco, USA" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com", industry: "IT", founded: "1911", headquarters: "New York, USA" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com", industry: "Non-Technical", founded: "1994", headquarters: "Seattle, USA" },
  { name: "Ford", logo: "https://logo.clearbit.com/ford.com", industry: "Non-Technical", founded: "1903", headquarters: "Michigan, USA" },
  { name: "General Electric", logo: "https://logo.clearbit.com/ge.com", industry: "Non-Technical", founded: "1892", headquarters: "Boston, USA" },
  { name: "ExxonMobil", logo: "https://logo.clearbit.com/exxonmobil.com", industry: "Non-Technical", founded: "1999", headquarters: "Irving, USA" },
  { name: "Chevron", logo: "https://logo.clearbit.com/chevron.com", industry: "Non-Technical", founded: "1879", headquarters: "San Ramon, USA" },
  { name: "Toyota", logo: "https://logo.clearbit.com/toyota.com", industry: "Non-Technical", founded: "1937", headquarters: "Aichi, Japan" },
  { name: "Volkswagen", logo: "https://logo.clearbit.com/volkswagen.com", industry: "Non-Technical", founded: "1937", headquarters: "Wolfsburg, Germany" },
  { name: "BMW", logo: "https://logo.clearbit.com/bmw.com", industry: "Non-Technical", founded: "1916", headquarters: "Munich, Germany" },
  { name: "Honda", logo: "https://logo.clearbit.com/honda.com", industry: "Non-Technical", founded: "1946", headquarters: "Tokyo, Japan" },
  { name: "Peugeot", logo: "https://logo.clearbit.com/peugeot.com", industry: "Non-Technical", founded: "1889", headquarters: "Sochaux, France" },
  { name: "Audi", logo: "https://logo.clearbit.com/audi.com", industry: "Non-Technical", founded: "1909", headquarters: "Ingolstadt, Germany" },
  { name: "Walmart", logo: "https://logo.clearbit.com/walmart.com", industry: "Non-Technical", founded: "1962", headquarters: "Arkansas, USA" },
  { name: "Starbucks", logo: "https://logo.clearbit.com/starbucks.com", industry: "Non-Technical", founded: "1971", headquarters: "Seattle, USA" },
  { name: "McDonald's", logo: "https://logo.clearbit.com/mcdonalds.com", industry: "Non-Technical", founded: "1940", headquarters: "Illinois, USA" },
  { name: "Coca-Cola", logo: "https://logo.clearbit.com/coca-cola.com", industry: "Non-Technical", founded: "1892", headquarters: "Atlanta, USA" },
  { name: "Nike", logo: "https://logo.clearbit.com/nike.com", industry: "Non-Technical", founded: "1964", headquarters: "Oregon, USA" },
  { name: "Intel", logo: "https://logo.clearbit.com/intel.com", industry: "Hardware", founded: "1968", headquarters: "California, USA" },
  { name: "AMD", logo: "https://logo.clearbit.com/amd.com", industry: "Hardware", founded: "1969", headquarters: "Santa Clara, USA" },
  { name: "NVIDIA", logo: "https://logo.clearbit.com/nvidia.com", industry: "Hardware", founded: "1993", headquarters: "California, USA" },
  { name: "HP", logo: "https://logo.clearbit.com/hp.com", industry: "Hardware", founded: "1939", headquarters: "California, USA" },
  { name: "Asus", logo: "https://logo.clearbit.com/asus.com", industry: "Hardware", founded: "1989", headquarters: "Taipei, Taiwan" },
  { name: "Dell", logo: "https://logo.clearbit.com/dell.com", industry: "Hardware", founded: "1984", headquarters: "Texas, USA" },
  { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com", industry: "Hardware", founded: "1938", headquarters: "Seoul, South Korea" },
  { name: "Lenovo", logo: "https://logo.clearbit.com/lenovo.com", industry: "Hardware", founded: "1984", headquarters: "Beijing, China" },
  { name: "Acer", logo: "https://logo.clearbit.com/acer.com", industry: "Hardware", founded: "1976", headquarters: "Taipei, Taiwan" },
  { name: "Toshiba", logo: "https://logo.clearbit.com/toshiba.com", industry: "Hardware", founded: "1875", headquarters: "Tokyo, Japan" },
  { name: "Sony", logo: "https://logo.clearbit.com/sony.com", industry: "Hardware", founded: "1946", headquarters: "Tokyo, Japan" },
  { name: "Seagate", logo: "https://logo.clearbit.com/seagate.com", industry: "Hardware", founded: "1978", headquarters: "California, USA" },
  { name: "Western Digital", logo: "https://logo.clearbit.com/wdc.com", industry: "Hardware", founded: "1970", headquarters: "California, USA" },
  { name: "Corsair", logo: "https://logo.clearbit.com/corsair.com", industry: "Hardware", founded: "1994", headquarters: "California, USA" },
 ];

document.getElementById("home").style.display = "block";

document.getElementById("menuHome").onclick = function () {
  showSection("home");
};

document.getElementById("menuCategories").onclick = function () {
  showSection("categories");
  document.querySelector(".vertical-categories").style.display = "flex";
  document.querySelector("#categories h2").textContent = "Categories";
  document.getElementById("categoryResults").innerHTML = "";
};

document.getElementById("menuBookmarks").onclick = function () {
  showSection("bookmarks");
};

document.getElementById("menuAbout").onclick = function () {
  showSection("about");
};

function showSection(sectionId) {
  document.getElementById("home").style.display = "none";
  document.getElementById("categories").style.display = "none";
  document.getElementById("bookmarks").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById(sectionId).style.display = "block";
}

document.getElementById("btnIT").onclick = function () {
  displayCategory("IT");
};

document.getElementById("btnNonTech").onclick = function () {
  displayCategory("Non-Technical");
};

document.getElementById("btnHardware").onclick = function () {
  displayCategory("Hardware");
};

function displayCategory(industry) {
  let output = "";
  for (let i = 0; i < companies.length; i++) {
    if (companies[i].industry === industry) {
      output += getCard(companies[i]);
    }
  }
  document.getElementById("categoryResults").innerHTML = output;
}

document.getElementById("searchForm").onsubmit = function (e) {
  e.preventDefault();
  let search = document.getElementById("searchInput").value.toLowerCase();

  // Check if the search input is empty
  if (search === "") {
    alert("Please enter a company name.");
    return; // Stops further execution if the search box is empty
  }

  let output = "";
  for (let i = 0; i < companies.length; i++) {
    if (companies[i].name.toLowerCase().includes(search)) {
      output += getCard(companies[i]);
    }
  }

  if (output === "") {
    output = '<div class="alert alert-warning">No company found for "' + search + '".</div>';
  }

  document.querySelector(".vertical-categories").style.display = "none";
  document.querySelector("#categories h2").textContent = "Search Results";
  document.getElementById("categoryResults").innerHTML = output;
  showSection("categories");
};

function getCard(company) {
  return `
    <div class="col-12 col-sm-6 col-md-4 mb-4">
      <div class="card company-card">
        <div class="card-body text-center">
          <img src="${company.logo}" alt="${company.name} Logo" style="width: 80px; height: 80px;" />
          <h5 class="card-title mt-2">${company.name}</h5>
          <p><strong>Industry:</strong> ${company.industry}</p>
          <p><strong>Founded:</strong> ${company.founded}</p>
          <p><strong>HQ:</strong> ${company.headquarters}</p>
        </div>
      </div>
    </div>
  `;
}
