import { useEffect } from 'react'

import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {


  
    return (
        <header>
           
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/meta-tags">
                        <a>Meta Tags</a>
                    </Link>
                </li>
                <li>
                    <Link href="/robots-txt">
                        <a>robots.txt</a>
                    </Link>
                </li>
                <li>
                    <Link href="/htaccess">
                        <a>.htaccess</a>
                    </Link>
                </li>
                <li>
                    <Link href="/useful-links">
                        <a>Useful Links</a>
                    </Link>
                </li>
            </ul>
  
            <style jsx>{`
            header {
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #222;
            }
            header ul {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
                padding: 0;
            }
            header li {
                list-style: none;
                padding: 0 15px;
                border-right: 1px solid #888;
            }
            header li:last-child {
                border-right: none;
            }
            header li a{
                text-decoration: none;
                color: #fff;
                transition: 0.3s;
            }
            header li a:hover{
                opacity: 0.6;
            }

            `}</style>
        
        </header>
    )
  }
  