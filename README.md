# React Native Dimensions API Inconsistency on Android

This repository demonstrates a common issue encountered when using the `Dimensions` API in React Native to retrieve screen dimensions on Android devices.  The problem is that `Dimensions.get('window')` or `Dimensions.get('screen')` might return inaccurate values, particularly during initial rendering or orientation changes, causing unexpected layout behavior.

## Problem Description
The `Dimensions` API is asynchronous, and accessing the dimensions too early can result in stale data. This is amplified on Android where the dimensions might not be available immediately.

## Solution
The solution involves using the `Dimensions` API's `addEventListener` to listen for changes in dimensions and using state to update the component's layout. This ensures that the layout always reflects the correct dimensions, even after orientation changes.

## Reproduction Steps
1. Clone the repository.
2. Run `npm install`.
3. Run the app on an Android device or emulator.
4. Observe the layout and rotate the device.  The incorrect dimensions are initially displayed, leading to layout glitches that are corrected after a delay.