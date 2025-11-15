const kodeKebutuhan = {
  'rumah': 'kk_01',
  'bisnis': 'kk_02',
  '1 - 3 hp': 'kk_03',
  '4 - 6 hp': 'kk_04',
  '7 - 10 hp': 'kk_05', 
  '11 - 20 hp': 'kk_06',
  '21 - 30 hp': 'kk_07',
  '1 tv': 'kk_08',
  '2 - 3 tv': 'kk_09',
  '1 cctv': 'kk_10',
  '2 - 5 cctv': 'kk_11',
  '6 - 10 cctv': 'kk_12',
  'streaming / youtube': 'kk_13',
  'gaming online': 'kk_14',
  'wfh / meeting': 'kk_15',
  'editing / upload file besar': 'kk_16',
  'hanya untuk browsing dan sosial media': 'kk_17',
  '< rp200 000': 'kk_18',
  'rp200 000 - rp300 000': 'kk_19',
  'rp300 000 - rp500 000': 'kk_20',
  '> rp500 000': 'kk_21'
}

const paket = {
  'kp_01': 'broadband 15 mbps',
  'kp_02': 'broadband 25 mbps',
  'kp_03': 'broadband 35 mbps',
  'kp_04': 'broadband 50 mbps',
  'kp_05': 'broadband 100 mbps',
  'kp_06': 'dadicated / survei lokasi'
}


const rules = [
  {
    kodeRule: 'r_01',
    kondisi: [
      { kode: 'kk_01', nilai: true },
      { kode: 'kk_03', nilai: true }
    ],
    hasil: 'kp_01'
  },
  {
    kodeRule: 'r_02',
    kondisi: [
      { kode: 'kk_01', nilai: true },
      { kode: 'kk_04', nilai: true },
      { kode: 'kk_08', nilai: true} 
    ],
    hasil: 'kp_02'
  },
  {
    kodeRule: 'r_03',
    kondisi: [
      { kode: 'kk_01', nilai: true },
      { kode: 'kk_05', nilai: true },
      { kode: 'kk_09', nilai: true} 
    ],
    hasil: 'kp_03'
  }
]

function proses() {

  const inputKebutuhan = document.querySelector('input[name="kebutuhan"]:checked')?.value
  const inputPerangkat = document.querySelector('input[name="perangkat"]:checked')?.value
  const inputBudget = document.querySelector('input[name="budget"]:checked')?.value

  const aktivitasNode = document.querySelectorAll('input[name="aktivitas"]:checked')
  const aktivitas = [...aktivitasNode].map(a => a.value)
  const deviceTambahanNode = document.querySelectorAll('input[name="deviceTambahan"]:checked')
  const deviceTambahan = [...deviceTambahanNode].map(a => a.value)

  const semuaInput = [inputKebutuhan, inputPerangkat, inputBudget, ...aktivitas, ...deviceTambahan].filter(Boolean)
  
  const fakta = semuaInput.map(i => kodeKebutuhan[i.toLowerCase()])

  // console.log("Input:", semuaInput)
  // console.log("Kode:", fakta)

  // proses forward chaining
  const hasil = forwardChaining(fakta)


if (hasil) {
  document.getElementById("output").innerText =
    "Rekomendasi Paket: " + hasil
} else {
  document.getElementById("output").innerText =
    "Tidak ada paket yang cocok!"
}

}




// uabh input user menjadi kode
function ubahInputKeKode(inputUser){
  return inputUser.map( i => kodeKebutuhan[i.toLowerCase()])
}


// forward chaining
function forwardChaining(faktaUser) {

  for (const rule of rules) {
    let cocok = true

    for (const kondisi of rule.kondisi) {
      const ada = faktaUser.includes(kondisi.kode)

      if (ada !== kondisi.nilai) {
        cocok = false
        break
      }
    }

    if (cocok) {
      console.log("cocok:", paket[rule.hasil])
      return paket[rule.hasil]
    }
  }

  console.log("tidak ada rule yang cocok")
  return null
}














