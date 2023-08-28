<script context="module" lang="ts">
  export type { Hit } from "instantsearch.js";

  export type HitsTypes = HitsConnectorParams & {
    classes?: Partial<HitsClasses>;
  };

  export type HitsClasses = {
    /**
     * Class names to apply to the root element
     */
    root: string;
    /**
     * Class names to apply to the root element without results
     */
    emptyRoot: string;
    /**
     * Class names to apply to the list element
     */
    list: string;
    /**
     * Class names to apply to each item element
     */
    item: string;
  };
</script>

<script lang="ts">
  import { connectHits } from "instantsearch.js/es/connectors";
  import type { HitsConnectorParams } from "instantsearch.js/es/connectors/hits/connectHits";
  import connect from "$lib/connect";
  import { cx } from "$lib/utils";

  type $$Props = HitsTypes;

  export let escapeHTML: $$Props["escapeHTML"] = undefined;
  export let transformItems: $$Props["transformItems"] = undefined;
  export let classes: NonNullable<$$Props["classes"]> = {};

  const state = connect(
    connectHits,
    {
      escapeHTML,
      transformItems,
    },
    { $$widgetType: "svelte-ais.hits" }
  );
  $: ({ hits, sendEvent } = $state || { hits: [], sendEvent: (_: any) => {} });
</script>

<div
  class={cx(
    "ais-Hits",
    classes.root,
    hits.length === 0 && cx("ais-Hits--empty", classes.emptyRoot)
  )}
>
  <ol class={cx("ais-Hits-list", classes.list)}>
    {#if hits}
      {#each hits as hit}
        <li class={cx("ais-Hits-item", classes.item)}>
          <slot {hit} {sendEvent}>
            <div style="word-break: break-all;">{JSON.stringify(hit).slice(0, 100)} /></div>
          </slot>
        </li>
      {/each}
    {/if}
  </ol>
</div>
