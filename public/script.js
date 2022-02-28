const noMetamask = "<img src='/public/img/warning.svg' alt='warn'><p>MetaMask browser extension is required</p>";
const metamaskError = (msg)  => `<img src='/public/img/warning.svg' alt='warn'><p>${msg}</p>`;
const serverError = "<img src='/public/img/warning.svg' alt='warn'><p>Server error. Try to reload</p>";
const successStatus = "<img src='/public/img/success.svg' alt='warn'><p>Success</p>";

(async () => {
    if (typeof window.ethereum === 'undefined') {
        document.querySelector('.overlay').style.display = 'block';
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal').innerHTML = noMetamask;
        return;
    }


    const web3 = new Web3(window.ethereum);

    await ethereum.enable();

    const accs = await web3.eth.getAccounts();
    if (accs.length > 0) {
        try {
                const signature = await web3.eth.personal.sign(window.messageToSign, accs[0]);
                document.querySelector('p.title').textContent = 'Processing..'
                const res = await fetch(`/sign`, {
                            method: "POST",
                            headers:{
                                Accept: "*",
                                "Content-Type": "application/json",
                                },
                            body : JSON.stringify({
                            message: window.messageToSign,
                            signature,
                            })
                        })

                if (res.status === 500 || 401) {
                    document.querySelector('.overlay').style.display = 'block';
                    document.querySelector('.modal').style.display = 'block';
                    document.querySelector('.modal').innerHTML = serverError;
                    return;
                }

                if (res.status === 301) {
                    return window.open(res.headers.get('redirect'), '_self')
                }      

                document.querySelector('.laoderWrapper').innerHTML  = successStatus;
                document.querySelector('p.title').style.display = 'none';

                const blob = await res.blob()
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = res.headers.get('fileName');
                link.click();

    } catch (e) {
        document.querySelector('.laoderWrapper').innerHTML  = metamaskError(e.message);
        document.querySelector('p.title').style.display = 'none';
    }


        }
  })()