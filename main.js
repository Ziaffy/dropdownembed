fetch('https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXXX/exec', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    code: generatedCode, // Ganti dengan kode yang dihasilkan
    orderInfo: 'Order dari user XYZ' // Informasi order opsional
  })
})
.then(response => response.json())
.then(data => {
  console.log(data); // Tampilkan response di console
  if (data.status === 'success') {
    alert('Kode berhasil disimpan!');
  } else {
    alert('Gagal menyimpan kode.');
  }
})
.catch(error => console.error('Error:', error));
