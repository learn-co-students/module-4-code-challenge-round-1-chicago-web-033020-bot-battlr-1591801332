import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

const BotCard = props => {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.bot.id}
        // checks if prop.addToYourBots exits. If it does, it executes. If not, it executed props.removeFromYourBots
        // onClick={() => props.addToYourBots ? props.addToYourBots(props.bot) : props.removeFromYourBots(props.bot.id)}
      >
        <div
          className="image"
          // checks if prop.addToYourBots exits. If it does, it executes. If not, it executed props.removeFromYourBots
          onClick={() => props.addToYourBots ? props.addToYourBots(props.bot) : props.removeFromYourBots(props.bot.id)}
        >
          <img alt="oh no!" src={props.bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.bot.name}
            <i className={botTypeClasses[props.bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{props.bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              {props.addToYourBots ? <button className="ui mini red button" onClick={() => props.deleteBot(props.bot.id)}>x</button> : null}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
