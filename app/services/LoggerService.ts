type LogType = 'debug' | 'info' | 'success' | 'error'

const log = (type: LogType, ...args: any[]) => {
  if (__DEV__) {
    const logFunction = {
      debug: console.debug,
      info: console.info,
      success: console.log,
      error: console.error,
    }[type]

    if (logFunction) {
      logFunction(...args)
    }
  }
}

const LoggerService = {
  debug: (...args: any[]) => log('debug', ...args),
  info: (...args: any[]) => log('info', ...args),
  success: (...args: any[]) => log('success', ...args),
  error: (...args: any[]) => log('error', ...args),
}

export default LoggerService
