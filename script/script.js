const kebutuhan = {
  'rumah': 'KK_01',
  'bisnis': 'KK_02',
  '1 - 3 hp': 'KK_03',
  '4 - 6 hp': 'KK_04',
  '7 - 10 hp': 'KK_05',
  '11 - 20 hp': 'KK_06',
  '21 - 30 hp': 'KK_07',
  '1 tv': 'KK_08',
  '2 - 3 tv': 'KK_09',
  '1 cctv': 'KK_10',
  '2 - 5 cctv': 'KK_11',
  '6 - 10 cctv': 'KK_12',
  'streaming / youtube': 'KK_13',
  'gaming online': 'KK_14',
  'wfh / meeting': 'KK_15',
  'cctv 24 jam': 'KK_16',
  'editing / upload file besar': 'KK_17',
  'hanya untuk browsing dan sosial media': 'KK_18',
  '< rp200 000': 'KK_19',
  'rp200 000 – rp300 000': 'KK_20',
  'rp300 000 – rp500 000': 'KK_21',
  '> rp500 000': 'KK_22'
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
console.log(rules)
console.log(rules[0])
console.log(rules[0].kondisi)
console.log(rules[0].kondisi[2])
console.log(rules[0].kondisi[2].nilai)



// fungsi untuk merubah input user menjadi kode
function ubahInputKeKode(inputUser){
    return inputUser.map( i => kebutuhan[i.toLowerCase()])
}
const input = ['Rumah', '7 - 10 hp','editing / upload file besar' ]
const recommend = ubahInputKeKode(input)
console.log(input)
console.log(recommend)










































