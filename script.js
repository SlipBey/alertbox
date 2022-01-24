//Onay Başla
function onayli() {
    Swal.fire({
      icon: 'success',
      title: 'Başarılı!',
      text: 'Yaptığın İşlem Başarıyla Tamamlandı!',
      confirmButtonColor:"#11bdac",
      confirmButtonText: "Tamamdır"
    })
    }
//Onay Bitir

//Red Başla
function redli() {
    Swal.fire({
      icon: 'error',
      title: 'Hopp!',
      text: 'Hatalı işlem uygulandı!',
      confirmButtonColor:"#11bdac",
      confirmButtonText: "Tamamdır"
    })
    }
//Red Bitir

//Soru Başla
function sorulu() {
    Swal.fire({
      icon: 'question',
      title: 'Bir Saniye',
      text: 'Devam Etmek İstiyor Musun?',
      confirmButtonColor:"#11bdac",
      confirmButtonText: "Evet"
    })
    }
//Soru Bitir

function ayakli() {
    Swal.fire({
      title: 'Webmaster',
      text: 'Slipknot#2494 (discord)',
      confirmButtonColor:"#11bdac",
      confirmButtonText: "Napim",
      footer: 'Design By Slip_Bey'
    })
    }

    function bilgili() {
        Swal.fire({
          icon: 'info',
          title: 'Dikkat!',
          text: 'Buradan sonrası hazır değil.',
          confirmButtonColor:"#11bdac",
          confirmButtonText: "Devam Et"
        })
        }

        function evthyr() {
            Swal.fire({
                title: 'Bir Saniye',
                text: "Hangisini Tercih Ediyorsun?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sil',
                cancelButtonText: 'Silme!'
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Başarılı!',
                    text: 'Yaptığın İşlem Başarıyla Tamamlandı!',
                    confirmButtonColor:"#11bdac",
                    confirmButtonText: "Tamamdır"
                })
        }
    })
    }

    function resimli() {
        Swal.fire({
            title: 'Penguenler Hakkında',
            text: 'Penguenler Bir Dinazordur(!)',
            imageUrl: 'https://cdn.discordapp.com/attachments/580471932043001866/820989447638089748/9k.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonColor: '#11bdac',
            confirmButtonText: 'Tamam',
          })
    }

    function sorulumu() {
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'İlerle &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
          }).queue([
            {
              title: 'Soru 1',
              text: 'Adın Ne'
            },
                {
            title: 'Soru 2',
            text: 'Yaşın kaç'
                },
                    {
             title: 'Soru 3',
             text: 'Mesleğin ne'
                    }
          ]).then((result) => {
            if (result.value) {
              const answers = JSON.stringify(result.value)
              Swal.fire({
                icon: success,
                title: 'Başarılı!',
                html: `
                  Cevapların:
                  <pre><code>${answers}</code></pre>
                `,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Tamamdır',
                cancelButtonText: 'Silme!',
                cancelButtonColor: '#d33'
              })
            }
          })
    }

    function ipadres() {
        const ipAPI = '//api.ipify.org?format=json'

Swal.queue([{
  title: 'IP Adresini Görmek ister misin ?',
  confirmButtonColor: '#3085d6',
  confirmButtonText: 'Gör',
  text: 'Görmek İstersen Tıkla!',
  showLoaderOnConfirm: true,
  preConfirm: () => {
    return fetch(ipAPI)
      .then(response => response.json())
      .then(data => Swal.insertQueueStep(data.ip))
      .catch(() => {
        Swal.insertQueueStep({
            icon: 'error',
            title: 'İşlem Başarısız!',
            text: 'IP Adresinizi Çekemedim!',
            confirmButtonColor:"#11bdac",
            confirmButtonText: "Tamamdır"
        })
      })
  }
}])
    }

    function tikla() {
        Swal.fire('Öylesine Bir Mesaj')
        }

        function cssile() {
            Swal.fire('Öylesine Bir Mesaj')
            }
function success() {  
  Swal.fire({
  icon: 'success',
  confirmButtonColor:"#11bdac",
  confirmButtonText: "Tamam."
})
}
function error() {  
  Swal.fire({
  icon: 'error',
  confirmButtonColor:"#11bdac",
  confirmButtonText: "Tamam."
})
}
function warning() {  
  Swal.fire({
  icon: 'warning',
  confirmButtonColor:"#11bdac",
  confirmButtonText: "Tamam."
})
}
function info() {  
  Swal.fire({
  icon: 'info',
  confirmButtonColor:"#11bdac",
  confirmButtonText: "Tamam."
})
}
function question() {  
  Swal.fire({
  icon: 'question',
  confirmButtonColor:"#11bdac",
  confirmButtonText: "Tamam."
})
}
