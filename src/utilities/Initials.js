const Initials = function(name) {
  let parts = name.split(' '),
    initials = parts[0].substring(0, 1).toUpperCase()

  if (parts.length > 1) {
    initials += parts[parts.length - 1].substring(0, 1).toUpperCase()
  }

  return initials
}

export default Initials
