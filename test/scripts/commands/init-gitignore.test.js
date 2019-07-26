const GitIgnore = require('../../../scripts/lib/GitIgnore')
const mockFs = require('mock-fs')
const fs = require('fs')
const fsUtils = require('../../../scripts/lib/fs-utils')

const initGitignore = require('../../../scripts/commands/init-gitignore')

describe('commands/init-gitignore', () => {
  let originalCwd

  it('FAILS', () => {
    expect(true).to.equal(false)
  })

  const gitignoreDefaultContent = fs.readFileSync(fsUtils.resolveAcurisEslintFile('.gitignore.default'), 'utf8')

  beforeEach(() => {
    originalCwd = process.cwd()
  })

  afterEach(() => {
    process.chdir(originalCwd)
    mockFs.restore()
  })

  it('creates an empty .gitignore', async () => {
    mockFs({
      myProject: {},
      '.gitignore.default': gitignoreDefaultContent
    })

    process.chdir('myProject')

    await initGitignore()

    expect(new GitIgnore(fs.readFileSync('.gitignore', 'utf8')).toStringArray()).to.deep.equal(
      new GitIgnore(gitignoreDefaultContent).toStringArray()
    )
  })

  it('does nothing if .gitignore is already up to date', async () => {
    mockFs({
      myProject: {
        '.gitignore': `${gitignoreDefaultContent}\n#random comment\n`
      },
      '.gitignore.default': gitignoreDefaultContent
    })

    process.chdir('myProject')

    await initGitignore()

    expect(new GitIgnore(fs.readFileSync('.gitignore', 'utf8')).toStringArray()).to.deep.equal(
      new GitIgnore(gitignoreDefaultContent).toStringArray()
    )
  })

  it('updates a .gitignore', async () => {
    mockFs({
      myProject: {
        '.gitignore': '# hello world\nxxxx.js\nyyyy.js'
      },
      '.gitignore.default': gitignoreDefaultContent
    })

    process.chdir('myProject')

    await initGitignore()

    const finalPatterns = [...new GitIgnore(fs.readFileSync('.gitignore', 'utf8')).patterns].sort()
    const expectedPatterns = [...new GitIgnore(gitignoreDefaultContent).patterns, 'xxxx.js', 'yyyy.js'].sort()

    expect(finalPatterns).to.deep.equal(expectedPatterns)
  })
})
