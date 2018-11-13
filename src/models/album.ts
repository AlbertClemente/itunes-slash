import { JsonProperty } from 'json-typescript-mapper';

export class Album{
  @JsonProperty('artworkUrl100')
  artworkUrl100: string = undefined;
  @JsonProperty('artistName')
  artistName: string  = undefined;
  @JsonProperty('collectionName')
  collectionName: string = undefined;
  @JsonProperty('releaseDate')
  releaseDate: string = undefined;
  @JsonProperty('trackCount')
  trackCount: string = undefined;
}
