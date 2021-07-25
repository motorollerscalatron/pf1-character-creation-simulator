import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '../../../../../../characterCreation.types';

export interface IClassSpecificOptionsProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export default function ClassSpecificOptions(
  props: IClassSpecificOptionsProps
) {
  const { characterState } = props;
  const { characterClass } = characterState;

  return characterClass ? (
    <div className="text-left">
      <h3>Weapon and Armor Proficiencies</h3>
      <p>
        {/* fighter */}A fighter is proficient with all simple and martial
        weapons and with all armor (heavy, light, and medium) and shields
        (including tower shields).
      </p>
      <p>
        {/* rogue */}Rogues are proficient with all simple weapons, plus the
        hand crossbow, rapier, sap, shortbow, and short sword. They are
        proficient with light armor, but not with shields.
      </p>
      <p>
        {/* Paladin */}Paladins are proficient with all simple and martial
        weapons, with all types of armor (heavy, medium, and light), and with
        shields (except tower shields).
      </p>
      <p>
        {/* cleric */}Clerics are proficient with all simple weapons, light
        armor, medium armor, and shields (except tower shields). Clerics are
        also proficient with the favored weapon of their deities.
      </p>
      <p>
        {/* Wizard */}Wizards are proficient with the club, dagger, heavy
        crossbow, light crossbow, and quarterstaff, but not with any type of
        armor or shield. Armor interferes with a wizard’s movements, which can
        cause his spells with somatic components to fail.
      </p>
      <p>
        {/* Sourcerer */}Sorcerers are proficient with all simple weapons. They
        are not proficient with any type of armor or shield. Armor interferes
        with a sorcerer’s gestures, which can cause her spells with somatic
        components to fail.
      </p>
      <h3>Combat Feat{/* (Fighter only) */}</h3>
      <p>As a Fighter, you gain a bonus combat feat.</p>
      <h3>Sneak Attack{/* (Rogue only) */}</h3>
      <p>
        Your attacks deal 1d6 extra damage anytime your target would be denied a
        Dexterity bonus to AC, or when you flank your target.
      </p>
      <h3>Trap Finding{/* (Rogue only) */}</h3>
      <p>
        +1 to Perception checks made to locate traps and +1 to Disable Device
        checks. You can use Disable Device to disarm magic traps.
      </p>
      <h3>Aura of Good{/* (Paladin only) */}</h3>
      <p>At level one, a paladin has a faint aura of good.</p>
      <h3>Smite Evil{/* (Paladin only) */}</h3>
      <p>
        Once per day, as a swift action, Danyell Leman may choose a target
        within sight to smite. If the target is not evil, the smite is wasted
        with no effect. Otherwise, the smite remains in effect until the target
        is dead or Danyell Leman rests.
      </p>
      <p>
        <b>Offense:</b>
      </p>
      <li>+1 to attack rolls against the target.</li>
      <li>+1 to damage rolls against the target.</li>
      <li>
        This bonus damage is doubled on the first successful attack if the
        target is an outsider, dragon, or undead.
      </li>
      <li>Bypass all damage resistance (DR) the target might possess.</li>
      <p>
        <b>Defense:</b>
      </p>
      <li>+1 deflection bonus to AC against attacks made by the target.</li>

      <h3>Deity{/* (Cleric only) */}</h3>
      <p>
        Clerics gain most of their power from their deity. Their deity
        influences their alignment, what magic she can perform, her values, and
        how others see her.
      </p>
      <h3>Domains{/* (Cleric only) */}</h3>
      <p>
        You can choose two domains from among those belonging to his deity. At
        level one, each domain grants a domain power, as well as a bonus spell.
        Each day you can select one of your two domain spells to prepare for
        that day.
      </p>
      <h3>
        Channel Energy
        {/* (Cleric only), choose positive energy or negative energy */}
      </h3>
      <p></p>
      <h3>Spell Casting{/* (Cleric only) */}</h3>
      <p>
        You can cast divine spells which are drawn from the cleric spell list.
        Danyell Leman knows all the level one spells. he must choose and prepare
        his spells in advance each day. Like other spellcasters, a cleric can
        cast only a certain number of spells of each spell level per day. You
        can cast 2 spells per day (not including the bonus domain spell).
      </p>
      <h3>Bloodline{/*Sorcerer only*/}</h3>

      <h3>Favoured Class Bonus</h3>
    </div>
  ) : null;
}
