import Project from "./project";
import Video from "./video";

export default function Projects() {
    return (
        <div>
            <h2 className="text-2xl font-bold underline mb-4">Projetos</h2>
            <h4 className="text-xl font-bold  mb-4">Sites</h4>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
                <Project
                    image="acharge"
                    link="https://www.chargemkt.com/"
                    project="A Charge Digital"
                />
                <Project
                    image="carnivoros-mind"
                    link="https://carnivorosmind.com.br/"
                    project="Carnívoros Mind"
                />
                <Project
                    image="codinginvest-blog"
                    link="https://blog.codinginvest.com.br/"
                    project="Coding Invest Blog"
                />
                <Project
                    image="codinginvest-institucional"
                    link="https://www.codinginvest.com.br/"
                    project="Coding Invest Institucional"
                />
                <Project
                    image="youtube-clone"
                    link="https://youtube-clone-beta-orpin.vercel.app/"
                    project="Youtube Clone"
                />
                <Project
                    image="hiragana"
                    link="https://tatsuosaka.github.io/hiragana/"
                    project="Jogo Hiragana"
                />
            </div>
            <h4 className="text-xl font-bold  mb-4">Vídeos</h4>
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
                <Video
                    link="https://www.instagram.com/p/DI9KxcDOf9L/"
                    videosrc="https://instagram.fbjp2-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQNneTWyDRIGypxUeU6qbhWiQ8mkkdOx1dKWzcfO4WJHky16lhMPmzkrz_BgGLH3Iar_ohXsIdyMWTYY07CYUNYbVErjiyGDI4F8440.mp4?_nc_cat=110&_nc_oc=Adln-GmC3Mu89KK1TR1M3_OASqbChTu3JD-EFDxDQGz0NCemX-pVwKHkeByrLopDjgDpL1LttQin0qb6fuxLSfHU&_nc_sid=5e9851&_nc_ht=instagram.fbjp2-1.fna.fbcdn.net&_nc_ohc=riSyyqJgMiwQ7kNvwFUMw2D&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjgwMTM2NjA1NjczODE5NywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjQ3LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=997d6eade2ec0390&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC82QTQ0NkY5OUNCODBEQjdFMURCM0FFODRBNjkyNTA5Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTURVVkIzeGV0YkxXTTRFQU5DSkRrd3VEZVpQYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmqvaUy_v0-QkVAigCQzMsF0BH7tkWhysCGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfPMTYMpOzI1fPUQnUBexhisEV7qUmYnnRHYn2SDvXs6ZA&oe=6846AD63"
                    video="Boteco Tijuca - Promoção"
                />
                <Video
                    link="https://www.instagram.com/p/DCpDq13OWED/"
                    videosrc="https://instagram.fbjp2-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQNPKgvItYT_hEUwEytXsDz0CIkFf41POLsIkm4-e3FyZpwya7306G4U49RMC3WDj9INEkt7YVAtNv80H7vKlNK_IkVqVGfdcypoCzE.mp4?_nc_cat=102&_nc_oc=AdkpRIcBWgUzm_ZyZsAmXxTA91ZxwDjw_16A_jHRm89mc6dSeGrOcU2kSChK9VHRBJ9WoeBi9chhaJ-bLN_5gJKQ&_nc_sid=5e9851&_nc_ht=instagram.fbjp2-1.fna.fbcdn.net&_nc_ohc=hi6Ynhw120YQ7kNvwEnqdbO&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuMzYwLmRhc2hfYmFzZWxpbmVfM192MSIsInhwdl9hc3NldF9pZCI6NDI1ODI2NzQxNzcyMzQzMiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjg2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=19e70fad4b8120e5&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC83MjQwODEwQjUwQUI5NDRENDRFMEJEQzVDMUZGNDVCQV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HT3RzNHh1QUgxUHN4RWdEQUhYemtPLXJDWVZrYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm0IjWzOS3kA8VAigCQzMsF0BVfdLxqfvnGBJkYXNoX2Jhc2VsaW5lXzNfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfPDcjzW_ZgnrxoiJgslnxNmZFvk2rkDc97S2iYw2HRKrA&oe=6846BFFB"
                    video="Azumy - Nutricionista"
                />
                <Video
                    link="https://www.instagram.com/reel/DCUdYIau4WD/"
                    videosrc="https://instagram.fbjp2-1.fna.fbcdn.net/o1/v/t2/f2/m367/AQNDyqPCxaGT-O2Oda4bJpj_j7CLmC9OVD3586s-z74wG-CdQTSiyFI4IPGlSZfjx-0aGnajiQmMbdooDUG1K9pTZWY0yvIQpQb0QHo.mp4?_nc_cat=102&_nc_oc=AdmiDp__jyFhbPyefCMGZbPSo9q58RmYZaskRkyPcI5Zf3cb3_J1mAWncicAnQYESnvvVTMpPQy37hoCMw2LZImO&_nc_sid=5e9851&_nc_ht=instagram.fbjp2-1.fna.fbcdn.net&_nc_ohc=sht6-8-UrkMQ7kNvwGb_rq_&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTEwNjgwODMxNzQ1NDkwMCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjI1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=c3aac56cf10ff1ce&_nc_vs=HBksFQIYQGlnX2VwaGVtZXJhbC85OTQzNkVGOTE4RkEwQURCNjhGNzhDNjk5NTY4NjM5RV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRjlhMkJ1M0dleS1hbDhLQUp3eXp6VFlVYTlMYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm6KjFydyo9wMVAigCQzMsF0A5GZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfPadXEjJKzxZ1-r6iFqhJqA72jxXcPyIf8BgT45okvvJg&oe=684A95DB"
                    video="Azumy - Drink"
                />
                <Video
                    link="https://www.instagram.com/p/DJriUHNO6PW/"
                    videosrc="https://instagram.fbjp2-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQOG8qv5GbLzFhtL9Sww0cooF6_MvatJ0Ku0zyY55fqXQFOvQE8Eif_0ecI970tC0F7OiUeg2o85PrP0r76jMfJPx1qlebZiFv6aziQ.mp4?_nc_cat=110&_nc_oc=AdkKgVTMIe4ACEsQkO1-XzD67L2obHxRwfy82BRPKj_L-RVvesP2rSARSORjlPuIFQZAHIvQ7ss2S9GkweDV6IPb&_nc_sid=5e9851&_nc_ht=instagram.fbjp2-1.fna.fbcdn.net&_nc_ohc=3DCivQhlNiMQ7kNvwEWo8wV&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTA3MjI1MjA4NDc1MDAxOCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjU5LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=2a7d9b74b13f504c&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC82QTRGMkMzQzlCNkRGMzUyQTA0OTMwN0YyQjcwOEE4MV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTkN1cHgzX0tLdkNtXzhnQUpMMGhCVEtDQWhnYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmhJv4yaTN5wMVAigCQzMsF0BN8zMzMzMzGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfONJjqUOFux5U8cA9047NSdmhfzdq0YlyEQeV3aLFRKXg&oe=68469EEB"
                    video="Carnívoros Mind - Promoção"
                />
                <Video
                    link="https://www.instagram.com/p/DJW5OceOqst/"
                    videosrc="https://instagram.fbjp2-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQNeMtC49ZrMTECUoMkOgTGwTYeT25WYg77YRct4kuJ6zOliWRy26RHFQX6AJAlZ52Wrbq72ZjhNuQIXvpkHN4HP1hvhhNakDizSK5c.mp4?_nc_cat=103&_nc_oc=AdkYzB3P2AraVzqAczTvdAhbvPCzQJXZ54OqBpkubc_9ifYuvSwZLguTYGP762yL4ZWaJWUIHUoN-9pWHagC_54s&_nc_sid=5e9851&_nc_ht=instagram.fbjp2-1.fna.fbcdn.net&_nc_ohc=eBFzeKqZbnsQ7kNvwGQHBww&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTA4MTA4NDc3Mzg0ODMwOCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjg5LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=a096de1ac913e983&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC81ODQ1QkE5NEVDMzY2OEI1NEVFOTREMzA5QTZGMkNBOV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSWtOa1IwUmF2M0daMWdDQUhTTGptSkg2bEl1YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm6NPWnrXP6wMVAigCQzMsF0BWQhysCDEnGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfOS_0jKGzOCvvy6fNCU6sMNG9fvXItZCotgFEkCjiEo_w&oe=68469DF0"
                    video="Carnívoros Mind - Lanche do mês"
                />
                <Video
                    link="https://www.instagram.com/reel/DIM1SnjSzhd/"
                    videosrc="https://instagram.fbjp2-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQOjw7gF-NA-aNlRQ_8oCe7s65J_7fI2LlOIHAlrJCfuOALe23Hg2UlBlHpjRjllgXrQ_n9SvGYszhitZvnIaYwn-ODJCYO8PWJjZOU.mp4?_nc_cat=101&_nc_oc=AdmX1JUH__LxPBNikAlgcU6zErEo5V7lGv4e8B1ifmFYgGgje5njrF57BtI8SWA-0ZNl0gO2_rplK8BARdavi_l5&_nc_sid=5e9851&_nc_ht=instagram.fbjp2-1.fna.fbcdn.net&_nc_ohc=4Rqd7919bf0Q7kNvwGTWsvs&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTIxMTMyNDA3Njk5NDQyNywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjU5LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=a0fbf108a430e5d4&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC81NjQ4NkQyQTgxM0U5REJENURBRUI4MDAwNzBEMDVCRl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQXVoSUIzMll6bUVkaDRDQURNMXJIeVNMa0ZxYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm9r2J1avspgQVAigCQzMsF0BNpmZmZmZmGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfPMieWFl9FQVMaXBuz6ML68YlkWXDZRzih_XaDMQc9o2A&oe=6846D036"
                    video="Carnívoros Mind - Drink"
                />
                <Video
                    link="https://www.instagram.com/reel/DJrfFxmxMbU/"
                    videosrc="https://instagram.fbjp2-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQP6OoTdQ8k0a7Ouw_BUx80bGDWSQuY8TevwJHU7tkRXnPj8GscqBuXM18X7yfLqyg0LDi7Do1S_-8jefkEkvmXQIyb3jSrY8xcXfVo.mp4?_nc_cat=111&_nc_oc=Adk6LXiUqawnf6fQmYBgvDy4-mPqdloqBavRcdmHHdhsySKNsWDeu950o_8J7AuPyxxOAcs9SRD9sX_0uauirNEz&_nc_sid=5e9851&_nc_ht=instagram.fbjp2-1.fna.fbcdn.net&_nc_ohc=Vu_bhuoJXgQQ7kNvwEfl-R6&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTA3MDgzMjUzODM0OTUxMywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=8d89e30f1546a024&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8zRDQxNUFENDJCMEY3OTgwMzJDN0VCMEJGNzNFM0NCRV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTktaU0IxTlVDWEVQVmtHQUFTV3Nla2JjUFlYYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmkr__kNT65gMVAigCQzMsF0AvzMzMzMzNGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfOPnBa3A-VxfPq69mtqwIMC9Wgpfp6TCuQYsI0BP0msoA&oe=6846B4E8"
                    video="Izuky - Combo"
                />
                <Video
                    link="https://www.instagram.com/botecotijuca/"
                    videosrc="/videos/Esquenta.mp4"
                    video="Boteco Tijuca - Esquenta"
                />
            </div>
        </div>
    );
}
