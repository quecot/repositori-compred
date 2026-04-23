import React from 'react';
import type { CollectionEntry } from 'astro:content';
import App from './App';

interface Props {
  resources: CollectionEntry<'resources'>[];
}

export default function Component({ resources }: Props) {
  return <App resources={resources} />;
}