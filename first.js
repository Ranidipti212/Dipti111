$.ajax({
    url: 'https://dummyjson.com/products/category/smartphones',
    dataType: 'json',
    success: function (data) {
        let index=Math.floor(Math.random() * data.products.length);
        
           
           $('#productImage').append(`<img src="${data.products[index].thumbnail}">`)
           //phone name
           
           $('#productprice').text(data.products[index].price)
           
        
    },
    error: function(){

    }
});