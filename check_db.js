const net = require('net');

console.log('Testing connection to Supabase (db.eowtjugippyloevuxoon.supabase.co:5432)...');

const socket = new net.Socket();
socket.setTimeout(10000); // 10 second timeout

socket.on('connect', () => {
    console.log('✅ SUCCESS: TCP connection established to port 5432.');
    console.log('This means your network allows the connection.');
    socket.destroy();
});

socket.on('timeout', () => {
    console.log('❌ TIMEOUT: Could not connect within 10 seconds.');
    console.log('This usually means a FIREWALL is blocking the connection.');
    socket.destroy();
});

socket.on('error', (err) => {
    console.log('❌ ERROR: ' + err.message);
    if (err.code === 'ENOTFOUND') {
        console.log('-> Could not resolve the hostname. Check your internet connection.');
    }
});

socket.connect(5432, 'db.eowtjugippyloevuxoon.supabase.co');
