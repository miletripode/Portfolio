import React from "react";
import styles from "./Profile.module.css";

import {SiMicrosoftoutlook, SiGithub, SiLinkedin} from "react-icons/si";

import {Link} from "react-router-dom"

export default function Profile(){
    return(
        <div className={styles.profileContainer}>
            <div className={styles.profileParent}>
                <div className={styles.profileDetails}>
                    <div className={styles.colz}>
                        <Link 
                        to="https://www.linkedin.com/in/maria-milena-tripode/">
                        <SiLinkedin/>
                        </Link>
                        <Link></Link>
                        <Link><SiGithub/></Link>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}