import { HttpRequest, HttpResponse, Validation } from './add-survey-controller-protocols'

interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse | null>
}

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse | null> {
    this.validation.validate(httpRequest.body)
    return new Promise((resolve) => { resolve(null) })
  }
}
