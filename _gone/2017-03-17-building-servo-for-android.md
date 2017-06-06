---
title:  "Building servo for Android"
date:   2017-03-07 6:30:00 +0800
categories: ['Servo']
tags: ['Build', 'Servo', 'Android']
comments: true
---

In case you don't already know, I will be working on a front-end prototype for the servo browser for my Bachlor's Thesis!  
servo is a new browser engine written from scratch by Mozilla.

<!--more-->

I have a [blog page on hackmd](https://hackmd.io/s/Hkju1t9Fg) which will be used to log and keep track of the progress of the project.

## References

- [servo/servo: The Servo Browser Engine](https://github.com/servo/servo)
- [Building for Android · servo/servo Wiki](https://github.com/servo/servo/wiki/Building-for-Android)

So the first thing is obviously building servo (for Android).  
Here were the steps I went through:


## 1. Setup Virtual Machine

Setup a Kubuntu 16.04 VM with 4GB of RAM.  

Lessons I learned:

- I failed at packaging on (K)ubuntu 16.10 due to Java compatibility issues.
- A minimum of 3GB of RAM is required.


## 2. Install Dependencies

```bash
sudo apt-get install git curl freeglut3-dev autoconf \
    libfreetype6-dev libgl1-mesa-dri libglib2.0-dev xorg-dev \
    gperf g++ build-essential cmake virtualenv python-pip \
    libssl-dev libbz2-dev libosmesa6-dev libxmu6 libxmu-dev \
    libglu1-mesa-dev libgles2-mesa-dev libegl1-mesa-dev libdbus-1-dev
```

Lessons I learned:

- The official build guide names `libssl1.0-dev` which seems to be renamed to `libssl-dev`.


## 3. Install Android SDK & NDK

#### 3.1 Download and install [Android Studio](https://developer.android.com/studio/index.html) to get the SDK. 

Open a new project with Min. API set to 18.

#### 3.2 Install Android NDK manually.

```bash
# Operating on home directory as regular user
cd ~

# Download Android NDK r12b
wget https://dl.google.com/android/repository/android-ndk-r12b-linux-x86_64.zip

# Unzip to the directory of the SDK
unzip android-ndk-r12b-linux-x86_64.zip -d Android/Sdk
```

#### 3.3 Set the Environment Variables

Place these lines inside `.bashrc` (in home directory).

```bash
export ANDROID_SDK="/home/#####/Android/Sdk"
export ANDROID_NDK="/home/#####/Android/Sdk/android-ndk-r12b"
export PATH=$PATH:$ANDROID_SDK/platform-tools
```

 Then reload shell config with:

```bash
source ~/.bashrc
```

Lessons I learned:

- Android NDK r12b is required (Tested with newer versions).
- `ANDROID_SDK` and `ANDROID_NDK` need to be set globally. The official guide is missing the `export` keyword.


## 4. Install Additional Tools

Install all required tools listed on the wiki:

```bash
# Get complete libraries
cd $ANDROID_SDK
tools/android - update sdk --no-ui --all --filter platform-tools,android-18,build-tools-23.0.3

# Install ant
sudo apt-get install ant
```

Install openjdk-7-jdk: (**IMPORTANT**)

```bash
sudo add-apt-repository ppa:openjdk-r/ppa
sudo apt-get update
sudo apt-get install openjdk-7-jdk
``` 

Lessons I Learned:

- The other packages mentioned in the Wiki are either nonexistent or unnecessary, at least for Ubuntu 16.04.
- Both OpenJDK 7 & 8 are required for some reason.


## 5. Building

You need to build servo with **OpenJDK 7** to generate compatible java executables for Android dex.  
Run these following commands to do so: 

```bash
sudo update-alternatives --config java
sudo update-alternatives --config javac
```

Then you can move on to building it:  

```bash
# Get source
git clone https://github.com/mozilla/servo.git
cd servo

# Build
# Replace "--release" with "--dev" to create an unoptimized debug build.
./mach build --release --android
```


## 6. Packaging

You should revert back to **OpenJDK 8** while packaging.  
Again with the same commands: 

```bash
sudo update-alternatives --config java
sudo update-alternatives --config javac
```

Then proceed: 

```bash
./mach package --release --android
```

If all go smoothly, you will get `servo.apk` inside the `target/arm-linux-androideabi/release/` directory.
