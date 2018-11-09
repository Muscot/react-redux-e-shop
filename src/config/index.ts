
interface IConfig {
    host: string,
    name: string,
    currency: string
}


const config:IConfig = {
    host: '',
    name: '',
    currency: 'SEK'
}

if (process.env.NODE_ENV === 'development')
{
    config.name = 'api mock server'
    config.host = 'http://localhost:8181'
}
else
{
    config.name = 'api prod server'
    config.host = 'http://localhost:8181'
}

export default config
