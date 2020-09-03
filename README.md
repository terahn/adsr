# ADSR

## A hub for sharing and creating custom samples for music production

### Tech Stack

- React
- Express
- Node
- GraphQL
- MongoDB

### Database Design

What data do we need to store?

- Users
- Sounds

#### User

```json
{
  "username": "montebooker",
  "email": "mbooker@gmail.com",
  "sounds": []
}
```

#### Sound

```json
{
    name: 'Sine wave synth',
    type: SOUND | KIT,
    file: AUDIO,
    tags: 'synth', 'sine', 'chill',
    downloads: 25,
    likes: 10,
}
```
