(async function () {

    const BUSINESS_ID = "6304aa113cb8eba9248eac8d";
    let CURRENCY = "BDT";
    const LoadDataFunction = async (url) => { try { let response = await fetch(url, { method: "get", headers: { "businessid": `${BUSINESS_ID}`, } }); response = await response.json(); if (response.Error) { return console.log(response.Error) }; return response; } catch (e) { return }; };
    const treandingProduct = await LoadDataFunction(`https://api.soppiya.com/v2.1/widget/home/trending`);

    async function displayTrendingItem(treandingProduct) {
        // let FeatureImage = `https://www.soppiya.com/media/images/${BUSINESS_ID}/item/${singleProduct?._id}/${singleProduct?.image}`;
        console.log("treandingProduct", treandingProduct);
        for (let i = 0; i < treandingProduct.length; i++) {
            const singleProduct = treandingProduct[i];

            const s0207_trending_single_product = elementMaker("div" , )
            
        }




    };
    await displayTrendingItem(treandingProduct);



    function elementMaker(name, className, id) {
        try {
            let element = document.createElement(name);
            className && (element.className = className.join(" "));
            id && (element.id = id);
            return element;
        } catch (err) { };
    };
    function setAttributes(elementName, allAttributes) {
        for (let key in allAttributes) {
            elementName.setAttribute(key, allAttributes[key]);
        };
    };


})();