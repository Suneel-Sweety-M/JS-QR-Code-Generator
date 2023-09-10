let qrText = document.getElementById('qrText');
        let imgBox = document.getElementById('imgBox');
        let qrImg = document.getElementById('qrImg');

        function generateQR(){
            if (qrText.value.length > 0) {
                qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
                imgBox.classList.add('show-img');
            }else{
                qrText.classList.add('err');
                setTimeout(()=>{
                    qrText.classList.remove('err');
                },1000)
            }
        }