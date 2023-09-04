import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Teste unitário UserEntity', () => {
  it('Deve setar props e id', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('Deve aceitar um uuid válido', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const id = 'b1e7b67c-48a9-4155-b06b-cc6f3ca5471c'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it('Deve converter uma entidade para um objeto javascript', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const id = 'b1e7b67c-48a9-4155-b06b-cc6f3ca5471c'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity.toJSON()).toStrictEqual({ id, ...props })
  })
})
