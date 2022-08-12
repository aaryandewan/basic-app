import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import Button from "@mui/material/Button";

const storage = getStorage();

export default function UploadButtons() {
  const [image, setImage] = useState(null);

  const upload = () => {
    if (image == null) return;
    else console.log("image not null");
    // storage.ref(`/images/${image.name}`).put(image)
    // .on("state_changed" , alert("success") , alert);
  };

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user && image) {
      //   console.log("In the true clause");
      let fString = "images/".concat(user.uid);
      fString.concat(".jpg");

      const imagesRef = ref(storage, fString);
      uploadBytes(imagesRef, image).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });

      console.log("ZYZZZZZZ", imagesRef);

      console.log("Hey");
      console.log(user.uid);
    } else {
      console.log("IN the else block");
      // No user is signed in.
    }
  }, [image]);

  return (
    <Button variant="contained" component="label" onClick={upload}>
      Upload File
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
        hidden
      />
    </Button>
  );
}
