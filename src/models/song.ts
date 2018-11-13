import { JsonProperty } from 'json-typescript-mapper';

export class Song{
  @JsonProperty('artworkUrl100')
  artworkUrl100: string = undefined;
  @JsonProperty('artistName')
  artistName: string = undefined;
  @JsonProperty('trackName')
  trackName: string = undefined;
}
