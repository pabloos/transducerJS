
const consumer = service => async _ => {
  const result = []

  for await (const entry of service()) {
    result.push(entry)
  }

  return result
}

module.exports = consumer
