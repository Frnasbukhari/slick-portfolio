import{A as r}from"./UIcon.d20a157c.js";const g=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function d(e,...t){const a=Object.assign({},e);return Object.keys(a).forEach(o=>{t.includes(o)&&delete a[o]}),a}const n=e=>e,m=[n({name:"Programming Languages",slug:"pro-lang"}),n({name:"Frameworks",slug:"framework"}),n({name:"Libraries",slug:"library"}),n({name:"Langauges",slug:"lang"}),n({name:"Databases",slug:"db"}),n({name:"ORMs",slug:"orm"}),n({name:"DevOps",slug:"devops"}),n({name:"Testing",slug:"test"}),n({name:"Dev Tools",slug:"devtools"}),n({name:"Markup & Style",slug:"markup-style"}),n({name:"Design",slug:"design"}),n({name:"Soft Skills",slug:"soft"})],i=e=>{const t=d(e,"category");return e.category&&(t.category=m.find(a=>a.slug===e.category)),t},c=[i({slug:"powerbi",color:"yellow",description:"Data visualisation software. Experienced in data transformation and creating dashboards",logo:r.PowerBI,name:"Power BI",category:"pro-lang"}),i({slug:"python",color:"blue",description:"Experience in building and maintaining large scale programs.",logo:r.Python,name:"Python",category:"pro-lang"}),i({slug:"svelte",color:"orange",description:g,logo:r.Svelte,name:"Svelte",category:"library"})],h="Skills",y=(...e)=>c.filter(t=>e.includes(t.slug)),f=e=>{const t=[],a=[];return c.forEach(o=>{if(e.trim()&&!o.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!o.category){a.push(o);return}let s=t.find(u=>{var l;return u.category.slug===((l=o.category)==null?void 0:l.slug)});s||(s={items:[],category:o.category},t.push(s)),s.items.push(o)}),a.length!==0&&t.push({category:{name:"Others",slug:"others"},items:a}),t};export{f as a,y as g,c as i,h as t};
