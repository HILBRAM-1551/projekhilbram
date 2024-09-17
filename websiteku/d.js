document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const result = document.getElementById('result');

    if (name) {
        const khodam = checkKhodam(name);
        result.innerHTML = `Khodam Anda adalah: <strong>${khodam}</strong>`;
    } else {
        result.innerHTML = '<span style="color: red;">Silahkan masukan nama Anda!</span>';
    }
});

function checkKhodam(name) {
    const khodams = ['monyet kayang', 'macan goyang', 'elang mabok', 'bebek penyet', 'buaya darat', 'kecoa berapi', 'kosong', 'anjing berax', 'babi sumbing', 'kambing birahi', 'kak gem', 'jokowi'];
    const index = Math.floor(Math.random() * khodams.length);
    return khodams[index];
}