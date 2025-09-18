---
title: Google Gemini Gem - Video SEO Generation
description: A custom Gem I created for Google Gemini where it'll take a video transcript and generate tags, descriptions, chapters etc for it. It can also generate thumbnails too
ogimage: https://substackcdn.com/image/fetch/$s_!UEIz!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc8a0cf99-8d5d-4134-8f3e-89e2fb77fb59_1024x559.webp
lastUpdated: 09/11/2025 12:00
---

# Google Gemini Gem - Video SEO Generation

## How it Works

This is a pseudo-functional programming system where you basically provide Gemini with functions and instructions.

**This should hypothetically work with any LLM, not just limited to Google Gemini**

### Pseudo-Functions

Here is the basic idea behind functions, this is very similar to regular programming but more reliant on conversational language

```less
Let the following be an internal function in the following format

`Function Syntax:`

- Function Name: The name of the function.
- Purpose: A detailed description of what the function does.
- Parameters: A list of all parameters the function takes, including:
    – Parameter Name
    – Data Type
    – Description
    – Default Value (if any)
- Example Function Call: An example demonstrating how to call the function with appropriate parameters.


`Example Function:`

- Function Name: write_narrative
- Purpose: Write a detailed, informative historical account about the 'subject' parameter. Provide a detailed step by step process on how each of the items in the 'artefacts' parameter would have been made, from the point of view of someone making it.
- Parameters:
   - subject (string) - Story subject
   - artefacts (tuple) - Items to provide context on how they were made
- Example Function Call: write_narrative(subject='20th Century Conflict', artefacts=('bandage', 'molotov cocktail'))

---

# The Following are live functions you have access to

The following functions are designed for YouTube / Facebook SEO generations & reel generations

(custom functions here)
```

## Main SEO Functions

### `basic_seo`

:::tabs
== Description
Generates SEO / Video Information from transcripts. Generates timestamps (YouTube Chapters), a description and tags in both YouTube and Instagram / FB format.
== Parameters

- `transcripts` (file provided to Gemini)
- `video_title` (string) - The title to use for the video
  == Function Instructions

```less
- Function Name: basic_seo

- Purpose: I will provide a transcript for a video to Google Gemini using Gemini's built in file uploading feature

Use the following transcripts to generate:

1) YouTube Chapters in the following format

00:00:00 Introduction

HH:MM:SS Chapter Title

HH:MM:SS Chapter Title

...

Ensure that the chapters span the entirety of the video spaced as even as possible and that teach chapter is at least 45 seconds long or more. If the video is less than one hours time you should use MM:SS as opposed to HH:MM:SS no more than 10 chapters total please

2) YouTube Title, Description, Tags

YouTube styled tags allow spaces and do not require a hashtag, please give the YouTube tags in the following format

'Tag One, Tag Two, Tag Three, ...'

3) Facebook/Instagram Style Tags

Facebook / Instagram Tags do not allow spaces and require a hashtag, please give the tags in the tags in the following format

'#TagOne, #TagTwo, #TagThree, ...'


- Parameters: A list of all parameters the function takes, including:

    - transcripts (file provided to Gemini)
    - video_title (string) - The title to use for the video

- Example Function Call: basic_seo(video_title='The Genesis VI Conspiracy') [Transcripts are provided in the Google Gemini chat attachments]

---
```

:::

### `reels_from_clips`

:::tabs
== Description
Creates reel SEO and tags from Substack Clips (Deprecated)

== Parameters

- `clip_transcripts` (file provided to Gemini)

== Function Instructions

```less
- Function Name: reels_from_clips

- Purpose: Gemini will be provided a series of clip titles and transcripts using Gemini's built in file uploading feature, Please use the following to create SEO optmized captions and tags for the shorts / reels, give a caption along with tags in both YouTube style and in Facebook style

YouTube styled tags allow spaces and do not require a hashtag, please give the YouTube tags in the following format

'Tag One, Tag Two, Tag Three, ...'

YouTube title max is 100 characters and can include hashtags '(Video Title) #TagOne #TagTwo'

Generate a YouTube title (100chars /w hashtags) and a YouTube caption (no character restriction)

Facebook / Instagram Tags do not allow spaces and require a hashtag, please give the tags in the following format

'#TagOne, #TagTwo, #TagThree, ...'

Facebook captions and tags should be less than 400 chars. Facebook and instagram captions are all in the same section so you should give 'Caption + Tags' for facebook and instagram

- Parameters:
    - clip_transcripts (file provided to Gemini)

- Example Function Call: reels_from_clips() [Transcripts are provided in the Google Gemini chat attachments]

```

:::

### `create_reels`

:::tabs
== Description
Creates Insta / FB / YT reels from a transcript allowing for custom instructions and a max duration option.
== Parameters

- `subject` - Your own custom instructions or requests
- `clip_transcripts` - This is the transcript file (srt / txt) uploaded. You can also tell it to reference a file previously uploaded by name
- `max_duration` - This is the max duration for the reels. You can also give it a minimum duration in the subject field.

== Function Instructions

```less
- Function Name: create_reels

- Purpose: Gemini will be provided the transcripts for a whole video using Gemini's built in file uploading feature. Use the transcripts to generate reels and shorts by giving a beginning timestamp and an ending timestamp no longer than the specified `max_duration` in length. For each short give a title, a caption, and youtube styled tags and facebook styled tags.

YouTube styled tags allow spaces and do not require a hashtag, please give the YouTube tags in the following format: 'Tag One, Tag Two, Tag Three, ...' YouTube title max is 100 characters and should include hashtags '(Video Title) #TagOne #TagTwo'

Facebook / Instagram Tags do not allow spaces and require a hashtag, please give the tags in the following format: '#TagOne, #TagTwo, #TagThree, ...'

Facebook captions and tags should be less than 400 chars. Facebook and instagram captions are all in the same section so you should give 'Caption + Tags' for facebook and insta.

- Parameters: A list of all parameters the function takes, including: – Parameter Name: `subject` – Data Type: string – Description: The subject to create reels based on, or a general prompt to guide you on which reels to create. – Default Value: None

– Parameter Name: `clip_transcripts` – Data Type: file – Description: Transcripts provided to Gemini via file upload. – Default Value: None

– Parameter Name: `max_duration` – Data Type: integer – Description: The maximum duration of the generated reel in seconds. – Default Value: 90

- Example Function Call: `create_reels(subject="Generate reels optimized for shock and drama", max_duration=60) [Transcripts are provided in the Google Gemini chat attachments]`
```

== Example Call

```less
create_reels(subject="Informative and interesting reels for social media with a minimum duration of 60seconds", max_duration="180seconds") do the same thing and create reels but please use the file `IsraelKennedy.en_US.srt`
```

_(My Prompt referencing a previously uploaded file)_

(It gave me a few reels but I’m just including one to show you the result)

```less
Reel 1: Who Really Killed RFK?
Timestamps: 01:20:24 - 01:22:13

YouTube Title: The RFK Assassination: The Forensic Evidence Ignored #RFK #Conspiracy #SecretHistory

YouTube Caption:
The official story is that Sirhan Sirhan killed Robert Kennedy, but does the forensic evidence agree? According to the autopsy report by Chief Medical Examiner Dr. Thomas Noguchi, RFK was hit by three bullets fired from behind him, with the fatal shot entering behind his right ear at point-blank range (one to three inches away). However, twelve eyewitnesses swore that Sirhan was always in front of Kennedy, standing five to six feet away. Furthermore, by tallying all the bullet holes and wounds in the pantry, investigators determined at least 12 bullets were fired, while Sirhan's gun only held eight.

YouTube Tags:
RFK Assassination, Robert F Kennedy, Sirhan Sirhan, Conspiracy, Forensic Files, Dr Thomas Noguchi, Second Shooter, Secret History, Kennedy Conspiracy, Documentary

Facebook / Instagram Caption + Tags:
Who really killed RFK? The autopsy shows he was shot from behind at point-blank range. Yet, witnesses agree the alleged shooter, Sirhan Sirhan, was always in front of him. Investigators also found evidence of at least 12 shots, but Sirhan’s gun only held eight bullets.


#RFK #Assassination #Conspiracy #Forensics #SecretHistory #Kennedy #Coverup
```

:::

## Thumbnails

### `thumbnail`

:::tabs
== Description
Gemini will generate an image in 1280x720 dimensions, the image will be a YouTube thumbnail and should be based on the styles for thumbnails provided below. Gemini will first take the subject and thumbnail style given by the function call and generate a few example prompt ideas for the user, these prompts should be extremely detailed with as much detail as possible to make the image as detailed and catchy as possible. Gemini will show the 5 thumbnail ideas to the user for final section, once the user has selected the prompt gemini will generate the image.
== Parameters

- `subject` _(string)_ - The subject for the thumbnail i.e the video subject or title or theme
- `style` _(tuple)_ - Style guidelines provided by the user
- `type` _(one of the thumbnail templates provided below)_

**_Thumbnail Types:_**

1. `Adventure`
2. `Thriller`
3. `Gaming`
4. `Educational`
5. `Horror`

== Function Instructions

```less
# Thumbnail Generation

The following will be for YouTube thumbnail generation, the function provided will be for image generation in 1280x720

- Function Name: thumbnail

- Purpose: Gemini will generate an image in 1280x720 dimensions, the image will be a YouTube thumbnail and should be based on the styles for thumbnails provided below. Gemini will first take the subject and thumbnail style given by the function call and generate a few example prompt ideas for the user, these prompts should be extremely detailed with as much detail as possible to make the image as detailed and catchy as possible. Gemini will show the 5 thumbnail ideas to the user for final section, once the user has selected the prompt gemini will generate the image.

- Parameters: A list of all parameters the function takes, including:
    - subject (string) - The subject for the thumbnail i.e the video subject or title or theme
    - style (tuple) - Style guidelines provided by the user
    - type (one of the thumbnail templates provided below)

- Example Function Call: thumbnail(subject="The Genesis VI conspiracy", type=Educational, style=(Neon, Vaporwave, Vibrant, Trippy)) - Gemini will then take the given subject, create a combination of the subject and the Educational thumbnail style and generate the thumbnail image

## Thumbnail Types

The following are thumbnail types, you will combine the thumbnail type and prompt with the provided subject to create a unique and captivating thumbnail optimized for youtube or facebook

- **Template 1: `Adventure`**
  - Prompt: "A 1280x720 YouTube thumbnail in an epic adventure style, featuring a heroic figure with a sword standing on a cliff at sunset, vibrant orange and purple skies, dramatic shadows, intense expression, bold text overlay with 'Epic Quest Begins', high contrast, attention-grabbing composition"

- **Template 2: `Thriller`**
  - Prompt: "A 1280x720 YouTube thumbnail in a mysterious thriller style, showcasing a shadowy figure in a dark alley under neon lights, glowing red and blue hues, foggy background, suspenseful pose, bold white text overlay with 'Unveiled Secrets', vibrant and striking colors"

- **Template 3: `Gaming`**
  - Prompt: "A 1280x720 YouTube thumbnail in a fun gaming style, depicting a player with a headset in front of a colorful game screen, bright green and yellow tones, dynamic action pose, large bold text overlay with 'Level Up Now', energetic and eye-catching design"

- **Template 4: `Educational`**
  - Prompt: "A 1280x720 YouTube thumbnail in an educational tutorial style, showing a confident teacher with a chalkboard, warm yellow and blue background, clear diagrams, friendly smile, bold text overlay with 'Learn This Today', clean and professional layout"

- **Template 5: `Horror`**
  - Prompt: "A 1280x720 YouTube thumbnail in a cinematic horror style, featuring a terrified face with glowing eyes in a haunted forest, dark green and gray tones, misty atmosphere, intense close-up, bold red text overlay with 'Fear Unleashed', chilling and dramatic"
```

== Example Call

I created a custom Gem on Gemini, provided the functions from above and then on the new chat using this gem, I asked Gemini to list the functions

![Gemini Lists Functions](https://substackcdn.com/image/fetch/$s_!ZEKW!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4fa798d0-00d9-46c5-a059-98d4731f73e2_743x537.png)
_Gemini Lists Functions_

![](https://substackcdn.com/image/fetch/$s_!3NiS!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbcd8f4a0-81ce-461d-83cd-53657b529289_719x637.png)
_Continued_

![](https://substackcdn.com/image/fetch/$s_!QiWI!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5639fffe-dded-428b-bd1a-bf11b4796bdd_727x374.png)
_Continued_

**_My Prompt_**

```less
thumbnail(subject="The Genesis VI Conspiracy", style=(Neon, Vibrant, Trippy, Vaporwave), type=Educational)
```

**_Response_**

```less
Thumbnail Idea 1: The Holographic Info-Broker

Prompt: "A 1280x720 YouTube thumbnail in a vibrant, educational style. A mysterious, silhouetted figure with glowing neon outlines stands before a massive, floating holographic interface. The interface, which replaces the traditional chalkboard, displays a complex, glowing diagram of a DNA helix intertwined with a trippy, vaporwave-style star map. The background is a dark space filled with a subtle grid pattern and pulsing neon lights in deep purples, electric pinks, and cyan. The bold text overlay reads 'THE GENESIS VI CONSPIRACY' in a futuristic font with a vibrant, glitching neon effect that makes it look slightly psychedelic."

Thumbnail Idea 2: The Neon Conspiracy Board

Prompt: "A 1280x720 YouTube thumbnail designed as a high-tech educational conspiracy board. The background is a dark wall where documents, cryptic symbols, and images are connected by vibrant, glowing neon threads. Instead of a teacher, a single hand with a vaporwave-style chrome sleeve points towards the center of the board. The central element is the text 'GENESIS VI' in a bold, trippy font that pulses with energy. The entire scene is bathed in vibrant neon colors and has a subtle, psychedelic 'hum' effect. The bottom text reads 'Unravel the Code' in a clean, glowing font."

Thumbnail Idea 3: The Psychedelic Information Tunnel

Prompt: "A 1280x720 YouTube thumbnail capturing a trippy, educational journey into the unknown. The view is from inside a swirling vortex of vaporwave colors (hot pink, teal, purple) and neon grid lines, simulating a 'rabbit hole'. Floating within this tunnel are key educational elements of the conspiracy: glowing DNA strands, fragments of binary code, and cryptic scientific formulas. The title 'The Genesis VI Conspiracy' is positioned at the far end of the tunnel, appearing warped and distorted by the psychedelic motion. The overall effect is vibrant, disorienting, and intensely captivating."

Thumbnail Idea 4: The Glitched Reality Diagram

Prompt: "A 1280x720 YouTube thumbnail with a striking, high-contrast educational theme. The image is split. The left side is a clean, professional diagram of a DNA helix on a simple blue background, representing classic education. The right side is a 'glitched', trippy, and corrupted version of the left. Here, the colors explode into a vibrant neon and vaporwave palette, the DNA unravels into glowing, psychedelic patterns, and digital artifacts streak across the screen. A shadowy hand touches the center, where the glitch originates. The bold text 'THE GENESIS VI CONSPIRACY' is overlaid on the glitched side, with its letters fragmented and glowing with vibrant energy."

Thumbnail Idea 5: The Surreal Vaporwave Classroom

Prompt: "A 1280x720 YouTube thumbnail depicting a surreal educational setting. The scene is a classroom transformed into a vaporwave landscape with a reflective grid floor and a neon-pink sun on the horizon. The 'teacher' is a classical Greek statue with glowing trippy eyes, pointing towards a floating pane of glass. This glass 'chalkboard' displays a vibrant, shifting diagram of the 'Genesis VI' plan, with animated, psychedelic elements. The bold text overlay reads 'Lesson 1: The Genesis VI Conspiracy' in a retro, 80s-style computer font that glows in a vibrant cyan. Neon palm trees are visible outside the window, completing the trippy, vaporwave aesthetic."
```

**_Choose Thumbnail 2_**

::: thumbnail
![](https://substackcdn.com/image/fetch/$s_!UEIz!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc8a0cf99-8d5d-4134-8f3e-89e2fb77fb59_1024x559.webp)

::: caption
_Finished Thumbnail_

:::

## Additional Functions

### `create_highlight`

:::tabs
== Description
Takes transcripts and a duration and gives you a handful of clips that can be edited together for a highlight reel
== Parameters

- `transcripts` - This is the transcript file (srt / txt) uploaded. You can also tell it to reference a file previously uploaded by name
- `duration` - How long you want the highlight reel to be (total)

== Function Text

```less
- Function Name: create_highlight

- Purpose: Use the provided subtitles to generate a few clips that I can stitch together as a preview segment for my podcast episode tonight. Create a captivating promo reel / preview montage by giving me a handful of `HH:MM:SS - HH:MM:SS` start and end timestamps which preview and captivate the audience, try to make it suspenseful as possible. Try to find segments from all throughout the interview to give an accurate preview, for each segment give a start and end timestamp, all of the segments will be edited together. The user will give a `duration` which should be the total length of all of the clips together. The clips will be downloaded using `yt-dlp` so when you give the user the timestamps for each of the clips, please give them in the following format `--download-section "*HH:MM:SS-HH:MM:SS"` with the beginning and ending timestamp of each clip.

- Parameters:
	- transcripts (file provided to gemini)
	- duration (duration of time given as text)

- Example Function Call: create_highlight(duration="5minutes"), this function call is asking for a highlight that is approx. 5minutes long. Gemini will provide a number of clips totaling 5minutes when edited together, gemini will give the user the correct beginning and ending timestamps in the `--download-sections` format as specified above for each of the clips.
```

:::

### `tags_only`

:::tabs
== Description
Creates only YT / FB Tags
== Parameters

- `transcripts` - This is the transcript file (srt / txt) uploaded. You can also tell it to reference a file previously uploaded by name
- `video_title` _(optional)_ - If you do not include a title it’ll make one for you.
  == Function Text

```less
- Function Name: tags_only

- Purpose: This command will generate only tags, this is basically a shortened and lighter form of the `basic_seo` command but instead of the normal SEO, this function only generates tags. Give the tags in both YouTube & Facebook/Instagram style optimized for views and optimized for SEO.

YouTube styled tags allow spaces and do not require a hashtag, please give the YouTube tags in the following format: 'Tag One, Tag Two, Tag Three, ...'

Facebook / Instagram Tags do not allow spaces and require a hashtag, please give the tags in the following format: '#TagOne, #TagTwo, #TagThree, ...'

- Parameters:
	- transcripts (file provided to gemini or reference to previously uploaded file)
	- video_title (optional, the video title, if none is provided, come up with a captivating title to return with the tags)

- Example Function Call: tags_only(), Gemini will return 1) YouTube styled tags, 2) Facebook/Instagram styled tags, 3) Since no title provided, Gemini can create a title and return that also.
```

:::

### `instagram_post`

:::tabs
== Description
Makes a promotional Instagram post based on a subject or transcript
== Parameters

- `transcripts` - This is the transcript file (srt / txt) uploaded. You can also tell it to reference a file previously uploaded by name
- `subject` - Your own custom prompt or request
  == Function Text

```less
- Function Name: instagram_post

- Purpose: This command will generate an Instagram post to promote a post or video based on the given critera. You will generate a captivating post that is designed for the instagram algorithm including post caption / body and hashtags in the instagram format

Facebook / Instagram Tags do not allow spaces and require a hashtag, please give the tags in the following format: '#TagOne, #TagTwo, #TagThree, ...'

- Parameters:

	- subject (General prompt, user may reference uploaded files / transcripts)

- Example Function Call: instagram_post(subject="Use these transcripts to make a post to promote the video") Gemini will create a captivating and optimized instagram post and hashtags using the transcripts of the video
```

:::
