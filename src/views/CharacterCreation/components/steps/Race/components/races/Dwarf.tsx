import * as React from 'react';

export interface IDwarfProps {}

export function Dwarf(props: IDwarfProps) {
  return (
    <div>
      <h2 className="text-left">Dwarf</h2>
      <p className="text-left">
        A dwarf is a stout humanoid, usually a head shorter than their human
        counterparts, but much broader. They have thick, heavy bones, tightly
        packed muscular sinew, and stability unmatched by other races. This bulk
        also causes dwarves to weigh as much, if not more than human men.
      </p>
    </div>
  );
}
