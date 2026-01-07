const fs = require('fs');

const folders = ['public', 'src', 'config', 'routes', 'views'];

folders.forEach(folder => {
  fs.mkdirSync(folder, { recursive: true });
});

fs.writeFileSync('public/index.php', '<?php echo "Hola mundo";');

console.log('✅ Proyecto PHP creado');
