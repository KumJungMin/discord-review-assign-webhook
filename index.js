import { Webhook, MessageBuilder } from "discord-webhook-node";
import PRAssign from "./msg/pr-assign.js";

const hook = new Webhook(
  "https://discord.com/api/webhooks/1117958910704353280/PWFWv7DISOxkA4dcRfSkLJrntdo_3xHCf3WCyZ2s-pFXsYpR1Jdq5FAhVzlqZ7qhdZm-"
);

async function sendMessage() {
  const msg = 12;
  const embed = new MessageBuilder()
    .setTitle("오늘자 리뷰 할당 현황")
    .setColor("#00ff00")
    .setDescription(
      "🌞 굿모닝 좋은 아침 🌞\n💪 오늘자 리뷰 할당 현황 알려드려요!"
    )
    .addField("할당 현황", "-어쩌구: 12")
    .addField(
      "😉 유의사항",
      "* 당일 오전 9시 이전에 요청한 리뷰는 당일 오후 2시까지 리뷰 완료해주세요!\n* 리뷰가 늦어질 시 리뷰 요청자에게 DM으로 미리 알려주는 센스~!\n* 일부 인원에게 많은 리뷰가 가지 않게 골고루 리뷰를 걸어주세요"
    );

  hook.send(embed);
}

sendMessage();
