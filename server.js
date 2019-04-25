var spawn = require('child_process').spawn;
free = spawn('hexo', ['server', '-p 3000']);/* 其实就是等于执行hexo server -p 3000*/

free.stdout.on('data', function (data) {
    console.log('hexo standard output:\n' + data);
});

free.stderr.on('data', function (data) {
    console.log('hexo standard error output:\n' + data);
});

free.on('exit', function (code, signal) {
    console.log('hexo child process eixt ,exit:' + code);
});
