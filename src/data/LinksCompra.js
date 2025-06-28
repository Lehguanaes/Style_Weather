// src/componentes/LinkCompra.js

function gerarChave(path) {
  try {
    const partes = path.split('/');
    const nomeArquivo = partes.at(-1);
    const pasta = partes.at(-2);

    // Remove hash do tipo "imagem.abc123.png" → "imagem.png"
    const nomeSemHash = nomeArquivo.replace(/\.[a-z0-9]{8,}\.png$/, '.png');

    return `${pasta}/${nomeSemHash}`;
  } catch (e) {
    return '';
  }
}

const LinksCompraRaw = {

  

  'balada/croopped_black.png': 'https://br.pinterest.com/pin/470415123590044547/',
  'balada/macacao.png': 'https://br.shein.com/ark/3715?goods_id=43028053&test=5051&url_from=adhub548206128&scene=1&pf=google&ad_type=DPA&language=pt-br&siteuid=br&landing_page_id=3715&ad_test_id=12155&requestId=olw-4swfsymjgmbo&cid=22637271053&gad_source=1&skucode=I52io48p74ew&onelink=0/googlefeed_br&network=g&gad_campaignid=22637271053&gclid=CjwKCAjw3_PCBhA2EiwAkH_j4pEbtyo7TqLvyUG1uBIKU0XeEl8R5mcMmAtrcj1ks7w3c5td20Tc8xoC7M4QAvD_BwE&adid=756349749335&geoid=9197054&gbraid=0AAAAADm0yO6oU-yCsMLVujwmhsBAbqatU&setid=178905808005&kwd=pla-329397653502&currency=BRL&lang=pt',
  'balada/jaqueta_couro.png': 'https://www.omk.com.br/jaqueta-de-couro-feminina-perfecto-ref-602-branco-m.html',
  'balada/saia_prata.png': 'https://fiozato.com/products/saia-candy?currency=BRL&variant=43923992477949&utm_source=google&utm_medium=cpc&utm_campaign=Google%20Shopping&stkn=e80ee5a2bcca&gad_source=1&gad_campaignid=20160731911&gbraid=0AAAAApk-n2NmsvXrypW6DMLc272pqWHDm&gclid=CjwKCAjw3_PCBhA2EiwAkH_j4q86pZFrDEpcmUNe39QtNRodAdsT3KF-xW5EcwyS_g8Vuol3RwlKZhoCpf8QAvD_BwE',
  'balada/bota_cuturno.png': 'https://www.capelliboots.com.br/p-coturno-feminino-salto-tratorado-100-couro-legitimo-preto-7801-preto',

  // ameno-feminino-academia
  'academia/regata_preta.png': 'https://www.insiderstore.com.br/products/the-perfect-top?variant=43419551826069&utm_source=google&utm_medium=cpc&utm_campaign=shopping_fem&gad_source=1&gad_campaignid=22040868466&gbraid=0AAAAACxzWcTnoWwwDz0-a-MvZ9DfFVIrk&gclid=CjwKCAjw3_PCBhA2EiwAkH_j4idrEQ1_HsoJckJyPklKzBsFsE-hPzLuBr8EUNPdFZMGNRBkNTn_vxoCbh4QAvD_BwE',
  'academia/fone.png': 'https://www.mercadolivre.com.br/headset-marvo-h8618-wh-wired-rgb-white-cor-branco-luz-rgb-static/p/MLB34954867?pdp_filters=item_id%3AMLB3979745049&from=gshop&matt_tool=35546102&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354262&matt_ad_group_id=173090559076&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882729389&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB34954867-product&matt_product_partition_id=2389837591859&matt_target_id=pla-2389837591859&cq_src=google_ads&cq_cmp=22090354262&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354262&gbraid=0AAAAAD93qcBZda7VNvSs6dIaSX-I0SorJ&gclid=CjwKCAjw3_PCBhA2EiwAkH_j4pyPaz1HAfLncX5zJ3xUlFt_Ml1ecBh3XS35IvJXIg2po39q0LcYnBoC2tgQAvD_BwE',
  'academia/saia_short.png': 'https://br.shein.com/SAIA-SHORTS-FEMININA-p-46627764.html?mallCode=2',
  'academia/tennis_esport.png': 'https://www.nike.com.br/tenis-nike-flex-experience-run-12-masculino-028349.html?cor=IM&utm_source=bing&utm_medium=cpc&utm_campaign=Bing_PMAX_AllProducts&msclkid=864aa1f56a3a1f6b1722c9ab416f8e0f',
  'academia/meia.png': 'https://www.amazon.com.br/Meia-Under-Armour-Pares-Branco/dp/B0C11RDRZM/ref=sr_1_26?adgrpid=1145691896244968&dib=eyJ2IjoiMSJ9.UPdUZKQ1qCH_2DNZcwUnTxDBGF20HaFO32k3WVeJrvsDXTw9hub7KDySiY026bbn9Y8cYXPwXzMVRKg9ddU4VlF1q8hQQ6aYzxSisqaqoxhBjixxq82dGt1jwRAfhWeaMRLrQAsmfVqQQvOTWf4DKA5ZAj_AsAo3DV0ZcVHx3XZMnRksr0l_wZAp00PG4sECJDhL3eZlK86wjNoAgeioM_Nby7UgcJ3fePA86F4y10JOcgNA-w9pzA1rXUR0SF-i1YZfLg2_Ckx_EtKAwl5gCobdkNNSyn-b-Vaxol8ss8o.icLxWlSC6eSxIRIlJDmkqBMTd5J8UqvBjN1ri2rcvz4&dib_tag=se&hvadid=71605906789956&hvbmt=be&hvdev=c&hvlocphy=116068&hvnetw=o&hvqmt=e&hvtargid=kwd-71606318339643%3Aloc-20&hydadcr=12160_13346762&keywords=meia+branca+cano+alto&mcid=db070461bb3436e9a551d09d95f0e9c0&qid=1751002156&sr=8-26&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9',


  //ameno-feminino-escola
  'escola/body_branca.png' : 'https://www.modallevo.com.br/body-feminino-manga-curta-branco-bomcbra',
  'escola/blusa_crooped.png' : 'https://br.pinterest.com/pin/654077545923010974/',
  'escola/legging_flair.png' : 'https://produto.mercadolivre.com.br/MLB-3968197447-calca-legging-flare-bailarina-preta-zero-transparncia-_JM?matt_tool=59082313&matt_word=&matt_source=bing&matt_campaign=MLB_ML_BING_AO_APP%20%26%20SPORTS-ALL-ALL_X_PLA_ALLB_TXS_ALL&matt_campaign_id=382858293&matt_ad_group=APP%20%26%20SPORTS&matt_match_type=e&matt_network=o&matt_device=c&matt_keyword=default&msclkid=32f9badab58018eebba5d2849bd5b638&utm_source=bing&utm_medium=cpc&utm_campaign=MLB_ML_BING_AO_APP%20%26%20SPORTS-ALL-ALL_X_PLA_ALLB_TXS_ALL&utm_term=4581252654962581&utm_content=APP%20%26%20SPORTS',
  'escola/vans_school.png' : 'https://br.shein.com/T%C3%AAnis-Casuais-Masculinos-KNU-Skool-Sola-Plana-tipo-Skate-Sapatos-Vers%C3%A1teis-para-Mulheres-p-78237806.html?mallCode=2',
  'escola/faixa_branca.png' : 'https://produto.mercadolivre.com.br/MLB-1012965696-faixa-de-cabelo-modelo-basico-larga-atacado-12-pecas-_JM?searchVariation=181694710599#polycard_client=search-nordic&searchVariation=181694710599&position=22&search_layout=grid&type=item&tracking_id=c1c82996-9afa-44ea-b4ab-78ae4d6acc27',

 
  //ameno-feminino-parque
 'parque/vestido_longo_rosa.png' : 'https://www.temu.com/br/ul/kuiper/un3.html?subj=dpa-un&_bg_fs=1&_p_jump_id=1082&_x_vst_scene=adg&goods_id=601099799026416&adg_ctx=a-e8a02eb0~c-eeb786e9~f-d79eb445&_p_rfs=1&_x_ads_channel=pinterest&_x_ads_creative_id=4260608790843&_x_ads_id=2680083301281&_x_ads_set=626753841199&_x_ads_sub_channel=shopping&_x_ns_catalog_id=1000033&_x_ns_creative=4260608790843&_x_ns_gid=601099799026416&_x_ns_product_id=17593352456093&_x_ns_prz_type=101&_x_bg_adid=13690517&_x_ads_account=549767572656&pp=0&epik=dj0yJnU9OURab1A0QTlmaDN4SklRdS10YVQ1Wjl3NE9uakJaNnEmcD0xJm49Q3AxVGlsUVNCWWkxTTk1dENwMGhLQSZ0PUFBQUFBR2hlTUVB',
 'parque/presilha_flor.png' : 'https://br.shein.com/12pcs-Summer-Flower-Clip-Small-Hair-Clip-Flower-Hairpin-Holiday-Beach-Barrettes-Accessories-p-52980504.html?src_identifier=st%3D2%60sc%3Dpresilha%20de%20flor%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1751003308778&mallCode=2&pageListType=4&imgRatio=3-4&pageListType=4',
 'parque/macaquinho.png' : 'https://br.shein.com/Women-s-Short-Jumpsuit-Strappy-With-Padded-Back-Semi-Naked-Back-Adjustment-Openwork-Simple-Casual-Fashion-Spring-Summer-p-65251966.html?src_identifier=st%3D2%60sc%3Dmacacao%20feminino%20verde%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_goods_detail1751003322987&mallCode=2&pageListType=4&imgRatio=3-4&pageListType=4',
 'parque/papete.png' : 'https://br.pinterest.com/pin/181269954693159890/',
 'parque/jaqueta_jeansclara.png' : 'https://br.shein.com/Women-Denim-Jackets-Coats-p-30322758.html?src_identifier=st%3D2%60sc%3Djaqueta%20jeans%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1751003590813&mallCode=2&pageListType=4&imgRatio=3-4&pageListType=4',




 //frio-feminino-academia
 'academia/blusa_preta.png' :  'https://br.shein.com/DAZY-Women-s-Solid-Color-Long-Raglan-Sleeve-T-Shirt-With-Zippered-Placket-p-30894837.html?mallCode=1&imgRatio=3-4',
 'academia/garrafa_agua.png' : 'https://www.madeiramadeira.com.br/garrafa-1l-com-canudo-com-marcador-de-agua-cinza-em-policabornato-lyor-700130616.html',
 'academia/fone.png' : 'https://www.mercadolivre.com.br/fone-de-ouvido-bluetooth-jbl-free-ii-in-ear-preto/p/MLB19223351?pdp_filters=item_id%3AMLB5405215606&from=gshop&matt_tool=14213447&matt_word=&matt_source=bing&matt_campaign=MLB_ML_BING_AO_CE-ALL-ALL_X_PLA_ALLB_TXS_ALL&matt_campaign_id=382858295&matt_ad_group=CE&matt_match_type=e&matt_network=o&matt_device=c&matt_keyword=default&msclkid=67a9ff6039411566c892973e0d5e78b2&utm_source=bing&utm_medium=cpc&utm_campaign=MLB_ML_BING_AO_CE-ALL-ALL_X_PLA_ALLB_TXS_ALL&utm_term=4581596253419723&utm_content=CE',
 'academia/leggin_preta.png' : 'https://produto.mercadolivre.com.br/MLB-5325436610-calca-legging-termica-lupo-sport-feminina-underwear-warm-_JM#polycard_client=recommendations_vip-v2p&reco_backend=recomm-platform_coldstart&reco_model=coldstart_high_exposition%2C+ranker_entity_v2_retrieval_system_vpp_v2p%2C+coldstart_low_exposition&reco_client=vip-v2p&reco_item_pos=0&reco_backend_type=low_level&reco_id=59e1193f-88bb-44d8-9f28-60c91ecec900',
 'academia/tenis_preto.png' :  'https://www.lojastorra.com.br/tenis-masculino-esportivo-adidas-run-72-preto-61241000677521/p?idsku=341259&utm_source=bing&utm_medium=cpc&utm_campaign=ic_bing_perf_conv_vend_aon_shopping_comp&msclkid=94824f952b5011bd062d27cb1fca73c7',




//frio-feminino-balada
'balada/jaqueta_branca.png': 'https://www.temu.com/br/casaco-de--com--para-mulher-tecido-de-malha-100-poli%C3%A9ster-cor---comprida--de-correr--de-outono-inverno-adorno-de--de--g-601099814778797.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd4d18a00-349e-4f33-89f4-15719bfa3990.jpg&spec_id=2001&spec_gallery_id=24768&spec_ids=2001&share_token=H3a1_DHGlVEU62entCSNVrD_aXtMsEV3flJF1OyHpNTuLfXNmXFpIVATCCUbmJYCNsgK2b_4-SZrAc-AsMEmmfrcTBkjfWEw-Fdva0kXsYZ8dnE63Qnfw1jAZCiI7gvZXCyIpos2OJ5p0ayLgES3v9&refer_page_el_sn=209279&_x_vst_scene=adg&_x_ads_channel=pinterest&_x_ads_creative_id=4260608960782&_x_ads_id=2680084087895&_x_ads_set=626754359961&_x_ads_sub_channel=shopping&_x_ns_catalog_id=1000033&_x_ns_creative=4260608960782&_x_ns_gid=601099814778797&_x_ns_product_id=17593421828877&_x_ns_prz_type=101&_x_bg_adid=16241793&_x_ads_account=549767572656&refer_page_name=kuiper&refer_page_id=14021_1751058320448_lsu20mqrn4&refer_page_sn=14021&_x_sessn_id=bqje7nftcx',
'balada/jaqueta_roxa.png': 'https://br.pinterest.com/pin/328059154130218090/',
'balada/calca_couro_preta.png': 'https://br.pinterest.com/pin/214061788538168561/',
'balada/bota_longa_preta.png': 'https://www.zzmall.com.br/bota-wyatt-up-couro-preta/p/S2233500020001U',
'balada/bolsa_preta.png': 'https://br.pinterest.com/pin/72550243991463659/',



//frio-feminino-escola
'escola/blusa_branca.png' : ' https://br.shein.com/SHEIN-PETITE-Jaqueta-com-Capuz-Minimalista-de-Bolso-com-Z%C3%ADper-Frontal-de-Manga-Longa-e-Cor-S%C3%B3lida,-Uso-Di%C3%A1rio-Casual,-Blusa-de-Manga-Longa-p-44174297.html?mallCode=2',
'escola/bota_coturno_preta.png' : 'https://br.shein.com/Bota-Coturno-Feminino-Preto-Blogueira-Maravilhosa-Lan%C3%A7amento-Exclusivo-p-18702476.html?mallCode=2 ',
'escola/calca_moletom_branco.png' : 'https://br.shein.com/SHEIN-EZwear-Cal%C3%A7a-de-Moletom-Branca-Casual-Larga-com-Cord%C3%A3o-na-Cintura,-Plus-Size-para-Mulheres-p-42728861.html?mallCode=1 ',



//frio-feminino-parque
'parque/blusa_roxa.png' : ' https://br.pinterest.com/pin/268316090291361721/',
'parque/calca_termica_preta.png' : 'https://produto.mercadolivre.com.br/MLB-1585522134-kit-2-calca-legging-flanelada-termica-antifrio-tecido-suplex-_JM?matt_tool=59082313&matt_word=&matt_source=bing&matt_campaign=MLB_ML_BING_AO_APP%20%26%20SPORTS-ALL-ALL_X_PLA_ALLB_TXS_ALL&matt_campaign_id=382858293&matt_ad_group=APP%20%26%20SPORTS&matt_match_type=e&matt_network=o&matt_device=c&matt_keyword=default&msclkid=e75b6e8a9767197163df06d5c0973373&utm_source=bing&utm_medium=cpc&utm_campaign=MLB_ML_BING_AO_APP%20%26%20SPORTS-ALL-ALL_X_PLA_ALLB_TXS_ALL&utm_term=4581252654962580&utm_content=APP%20%26%20SPORTS ',
'parque/tenis_preto.png' : 'https://www.lojastorra.com.br/tenis-masculino-esportivo-adidas-run-72-preto-61241000677521/p?idsku=341259&utm_source=bing&utm_medium=cpc&utm_campaign=ic_bing_perf_conv_vend_aon_shopping_comp&msclkid=94824f952b5011bd062d27cb1fca73c7 ',



//frio-feminino-praia
'praia/mergulho_preta.png' : ' https://produto.mercadolivre.com.br/MLB-5432430170-a-fatos-de-mergulho-masculinos-completos-de-mergulho-surf-_JM#polycard_client=recommendations_vip-v2p&reco_backend=recomm-platform_coldstart&reco_model=ranker_entity_v2_retrieval_system_vpp_v2p%2C+coldstart_low_exposition%2C+coldstart_high_exposition&reco_client=vip-v2p&reco_item_pos=2&reco_backend_type=low_level&reco_id=73a74dda-3137-4bf8-95e3-f51faa102631',
'praia/canga_preta_branca.png' : ' https://www.enjoei.com.br/p/canga-preta-e-branca-64222007?vid=41bbb6c6-31cb-4c9a-9152-801ca69eae0c',
'praia/toalha_branca.png' : ' https://www.mercadolivre.com.br/kit-conjunto-de-toalhas-para-hotel-banho-luxo-grossa-branca-cor-branco-simples/p/MLB43768970?pdp_filters=item_id%3AMLB3917262863&from=gshop&matt_tool=92309335&matt_word=&matt_source=bing&matt_campaign=MLB_ML_BING_AO_HOME%20%26%20INDUSTRY-ALL-ALL_X_PLA_ALLB_TXS_ALL&matt_campaign_id=382858298&matt_ad_group=HOME%20%26%20INDUSTRY&matt_match_type=e&matt_network=o&matt_device=c&matt_keyword=default&msclkid=500b783b3ebf1998cf6b106467828c35&utm_source=bing&utm_medium=cpc&utm_campaign=MLB_ML_BING_AO_HOME%20%26%20INDUSTRY-ALL-ALL_X_PLA_ALLB_TXS_ALL&utm_term=4581252658057055&utm_content=HOME%20%26%20INDUSTRY',


//frio-feminino-restaurante
'restaurante/blusa_preta.png' : 'https://br.pinterest.com/pin/396387204980869957/ ',
'restaurante/bota_ugg_preta.png' : 'https://www.amazon.com.br/feminina-Mukluk-Revival-UGG-Preto/dp/B07NCBDSLH/ref=sr_1_1_sspa?adgrpid=1139095747806914&dib=eyJ2IjoiMSJ9.OkUzxxz1dESewkvqvoFKTRXH1-6RAakTuztVKAkFmdgAqmS6Ua0lipflo7eFm7TUg8rtJ8F3LXEtYvzsizQyXgSxht9RHe24VW2I-SSo0NVOqJolaXZtXXSvU0TdPcHvM4awy_1qT-X-ifXYlVvqGBW2SbixXNrH0yJgJv1EhDCv7C3HHDF1DMLI2Mrj6c8-BdDbBpvUpXEVolGEnoysHwb_mxzke-rGyeaOkDrmlzgvaKIk8ix_obytKt0O5K0zaAA6EuMNI5jFRYnRtR9AElGoQcykU4BId6oL9AR0Ki4.puwx7WPWnkCi4IYz_W6cQ--JCcqulTzZrE_wuCUR3Ns&dib_tag=se&hvadid=71193637662811&hvbmt=be&hvdev=c&hvlocphy=116068&hvnetw=o&hvqmt=e&hvtargid=kwd-71194177559072%3Aloc-20&hydadcr=13690_13435604&keywords=bota+feminina+ugg&mcid=55a9ae1a981b3f50bda0d40218506990&qid=1751080054&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1 ',
'restaurante/calca_wide_branca.png' : 'https://www.magazineluiza.com.br/calca-jeans-wide-leg-branca-sly/p/jkjkc7jae6/md/otmd/?utm_source=bing&utm_medium=cpc&utm_campaign=bing_eco_per_ven_sho_all_sor_3p_all-products-std&partner_id=77025&utm_term=77025&gclid=eae1e65c678d1edf4f928e033ca3cfe8&gclsrc=3p.ds&msclkid=eae1e65c678d1edf4f928e033ca3cfe8 ',
'restaurante/jaquetaPuffer_preta.png' : 'https://br.shein.com/Jaqueta-Puffer-Feminina-Forrada-couro-sint%C3%A9tico-p-60631014.html?mallCode=2 ',


//frio-feminino-shopping
'shopping/blusa_la_preta.png' : ' https://br.shein.com/SHEIN-EZwear-Raglan-Sleeve-Drawstring-Hoodie-p-11507168.html?src_identifier=st%3D2%60sc%3Dmoletom%20cropped%20preto%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1751080266324&mallCode=1&pageListType=4&imgRatio=3-4&pageListType=4',
'shopping/blusa_croche_branca.png' : 'https://br.shein.com/SHEIN-Moletom-Cropped-Relaxado-com-Textura-Acolchoada-e-Tric%C3%B4-Branco-para-Adolescentes-p-39464392.html?mallCode=1 ',
'shopping/bolsa_preta.png' : ' https://br.shein.com/SHEIN-EZwear-Raglan-Sleeve-Drawstring-Hoodie-p-11507168.html?src_identifier=st%3D2%60sc%3Dmoletom%20cropped%20preto%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1751080266324&mallCode=1&pageListType=4&imgRatio=3-4&pageListType=4',
'shopping/bota_ugg_preta.png' : 'https://www.amazon.com.br/feminina-Mukluk-Revival-UGG-Preto/dp/B07NCBDSLH/ref=sr_1_1_sspa?adgrpid=1139095747806914&dib=eyJ2IjoiMSJ9.OkUzxxz1dESewkvqvoFKTRXH1-6RAakTuztVKAkFmdgAqmS6Ua0lipflo7eFm7TUg8rtJ8F3LXEtYvzsizQyXgSxht9RHe24VW2I-SSo0NVOqJolaXZtXXSvU0TdPcHvM4awy_1qT-X-ifXYlVvqGBW2SbixXNrH0yJgJv1EhDCv7C3HHDF1DMLI2Mrj6c8-BdDbBpvUpXEVolGEnoysHwb_mxzke-rGyeaOkDrmlzgvaKIk8ix_obytKt0O5K0zaAA6EuMNI5jFRYnRtR9AElGoQcykU4BId6oL9AR0Ki4.puwx7WPWnkCi4IYz_W6cQ--JCcqulTzZrE_wuCUR3Ns&dib_tag=se&hvadid=71193637662811&hvbmt=be&hvdev=c&hvlocphy=116068&hvnetw=o&hvqmt=e&hvtargid=kwd-71194177559072%3Aloc-20&hydadcr=13690_13435604&keywords=bota+feminina+ugg&mcid=55a9ae1a981b3f50bda0d40218506990&qid=1751080054&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1 ',
'shopping/calca_pantalona_roxa.png' : 'https://br.shein.com/Women-Pants-p-12509536.html?src_identifier=st%3D2%60sc%3Dcal%C3%A7a%20pantalona%20roxa%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_goods_detail1751080302335&mallCode=2&pageListType=4&imgRatio=3-4&pageListType=4',


//frio-feminino-trabalho
'trabalho/blusa_social.png' : 'https://br.shein.com/dress-company-Blusa-Gola-Alta-Manga-Longa-T%C3%A9rmica-Gola-Alta-Forrada-Preta-Simples-Tecido-Malhado-blusa-inverno-outono-p-96566397.html?mallCode=2 ', 
'trabalho/bota_ugg_preta.png' : 'https://www.amazon.com.br/feminina-Mukluk-Revival-UGG-Preto/dp/B07NCBDSLH/ref=sr_1_1_sspa?adgrpid=1139095747806914&dib=eyJ2IjoiMSJ9.OkUzxxz1dESewkvqvoFKTRXH1-6RAakTuztVKAkFmdgAqmS6Ua0lipflo7eFm7TUg8rtJ8F3LXEtYvzsizQyXgSxht9RHe24VW2I-SSo0NVOqJolaXZtXXSvU0TdPcHvM4awy_1qT-X-ifXYlVvqGBW2SbixXNrH0yJgJv1EhDCv7C3HHDF1DMLI2Mrj6c8-BdDbBpvUpXEVolGEnoysHwb_mxzke-rGyeaOkDrmlzgvaKIk8ix_obytKt0O5K0zaAA6EuMNI5jFRYnRtR9AElGoQcykU4BId6oL9AR0Ki4.puwx7WPWnkCi4IYz_W6cQ--JCcqulTzZrE_wuCUR3Ns&dib_tag=se&hvadid=71193637662811&hvbmt=be&hvdev=c&hvlocphy=116068&hvnetw=o&hvqmt=e&hvtargid=kwd-71194177559072%3Aloc-20&hydadcr=13690_13435604&keywords=bota+feminina+ugg&mcid=55a9ae1a981b3f50bda0d40218506990&qid=1751080054&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1  ',
'trabalho/calca_social.png' : ' https://produto.mercadolivre.com.br/MLB-3383839073-calca-preta-flare-feminina-social-k2b-original-cbolso-_JM?matt_tool=59082313&matt_word=&matt_source=bing&matt_campaign=MLB_ML_BING_AO_APP%20%26%20SPORTS-ALL-ALL_X_PLA_ALLB_TXS_ALL&matt_campaign_id=382858293&matt_ad_group=APP%20%26%20SPORTS&matt_match_type=e&matt_network=o&matt_device=c&matt_keyword=default&msclkid=4fce04495a141d3bc5616c16046b97ac&utm_source=bing&utm_medium=cpc&utm_campaign=MLB_ML_BING_AO_APP%20%26%20SPORTS-ALL-ALL_X_PLA_ALLB_TXS_ALL&utm_term=4581252654962581&utm_content=APP%20%26%20SPORTS', 
'trabalho/cinto.png' : ' https://br.shein.com/Cinto-Plus-Size-Redondo-Preto-com-Dourado-p-15071197.html?mallCode=2', 
'trabalho/colar.png' : ' https://www.mercadolivre.com.br/colar-choker-fita-lisa-malha-tendncia-folheado-a-ouro-18k-cor-dourado/p/MLB25356064#polycard_client=search-nordic&searchVariation=MLB25356064&wid=MLB3846260918&position=2&search_layout=grid&type=product&tracking_id=e16a0c74-f461-4ec9-8568-dd10fb47a516&sid=search', 



 //calor-feminino-academia
 'academia/blusa_branca.png' : 'https://br.shein.com/SHEIN-BASICS-4pcs-Set-Casual-Solid-Color-Knitted-Crew-Neck-Short-Sleeve-Fitted-Basic-Crop-Top-Tee-Shirts-For-Women-p-53730467.html?src_identifier=st%3D2%60sc%3Dcropped%20branco%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_goods_detail1751003866544&mallCode=1&pageListType=4&imgRatio=3-4&pageListType=4',
  'academia/regata_branca.png' : 'https://br.pinterest.com/pin/214061788536810496/',
 'academia/short_saia_preto.png' : 'https://www.amazon.com.br/feminina-Dri-fit-Victory-Flouncy-branco/dp/B09XY41ZW4/ref=sr_1_8?adgrpid=1142393297367349&dib=eyJ2IjoiMSJ9.LFk_RdtO1aFpdN1kmirmllhaKupKRkzZLziDlNS4ifXuVcdOx6-TpBV-lRwcJA263cZqdbyU9RNHXYAgk5CyI3zXrmJb7FbRpF4gFMFrttc4gCP2LlRT3-lmWpiC6D-v8l92dLtNJHLtIxkYht2yC3eO4qDZJtNVu_kbuTEF3XncJsP80TVu5tqgvJOfvKQQzcfqQWYdFveYzj7Eagl0SXLY9yE3YXHFqZAMVI6gRDa0vSoHNTH5eMIPKeWVKR64EUETM5IXlAO0EVL-ukyQzG_1xrEoJ0Ho4P4EriOpAXw.-vF3OX9vsgyppN3MQL29R6Kb-vPKsCHujE_AwuQ7NAw&dib_tag=se&hvadid=71399747902346&hvbmt=be&hvdev=c&hvlocphy=116068&hvnetw=o&hvqmt=e&hvtargid=kwd-71400123378359%3Aloc-20&hydadcr=12134_13346736&keywords=shorts+saia+nike&mcid=814e438424553875b87f21f9bfb4424c&qid=1751004973&sr=8-8&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147',
 'academia/tenis_preto.png' : 'https://www.lojastorra.com.br/tenis-masculino-esportivo-adidas-run-72-preto-61241000677521/p?idsku=341259&utm_source=bing&utm_medium=cpc&utm_campaign=ic_bing_perf_conv_vend_aon_shopping_comp&msclkid=94824f952b5011bd062d27cb1fca73c7',
 'academia/garrafa_agua.png' : 'https://www.madeiramadeira.com.br/garrafa-1l-com-canudo-com-marcador-de-agua-cinza-em-policabornato-lyor-700130616.html',
 'academia/fone.png' : 'https://www.mercadolivre.com.br/fone-de-ouvido-bluetooth-jbl-free-ii-in-ear-preto/p/MLB19223351?pdp_filters=item_id%3AMLB5405215606&from=gshop&matt_tool=14213447&matt_word=&matt_source=bing&matt_campaign=MLB_ML_BING_AO_CE-ALL-ALL_X_PLA_ALLB_TXS_ALL&matt_campaign_id=382858295&matt_ad_group=CE&matt_match_type=e&matt_network=o&matt_device=c&matt_keyword=default&msclkid=67a9ff6039411566c892973e0d5e78b2&utm_source=bing&utm_medium=cpc&utm_campaign=MLB_ML_BING_AO_CE-ALL-ALL_X_PLA_ALLB_TXS_ALL&utm_term=4581596253419723&utm_content=CE',
 'academia/fone.png' :  'https://www.mercadolivre.com.br/fone-de-ouvido-bluetooth-jbl-free-ii-in-ear-preto/p/MLB19223351?pdp_filters=item_id%3AMLB5405215606&from=gshop&matt_tool=14213447&matt_word=&matt_source=bing&matt_campaign=MLB_ML_BING_AO_CE-ALL-ALL_X_PLA_ALLB_TXS_ALL&matt_campaign_id=382858295&matt_ad_group=CE&matt_match_type=e&matt_network=o&matt_device=c&matt_keyword=default&msclkid=67a9ff6039411566c892973e0d5e78b2&utm_source=bing&utm_medium=cpc&utm_campaign=MLB_ML_BING_AO_CE-ALL-ALL_X_PLA_ALLB_TXS_ALL&utm_term=4581596253419723&utm_content=CE',



};

const LinksCompra = {};
for (const chave in LinksCompraRaw) {
  const novaChave = gerarChave(chave);
  LinksCompra[novaChave] = LinksCompraRaw[chave];
}

export { LinksCompra };
