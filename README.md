# Fizzy

This is a subtheme of Bootstrap, with some CiviCRM specific tweaks.

## Using

## Building

We host copies of this theme on https://projects.fuzion.co.nz

Here's the process to generate a new release:

    git push origin 7.x-1.x
    git tag 7.x-1.4
    git push origin 7.x-1.4
    cd ..
    tar -czvf fizzy-7.x-1.4.tar.gz fizzy/*
    zip fizzy-7.x-1.4.zip fizzy/*

Then publish the release:

    * Visit https://projects.fuzion.co.nz/node/6/edit
    * Add a new release node in this form
    * Version: 7.x-1.4
    * API version: 7.x
    * Version major: 1
    * Version minor: 4 (in this instance)
    * Attach tgz and zip files generated above
