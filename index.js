function generatePassword() {
    var length = 6,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numberset = "0123456789",
        symbolset = "!@#$",
        password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    password += numberset.charAt(Math.floor(Math.random() * numberset.length));
    password += symbolset.charAt(Math.floor(Math.random() * symbolset.length));
    return password;
}

document.getElementById("button").addEventListener("click", function() {
    var password = generatePassword();
    document.getElementById("outputBox").textContent = password;
});

document.getElementById("copyButton").addEventListener("click", function() {
    var passwordText = document.getElementById("outputBox").textContent;
    navigator.clipboard.writeText(passwordText).then(function() {
        console.log('Password copied to clipboard');
    }, function(err) {
        console.error('Could not copy password: ', err);
    });
});