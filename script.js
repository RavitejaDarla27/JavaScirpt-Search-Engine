const search = () => {  
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const productsList = document.getElementById("productsList");
    const product = document.querySelectorAll(".product");
    const prodName = productsList.getElementsByTagName("h2"); 

    for (var i = 0; i<prodName.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if(match) {
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none"
            }
        }
    }
}