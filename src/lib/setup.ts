import type { SearchClient } from "instantsearch.js";
import InstantSearch from "instantsearch.js/es/lib/InstantSearch";
import { readonly, writable, type Writable, type Readable } from "svelte/store";

let writableSearchStore: Writable<InstantSearch> = writable();

export function setClient(indexName: string, searchClient: any) {
  searchClient = searchClient as SearchClient;

  let search = new InstantSearch({
    indexName,
    routing: true,
    searchClient,
  });
  search.start();

  writableSearchStore.set(search);
}

export const searchStore: Readable<InstantSearch> = readonly(writableSearchStore);
