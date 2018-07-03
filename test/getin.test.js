import getIn from '../src/index';
import {test} from 'mocha';
import {expect} from 'chai';
import {fromJS} from 'immutable';

const testObj = {
    items: [
        {
            title: 'Item 0'
        },
        {
            title: 'Item 1'
        },
    ]
}

test('Get in by path', () => {
    const value = getIn(testObj, 'items', 1, 'title')
    expect(value).to.be.equal('Item 1')
})

test('Get in by path (as array)', () => {
    const value = getIn(testObj, ['items', 1, 'title'])
    expect(value).to.be.equal('Item 1')
})

test('Get in by unexisting path', () => {
    const value = getIn(testObj, 'goods', 1, 'prices', 0, 'discount')
    expect(value).to.be.undefined
})

test('Get in from undefined', () => {
    const value = getIn(undefined, 'path', 0, 1)
    expect(value).to.be.undefined
})

test('Get in from null', () => {
    const value = getIn(null, 'path', 0, 1)
    expect(value).to.be.null
})

test('Get in from immutable', () => {
    const imm = fromJS(testObj);
    const value = getIn(imm, 'items', 1, 'title')
    expect(value).to.be.equal('Item 1')
})

test('Get in from nested immutable', () => {
    const imm = [fromJS(testObj)];
    const value = getIn(imm, 0, 'items', 1, 'title')
    expect(value).to.be.equal('Item 1')
})