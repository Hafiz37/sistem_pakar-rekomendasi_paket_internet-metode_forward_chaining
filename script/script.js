const kebutuhan = {
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
  'cctv 24 jam': 'kk_16',
  'editing / upload file besar': 'kk_17',
  'hanya untuk browsing dan sosial media': 'kk_18',
  '< rp200 000': 'kk_19',
  'rp200 000 - rp300 000': 'kk_20',
  'rp300 000 - rp500 000': 'kk_21',
  '> rp500 000': 'kk_22'
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
      { kode: 'kk_03', nilai: true },
      { kode: 'kk_08', nilai: false },
        { kode: 'kk_10', nilai: false }
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



// uabh input user menjadi kode
function ubahInputKeKode(inputUser){
  return inputUser.map( i => kebutuhan[i.toLowerCase()])
}


// forward chaining
function forwardChaining(fakta) {

  for (const rule of rules) {
    let cocok = true

    for (const kondisi of rule.kondisi) {
      const adaFakta = fakta.includes(kondisi.kode)
      if (adaFakta !== kondisi.nilai) {
        cocok = false
        break
      }
    }

    if (cocok) {
      return [rule.hasil]
    }
  }

  console.log('tidak ada rule yang cocok')
  return null
}




const inputText = prompt('masukkan kebutuhan:')
const inputUser = inputText.split(',').map(x => x.trim().toLowerCase())
const faktaUser = ubahInputKeKode(inputUser)

console.log('input User = ', inputUser)
console.log('kode Fakta = ', faktaUser)

const hasilRule = forwardChaining(faktaUser)

if (hasilRule) {
  console.log('rekomendasi paket = ')
  hasilRule.forEach(h => console.log(paket[h]))
}






















