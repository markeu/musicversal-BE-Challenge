Musiversal Backend Challenge

In musiversal's mission we are looking to make anybody a music creator, assisting people to create music. Our users are now creating songs using a mini digital audio workstation.

We want to provide our users the ability to download this compilations. For that we have to create a service, that will allow us to compile the song and download it from the frontend.

### REST API Docs

[Challenge documentation link](https://documenter.getpostman.com/view/12448738/Uz5KjZ8m)

### Required Features
```
User can create compilation.
User can get all saved compliation.
User can download saved compilation.
User can get all sample audio files.

```

Put your samples to **./data/audios** directory
Expect to find merged tracks in **./data/tracks** directory

**IMPORTANT NOTICE**
API using utility **ffmpeg** .
(Fast Forward MPEG) An open source multimedia project for working with audio and video. Based on the "libavcodec" A/V codec library and "libavformat". FFmpeg can handle the entire process of transcoding, video and image manipulation (resizing, denoising, etc.), packaging, multiplexing framework,  streaming and playback.

##This is mandatory requirement must be installed first.##
You can download static builds of ffmpeg from [here](https://johnvansickle.com/ffmpeg/). If you are lucky to use brew on MacOS, just run:
### `brew install ffmpeg`

Please, install dependencies before using.
### `yarn`

## Available Scripts

In the project directory, you can run:

### `yarn start:dev`

Runs the app in the development mode.
The page reloads on edits.
You will likewise see any lint errors when the test suites runs. \
Open [http://localhost:3001](http://localhost:3001) to test the endpoints on postman (referencing the documentation).

### `yarn test`

Launches the test runner.\




