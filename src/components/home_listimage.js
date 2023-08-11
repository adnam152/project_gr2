export default function home_RenderListImage(data_list, container) {
    // render List
    (() => {
        const component = data_list.map((data, index) => {
            return `
                <a href="/products/${data.id}" class="item" data-index = "${index}">
                    ${data.category == 'sell' ? `<div class="label">Best Seller</div>`:''}
                    ${data.category == 'new-label' ? `<div class="label">New Arrivel</div>`:''}
                    <img src="${data.galeryImage[0]}" alt="">
                    <div class="name">${data.name}</div>
                    <div class="price">${data.price}</div>
                </a>
            `
        })
        container.innerHTML = component.join('');
    })();
    // Hover
    (() => {
        const allItem = container.querySelectorAll('.item');
        allItem.forEach(item => {
            let index = item.getAttribute('data-index');
            let image = item.querySelector('img');
            let galery = data_list[index].galeryImage;
            item.onmouseover = function () {
                image.src = galery[1] ? galery[1] : galery[0];
                this.style.scale = 1.05;
            }
            item.onmouseout = function () {
                image.src = galery[0];
                this.style.scale = 1;
            }
        })
    })();
}