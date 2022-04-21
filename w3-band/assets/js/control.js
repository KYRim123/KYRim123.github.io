// buy tickets 
var buyBtns = document.querySelectorAll('.js-buy-tickets')
        var modal = document.querySelector('.js-modal')
        var modalcontainer = document.querySelector('.js-modal-container')
        var modalclose = document.querySelector('.js-modal-close')

    
        function showBuytickets(){
            modal.classList.add('open')
        }

        function hideTicket() {
            modal.classList.remove('open')
        }

        for(var buyBtn of buyBtns){
            buyBtn.onclick = showBuytickets ;
        }
        //mobile menu

        modalclose.onclick = hideTicket;
        modal.onclick =  hideTicket;
        
        modalcontainer.onclick =  function (event){
            event.stopPropagation();
        }

// menu
var header = document.getElementById('header'); //lay id thanh header
        var mobileMenu = document.getElementById('mobile-menu'); //lay id cua thanh menu tren mobile
        var headerHeight = header.clientHeight; //lay chieu cao thanh header
        //check open or close menu
        function clickMenu(){
            var isClose = header.clientHeight === headerHeight;
            if(isClose){
                header.style.height = 'auto';
            }else {
                header.style.height = null;
            }
        }
        //press  in menu 
        mobileMenu.onclick =  clickMenu;
        //tự động đóng khi chọn menu
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        for(var i = 0; i < menuItems.length; i++){
            var menuItem = menuItems[i];

            menuItem.onclick = function(){
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
                if(isParentMenu){
                    Event.preventDefault();
                }else{
                    header.style.height = null;
                }
            }
        }