const bootText = `
Copland OS v.3.1
(c)1998-2023 Tachibana Labs
To enter recovery mode,
press ESC...

Booting kernel...
Loading modules...ps/2.. ok
Loading modules...usp.. ok
Loading modules...hci.. ok
Loading modules...net.. ok

Starting Copland OS...

Welcome back, User.
Let's all love Lain.
`;

let i = 0;

function typeBootText() {
    if (i < bootText.length) {
        document.getElementById('boot-text').innerHTML += bootText.charAt(i);
        i++;
        setTimeout(typeBootText, Math.random() * 10 + 20);  // Vary typing speed for effect
    } else {
        setTimeout(() => {
            document.getElementById('boot-screen').style.display = 'none';  // Hide boot screen after a 1s delay
        }, 100);
    }
}

window.onload = typeBootText;
