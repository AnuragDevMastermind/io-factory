import http from "../Utils/http-common"
import {
  ALL_ACTORS_ENDPOINT,
  INSERT_ACTOR_ENDPOINT,
} from "../constants/strings"
import { Actor, ActorResponse } from "../types/actor"

class ActorServices {
  getAllActors() {
    return http.post<Array<ActorResponse>>(ALL_ACTORS_ENDPOINT)
  }
  insertActor(actor: Actor) {
    return http.post<ActorResponse>(INSERT_ACTOR_ENDPOINT, actor)
  }
}

export default new ActorServices()
