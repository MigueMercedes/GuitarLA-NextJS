// Generated by https://quicktype.io

export interface Guitarras {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id:         number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  nombre:      string;
  descripcion: string;
  precio:      number;
  createdAt:   string;
  updatedAt:   string;
  url:         string;
  imagen:      Imagen;
}

export interface Imagen {
  data: Data;
}

export interface Data {
  id:         number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           Formats;
  hash:              string;
  ext:               EXT;
  mime:              MIME;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          Provider;
  provider_metadata: ProviderMetadata;
  createdAt:         string;
  updatedAt:         string;
}

export enum EXT {
  Jpg = ".jpg",
}

export interface Formats {
  small:     Medium;
  medium:    Medium;
  thumbnail: Medium;
}

export interface Medium {
  ext:               EXT;
  url:               string;
  hash:              string;
  mime:              MIME;
  name:              string;
  path:              null;
  size:              number;
  width:             number;
  height:            number;
  provider_metadata: ProviderMetadata;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
}

export interface ProviderMetadata {
  public_id:     string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = "image",
}

export enum Provider {
  Cloudinary = "cloudinary",
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
