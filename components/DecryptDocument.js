import Swal from "sweetalert2";

const NO_PASSWORD_ERR = "No password provided.";

const DecryptDocument = ({ filePath }) => {
    const handleDownload = async () => {
        try {
            const { value: password } = await Swal.fire({
                title: "Enter Password",
                input: "password",
                inputPlaceholder: "Enter the password to decrypt the document",
                showCancelButton: true,
                customClass: {
                    confirmButton: "swal-custom-confirm",
                    cancelButton: "swal-custom-cancel",
                },
            });

            if (!password) throw new Error(NO_PASSWORD_ERR);

            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to fetch the file: ${response.statusText}`);
            }

            const encryptedDataBuffer = await response.arrayBuffer();
            const encryptedData = new Uint8Array(encryptedDataBuffer);

            const header = encryptedData.slice(0, 8);
            const headerText = new TextDecoder().decode(header);
            if (headerText !== "Salted__") {
                throw new Error("Invalid encrypted file format.");
            }

            const salt = encryptedData.slice(8, 16);

            const ciphertext = encryptedData.slice(16);

            const passwordBytes = new TextEncoder().encode(password);
            const keyMaterial = await window.crypto.subtle.importKey(
                "raw",
                passwordBytes,
                "PBKDF2",
                false,
                ["deriveBits"]
            );

            const keyIvBits = await window.crypto.subtle.deriveBits(
                {
                    name: "PBKDF2",
                    salt: salt,
                    iterations: 100000,
                    hash: "SHA-256",
                },
                keyMaterial,
                32 * 8 + 16 * 8  // 32 bytes for key + 16 bytes for IV
            );

            const keyIvBytes = new Uint8Array(keyIvBits);
            const keyBytes = keyIvBytes.slice(0, 32);
            const ivBytes = keyIvBytes.slice(32);

            const key = await window.crypto.subtle.importKey(
                "raw",
                keyBytes,
                { name: "AES-CBC" },
                false,
                ["decrypt"]
            );

            const decryptedBuffer = await window.crypto.subtle.decrypt(
                {
                    name: "AES-CBC",
                    iv: ivBytes,
                },
                key,
                ciphertext
            );

            const decryptedData = new Uint8Array(decryptedBuffer);

            const originalFileName = getOriginalFileName(filePath);
            const fileExtension = getFileExtension(originalFileName);

            if (fileExtension === "pdf") {
                const blob = new Blob([decryptedData], { type: "application/pdf" });
                const url = URL.createObjectURL(blob);

                const link = document.createElement("a");
                link.href = url;
                link.download = originalFileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            } else if (fileExtension === "link") {
                const linkContent = new TextDecoder().decode(decryptedData);
                window.open(linkContent.trim(), "_blank");
            } else {
                throw new Error("Unsupported file type.");
            }
        } catch (err) {
            if (err.message != NO_PASSWORD_ERR) {
                console.error("Error in handleDownload:", err);
                Swal.fire({
                    title: "Error",
                    text: err.message,
                    icon: "error",
                    customClass: {
                        confirmButton: "swal-error-confirm",
                    },
                });
            }
        }
    };

    function getOriginalFileName(filePath) {
        const pathParts = filePath.split("/");
        let fileName = pathParts[pathParts.length - 1];

        if (fileName.endsWith(".enc")) {
            fileName = fileName.slice(0, -4);
        }

        return fileName;
    }

    function getFileExtension(fileName) {
        return fileName.split(".").pop().toLowerCase();
    }

    return (
        <button
            onClick={handleDownload}
            className="text-md lg:text-lg"
        >
            Download
        </button>
    );
};

export default DecryptDocument;
