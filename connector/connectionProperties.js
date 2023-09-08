(function propertiesbuilder(attr) {

    function getRememberMe() {
        const value = attr["v-rememberme"];
        if (value === 0 || value === "0") {
            return "false";
        } else {
            return "true";
        }
    }

    function getListPublicArrays() {
        const value = attr["v-listpublicarrays"];
        if (value === 0 || value === "0") {
            return "false";
        } else {
            return "true";
        }
    }

    function getVerifySSL() {
        const value = attr["v-verifyssl"];
        if (value === 0 || value === "0") {
            return "false";
        } else {
            return "true";
        }
    }

    function getOverwritePrevious() {
        const value = attr["v-overwriteprevious"];
        if (value === 0 || value === "0") {
            return "false";
        } else {
            return "true";
        }
    }

    const props = {};

    const usr = attr["username"];
    if (usr !== "") {
        props["username"] = usr;
    }

    const psw = attr["password"];
    if (psw !== "") {
        props["password"] = psw;
    }

    const key = attr["v-apikey"];
    if (key !== "") {
        props["apiKey"] = key;
    }

    props["rememberMe"] = getRememberMe();
    props["verifySSL"] = getVerifySSL();
    props["overwritePrevious"] = getOverwritePrevious();
    props["listPublicArrays"] = getListPublicArrays();

    return props;
})
