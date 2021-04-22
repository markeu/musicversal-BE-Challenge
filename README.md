= musiversal backend challenge

In musiversal's mission we are looking to make anybody a music creator, assisting people to create music. Our users are now creating songs using a mini digital audio workstation.

Here is a quick figma representation of it:

https://www.figma.com/proto/2jvWGLGf51JZbBGiCuJYHL/Front-end-Developer-Test---Mockup?node-id=15%3A73&viewport=1235%2C373%2C0.2953214943408966&scaling=scale-down-width&page-id=0%3A1

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

Features:
- An API interface from which the frontend can request compilations.
- The final outcome should be an audio file, not another compilation.
- We need to be able to download the file.
- Our frontend engineers will require some instructions over your solution, like some sort of quick API documentation
- This services will be used by millions, so it has to be scalable and good in terms of performance.

Additional requirements:
- We are open in terms of how you want to design the solution and how you want to define the endpoints.
- You can use NodeJS, Python or other technology as long as you explain us why in the readme.
- We need a README.md with launch/setup instructions, any technical choices you have made (which ones and why), additional features/technologies you added and why, known bugs and/or features/technologies that would like to add into this service.
- Upload the code into a github/gitlab repo.
- Some basic knowledge on unit tests is required. It doesn't mean you everything has to be tested, but we want to know you know your way around tests.
- You can use any open source libraries as long as you specify why in the readme.
- If you have any additional question please send us an email.
