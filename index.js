const fs = require('fs')
const path = require('path')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const themePath = path.join(__dirname, 'wp-content', 'themes', 'c8-theme')
var allFilePath = []
var allDirPath = [ themePath ]

const getAnswer = (question) => {
	return new Promise((resolve, reject) => {
		// rl.question('Replace "c8-theme" to: ', answer => {
		rl.question(question, answer => {
			answer = String(answer).trim()

			if (answer) {
				resolve(answer)
			} else {
				reject('Answer this question please!')
			}
		})
	})
}

const getAllFileInDir = (dir) => {
	if (!dir) {
		// Default dir is theme folder
		dir = themePath
	}

	let files = fs.readdirSync(dir)

	for (let file of files) {
		// Skip LECENSE file
		if (file === 'LICENSE') {
			continue
		}

		let filePath = path.join(dir, file)

		if (fs.lstatSync(filePath) && fs.lstatSync(filePath).isDirectory()) {
			// Continue read if isDirectory
			getAllFileInDir(filePath)
			// Push to array if is directory
			allDirPath.push(filePath)
		} else {
			// Push to array if is file
			allFilePath.push(filePath)
		}
	}
}

const replaceAllFileContent = ({ oneText, twoText }) => {
	return new Promise((resolve, reject) => {
		getAllFileInDir()

		for (let filePath of allFilePath) {
			let fileContent = fs.readFileSync(filePath, 'utf8', (err, ok) => {
				if (err) {
					throw err
				}
			})

			if (fileContent) {
				fileContent = fileContent.replace(RegExp('c8-theme', 'gm'), oneText)
				fileContent = fileContent.replace(RegExp('c8_theme', 'gm'), twoText)

				fs.writeFileSync(filePath, fileContent, 'utf8', err => {
					if (err) throw err
				})
			}
		}

		resolve()
	})
}

const replaceAllFolderName = ({ oneText, twoText }) => {
	process.stdout.write('\033c')

	return new Promise((resolve, reject) => {
		getAllFileInDir()

		for (let dir of allDirPath) {
			let newDirName = dir.replace(RegExp('c8-theme$', 'gm'), oneText).replace(RegExp('c8_theme$', 'gm'), twoText)

			try {
				fs.renameSync(dir, newDirName)
			} catch(e) {
				console.log('\x1b[33m%s\x1b[0m', `Rename directory "${ dir }" to "${ newDirName }" by manual!`)
			}
		}

		resolve()
	})
}

(async () => {
	try {
		let oneText = await getAnswer('Replace "c8-theme" to: ')
		let twoText = await getAnswer('Replace "c8_theme" to: ')

		await replaceAllFileContent({ oneText, twoText })
		await replaceAllFolderName({ oneText, twoText })

		console.log('\x1b[33m%s\x1b[0m', `Remove package.json and index.js file by manual!`)
	} catch(e) {
		throw e
	}

	rl.close()
	process.exit()
})()