//toast function
 function toast(
        title = '',
        message = '',
        type = '',
        duration = 3000)
        {
            //kiếm toast
            const main = document.getElementById('toast');
            //kiểm tra nếu tồn tại
            if(main){
                //tạo thêm thẻ div vào trong toast
                const toast = document.createElement('div');
                //thêm delay cho toast
                const delay = (duration/1000).toFixed(2);//tránh trường hợp dấu phẩy động
                //tạo object chứa icons
                const icons = {
                    success: 'fa-solid fa-circle-check',
                    infor: 'fa-solid fa-circle-info',
                    warning: 'fa-solid fa-triangle-exclamation',
                    error: 'fa-solid fa-circle-exclamation'
                }
                //thêm class = toast vòa trong thẻ div vừa tạo
                toast.classList.add('toast', `toast--${type}`);
                //chỉnh thời gian delay của toast
                toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
                //đóng toast khi click vào close 
                toast.onclick = function(element){
                    if(element.target.closest('.toast__close')){
                        main.removeChild(toast);
                    }
                }
                //chọn icon đưa vào
                const icon = icons[type];
                //add body của toast vào
                toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>

                    <div class="toast__close">
                        <i class="fa-solid fa-circle-xmark"></i>
                </div>`;
                //khởi tạo toast
                main.appendChild(toast);
                //gỡ toast ra
                setTimeout(function(){
                    main.removeChild(toast);
                    
                }, duration);
            }
    }
    
    //tạo object cho toast
    function showSuccess(){
        // toast({
        // title: 'Success',
        // message: 'Máy tính kết nối thành công!',
        // type: 'success',
        // duration: 2000
        // });
        new toast('Success','Máy tính kết nối thành công!','success',2000)
    }

    

    function showError(){
        // toast({
        // title: 'Error',
        // message: 'Máy tính kết nối không thành công!',
        // type: 'error',
        // duration: 2000
        // });
        new toast('Error','Máy tính kết nối không thành công!','error',2000)
    }

    function showWarning(){
        // toast({
        // title: 'Warning',
        // message: 'Cảnh báo nguy hiểm!',
        // type: 'warning',
        // duration: 5000
        // });
        new toast('Warning','Cảnh báo nguy hiểm!','warning',2000)
    }

    function showInfor(){
        // toast({
        // title: 'Infor',
        // message: 'Ram 4gb!',
        // type: 'infor',
        // duration: 5000
        // });
        new toast('Infor','Máy tính kết nối thành công!','infor',2000)
    }
