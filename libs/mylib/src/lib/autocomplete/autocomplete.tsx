import {
  Autocomplete as AutocompleteBase,
  FormControl,
  TextInputWithTokens,
} from '@primer/react';
import React from 'react';

/* eslint-disable-next-line */
export interface AutocompleteProps {}

export const Autocomplete = () => {
  const [tokens, setTokens] = React.useState([{ text: 'zero', id: 0 }]);
  const selectedTokenIds = tokens.map((token) => token.id);
  const [selectedItemIds, setSelectedItemIds] =
    React.useState(selectedTokenIds);
  const onTokenRemove = (tokenId: any) => {
    setTokens(tokens.filter((token) => token.id !== tokenId));
    setSelectedItemIds(selectedItemIds.filter((id) => id !== tokenId));
  };
  const onSelectedChange = (newlySelectedItems: any) => {
    if (!Array.isArray(newlySelectedItems)) {
      return;
    }

    setSelectedItemIds(newlySelectedItems.map((item) => item.id));

    if (newlySelectedItems.length < selectedItemIds.length) {
      const newlySelectedItemIds = newlySelectedItems.map(({ id }) => id);
      const removedItemIds = selectedTokenIds.filter(
        (id) => !newlySelectedItemIds.includes(id)
      );

      for (const removedItemId of removedItemIds) {
        onTokenRemove(removedItemId);
      }

      return;
    }

    setTokens(newlySelectedItems.map(({ id, text }) => ({ id, text })));
  };

  return (
    <FormControl>
      <FormControl.Label>Pick options</FormControl.Label>
      <AutocompleteBase>
        <AutocompleteBase.Input
          as={TextInputWithTokens}
          tokens={tokens}
          onTokenRemove={onTokenRemove}
        />
        <AutocompleteBase.Overlay>
          <AutocompleteBase.Menu
            items={[
              { text: 'zero', id: 0 },
              { text: 'one', id: 1 },
              { text: 'two', id: 2 },
              { text: 'three', id: 3 },
              { text: 'four', id: 4 },
              { text: 'five', id: 5 },
              { text: 'six', id: 6 },
              { text: 'seven', id: 7 },
            ]}
            selectedItemIds={selectedItemIds}
            onSelectedChange={onSelectedChange}
            selectionVariant="multiple"
          />
        </AutocompleteBase.Overlay>
      </AutocompleteBase>
    </FormControl>
  );
};
