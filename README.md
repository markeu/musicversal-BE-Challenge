Musiversal Backend Challenge

In musiversal's mission we are looking to make anybody a music creator, assisting people to create music. Our users are now creating songs using a mini digital audio workstation.

Information gets stored in the frontend within the following object:

```
{
  name: "My song",
  length: 60,
  parts: [
    {"name":"Vocals","duration":11},
    {"name":"Bass","duration":3.3},
    {"name":"Drums","duration":3.3},
    {"name":"Silence","duration":2},
    {"name":"Hammond","duration":3.3},
    {"name":"Silence","duration":2},
    {"name":"Silence","duration":2},
    {"name":"Silence","duration":2},
    {"name":"Silence","duration":2},
    {"name":"Silence","duration":2},
    {"name":"Silence","duration":2},
    {"name":"Silence","duration":2},
  ]
}
```

Params:
- name: Name of the track (required)
- length: Length fo the full compilation (required)
- parts: order of the parts
- each part has a name (assigned to an audio file) and a duration (depending on how long that audio should be played). If the audio is longer than the number of parts, we assume the rest is silence and we cut if it is the other way around.

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
The page will reload if you make edits.
You will also see any lint errors in the console. \
Open [http://localhost:3001](http://localhost:3001) to test the endpoints on postman (referencing the documentation).



