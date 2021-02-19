import styles from "styled-components";

const StyledNav = styles.header`
    width: 100vw;
    background: ${(props) => props.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Open Sans", sans-serif;

    .menu-and-name {
        display: flex;
        align-items: center;

        svg {
            cursor: pointer;
            margin: 0;
            padding: 15px 20px;
            font-size: 1.2rem;
            &:hover {
                background: rgba(255, 255, 255, 0.11);
            }

            @media screen and (min-width: 800px) {
                display: none;
            }
        }
        h3 {
            margin-left: 35px;
            @media screen and (max-width: 800px) {
                margin-left: 5px;
                font-size: 1.05rem;
            }
        }
    }

    .right-side {
        display: flex;
        align-items: center;

        .student-name {
            margin-left: auto;
            padding: 0 10px;
        }

        .messages {
            cursor: pointer;
            position: relative;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 10px;
            margin-left: auto;
            border-radius: 50%;
            transition: 0.1s ease;

            .num-of-messages {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                width: 20px;
                height: 20px;
                background: white;
                border-radius: 50%;
                position: absolute;
                top: 5px;
                left: 25px;
            }
            &:hover,
            &:active {
                background: rgba(255, 255, 255, 0.199);
            }
        }
        .avatar-clickable {
            @media screen and (max-width: 800px) {
                cursor: pointer;
                padding: 10px 0;
            }
        }
        .avatar {
            background: rgba(0, 0, 0, 0.74);
            margin-right: 20px;
            height: 40px;
            width: 40px;
            display: flex;
            justify-content: center;
            overflow: hidden;
            border-radius: 50%;
            transition: 0.1s ease;
            cursor: pointer;

            &:hover {
                box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2);
            }
            img {
                height: 40px;
            }
            @media screen and (max-width: 800px) {
                height: 35px;
                width: 35px;
                img {
                    height: 35px;
                }
            }
        }
        @media screen and (max-width: 800px) {
            p {
                font-size: 0.9rem;
            }
        }
    }
`;

export default StyledNav;
