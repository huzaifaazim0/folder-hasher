# 📁 folder-hasher

> Generate a stable hash for the contents of a folder — based on file content and relative paths.  
> Useful for caching, integrity checks, CI pipelines, and detecting file changes.

---

## ✅ Features

- 📂 Recursively reads all files in a folder
- 🧾 Computes hash using file contents + relative path
- 🔁 Ignores metadata like timestamps and permissions
- ⚙️ Supports extension filtering (`--ext js,ts,json`)
- 🛠 CLI and programmatic API
- 🧪 `.gitignore`-aware (via globby)

---

## 🚀 Installation

```bash
npm install -g folder-hasher
````

Or use without installing:

```bash
npx folder-hasher
```

---

## 🔧 CLI Usage

```bash
npx folder-hasher --path ./my-folder --ext js,ts
```

### Options

| Flag     | Alias | Description                                        | Default |
| -------- | ----- | -------------------------------------------------- | ------- |
| `--path` | `-p`  | Path to folder to hash                             | `.`     |
| `--ext`  | `-e`  | Comma-separated list of file extensions to include | all     |

### Examples

```bash
# Hash everything under current folder
npx folder-hasher

# Hash only .js and .ts files under src/
npx folder-hasher --path ./src --ext js,ts
```

---

## 💻 Programmatic API

```js
const hashFolder = require("folder-hasher");

(async () => {
  const hash = await hashFolder("./src", ["js", "ts"]);
  console.log("Hash:", hash);
})();
```

* Returns a SHA-256 hash of file paths + contents (sorted)
* Ignores file stats like modified time or permissions

---

## 💡 Use Cases

* CI build caching
* Static site rebuild detection
* Compare folder state before/after commands
* Validate packaging output folders
* Secure file transfer snapshots

---

## 🧪 Output Example

```
ad3c2e9e78e05785ae2a1e5d807723c472cf6d67f8c59e4b0d48795b9295d7a6
```

---

## 📦 Roadmap

* [ ] Add support for `.folderhasherignore`
* [ ] Output hash metadata (file count, total size)
* [ ] Support multiple hash algorithms (md5, sha512)
* [ ] Include empty folders (optional flag)

---

## 👥 Contributing

Pull requests welcome!
Please file an issue if you’d like to propose a new feature or report a bug.

---

## 📄 License

MIT © 2025 Huzaifa Azim

# folder-hasher
