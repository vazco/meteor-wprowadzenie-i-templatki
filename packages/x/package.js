/* Information about this package */
Package.describe({
    // Short two-sentence summary.
    summary: "What this does",
    // Version number.
    version: "1.0.0",
    // Optional.  Default is package directory name.
    name: "usera:paczkab",
    // Optional github URL to your source repository.
    git: "https://github.com/something/something.git"
});

/* This defines your actual package */
Package.onUse(function (api) {
    // If no version is specified for an 'api.use' dependency, use the
    // one defined in Meteor 0.9.0.
    api.versionsFrom('0.9.0');
    // Use Underscore package, but only on the server.
    // Version not specified, so it will be as of Meteor 0.9.0.
    api.use('underscore');

    // Specify the source code for the package.
    api.addFiles('dir/plik.js');
});