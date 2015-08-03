CPU Usage Monitoring Application
=======================

## About this
This is a tutoril application to learn how to develop a server plugin of ServiceSync.
This plugin works on ServiceSync DMS (Device Management Server) and receives a CPU usage from a gateway device.

## Scripts

This package contains the following scripts:

- `upload-cpu-usage.js`: Receive a CPU usage information from the IoT/M2M gateway.

*.test.js files under `test` directories are unit testing scripts.

## Models

Describe about the model defined in `package.json`.

## Commands
### Set up

    npm install

### Build & Unit Tests

    grunt

### Packaging

    grunt pack

### Cleaning

    grunt clean

## Version

* 1.0.1

## Change History

#### Changes in `1.0.1` (August 3, 2015)

* Migrate a seed project.

#### Changes in `1.0.0` (March 16, 2015)

* Initial Release
