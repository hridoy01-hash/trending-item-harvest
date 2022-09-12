(async function () {

    const BUSINESS_ID = "6304aa113cb8eba9248eac8d";
    let CURRENCY = "BDT";
    const LoadDataFunction = async (url) => { try { let response = await fetch(url, { method: "get", headers: { "businessid": `${BUSINESS_ID}`, } }); response = await response.json(); if (response.Error) { return console.log(response.Error) }; return response; } catch (e) { return }; };
    const treandingProduct = await LoadDataFunction(`https://api.soppiya.com/v2.1/widget/home/trending`);

    async function displayTrendingItem(treandingProduct) {
        console.log("treandingProduct", treandingProduct);
        for (let i = 0; i < treandingProduct.length; i++) {
            const singleProduct = treandingProduct[i];
            let FeatureImage = `https://www.soppiya.com/media/images/${BUSINESS_ID}/item/${singleProduct?._id}/${singleProduct?.image}`;
            const s0207_trending_single_product = elementMaker("div", ["s0207_trending_single_product"]);
            const s0207_top_area = elementMaker("div", ["s0207_top_area"]);
            s0207_trending_single_product.appendChild(s0207_top_area);
            const s0207_product_bottom_area = elementMaker("div", ["s0207_product_bottom_area"]);
            s0207_trending_single_product.appendChild(s0207_product_bottom_area);


            if (singleProduct?.flashPrice) {
                const s0207_product_badge = elementMaker("div", ["s0207_product_badge"]);
                s0207_top_area.appendChild(s0207_product_badge);
                const s0207_product_badge_bg = elementMaker("div", ["s0207_product_badge_bg"]);
                s0207_product_badge.appendChild(s0207_product_badge_bg);
                const s0207_product_badge_name = elementMaker("p", ["s0207_product_badge_name"]);
                s0207_product_badge_name.innerText = `Sale`;
                s0207_product_badge.appendChild(s0207_product_badge_name);
            }


            const s0207_add_wishlist_icon = elementMaker("div", ["s0207_add_wishlist_icon"]);
            s0207_add_wishlist_icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12.154"
                                                viewBox="0 0 11 10.154">
                                                <g id="Wishlist" transform="translate(0.005 -0.917)" fill="none">
                                                    <path
                                                        d="M8.015.917a2.937,2.937,0,0,0-2.52,1.5,2.937,2.937,0,0,0-2.52-1.5A3.1,3.1,0,0,0,0,4.114c0,3.072,5.019,6.621,5.233,6.771l.265.185.265-.185a20.107,20.107,0,0,0,4.258-4.149,4.767,4.767,0,0,0,.974-2.622A3.1,3.1,0,0,0,8.015.917Z"
                                                        stroke="none" />
                                                    <path
                                                        d="M 2.988877296447754 1.917545318603516 C 1.844751358032227 1.982332229614258 0.9534721374511719 2.944474220275879 0.9966030120849609 4.07592248916626 L 0.9973335266113281 4.114022731781006 C 0.9973335266113281 5.895664215087891 3.579555988311768 8.422812461853027 5.492873668670654 9.841220855712891 C 6.1953125 9.310666084289551 7.94449520111084 7.902547359466553 9.207173347473145 6.15129280090332 L 9.211772918701172 6.144972801208496 C 9.589353561401367 5.629822731018066 9.992813110351562 4.825762748718262 9.992813110351562 4.114022731781006 L 9.99354362487793 4.07592248916626 C 10.03667449951172 2.944474220275879 9.145395278930664 1.982332229614258 8.001269340515137 1.917545318603516 C 7.320765018463135 1.93812370300293 6.696889400482178 2.313162803649902 6.367883205413818 2.901542663574219 L 5.495063304901123 4.462442874908447 L 4.62225341796875 2.901533126831055 C 4.293266773223877 2.313162803649902 3.669382095336914 1.93812370300293 2.988877296447754 1.917545318603516 M 2.975273132324219 0.9170026779174805 C 4.02535343170166 0.9331626892089844 4.986513137817383 1.503982543945312 5.495073318481445 2.413482666015625 C 6.00364351272583 1.503982543945312 6.96479320526123 0.9331626892089844 8.014873504638672 0.9170026779174805 C 9.726902961730957 0.9906225204467773 11.05743312835693 2.419042587280273 10.99281311035156 4.114022731781006 C 10.99281311035156 5.066442489624023 10.51044368743896 6.064712524414062 10.01832294464111 6.736132621765137 C 8.342613220214844 9.060242652893066 5.907193183898926 10.78211307525635 5.759883403778076 10.88537311553955 L 5.495073318481445 11.07084274291992 L 5.230263233184814 10.88537311553955 C 5.016773223876953 10.73482322692871 -0.002666473388671875 7.186342716217041 -0.002666473388671875 4.114022731781006 C -0.06728649139404297 2.419042587280273 1.263243675231934 0.9906225204467773 2.975273132324219 0.9170026779174805 Z"
                                                        stroke="none" fill="#1e272e" />
                                                </g>
                                            </svg>
            `;

            s0207_top_area.appendChild(s0207_add_wishlist_icon);

            const s0207_product_img_container = elementMaker("div", ["s0207_product_img_container"]);
            s0207_top_area.appendChild(s0207_product_img_container);
            const productImage = elementMaker("img", ["product_img"]);
            setAttributes(productImage, { "src": `${FeatureImage}` });
            s0207_product_img_container.appendChild(productImage);

            const s0207_product_name_wrapper = elementMaker("div", ["s0207_product_name_wrapper"]);
            s0207_product_bottom_area.appendChild(s0207_product_name_wrapper);
            const s0207_product_name = elementMaker("p", ["s0207_product_name"]);
            s0207_product_name.textContent = `${singleProduct.name}`;
            s0207_product_name_wrapper.appendChild(s0207_product_name);

            const s0207_product_rating_wrapper = elementMaker("div", ["s0207_product_rating_wrapper"]);
            s0207_product_bottom_area.appendChild(s0207_product_rating_wrapper);
            const s0207_product_rating = elementMaker("ul", ["s0207_product_rating"]);
            s0207_product_rating_wrapper.appendChild(s0207_product_rating);
            const ratingNumber = singleProduct?.reviewRating?.rating;

            function showReviewStar(ratingNumber, s0207_product_rating) {
                let stars = ratingNumber;
                let starsFloor = Math.floor(stars);
                for (let i = 0; i < starsFloor; i++) {
                    let fc001_review_star = elementMaker("li", ["s0207_product_rating_start"]);
                    fc001_review_star.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"> <path id="Star" d="M59.5,72.843,62.9,75,62,70.93l3-2.736-3.955-.357L59.5,64l-1.545,3.837L54,68.194l3,2.736L56.1,75Z" transform="translate(-54 -64)" fill="#fed300"></path> </svg>
                     `

                    s0207_product_rating.appendChild(fc001_review_star);

                };
                let starDecimal = stars - starsFloor;
                if (starDecimal > 0) {
                    let fc001_review_star = elementMaker("li", ["s0207_product_rating_start"]);
                    fc001_review_star.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="11" viewBox="0 0 11 11"> <defs> <linearGradient id="linear-gradient" y1="0.384" x2="1" y2="0.381" gradientUnits="objectBoundingBox"> <stop offset="0" stop-color="#fed300"></stop> <stop offset="0.5" stop-color="#fbd414"></stop> <stop offset="0.503" stop-color="#dedbcc"></stop> <stop offset="1" stop-color="#dcdcdc"></stop> </linearGradient> </defs> <path id="Star" d="M59.5,72.843,62.9,75,62,70.93l3-2.736-3.955-.357L59.5,64l-1.545,3.837L54,68.194l3,2.736L56.1,75Z" transform="translate(-54 -64)" fill="url(#linear-gradient)"></path> </svg>
                                `;
                    s0207_product_rating.appendChild(fc001_review_star);
                };
                if ((5 - stars) > 0) {
                    for (let i = 0; i < Math.floor((5 - stars)); i++) {
                        let fc001_review_star = elementMaker("li", ["s0207_product_rating_start"]);
                        fc001_review_star.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"> <path id="Star" d="M59.5,72.843,62.9,75,62,70.93l3-2.736-3.955-.357L59.5,64l-1.545,3.837L54,68.194l3,2.736L56.1,75Z" transform="translate(-54 -64)" fill="#dfdfdf"></path> </svg>
                                `;
                        s0207_product_rating.appendChild(fc001_review_star);
                    };
                };


            }
            showReviewStar(ratingNumber, s0207_product_rating);

            const s0207_product_price_container = elementMaker("div", ["s0207_product_price_container"]);
            s0207_product_bottom_area.appendChild(s0207_product_price_container);
            const s0207_product_price = elementMaker("p", ["s0207_product_price"]);
            s0207_product_price.textContent = `${CURRENCY} ${singleProduct.price}`;
            s0207_product_price_container.appendChild(s0207_product_price);

            const s0207_add_cart_btn_wrapper = elementMaker("div", ["s0207_add_cart_btn_wrapper"]);
            s0207_product_bottom_area.appendChild(s0207_add_cart_btn_wrapper);
            const s0207_add_cart_btn = elementMaker("button", ["s0207_add_cart_btn"]);
            s0207_add_cart_btn.textContent = `Add to cart`
            s0207_add_cart_btn_wrapper.appendChild(s0207_add_cart_btn);

            document.querySelector(".s0207_trending_all_product").appendChild(s0207_trending_single_product)
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