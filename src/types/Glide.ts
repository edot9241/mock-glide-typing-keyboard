// Input received during glide typing.
export type GlideInput = string[];

// chars - characters of all touched keys
// words - guessed words
export type GlideResult = { chars: string[]; words: string[] };
export type GlideResults = GlideResult[];
