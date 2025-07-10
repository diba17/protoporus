import styles from "./Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import CA from "../components/CAcomponent";

export default function Home(){
const lennyFaces = [
  "( ͡° ͜ʖ ͡°)",
  "( ͡~ ͜ʖ ͡°)",
  "( ͡ʘ ͜ʖ ͡ʘ)",
  "( ͡o ͜ʖ ͡o)",
  "( ‾ ʖ̫ ‾)",
  "( ಠ ͜ʖ ಠ)",
  "( ͡ಠ ʖ̯ ͡ಠ)",
  "( ͡° ل͜ ͡°)",
  "(▀̿Ĺ̯▀̿ ̿)",
  "( ͡° ͜ʖ ͡ °)",
  "(ง ͠° ͟ل͜ ͡°)ง",
  "(づ ͡° ͜ʖ ͡°)づ",
  "(☞ ͡° ͜ʖ ͡°)☞",
  "( ͡~ ͜ʖ ͡°)",
  "( ͡° ᴥ ͡°)",
  "( ͡ಠ ʖ̯ ͡ಠ)",
  "( ͡° ͜ʖ ͡ °)",
  "( ͡ ͡° ͜ ʖ ͡ ͡°)",
  "( ͠° ͟ʖ ͡°)",
  "( ͡° ͜ʖ ͡°)_/¯",
  "( ͡°╭͜ʖ╮͡° )",
  "( ͡ಥ ͜ʖ ͡ಥ)",
  "( ͡° ͜つ ͡°)",
  "(ง ͠° ͟ل͜ ͡°)ง",
  "(⌐■_■)",
  "( ͡° ͜ʖ ͡ °)ᕤ",
  "(⌐▀͡ ̯ʖ▀)",
  "( ͡ಠ ͜ʖ ͡ಠ)",
  "(͡ ° ͜ʖ ͡ °)",
  "( ͡o ͜ʖ ͡o)",
  "(つ ͡° ͜ʖ ͡°)つ",
  "( ͡⚆ ͜ʖ ͡⚆)",
  "( ͡° ͜ʖ ͡°)っ",
  "( ͡°( ͡° ͜ʖ ͡°) ͡°)",
  "(͡ ͡° ͜ つ ͡͡°)",
  "( ͡° ͜V ͡°)",
  "( ͡ಥ ͜ʖ ͡ಥ)",
  "( ͡° ͜ʖ ͡ °)👌",
  "( ͡° ͜ʖ ͡°)>⌐■-■",
  "(ง ͠° ل͜ °)ง",
  "(づ｡◕‿‿◕｡)づ",
  "(☞ﾟヮﾟ)☞",
  "( ͡° ͜ʖ ͡°)>⌐■-■",
  "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
  "( ͡ಥ益͡ಥ)",
  "(✿◕‿◕)",
  "(▀̿Ĺ̯▀̿ ̿)",
  "( ͡o ͜ʖ ͡o)ﾉ",
  "(☞ ͡° ͜ʖ ͡°)☞",
  "(¬‿¬)",
  "(ʘ ͜ʖ ʘ)",
  "( ͡°□ ͡°)",
  "( ͡°▿ ͡°)",   
  "(╯ ͡° ͜ʖ ͡°）",  
  "(ノ ͡ಠ ͜ʖ ͡ಠ)ノ", 
  "( ͡☆ ͜ʖ ͡☆)",   
  "( ͡⚈ ͜ʖ ͡⚈)",  
  "( ͡★ ͜ʖ ͡★)",   
  "(ง ͡° ͜ʖ ͡°)ง",
  "¯\\_( ͡° ͜ʖ ͡°)_/¯",
  "( ͡ಠ益ಠ ͡╬)",
  "(ง’̀-‘́)ง",
  "(ง°ل͜°)ง",
  "(╯°益°)╯彡┻━┻",
  "( ͡° ͜ʖ ͡°)つ🍪",
  "( ͡ಥ ͜ʖ ͡ಥ)",
  "(づ｡◕‿‿◕｡)づ",
  "ᕦ( ͡° ͜ʖ ͡°)ᕤ",
  "( ͡°👅 ͡°)",
  "(☞ຈل͜ຈ)☞",
  "(ง ͡ʘ ͜ʖ ͡ʘ)ง",
  "(ಥ ͜ʖಥ)",
  "( ͡° ͜ʖ ͡°)💦",
  "( ͡° ͜ʖ ͡ °)✧",
  "( ͡° ͜ʖ ͡°)ﾉ⌐■-■",
  "( ͡ಠ ͜ʖ ͡ಠ)ง",
  "( ͡ಥ益ಥ ͡┻━┻)",
  "(☞ ͡° ͜ʖ ͡°)☞ ✨",
  "( ͡° ͜ʖ ͡°)つ💰",
  "( ͡° ͜ʖ ͡°)ノ⌐■-■",
  "( ͡◉ ͜ʖ ͡◉)",
  "( ͡° ͜ʖ ͡°)つ🔥",
  "(ง ͠ ͡° ͟ل͜ ͡°)ง",
  "( ͡° ͜ʖ ͡°)ノ💎",
  "( ͡° ͜ʖ ͡°)>⌐📈",
  "( ͡⚆ ͜ʖ ͡⚆)っ🎤",
  "( ͡° ͜ʖ ͡ °)つ🧠",
  "(ง ͠° ͟ل͜ ͡°)ง 💥",
  "( ͡° ͜ʖ ͡°)つ🚀",
  "( ͡~ ͜ʖ ͡°)つ💣",
];



  

    function chunkArray(arr, size) {
     const chunks = [];  
        for (let i = 0; i < arr.length; i += size) { 
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
        }

        const lennyPages = chunkArray(lennyFaces, 30);

        

    return (
        <>
            <div className={styles.Welcome}>
            <h1>Welcome to the official Website for $Lenny on Solana</h1>
            <CA value='8Vb11fvr9f7k74hrhNJEqjGq1hzgBH7FnuwGFbPppump' />
            </div>

            <main>
            <div className={styles.copy}>
                <h2>
                Copy and paste lenny faces <FontAwesomeIcon icon={faArrowDown} />
                </h2>
            </div>

            <div className={styles.lennySlider}>
                {lennyPages.map((page, pageIndex) => (
                <div className={styles.lennyPage} key={pageIndex}>
                    {page.map((face, i) => (
                    <span
                        key={i}
                        onClick={() => navigator.clipboard.writeText(face)}
                        className={styles.lennySmall}
                        title="Click to copy!"
                    >
                        {face}
                    </span>
                    ))}
                </div>
                ))}
            </div>
            </main>
        </>
        );

        }