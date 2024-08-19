
const countryList = {
    AED: ["United Arab Emirates", "AE"],
    AFN: ["Afghanistan", "AF"],
    XCD: ["Antigua and Barbuda", "AG"],
    ALL: ["Albania", "AL"],
    AMD: ["Armenia", "AM"],
    ANG: ["Netherlands Antilles", "AN"],
    AOA: ["Angola", "AO"],
    AQD: ["Antarctica", "AQ"],
    ARS: ["Argentina", "AR"],
    AUD: ["Australia", "AU"],
    AZN: ["Azerbaijan", "AZ"],
    BAM: ["Bosnia and Herzegovina", "BA"],
    BBD: ["Barbados", "BB"],
    BDT: ["Bangladesh", "BD"],
    XOF: ["Belgium", "BE"],
    BGN: ["Bulgaria", "BG"],
    BHD: ["Bahrain", "BH"],
    BIF: ["Burundi", "BI"],
    BMD: ["Bermuda", "BM"],
    BND: ["Brunei", "BN"],
    BOB: ["Bolivia", "BO"],
    BRL: ["Brazil", "BR"],
    BSD: ["Bahamas", "BS"],
    NOK: ["Bouvet Island", "BV"],
    BWP: ["Botswana", "BW"],
    BYR: ["Belarus", "BY"],
    BZD: ["Belize", "BZ"],
    CAD: ["Canada", "CA"],
    CDF: ["Democratic Republic of the Congo", "CD"],
    XAF: ["Central African Republic", "CF"],
    CHF: ["Switzerland", "CH"],
    CLP: ["Chile", "CL"],
    CNY: ["China", "CN"],
    COP: ["Colombia", "CO"],
    CRC: ["Costa Rica", "CR"],
    CUP: ["Cuba", "CU"],
    CVE: ["Cape Verde", "CV"],
    CYP: ["Cyprus", "CY"],
    CZK: ["Czech Republic", "CZ"],
    DJF: ["Djibouti", "DJ"],
    DKK: ["Denmark", "DK"],
    DOP: ["Dominican Republic", "DO"],
    DZD: ["Algeria", "DZ"],
    ECS: ["Ecuador", "EC"],
    EEK: ["Estonia", "EE"],
    EGP: ["Egypt", "EG"],
    ETB: ["Ethiopia", "ET"],
    EUR: ["France", "FR"],
    FJD: ["Fiji", "FJ"],
    FKP: ["Falkland Islands", "FK"],
    GBP: ["United Kingdom", "GB"],
    GEL: ["Georgia", "GE"],
    GGP: ["Guernsey", "GG"],
    GHS: ["Ghana", "GH"],
    GIP: ["Gibraltar", "GI"],
    GMD: ["Gambia", "GM"],
    GNF: ["Guinea", "GN"],
    GTQ: ["Guatemala", "GT"],
    GYD: ["Guyana", "GY"],
    HKD: ["Hong Kong", "HK"],
    HNL: ["Honduras", "HN"],
    HRK: ["Croatia", "HR"],
    HTG: ["Haiti", "HT"],
    HUF: ["Hungary", "HU"],
    IDR: ["Indonesia", "ID"],
    ILS: ["Israel", "IL"],
    INR: ["India", "IN"],
    IQD: ["Iraq", "IQ"],
    IRR: ["Iran", "IR"],
    ISK: ["Iceland", "IS"],
    JMD: ["Jamaica", "JM"],
    JOD: ["Jordan", "JO"],
    JPY: ["Japan", "JP"],
    KES: ["Kenya", "KE"],
    KGS: ["Kyrgyzstan", "KG"],
    KHR: ["Cambodia", "KH"],
    KMF: ["Comoros", "KM"],
    KPW: ["North Korea", "KP"],
    KRW: ["South Korea", "KR"],
    KWD: ["Kuwait", "KW"],
    KYD: ["Cayman Islands", "KY"],
    KZT: ["Kazakhstan", "KZ"],
    LAK: ["Laos", "LA"],
    LBP: ["Lebanon", "LB"],
    LKR: ["Sri Lanka", "LK"],
    LRD: ["Liberia", "LR"],
    LSL: ["Lesotho", "LS"],
    LTL: ["Lithuania", "LT"],
    LVL: ["Latvia", "LV"],
    LYD: ["Libya", "LY"],
    MAD: ["Morocco", "MA"],
    MDL: ["Moldova", "MD"],
    MGA: ["Madagascar", "MG"],
    MKD: ["North Macedonia", "MK"],
    MMK: ["Myanmar", "MM"],
    MNT: ["Mongolia", "MN"],
    MOP: ["Macau", "MO"],
    MRO: ["Mauritania", "MR"],
    MTL: ["Malta", "MT"],
    MUR: ["Mauritius", "MU"],
    MVR: ["Maldives", "MV"],
    MWK: ["Malawi", "MW"],
    MXN: ["Mexico", "MX"],
    MYR: ["Malaysia", "MY"],
    MZN: ["Mozambique", "MZ"],
    NAD: ["Namibia", "NA"],
    XPF: ["New Caledonia", "NC"],
    NGN: ["Nigeria", "NG"],
    NIO: ["Nicaragua", "NI"],
    NPR: ["Nepal", "NP"],
    NZD: ["New Zealand", "NZ"],
    OMR: ["Oman", "OM"],
    PAB: ["Panama", "PA"],
    PEN: ["Peru", "PE"],
    PGK: ["Papua New Guinea", "PG"],
    PHP: ["Philippines", "PH"],
    PKR: ["Pakistan", "PK"],
    PLN: ["Poland", "PL"],
    PYG: ["Paraguay", "PY"],
    QAR: ["Qatar", "QA"],
    RON: ["Romania", "RO"],
    RSD: ["Serbia", "RS"],
    RUB: ["Russia", "RU"],
    RWF: ["Rwanda", "RW"],
    SAR: ["Saudi Arabia", "SA"],
    SBD: ["Solomon Islands", "SB"],
    SCR: ["Seychelles", "SC"],
    SDG: ["Sudan", "SD"],
    SEK: ["Sweden", "SE"],
    SGD: ["Singapore", "SG"],
    SKK: ["Slovakia", "SK"],
    SLL: ["Sierra Leone", "SL"],
    SOS: ["Somalia", "SO"],
    SRD: ["Suriname", "SR"],
    STD: ["Sao Tome and Principe", "ST"],
    SVC: ["El Salvador", "SV"],
    SYP: ["Syria", "SY"],
    SZL: ["Eswatini", "SZ"],
    THB: ["Thailand", "TH"],
    TJS: ["Tajikistan", "TJ"],
    TMT: ["Turkmenistan", "TM"],
    TND: ["Tunisia", "TN"],
    TOP: ["Tonga", "TO"],
    TRY: ["Turkey", "TR"],
    TTD: ["Trinidad and Tobago", "TT"],
    TWD: ["Taiwan", "TW"],
    TZS: ["Tanzania", "TZ"],
    UAH: ["Ukraine", "UA"],
    UGX: ["Uganda", "UG"],
    USD: ["United States", "US"],
    UYU: ["Uruguay", "UY"],
    UZS: ["Uzbekistan", "UZ"],
    VEF: ["Venezuela", "VE"],
    VND: ["Vietnam", "VN"],
    VUV: ["Vanuatu", "VU"],
    YER: ["Yemen", "YE"],
    ZAR: ["South Africa", "ZA"],
    ZMK: ["Zambia", "ZM"],
    ZWD: ["Zimbabwe", "ZW"]
};
document.addEventListener('DOMContentLoaded', () => {
    // for country flag
    let selectlist = document.querySelectorAll('.country select')
    for (let select of selectlist) {
        for (let key in countryList) {
            let countryname = countryList[key][0];
            let countrycode = countryList[key][1];
            console.log(key, countryname, countrycode);

            let newcountry = document.createElement('option');
            newcountry.innerText = countryname;
            newcountry.value = key;
            if (select.name === 'country' && countryname === "Pakistan") {
                newcountry.selected = "selected"
            }
            select.append(newcountry);

        }
        select.addEventListener('change', (evt) => {
            flag(evt.target);
        })
    }
    let flag = (element) => {

        let countrykey = element.value;
        console.log(countrykey);
        let code = countryList[countrykey][1];
        console.log(code);
        let newimage = `https://flagsapi.com/${code}/flat/64.png`;
        let image = element.parentElement.querySelector("img");
        image.src = newimage;
    }

    // for image format and size
    document.querySelector('#image').addEventListener('change', (element) => {
        let alertText = document.querySelector('.text');
        let image = element.target;
        let imgValidex = ['jpeg', 'png', 'jpg'];
        let imgex = image.value.substring(image.value.lastIndexOf('.') + 1).toLowerCase();
        console.log(imgex);
        let imageSize = parseFloat((image.files[0].size / (1024 * 1024)));
        let validsize = 2 * 1024 * 1024;
        console.log(`${imageSize}MB`);

        if (!imgValidex.includes(imgex)) {
            alertText.innerHTML = `image format must be in "jpeg", "png" or, "jpg" <br> current image format: ${imgex}`;
            image.value = '';
            return false;
        }
        else {
            if (imageSize > validsize) {
                alertText.innerHTML = `size must be less than 2MB <br> current image size = ${imageSize} `;
                image.value = '';
                return false;
            } else {
                alertText.innerHTML = "";
                return true;
            }
        }
    })
    // submission

    document.querySelector('#formregistration').addEventListener('submit', (event) => {
        event.preventDefault();
        // password restriction
        let pass = document.querySelector("#password").value;
        let cpass = document.querySelector("#cpassword").value;
        let msg = document.querySelector('#passAlert');

        let validation = () => {

            if (pass !== cpass) {
                msg.textContent = "Both passwords must be the same";
                return false;
            } else {
                if (pass.length < 8) {
                    // msg.style.display = "block";
                    msg.textContent = "Password must be at least 8 characters long.";
                    return false;
                } else if (!/[A-Z]/.test(pass) || !/[a-z]/.test(pass)) {
                    // msg.style.display = "block";
                    msg.textContent = "Password must contain both uppercase and lowercase characters.";
                    return false;
                } else if (!/\d/.test(pass)) {
                    // msg.style.display = "block";
                    msg.textContent = "Password must contain at least 1 digit.";
                    return false;
                } else if (!/[!@#$%^&*()_\-,.<>\[\]{}|]/.test(pass)) {
                    // msg.style.display = "block";
                    msg.textContent = "Password must contain at least 1 special character.";
                    return false;
                }
                return true;
            }
        };
        let firstname = document.querySelector('#FirstName').value;
        let lastname = document.querySelector('#LastName').value;
        // object for form data because of no any server side script
        if (validation()) {
            const formData = new FormData(event.target);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            console.log(data);

            msg.textContent = "";
            alert(`Dear ${firstname} ${lastname} your form has been submitted`);
        } else {
            return false;
        }
    });

    document.querySelectorAll('.togglePassword').forEach(btn => {
        btn.addEventListener('click', function () {
            const passwordInput = this.previousElementSibling;
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.querySelector('i').classList.toggle('fa-eye-slash');
        });
    });
})
