<!--
参考:
+ 企业官网怎么设计才能实现高转化？ https://www.woshipm.com/pd/4264289.html
-->
<template>
  <div>
    <h1><span>Code: Certs</span> 帮您更新与部署 SSL/TLS 证书.</h1>
    <div id="concept">
      <div><span>Code: Certs</span> 是一项 SSL/TLS 证书免运维服务:</div>
      <ol>
        <li>它能定期地为您申请免费的 SSL/TLS 证书, 并提供 PEM 格式的证书文件以供下载.</li>
        <li>如果您愿意, 它还可以将申请到的证书及时部署到需要的地方.</li>
      </ol>
    </div>
    <hr/>
    <div id="advantage">
      为什么选择我们?
      <ol>
        <li id="issuance-advantage">
          我们能帮您更快更方便地申请到一张有效的 SSL/TLS 证书:
          <ul>
            <li>与购买昂贵的付费证书相比, 我们向您提供免费的 SSL/TLS 证书, 以便降低您使用 HTTPS 的门槛.</li>
            <li>与申请云平台自带的免费证书相比, 我们向您提供更短的证书签发时间, 跳过难熬的人工审核等待时间, 平均 3
              分钟就能申请好证书.
            </li>
            <li>与使用证书签署工具相比, 我们向您提供简单易上手的图形用户界面, 无需再去查阅冗长的工具文档,
              鼠标点点就能申请到符合预期的证书.
            </li>
            <li>与使用自签证书相比, 我们向您提供 Root CA 认证通过的有效证书链,
              再也不用费力地让客户端信任来源未知的证书链了.
            </li>
          </ul>
        </li>
        <li id="deployment-advantage">
          同时, 我们也能让您更省心的维护网站 SSL/TLS 证书的有效性:
          <ul>
            <li>与购买昂贵的部署资源包相比, 我们向您提供按量付费的部署计划, 用多少就花多少,
              不必再担心购买的资源包过期没用完的问题.
            </li>
            <li>与平台难用的部署功能相比, 我们向您提供批量部署功能, 一次性更新多处符合条件的旧证书,
              极大的减少每次证书更新的作业时长.
            </li>
            <li>与手动逐个更新证书相比, 我们向您提供扫描式更新与证书匹配功能,
              避免由于人工疏漏导致的证书过期以及证书不匹配问题.
            </li>
          </ul>
        </li>
      </ol>
      <div id="testing">
        <p>当然, 上述功能都可以在安全的测试模式下进行运行.</p>
        <p>您可以申请一张测试用的证书, 并用这张证书来测试所有可能用得到的地方, 以便您在部署正式证书到线上前进行预览.</p>
        <p>所有的资源都在您的掌控之中, 如果您不想继续使用 <span>Code: Certs</span>, 您随时可以撤销您对
          <span>Code: Certs</span> 的授权.</p>
      </div>
    </div>
    <hr/>
    <div id="effect">
      谁在使用 <span>Code: Certs</span>?
      <p> 目前已有 {{ count.persons }} 个人开发者与 {{ count.companies }} 家企业的 {{ count.domains }} 个域名接入 <span>Code: Certs</span>.
      </p>
      <p>已累计申请 {{ count.certificates }} 张证书, 成功部署 {{ count.deployments.succeed }} 次, 规避不匹配的域名
        {{ count.deployments.skipped }} 个, 节省人力 {{ count.deployments.savedHours }} 小时.</p>
    </div>
    <hr/>
    <div id="price">
      <p><span>Code: Certs</span> 的运行离不开云服务器等各类资源, 因此它并不是完全免费的. 但是我们承诺:</p>
      <ol>
        <li>在 Beta 测试期间, 所有的功能都是免费提供的.</li>
        <li>我们将在 Beta 测试结束前 3 个月公布定价以便给您充足的时间决定去留.</li>
        <li>正式商业化后, 我们依然会周期性地提供一定的免费额度以便您能继续享受 <span>Code: Certs</span> 为您带来的便利.
        </li>
      </ol>
    </div>
    <hr/>
    准备好了么? 点击 <a href="https://console.code-certs.dengchao.fun" target="_blank">登录/注册</a> 以开始使用 <span>Code: Certs</span>
    <hr/>
    <div id="feedback-container">
      <p>如你所见, <span>Code: Certs</span> 正处于非常早期的起步阶段, 如果您有任何意见与建议, 不妨在 <a
          href="https://github.com/code-certs/code-certs/issues" target="_blank">这里</a> 告诉我们.</p>
    </div>
    <div>
      <a href="https://beian.miit.gov.cn/">湘ICP备20013845号</a>
    </div>
  </div>
</template>
<script lang="ts">
// noinspection JSUnusedGlobalSymbols
export default {
  data: () => {
    // FIXME 2022/10/15: fetch api
    return {
      count: {
        persons: 1,
        companies: 5,
        domains: 13,
        certificates: 27,
        deployments: {
          succeed: 127,
          skipped: 253,
          savedHours: Math.floor(5 * (127 + 253) / 60 * 100) / 100
        }
      }
    }
  }
}
</script>
<style scoped>
span {
  font-style: italic;
}
</style>
