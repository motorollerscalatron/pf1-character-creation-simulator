import * as React from 'react';

export interface IHalflingProps {}

export function Halfling(props: IHalflingProps) {
  return (
    <div>
      <h2 className="text-left">Halfling</h2>
      <p className="text-left">
        Halflings tend to be around three feet tall, though mostly human in
        proportion, with perhaps rounder heads and slightly more childlike
        proportions. Their coloration is as variable as the locales they call
        home.
      </p>
    </div>
  );
}
