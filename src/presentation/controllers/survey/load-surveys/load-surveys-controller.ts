import { HttpRequest, HttpResponse, LoadSurveys } from './load-surveys-controller-protocols'

interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse | null>
}

export class LoadSurveysController implements Controller {
  constructor (private readonly loadSurveys: LoadSurveys) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse | null> {
    await this.loadSurveys.load()
    return null
  }
}
