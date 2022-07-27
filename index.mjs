import Fastify from "fastify";
import { setTimeout } from 'timers/promises';

const fastify = Fastify({
  logger: true,
});

fastify.get('/1.js', async (request, reply) => {
    await setTimeout(2000);
    reply.type("text/javascript");
    return `console.log('from 1.js')`;
});
fastify.get('/2.js', async (request, reply) => {
    reply.type("text/javascript");
    return `console.log('from 2.js')`;
});

fastify.get("/", function (request, reply) {
  reply.type("text/html");
  reply.send(`<html>Hello World!
  
  <script>
    console.log('hi, loading sripts');
    function loadScript(src) {
        let scr = document.createElement('script');
        scr.src = src;
        document.body.appendChild(scr);
      }
      loadScript('/1.js');
      loadScript('/2.js');      
  </script>
  
  </html>`);
});

fastify.listen({ port: 3000 });
