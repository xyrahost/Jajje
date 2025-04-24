function downloadMedia() {
  const url = document.getElementById('tiktokUrl').value;
  const resultDiv = document.getElementById('result');

  resultDiv.innerHTML = "Memproses link...";

  fetch(`https://vapis.my.id/api/ttdl?url=encodeURIComponent(url)`)
    .then(res => res.json())
    .then(data => 
      if (data        data.result) 
        const videoUrl = data.result.nowm;
        const audioUrl = data.result.audio;

        resultDiv.innerHTML = `
          <video controls width="100
            <source src="{videoUrl}" type="video/mp4">
            Browser tidak mendukung pemutar video.
          </video>
          <br/>
          <a href="videoUrl" class="download-link" download>Unduh Video</a>
          <br/>
          <a href="{audioUrl}" class="download-link" download>Unduh Audio (MP3)</a>
        `;
      } else {
        resultDiv.innerHTML = "Gagal mendapatkan media.";
      }
    })
    .catch(err => {
      console.error(err);
      resultDiv.innerHTML = "Terjadi kesalahan. Periksa kembali URL.";
    });
}
