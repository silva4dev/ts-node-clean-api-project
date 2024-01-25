import { HttpRequest, HttpResponse, Validation } from './add-survey-controller-protocols'
import { badRequest } from '../../../helpers/http/http-helper'

interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse | null>
}

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse | null> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }
    return new Promise((resolve) => { resolve(null) })
  }
}
