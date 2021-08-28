const fs = require("fs");
const path = require("path");
const options = {};

/**
 * Create Folder
 */
const FOLDER_PATH = path.join(__dirname, "test");
fs.exists(FOLDER_PATH, (exists) => {
  if (!exists) {
    fs.mkdir(FOLDER_PATH, {}, (err) => {
      if (err) throw err;

      console.log("Folder Created");
    });
  }
});

/**
 * Write, Append, Read file
 */
fs.exists(FOLDER_PATH, (exists) => {
  if (exists) {
    fs.writeFile(path.join(FOLDER_PATH, "file.txt"), "Hello World!", (err) => {
      if (err) throw err;
      console.log("Write File");
      fs.appendFile(
        path.join(FOLDER_PATH, "file.txt"),
        "\nAnother Line",
        {},
        (err) => {
          if (err) throw err;
          console.log("Appended File");
          fs.readFile(
            path.join(FOLDER_PATH, "file.txt"),
            { encoding: "utf-8" },
            (err, data) => {
              if (err) throw err;
              console.log(data);
              fs.rename(
                path.join(FOLDER_PATH, "file.txt"),
                path.join(FOLDER_PATH, "hello-world.txt"),
                (err) => {
                  if (err) throw err;
                  console.log("File Renamed");
                  const files = fs.readdirSync(FOLDER_PATH);
                  console.table(files);
                  fs.unlink(
                    path.join(FOLDER_PATH, "hello-world.txt"),
                    (err) => {
                      if (err) throw err;
                      console.log("Removed Hello World File");
                      fs.rmdir(path.join(FOLDER_PATH), (err) => {
                        if (err) throw err;
                        console.log("Folder Removed");
                      });
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  }
});

module.exports = options;
