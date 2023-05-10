const fs = require('fs')

import('execa').then(({ execaSync }) => {
	try {
		execaSync('git', ['checkout', '-B', 'gh-pages'])
		console.log('Building started...')
		execaSync('yarn', ['generate'])
		const folderName = 'dist'
		execaSync('touch', [`${folderName}/.nojekyll`])
		fs.writeFileSync(`${folderName}/CNAME`, 'www.fronkai.com')
		execaSync('git', ['--work-tree', folderName, 'add', '--all'])
		execaSync('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages'])
		console.log('Pushing to gh-pages...')
		execaSync('git', ['push', 'origin', 'HEAD:gh-pages', '--force'])
		execaSync('rm', ['-r', folderName])
		execaSync('git', ['checkout', '-f', 'main'])
		execaSync('git', ['branch', '-D', 'gh-pages'])
		console.log('Successfully deployed, check your settings')
	} catch (e) {
		console.log(e.message)
		process.exit(1)
	}
})
