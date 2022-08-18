

CLI-play

## Making a sequence diagram

```mermaid
sequenceDiagram
    participant STOCKHOLM Flygresor
    participant iframe
    participant viewscreen
    dotcom->>iframe: loads html w/ iframe url
    iframe->>viewscreen: request template
    viewscreen->>iframe: html & javascript & API & Database
    iframe->>dotcom: iframe ready
    dotcom->>iframe: set mermaid data on iframe
    iframe->>iframe: render mermaid
```


<h2>Tjena Teamet</h2>

Här är en guide på hur man skriver en **Bold text** och en *Italic text*
Syntaxen för bold är ** (text) ** och för italic det är * (text) *


<h2> Making a Blockquote in Markdown.</h2>


>#### Nested Blockquotes!
>Pippi följde henne genom många av de vackra rummen i hennes slott.
>> Häxan bad henne att rengöra grytorna och vattenkokarna och sopa golvet och hålla elden matad med ved.


<<<<<<< HEAD

:smile:

Putting an ***emoticon*** in markdown.

 - [ ] Add delight to the experience when all tasks are complete :tada:

  - [ ] and :smile:
~

**LISTS**

So you can make ordered and unordered lists in markdown just like HTML!

<ol>
  <li>Wake up!</li>
  <li>Grab a brush and put a little make-up,</li>
  <li>Hide the scars to fade away the shake-up.</li>
</ol>

OR

<ul>
<li>Potatoes</li>
<li>Superpowers</li>
<li>Skeletor</li>
</ul>

=======

#<h2>Emoji in Markdown </h2>
There are two ways to add emoji to Markdown files: copy and paste the emoji into your Markdown-formatted text, or type emoji shortcodes.

Copying and Pasting Emoji
In most cases, you can simply copy an emoji from a source like Emojipedia and paste it into your document. Many Markdown applications will automatically display the emoji in the Markdown-formatted text. The HTML and PDF files you export from your Markdown application should display the emoji.

>>>>>>> cd2b84260a2aa6d925f12cf533c4d6fe1da52130


## Yo whats up my brooooes

``` javascript

function sample(arr, req) {
        arr = arr.sort(()=>{ return 0.5 - Math.random() }) ;
        let i = 0,
            array = [];
        while (i < req) {
            array.push(arr[i])
                ++i
        }
        return array
    }


```


> - Markdown

 *Inserting* an **image** in Markdown.
<h2> Linking Images <h2>


|Feature1|

![image](https://media.istockphoto.com/photos/monarch-butterfly-sampling-lantana-flowers-picture-id1333568096?b=1&k=20&m=1333568096&s=170667a&w=0&h=J-W17MIRCNAwXKxADiY5j84pNA-pvetQmgy2WB-c25g=)


|Feature2|


 LYNMP Logo is :  ![LYNMP logo](https://i.esdrop.com/d/dLd7n17hg9.png#style=max-width:40px;vertical-align:middle; "LYMNP Logo")

***

> Making a java code block in Markdown.

```java

<pre>
<code>
public class MyApplication {
  public static void main(String[] args) {
    System.out.println("Hello, World");
  }

}
</code>
</pre>

 ```
- Making a table in Markdown

|Jensen_YH|Namn|
|:--|:--:|
|grupp4|Båmi|
|grupp4|Olle|
|grupp4|Per|
|grupp4|Ibrahim|
|grupp4|Mohamed|


         *Skillnaden*
         This is really***very***important!

    |---|---|
    Frontend| Backend


  > *Making a **link** in Markdown*

 Happy*Day*MEOW!



 <h2> [Jensen YH@IT Blog Magazine] (https://www.bomi.com/) <h2>
README.md [dos] (16:13 18/08/2022)


