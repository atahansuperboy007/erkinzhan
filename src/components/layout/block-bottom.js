import '../../css/style.css'

function Block() {
    return (
        <div className="block-name">
            <h1>Контакты</h1>
            <a href="https://discord.com/channels/@me"><img className="block-img" src="https://southportlandlibrary.com/wp-content/uploads/2020/11/discord-logo-1024x1024.jpg" alt="" /></a>
            <a href="https://www.facebook.com/profile.php?id=100068842714598"><img className="block-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/768px-Facebook_F_icon.svg.png" alt="" /></a>
            <a href="https://www.instagram.com/seitkasym_erkinzhan/"><img className="block-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="" /></a>
            <a href="https://web.whatsapp.com/"><img className="block-img" src="https://image.flaticon.com/icons/png/512/124/124034.png" alt="" /></a>
            <div className="block-text">
                <h1>Electronics (2021г)</h1>
            </div>
        </div>
    )
}

export default Block