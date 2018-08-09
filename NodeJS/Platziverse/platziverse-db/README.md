# platziverse-db

## Usage
```` js
  const setupDataBase = required('platziverse-db')

  setupDataBase(config).then( db => {
    const { Agent, Metric } = db

  }).catch(err => console.log(err))
````