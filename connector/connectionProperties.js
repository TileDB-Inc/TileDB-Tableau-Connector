(function propertiesbuilder(attr) {

    function getRememberMe() {
        const value = attr["rememberme"];
        if (value === 0 || value === "0") {
            return "false";
        } else {
            return "true";
        }
    }

    function getVerifySSL() {
        const value = attr["verifyssl"];
        if (value === 0 || value === "0") {
            return "false";
        } else {
            return "true";
        }
    }

    function getOverwritePrevious() {
        const value = attr["overwriteprevious"];
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

    const key = attr["apikey"];
    if (key !== "") {
        props["apiKey"] = key;
    }

    props["rememberMe"] = getRememberMe();
    props["verifySSL"] = getVerifySSL();
    props["overwritePrevious"] = getOverwritePrevious();

    return props;
})
