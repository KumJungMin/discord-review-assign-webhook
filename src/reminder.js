import "dotenv/config";
import { Webhook, MessageBuilder } from "discord-webhook-node";
import PRAssign from "./msg/pr-assign.js";

const hook = new Webhook(process.env.HOOK_URL);

async function sendMessage() {
  const msg = await PRAssign.getMessage();
  const embed = new MessageBuilder()
    .setTitle("오늘자 리뷰 할당 현황(remind)")
    .setColor("#00ff00")
    .setDescription("⭐️ 야무진 오후 ⭐️\n💪 리뷰 할당 현황 다시 알려드려요!")
    .addField("할당 현황", msg)
    .addField(
      "😉 권장사항",
      "* 재리뷰 요청이 있다면 잠깐 시간 내서 리뷰해보아요!\n* 재리뷰 완료시 리뷰 요청자에게 DM으로 알려주는 센스~!"
    );

  hook.send(embed);
}

sendMessage();
