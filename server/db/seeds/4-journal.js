exports.seed = function (knex) {
  
  return knex('journal').insert([
    {
      id: 1,
      content: `You can get away with a lot. All kinds of happy little splashes. The shadows are just like the highlights, but we're going in the opposite direction. And right there you got an almighty cloud.\n\n

      The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. You gotta think like a tree. Volunteering your time; it pays you and your whole community fantastic dividends. Just use the old one inch brush. That is when you can experience true joy, when you have no fear. Here's another little happy bush
      
      I'm sort of a softy, I couldn't shoot Bambi except with a camera. Every time you practice, you learn more. We don't make mistakes we just have happy little accidents.\n\n
      
      Now we don't want him to get lonely, so we'll give him a little friend. We don't have to be concerned about it. We just have to let it fall where it will. Just beat the devil out of it. Let's put some happy little bushes on the other side now. See. We take the corner of the brush and let it play back-and-forth.\n\n
      
      We'll paint one happy little tree right here. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. Anything you want to do you can do here. These trees are so much fun. I get started on them and I have a hard time stopping.\n\n
      
      Just a little indication. That's the way I look when I get home late; black and blue. Don't kill all your dark areas - you need them to show the light.\n\n
      
      Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. You have to make almighty decisions when you're the creator. Talk to trees, look at the birds. Whatever it takes. I get carried away with this brush cleaning. It's so important to do something every day that will make you happy.`,

      date: new Date(1669268377377),
      favourite: true,
    },

    {
      id: 2,
      content: `That's a crooked tree. We'll send him to Washington. We'll throw some happy little limbs on this tree. This is the way you take out your frustrations. Just use the old one inch brush. Let's do that again.\n\n

      Now we can begin working on lots of happy little things. Steve wants reflections, so let's give him reflections. Just think about these things in your mind and drop em' on canvas. We need a shadow side and a highlight side. A fan brush can be your best friend. You're the greatest thing that has ever been or ever will be. You're special. You're so very special.`,

      date: new Date(1669298377379),
      favourite: false,
    },

    {
      id: 3,
      content: `Don't fight it, use what happens. Working it up and down, back and forth. You can do anything your heart can imagine.\n\n

      In life you need colors. And I will hypnotize that just a little bit. Let's have a little bit of fun today. Let's put a touch more of the magic here. Just beat the devil out of it.\n\n
      
      I want everybody to be happy. That's what it's all about. With something so strong, a little bit can go a long way. The only prerequisite is that it makes you happy. If it makes you happy then it's good. Just go back and put one little more happy tree in there.\n\n
      
      Clouds are free. They just float around the sky all day and have fun. Didn't you know you had that much power? You can move mountains. You can do anything. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned.\n\n
      
      You don't have to be crazy to do this but it does help. If you do too much it's going to lose its effectiveness. Here's something that's fun. Just let this happen. We just let this flow right out of our minds. Even trees need a friend. We all need friends.`,

      date: new Date(1669298377379),
      favourite: true,
    },

    {
      id: 4,
      content: `Talent is a pursued interest. That is to say, anything you practice you can do. Everyone needs a friend. Friends are the most valuable things in the world. I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than most people. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone.`,

      date: new Date(1669598377379),
      favourite: true,
    },
  ])
}
