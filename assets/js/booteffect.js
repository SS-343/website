const bootText = `
 OS v.3.1
(c)2003-2015 Microsoft Research Labratory 
To enter recovery mode,
press ESC...

Booting kernel...
Loading modules...ps/2.. ok
Loading modules...usp.. ok
Loading modules...hci.. ok
Loading modules...net.. ok

Starting Singularity OS...

Welcome back, User.
`;

let i = 0;

function typeBootText() {
    if (i < bootText.length) {
        document.getElementById('boot-text').innerHTML += bootText.charAt(i);
        i++;
        setTimeout(typeBootText, Math.random() * 10 + 20); // Adjust timing if needed
    } else {
        setTimeout(() => {
            document.getElementById('boot-screen').style.display = 'none'; // Hide boot screen after a delay
            document.querySelector('.w').style.display = 'block'; // Show main content
        }, 1500); // Adjust delay if needed
    }
}

window.onload = typeBootText;
