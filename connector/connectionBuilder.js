(function dsbuilder(attr) {

    const urlBuilder = "jdbc:tiledb-cloud:" + attr["namespace"];

    return [urlBuilder];
})