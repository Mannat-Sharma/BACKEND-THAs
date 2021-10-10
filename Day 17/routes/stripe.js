var router = require('express').Router()
var path = require('path')
const stripe = require('stripe')("sk_test_51Jj21ZSInrUyr8UxDT0lUNuJb1OyXr8ZMYaVkqcuCLcpbwhCDH6dpHWDkDgYfzxCWtXinMe0sAvG6Zvs1MVtCZYM00DeQwEorH")

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../public/html/payment.html"))
})

router.post('/payment', async (req, res) => {
    console.log(req.body);
    try{
        const session = await stripe.checkout.sessions.create({
            line_items:[{
                amount: req.body.price * 100,
                name: "Shopping",
                currency: "usd",
                quantity: 1
            }],
            payment_method_types: ["card"],
            success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}?cancelled=true`
        })
        console.log(session.url);
        res.redirect(303, session.url)
    }
    catch(err){
        console.log(err);
        res.status(err.statusCode || 500).send(err.message)
    }
})
module.exports = router