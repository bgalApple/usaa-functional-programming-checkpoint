const src = require('./src')

describe(`#fnAsArguments`, () => {

  const callback = jest.fn()
  callback.mockReturnValue(1337)

  test(`returns the same value passed`, () => {
    expect(src.fnAsArguments(callback)).toEqual(1337)
  })

  test(`mock is called once`, () => {
    expect(callback.mock.calls.length).toEqual(1)
  })

})

describe(`#fnAsReturnValue`, () => {

  const returnedFn = src.fnAsReturnValue(1644)

  test(`return value is a function`, () => {
    expect(typeof returnedFn).toEqual(`function`)
  })

  test(`returns same value passed`, () => {
    expect(returnedFn()).toEqual(1644)
  })

})

describe(`#push`, () => {

  let array = ['Denver', 'Platte']
  const result = src.push(array, 'Galvanize')

  test(`does not change original array`, () => {
    expect(array.length).toEqual(2)
  })

  test(`has new value added`, () => {
    expect(result).toEqual(['Denver', 'Platte', 'Galvanize'])
  })

})
