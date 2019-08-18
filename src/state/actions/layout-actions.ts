import { LayoutAction } from '../../types/layout-types'

export const ALL_SAMPLES = 'ALL_SAMPLES'
export const ADD_SAMPLE = 'ADD_SAMPLE'
export const REMOVE_SAMPLE = 'REMOVE_SAMPLE'
export const CREATE_NEW_SAMPLE = 'CHANGE_NEW_SAMPLE'
export const EDIT_SAMPLE = 'EDIT_SAMPLE'

export function allSamples(layoutAction: LayoutAction) {
  return {
    type: ALL_SAMPLES,
    result: layoutAction.result
  }
}

export function addSample(layoutAction: LayoutAction) {
  return {
    type: ADD_SAMPLE,
    result: layoutAction.result
  }
}

export function removeSample(layoutAction: LayoutAction) {
  return {
    type: REMOVE_SAMPLE,
    result: layoutAction.result
  }
}

export function createNewSample(layoutAction: LayoutAction) {
  return {
    type: CREATE_NEW_SAMPLE,
    result: layoutAction.result
  }
}

export function editSample(layoutAction: LayoutAction) {
  return {
    type: EDIT_SAMPLE,
    result: layoutAction.result
  }
}
