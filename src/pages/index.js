import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Stack, Section, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Yaroslav the Wise
			</title>
			<meta name={"description"} content={"Yaroslav the Wise and the first legislation in Russia"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0, 0, 0, 0.83) 0%,rgba(0, 0, 0, 0.66) 100%),--color-dark url(https://uploads.quarkly.io/5fd14454f8ae59001fb0e114/images/23.jpg?v=2020-12-09T22:14:58.741Z) 50% 15%/cover"
			color="--light"
			font="--base"
		>
			<Box>
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="2px"
					text-transform="uppercase"
					font="100 80px/1.2 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					Yaroslav the Wise and the first legislation in Russia
				</Text>
			</Box>
			<Stack>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					font="--lead"
					text-transform="uppercase"
					letter-spacing="1px"
				/>
				<StackItem width="25%" lg-width="50%" sm-width="100%" />
				<StackItem width="25%" lg-width="50%" sm-width="100%" />
				<StackItem width="25%" lg-width="50%" sm-width="100%" />
			</Stack>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						background="--color-light"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="12px 0"
						font="--base"
						color="--grey"
						letter-spacing="1px"
					>
						In 980, a son was born to the Kiev prince Vladimir the Saint (the famous Vladimir Krasno Solnyshko, during which the baptism of Rus took place). That year, Vladimir had not yet accepted the Christian faith, and the child was given the Slavic national name Yaroslav. Literally the name means: "glorifying Yara", that is, the ancient Slavic sun god. The first years of his life Yaroslav spent in his father's house, and at the age of seven, according to the custom that existed in Russia, his father appointed him as his governor in the Rostov principality dependent on Kiev. The capital of that was the city of Rostov, which is now a regional center in the Yaroslavl region. The appointment in 987 of Yaroslav as a Rostov prince, of course, did not mean that the boy had already become an adult and could govern the state. At that time, even schools in Russia did not yet exist, and the younger generation learned everything from the personal example of adults. The young prince was a nominal ruling figure, in his free time from official ceremonies, like all children, he played and amused himself or learned the science of war from experienced soldiers. The confidants actually appointed by his father ruled for him, however, attending the meetings of ambassadors, driving around the churchyards with a retinue to collect tribute from the population, formally reporting to his father about affairs in the entrusted principality, the boy, as he grew up, delved deeply into the essence of state administration. Having reached a conscientious and responsible age, he could already take all the power in his inheritance into his own hands. During the years of Yaroslav's reign in Rostov (987 - 1010), a new city was built in his possessions on the Upper Volga - Yaroslavl, which, centuries later, became a regional center. After the death of his elder brother in 1010, who reigned in the “second capital of Rus”, Novgorod, the thirty-year-old Yaroslav, as custom demanded, left the Rostov throne and became a Novgorod prince. The rule of the Novgorod lands, in which the overland "route from the Varangians to the Greeks" began, allowed Yaroslav to largely feel independent. In 1014 he refused to pay tribute to his father, considering it too high. Vladimir was enraged by his son's disobedience and began to prepare a military campaign against Novgorod. However, the Kiev squad did not have time to speak: on July 15, 1015, Vladimir died. The people of Kiev buried the Baptist of Rus in a marble coffin with deep sorrow and great honors.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/5fd14454f8ae59001fb0e114/images/598813.jpg?v=2020-12-09T22:14:58.740Z) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/5fd14454f8ae59001fb0e114/images/2621862.jpg?v=2020-12-09T22:14:58.746Z) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/5fd14454f8ae59001fb0e114/images/h-1322.jpg?v=2020-12-09T22:14:58.743Z) center/cover" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" color="--dark">
			<Stack>
				<StackItem width="33.33%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text as="h3" font="--headline3" margin="12px 0">
						Russia was united relatively recently, the Russian ethnos
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						Had just begun to take shape, and the population of different lands, descended from different East Slavic tribal unions, often aspired to separatism or domination over other Russian tribes. Vladimir had many sons who ruled in different lands, and it was not clear to whom the grand ducal power in Kiev should be inherited. In the capital of Russia there was one of the sons of Vladimir Svyatopolk, who previously ruled in the city of Turov on the Pripyat River, but shortly before his father's death, he was put under arrest on suspicion of conspiracy. Now he was released and, supported by the Kievites, was proclaimed the Grand Duke. However, the Kiev throne could be challenged by his brothers, who had their own squads at their disposal, and Svyatopolk waged war with them. This is how the first princely civil strife in Russia took place. During the war, Svyatopolk killed his brothers, Boris, the favorite of Vladimir, who initially had the most chances to take the place of his father, then Gleb, the Murom prince, and the Drevlyane prince Svyatoslav. The latter tried to escape from the troops of his brother-killer, but was overtaken near the Carpathian Mountains. Boris and Gleb were later canonized by the Russian Church as the first Russian saints. However, the strong army of the Novgorod principality, where Yaroslav, who enjoyed the unconditional support of the local population, ruled, did not succeed in defeating Svyatopolk. Yaroslav's squad was also reinforced by Swedish soldiers sent by the father of his wife, the Swedish princess Ingigerda. In December 1015, the troops of Svyatopolk were defeated by the troops of Yaroslav at Lyubech and captured Kiev. At the same time, Yaroslav himself did not claim the great reign and did not officially accept the title of Grand Duke, although he ruled in Kiev for three years. Meanwhile, Svyatopolk was hiding at the court of his wife's father, the Polish king Boleslav the Brave.
					</Text>
				</StackItem>
				<StackItem width="33.33%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text as="h3" font="--headline3" margin="12px 0">
						Three years later, he reappeared in Kiev
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						Land with a large Polish army. Yaroslav's squad was defeated, he himself with its remnants retreated back to Novgorod. Svyatopolk, having occupied Kiev, again proclaimed himself the Grand Duke. Realizing that the Polish-Kiev army would then enter Kiev, and then the fate of his younger brothers awaits him, Yaroslav was going to leave for Scandinavia, but the Novgorodians, who did not want to endure the power of Svyatopolk, announced that they intend to fight to the end. Obeying his subjects, Yaroslav strengthened his squad, hired Varangian soldiers and prepared for a decisive battle with his brother, greedy for power, and his Polish father-in-law. Meanwhile, in Kiev, riots began related to the dominance of Polish royal warriors in the city. Fearing to lose the support of the people, Svyatopolk himself opposed the further stay of the Poles in the Kiev lands. The insulted Boleslav plundered the hometown of the treacherous son-in-law and returned with his squad to Poland. And then in 1019 Yaroslav moved his troops to Kiev. In a decisive battle, which took place on the Alta River, the left tributary of the Dnieper near Kiev, Svyatopolk was finally defeated and fled to the nomadic Pechenegs inhabiting the steppes of Eastern Europe. As the Novgorod First Chronicle points out, he subsequently fell into madness, driven by fear of persecution, fled on a stretcher even further and died either on the border of Poland and the Czech Republic, or it is not known where at all. According to other sources, Svyatopolk was overtaken by Yaroslav's mercenaries by the Varangian Eymund, who killed him and delivered his head to the Novgorod prince. Svyatopolk Vladimirovich went down in history under the nickname The Damned, that is, he became like Adam's son Cain, which is described in the Bible, and who, out of envy, killed his brother Abel. Sometimes in historical literature you can find the translation of the nickname of Svyatopolk into the modern version: Svyatopolk Fratricide. However, it should be noted that almost all the sources from which one can glean information in sufficient detail about the first princely civil strife in Russia were written after Yaroslav's victory over Svyatopolk. Therefore, it is quite possible that the events in them are presented rather one-sidedly. Whether Svyatopolk was really such a corrupt monster, as the chronicle tells about him, whether Yaroslav was such a valiant leader who sought to restore justice for the sake of the people’s good, and whether the other sons of Vladimir were really such innocent victims, is not known for certain. But one way or another, the strife was resolved quite well for the people. “Yaroslav sat down in Kiev, wiped away the sweat with his squad, showing victory and great work,” the chronicle tells.
					</Text>
				</StackItem>
				<StackItem width="33.33%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text as="h3" font="--headline3" margin="12px 0">
						In fact, Yaroslav, although he finally
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						Accepted the title of Grand Duke in the same year, until 1036 stayed in Novgorod, which he was accustomed to and loved, where he was supported and respected by everyone. In the 20s. XI century a new struggle for the great reign began: now between Yaroslav and another son of Vladimir Mstislav. In 1024, the army of Mstislav defeated Yaroslav near Listvenny, but Mstislav turned out to be not as merciless as Svyatopolk, and offered his brother to remain a Kiev prince, abandoning only the great reign. Yaroslav refused. In 1025 the brothers concluded a peace treaty. Yaroslav became the supreme prince in the western part of Russia and Kiev, Mstislav - in the eastern part, making the city of Chernigov his capital. The border between the lands of Yaroslav and Mstislav passed along the Dnieper. Also, the two princes pledged to provide each other with military support. In 1029, Yaroslav and his squad came to the aid of his brother when he was going to knock out the Iranian-speaking Yass people, who inhabited the North Caucasian steppes, from the Tmutarakan principality in the extreme west of the Caucasus (the southernmost Russian possession at that time) from the Tmutarakan principality dependent on him. In 1030, Yaroslav's army defeated Chudi, who lived near the Novgorod principality, as the Russians called the neighboring tribes who spoke the language of the Finno-Ugric group. In the Chud lands, Yaroslav erected the city of Yuryev (today Tartu in Estonia). In 1031, Yaroslav and Mstislav conquered the cities of Przemysl (Polish Przemysl) and Cherven, bordering Russia, from Poland. In 1036, Yaroslav defeated the troops of the Pechenegs that approached Kiev, which, having long been at enmity with Russia, did not recover after this defeat and were soon absorbed by the Turkic-speaking Kipchak nomads who came from Central Asia. On the site of the decisive victory over the Pechenegs, the Kievites erected the Cathedral of St. Sophia - by analogy with a similar temple in Constantinople.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="75%" md-width="100%">
					<Text margin="0px" max-width="600px">
						The most important achievement of Yaroslav's reign was the publication for the first time in Russian history of a single set of national laws - Russian Pravda ("Pravda Roskaya", sometimes called Yaroslav's Pravda). The truth in this case is not what it means today, but education from the verb “to rule - to rule, to administer”, that is, literally “justice” or “law”. A single set of laws ordered life in the state, emphasized the national unity of all East Slavic lands. Since he stood above all other laws and customs, he eliminated those of them that were contrary to national interests. Subsequently, Yaroslav's successors supplemented the code with new laws. The publication of Russkaya Pravda marked the transition to the princes of legislative powers, the beginning of the dominance of written laws over popular customs, characteristic of a developed state system. Russkaya Pravda mainly regulated civil legal relations, established criminal liability for crimes and the principles of legal proceedings (in particular, the electivity of civil judges in the amount of twelve people). At present, its text is an important historical source, giving an idea of ​​the state and social structure in Ancient Rus, about the way of life of Russians at that time. As the well-known figure of Russian literature of the XVIII-XIX centuries wrote. N. Karamzin, who was fond of the study of ancient Russian chronicles (sometimes he is mistakenly called a historian, although at that time history had not yet developed as a special science), Russkaya Pravda asserted the personal safety and property rights of each of the prince's subjects. Russkaya Pravda, consolidating mainly the democratic principles of social management, was based on traditional ancient Slavic ideas and is a typical example of the fact that the Russian people were originally European in their mentality. That is, the main value in the ancient Russian worldview was the human personality, its dignity and qualities. The more entrepreneurial, active, brave a person was, the more he was valued by society, and these qualities were considered more important than diligence in the service, general discipline. Criminal legislation largely reflected traditional tribal relations. The main criminal penalty was a fine. The highest fines were for murder. At the same time, the relatives of the murdered person could not accept the fine from the killer, and then they were given the right to take blood. However, they themselves had to find the killer and deal with him: the state did not deal with blood feud. The death penalty was imposed for the most serious crimes, primarily for an attempt to seize power. There was no prison sentence. Corporal punishment, according to Russian Pravda, could be applied to slaves; it was not provided for free people, although it is possible that they were used to restore internal order by rural and urban communities in accordance with local customs. There was also no torture during the proceedings. There were trials common at that time among other peoples of Europe, based on belief in the supernatural. For example, to resolve a dispute between opponents, the judges could force each of them to take a red-hot metal object in his hand, and the one whose burns heal faster was considered right. To prevent princely strife in the future, Russkaya Pravda established a firm order of succession to the throne. The grand-ducal throne was to be inherited by the eldest man in the Rurik family. That is, if the Grand Duke had brothers, then it was the eldest of them, not the sons, who inherited the throne after his death. The prince's son occupied the throne only if all of his father's brothers died. The younger brothers and sons of the prince ruled the appanage principalities, of which Russia consisted. However, as it later turned out, the system of succession to the throne established by Yaroslav did not save the Russian state from princely feuds. Probably, the reason lay not in who should inherit the throne - a son or a brother, but in the fact that the younger Rurikovichs, having received an inheritance in which they disposed almost as full-fledged princes, quickly felt independence and sought to consolidate their position by seizing the grand princely throne.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="100%" />
			</Stack>
		</Section>
		<Image width="700px" height="700px" src="https://uploads.quarkly.io/5fd14454f8ae59001fb0e114/images/velikiy-knyaz-yaroslav-mudryi_1d8d8d5c14125a0c12b34fc67c0b88a6.jpg?v=2020-12-09T22:14:58.762Z" />
		<Text>
			During the reign of Yaroslav, Kiev became one of the largest centers of the Christian world. The main entrance to it was decorated with the grandiose Golden Gate, which amazed travelers. The German chronicler of that time, Dietmar of Merseburg, reported that in Kiev there were 400 churches, 8 markets and a huge crowd of people stayed. Yaroslav's son Vsevolod married the daughter of the Byzantine emperor Constantine IX Monomakh. The Grand Duke married his daughters Anna, Anastasia and Elizabeth to the kings of France, Hungary and Norway. This testified to how much the international authority of Russia had grown during the years of Yaroslav's rule. Yaroslav died in 1054 at the age of 74, bequeathed to his sons to protect the Russian state together. The eldest son Izyaslav became the heir to the Grand Duke, and the rest of the sons, appanage princes, had to obey him. Another son of Yaroslav Svyatoslav received the Chernigov throne, Vsevolod began to rule the Pereyaslavsky principality, Igor - Vladimir-Volynsky, Vyacheslav - Smolensky. The Polotsk principality was ruled by Yaroslav's grand-nephew Vseslav Bryachislavich. Since the reign of Yaroslav, Ancient Rus entered the period of its heyday.
		</Text>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Contacts
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Kerkweg 121 Driebruggen, Zuid-Holland(ZH), 3465 JG 06-1676993
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" background="#ffffdf">
			<Override slot="SectionContent" align-items="center" />
			<Text as="p" font="--lead" margin="20px 0 0 0">
				<Link href="/terms">
					Terms
					<br />
				</Link>
				<Link
					href="/privacy"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Privacy
				</Link>
				<br />
				<Link
					href="/cookies"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Cookies
				</Link>
			</Text>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});