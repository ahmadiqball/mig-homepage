const companyData = [
    {
        idCompany: '1211412412',
        name: 'Mitramas Infosys Global',
        service: 'Layanan IT',
        status: true,
        singkatan: 'MIG',
        address : 'Jl. Tebet Raya No. 42, Jakarta Selatan',
        pic : 'John Doe',
        pkpDate: '03 Maret 2021',
        email: 'mig@mitrasolusi.group',
        telpNum: '021-5678-1234',
        webSite: 'mitramas.com',
        profPic: '../images/profile-picture-1.jpg',
        backgroundPic: '../images/profile-background.jpg'
    }
];

const activityData = [
    {
        idLog: '000001',
        logTitle: 'Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa',
        time: 'Hari ini, 06:00'
    },
    {
        idLog: '000002',
        logTitle: 'Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet',
        time: 'Kemaren, 17:32'   
    },
    {   
        idLog: '000003',
        logTitle: 'Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi',
        time: 'Kemaren, 17:32'   
    }
];

const bankAccount = [
    {
        idBank: '11113',
        bankName: 'Bank KB Bukopin',
        accName: 'Yusron Taufiq',
        accNum: '00000876',
        currency: 'IDR'
    },
    {
        idBank: '11114',
        bankName: 'Citi Bank, NA',
        accName: 'Si Tampan',
        accNum: '00005525',
        currency: 'USD'
    }
];

export { companyData, activityData, bankAccount};