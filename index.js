function shout(string)
{
return string.toUpperCase()
}
function whisper(string)
{
  return string.toLowerCase()
}
function logShout(string)
{
  console.log(string.toUpperCase())
}
function logWhisper(string)
{
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string)
{
  if (string.toLowerCase()===string)
  {
    return "I can't hear you!"
  }
  if (string.toUpperCase()===string)
  {
    return "YES INDEED!"
  }
  if ("I love you, Grandma."===string)
  {
    return "I love you, too."
  }
=======
  return string.toUpperCase()
  console.log(string)
>>>>>>> 862dd0cb7c07be9dc458f7f9c133239fa2954a8b
}