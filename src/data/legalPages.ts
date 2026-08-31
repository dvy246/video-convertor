import type { SupportedLanguage } from '../i18n/languages';

export interface LegalPageData {
  title: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  updatedDate: string;
  sections: {
    title: string;
    paragraphs: string[];
    listItems?: string[];
  }[];
  contactText: string;
}

export const PRIVACY_PAGES: Record<SupportedLanguage, LegalPageData> = {
  pt: {
    title: 'Política de Privacidade',
    metaTitle: 'Política de Privacidade e LGPD — Conversor de Vídeo',
    metaDescription: 'Conheça nossa política de privacidade. O ConversordeVideo.com processa todos os vídeos localmente no navegador, sem coletar ou armazenar seus arquivos.',
    badge: 'Transparência & LGPD',
    updatedDate: 'Agosto de 2026',
    sections: [
      {
        title: '1. Princípio Fundamental: Processamento 100% Local',
        paragraphs: [
          'O ConversordeVideo.com foi desenvolvido com o conceito de Privacidade desde o Design (Privacy by Design). Ao utilizar nossa plataforma, todos os arquivos de vídeo, áudio ou imagem que você seleciona para conversão são processados exclusivamente dentro do seu próprio navegador através de tecnologia WebAssembly compilada localmente.',
          'Nenhum arquivo de mídia é transmitido, copiado, gravado ou analisado em servidores externos ou na nuvem. Todo o ciclo de vida do arquivo permanece estritamente na memória RAM temporária do seu computador ou celular.'
        ]
      },
      {
        title: '2. Conformidade com a LGPD e GDPR',
        paragraphs: [
          'Em total conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) e o Regulamento Geral sobre a Proteção de Dados da União Europeia (GDPR):'
        ],
        listItems: [
          'Não coletamos nem solicitamos dados pessoais (nome, e-mail, telefone, senhas);',
          'Não exigimos criação de conta ou cadastro para utilizar o conversor;',
          'Não vendemos nem compartilhamos qualquer tipo de informação com redes de publicidade invasiva;',
          'Não utilizamos cookies de rastreamento comportamental de terceiros.'
        ]
      },
      {
        title: '3. Métricas Técnicas e Desempenho',
        paragraphs: [
          'Podemos monitorar métricas anônimas estritamente técnicas e agregadas para garantir a estabilidade do site (como tempo de resposta e compatibilidade com navegadores), sem jamais associar dados a usuários individuais ou aos arquivos processados.'
        ]
      }
    ],
    contactText: 'Para dúvidas sobre nossa política e segurança, consulte os canais oficiais do domínio conversordevideo.com.'
  },
  en: {
    title: 'Privacy Policy',
    metaTitle: 'Privacy Policy & GDPR Compliance — Free Video Converter',
    metaDescription: 'Read our privacy policy. ConversordeVideo.com processes 100% of video files locally in your browser memory. Zero files are uploaded or stored.',
    badge: 'Privacy & GDPR Compliance',
    updatedDate: 'August 2026',
    sections: [
      {
        title: '1. Core Principle: 100% In-Browser Local Processing',
        paragraphs: [
          'ConversordeVideo.com is engineered around Privacy by Design. When you use our tool, all video, audio, and media files you select are transcoded exclusively in your browser memory using client-side WebAssembly technology.',
          'Zero bytes are uploaded to remote servers, cloud infrastructure, or third parties. Your media files never leave your computer, tablet, or smartphone.'
        ]
      },
      {
        title: '2. GDPR & Global Data Protection Compliance',
        paragraphs: [
          'In strict accordance with the General Data Protection Regulation (GDPR) and international privacy frameworks:'
        ],
        listItems: [
          'We do not collect personal data such as names, email addresses, phone numbers, or passwords;',
          'No account creation or registration is required to use our services;',
          'We never sell, rent, or distribute user data to third-party ad networks or brokers;',
          'No intrusive cross-site tracking cookies are used.'
        ]
      },
      {
        title: '3. Anonymous Technical Telemetry',
        paragraphs: [
          'We may collect aggregate, non-personally identifiable technical telemetry solely for Core Web Vitals monitoring and performance optimization (such as page load speeds and browser feature compatibility).'
        ]
      }
    ],
    contactText: 'If you have questions regarding our privacy architecture, feel free to contact us via the official domain conversordevideo.com.'
  },
  es: {
    title: 'Política de Privacidad',
    metaTitle: 'Política de Privacidad y RGPD — Convertidor de Video',
    metaDescription: 'Conozca nuestra política de privacidad. ConversordeVideo.com procesa el 100% de los videos localmente en tu navegador sin subir archivos.',
    badge: 'Transparencia y RGPD',
    updatedDate: 'Agosto de 2026',
    sections: [
      {
        title: '1. Principio Fundamental: Procesamiento 100% Local',
        paragraphs: [
          'ConversordeVideo.com fue creado bajo el principio de Privacidad desde el Diseño. Al usar nuestra herramienta, todos los archivos de video y audio se procesan exclusivamente en la memoria de tu navegador mediante WebAssembly.',
          'Ningún archivo es subido, almacenado ni analizado en servidores externos. Tus archivos nunca salen de tu dispositivo.'
        ]
      },
      {
        title: '2. Cumplimiento con RGPD y Protección de Datos',
        paragraphs: [
          'En total conformidad con el Reglamento General de Protección de Datos (RGPD):'
        ],
        listItems: [
          'No solicitamos datos personales, correos electrónicos ni contraseñas;',
          'No se requiere registro ni creación de cuenta;',
          'No vendemos ni compartimos datos con terceros o redes de publicidad;',
          'No utilizamos cookies de seguimiento invasivo.'
        ]
      },
      {
        title: '3. Datos Técnicos Anónimos',
        paragraphs: [
          'Podemos recopilar métricas técnicas anónimas y agregadas únicamente para verificar la velocidad de carga y la compatibilidad con navegadores.'
        ]
      }
    ],
    contactText: 'Para cualquier consulta sobre nuestra política de privacidad, contáctenos a través de conversordevideo.com.'
  },
  fr: {
    title: 'Politique de Confidentialité',
    metaTitle: 'Politique de Confidentialité & RGPD — Convertisseur Vidéo',
    metaDescription: 'Découvrez notre politique de confidentialité. ConversordeVideo.com traite 100% des vidéos localement dans votre navigateur sans téléversement.',
    badge: 'Confidentialité & RGPD',
    updatedDate: 'Août 2026',
    sections: [
      {
        title: '1. Principe Fondamental : Traitement 100% Local',
        paragraphs: [
          'ConversordeVideo.com est conçu selon le principe du respect de la vie privée dès la conception. Tous les fichiers multimédias sont transcodés exclusivement dans la mémoire vive de votre navigateur via WebAssembly.',
          'Aucun fichier n’est envoyé sur des serveurs distants ou dans le cloud. Vos médias ne quittent jamais votre appareil.'
        ]
      },
      {
        title: '2. Conformité au RGPD',
        paragraphs: [
          'En stricte conformité avec le Règlement Général sur la Protection des Données (RGPD) :'
        ],
        listItems: [
          'Aucune collecte de données personnelles nominatives (nom, e-mail, téléphone) ;',
          'Aucune inscription ou création de compte requise ;',
          'Aucun partage ni vente de données à des tiers ;',
          'Aucun traceur publicitaire invasif.'
        ]
      },
      {
        title: '3. Métriques Techniques Anonymes',
        paragraphs: [
          'Seules des données techniques anonymes relatives aux performances d’affichage et à la compatibilité du navigateur peuvent être mesurées.'
        ]
      }
    ],
    contactText: 'Pour toute question relative à notre architecture de sécurité, contactez-nous via conversordevideo.com.'
  },
  ja: {
    title: 'プライバシーポリシー',
    metaTitle: 'プライバシーポリシー & セキュリティ — 動画変換ツール',
    metaDescription: 'ConversordeVideo.comのプライバシー方針。動画ファイルはすべて端末のブラウザ内で完結し、外部サーバーへのアップロードは一切ありません。',
    badge: '完全なプライバシー保護',
    updatedDate: '2026年8月',
    sections: [
      {
        title: '1. 基本理念：100% ブラウザ内ローカル処理',
        paragraphs: [
          'ConversordeVideo.com は「プライバシー・バイ・デザイン（設計段階からのプライバシー保護）」を最優先に開発されました。選択された動画や音声は、WebAssembly 技術によりすべてお使いの端末（PC・スマートフォン）のメモリ内でのみ処理されます。',
          'ファイルが外部サーバーやクラウドに送信、保存、解析されることは一切ありません。'
        ]
      },
      {
        title: '2. 個人情報の非収集と安全性',
        paragraphs: [
          'ユーザーのプライバシーを保護するため、以下の安全基準を遵守しています：'
        ],
        listItems: [
          '氏名、メールアドレス、パスワードなどの個人情報は一切収集しません。',
          '会員登録やアカウント作成は一切不要です。',
          'ユーザーデータを広告会社や第三者に販売・譲渡することはありません。',
          '侵入的なトラッキング Cookie は使用していません。'
        ]
      },
      {
        title: '3. 匿名技術データについて',
        paragraphs: [
          'サービスの安定性と表示速度向上のため、個人を特定できない統計的な技術ログ（ブラウザの種類やページの読み込み速度）のみを参照する場合があります。'
        ]
      }
    ],
    contactText: 'プライバシーポリシーに関するお問い合わせは conversordevideo.com よりご連絡ください。'
  },
  zh: {
    title: '隐私政策',
    metaTitle: '隐私政策与安全规范 — 在线视频转换器',
    metaDescription: '了解 ConversordeVideo.com 的隐私政策。所有视频文件均在浏览器本地内存处理，零云端上传，绝对保护隐私。',
    badge: '隐私优先与零上传',
    updatedDate: '2026年8月',
    sections: [
      {
        title: '1. 核心原则：100% 浏览器本地安全处理',
        paragraphs: [
          'ConversordeVideo.com 秉持“从设计之初保障隐私”的理念。用户选择转码的视频和音频文件，全部通过 WebAssembly 技术在您的电脑或手机本地内存中直接运算。',
          '绝无任何文件或媒体数据被上传至远程云端服务器进行存储或转码。您的文件自始至终不会离开您的设备。'
        ]
      },
      {
        title: '2. 个人信息与数据安全保障',
        paragraphs: [
          '我们严格遵守各项全球数据安全规范：'
        ],
        listItems: [
          '不收集任何姓名、电子邮箱、手机号等个人敏感隐私；',
          '无需注册登录，无需绑定任何账号或支付信息；',
          '绝不向广告商或第三方机构共享或出售任何用户数据；',
          '不使用任何跨站点侵入式追踪 Cookie。'
        ]
      },
      {
        title: '3. 匿名性能监控',
        paragraphs: [
          '我们仅可能收集汇总性质的匿名性能数据（如页面加载耗时和浏览器兼容性），用于优化前端渲染速度。'
        ]
      }
    ],
    contactText: '如果您对本站的隐私保护有任何疑问，请通过 conversordevideo.com 联系我们。'
  },
  no: {
    title: 'Personvernerklæring',
    metaTitle: 'Personvernerklæring & GDPR — Videokonvertering',
    metaDescription: 'Les om vårt personvern. ConversordeVideo.com behandler 100% av videofilene lokalt i nettleseren uten skyopplasting.',
    badge: 'Personvern & GDPR',
    updatedDate: 'August 2026',
    sections: [
      {
        title: '1. Kjernefunksjon: 100% Lokal Behandling i Nettleseren',
        paragraphs: [
          'ConversordeVideo.com er bygget med innebygd personvern (Privacy by Design). Alle filer du konverterer behandles utelukkende i nettleserminnet ditt via WebAssembly.',
          'Ingen filer lastes opp til eksterne servere eller skylagring. Mediefilene dine forlater aldri enheten din.'
        ]
      },
      {
        title: '2. GDPR og Databeskyttelse',
        paragraphs: [
          'I full overensstemmelse med GDPR og europeiske personvernregler:'
        ],
        listItems: [
          'Vi samler ikke inn personopplysninger som navn, e-post eller passord;',
          'Ingen registrering eller brukerkonto kreves;',
          'Vi selger aldri data til tredjeparter eller annonsenettverk;',
          'Ingen invasive sporingskapsler benyttes.'
        ]
      },
      {
        title: '3. Anonym Telemetri',
        paragraphs: [
          'Vi kan overvåke anonyme ytelsesmetrikker for å optimalisere nettstedets hastighet og nettleserkompatibilitet.'
        ]
      }
    ],
    contactText: 'Har du spørsmål om personvern, kontakt oss via conversordevideo.com.'
  },
  tr: {
    title: 'Gizlilik Politikası',
    metaTitle: 'Gizlilik Politikası ve KVKK / GDPR — Video Dönüştürücü',
    metaDescription: 'Gizlilik politikamızı inceleyin. ConversordeVideo.com tüm video ve ses dosyalarını tarayıcınızda yerel işler, sunucuya yükleme yapmaz.',
    badge: 'Gizlilik ve Güvenlik',
    updatedDate: 'Ağustos 2026',
    sections: [
      {
        title: '1. Temel İlke: %100 Tarayıcıda Yerel İşleme',
        paragraphs: [
          'ConversordeVideo.com gizlilik odaklı olarak geliştirilmiştir. Dönüştürmek için seçtiğiniz tüm video ve ses dosyaları WebAssembly ile cihazınızın belleğinde işlenir.',
          'Hiçbir dosya uzak sunuculara veya bulut sistemlerine yüklenmez, kopyalanmaz veya saklanmaz.'
        ]
      },
      {
        title: '2. KVKK ve GDPR Uyumluluğu',
        paragraphs: [
          'Kişisel verilerin korunması kanunları ve GDPR çerçevesinde:'
        ],
        listItems: [
          'İsim, e-posta veya şifre gibi kişisel veriler toplanmaz;',
          'Üyelik veya hesap oluşturma zorunluluğu yoktur;',
          'Veriler hiçbir reklam ağı veya üçüncü tarafla paylaşılmaz;',
          'İzinsiz takip çerezleri kullanılmaz.'
        ]
      },
      {
        title: '3. Anonim Performans Verileri',
        paragraphs: [
          'Yalnızca sayfa yüklenme hızı ve tarayıcı uyumluluğu gibi anonim performans metrikleri kaydedilebilir.'
        ]
      }
    ],
    contactText: 'Gizlilik politikamız hakkında sorularınız için conversordevideo.com üzerinden iletişime geçebilirsiniz.'
  },
  pl: {
    title: 'Polityka Prywatności',
    metaTitle: 'Polityka Prywatności i RODO — Konwerter Wideo',
    metaDescription: 'Poznaj naszą politykę prywatności. ConversordeVideo.com przetwarza pliki w 100% lokalnie w pamięci RAM przeglądarki bez wysyłania do chmury.',
    badge: 'Bezpieczeństwo i RODO',
    updatedDate: 'Sierpień 2026',
    sections: [
      {
        title: '1. Główna Zasada: 100% Przetwarzanie Lokalne w Przeglądarce',
        paragraphs: [
          'ConversordeVideo.com powstał w oparciu o zasadę Privacy by Design. Wszystkie pliki multimedialne są kodowane wyłącznie w pamięci RAM Twojego urządzenia za pomocą WebAssembly.',
          'Żaden plik nie jest przesyłany, zapisywany ani analizowany na zewnętrznych serwerach. Twoje materiały nigdy nie opuszczają Twojego komputera lub telefonu.'
        ]
      },
      {
        title: '2. Zgodność z RODO',
        paragraphs: [
          'W pełnej zgodzie z Ogólnym Rozporządzeniem o Ochronie Danych (RODO):'
        ],
        listItems: [
          'Nie gromadzimy danych osobowych takich jak imiona, e-maile czy hasła;',
          'Nie wymagamy rejestracji ani zakładania konta;',
          'Nie sprzedajemy danych sieciom reklamowym ani pośrednikom;',
          'Nie stosujemy inwazyjnych plików cookie śledzących użytkownika.'
        ]
      },
      {
        title: '3. Anonimowe Metryki Techniczne',
        paragraphs: [
          'Możemy monitorować anonimowe, zagregowane wskaźniki techniczne mające na celu optymalizację szybkości ładowania strony i zgodności z przeglądarkami.'
        ]
      }
    ],
    contactText: 'W razie pytań dotyczących bezpieczeństwa prosimy o kontakt za pośrednictwem conversordevideo.com.'
  }
};

export const TERMS_PAGES: Record<SupportedLanguage, LegalPageData> = {
  pt: {
    title: 'Termos de Uso',
    metaTitle: 'Termos de Uso — Conversor de Vídeo Online',
    metaDescription: 'Termos e condições de uso do ConversordeVideo.com. Ferramenta gratuita de conversão de arquivos de vídeo e áudio no navegador.',
    badge: 'Condições Gerais',
    updatedDate: 'Agosto de 2026',
    sections: [
      {
        title: '1. Aceitação dos Termos',
        paragraphs: [
          'Ao acessar e utilizar o ConversordeVideo.com, você concorda expressamente com estes termos de uso e com nossa política de privacidade. O serviço é disponibilizado de forma 100% gratuita para uso pessoal e profissional.'
        ]
      },
      {
        title: '2. Uso Responsável do Serviço',
        paragraphs: [
          'O usuário é o único responsável pelos arquivos e conteúdos que decide processar através da ferramenta. É expressamente vedado o uso da ferramenta para violar direitos autorais de terceiros ou processar conteúdos ilícitos.'
        ]
      },
      {
        title: '3. Isenção de Garantias e Desempenho Local',
        paragraphs: [
          'A ferramenta é fornecida no estado em que se encontra ("as is"). Como todo o processamento de áudio e vídeo ocorre no hardware do usuário via WebAssembly, o desempenho da conversão depende diretamente da capacidade de memória e processamento do dispositivo utilizado.'
        ]
      }
    ],
    contactText: 'Dúvidas sobre os termos podem ser esclarecidas através do site conversordevideo.com.'
  },
  en: {
    title: 'Terms of Service',
    metaTitle: 'Terms of Service — Free In-Browser Video Converter',
    metaDescription: 'Terms and conditions for using ConversordeVideo.com. Free, privacy-first in-browser video and audio transcoding.',
    badge: 'General Terms',
    updatedDate: 'August 2026',
    sections: [
      {
        title: '1. Acceptance of Terms',
        paragraphs: [
          'By accessing and using ConversordeVideo.com, you agree to these Terms of Service and our Privacy Policy. The platform is provided 100% free of charge for both personal and commercial use without subscription paywalls.'
        ]
      },
      {
        title: '2. Acceptable Use Policy',
        paragraphs: [
          'You retain full ownership and responsibility for the media files you choose to transcode. You agree not to use this utility to process unauthorized copyrighted material or unlawful media.'
        ]
      },
      {
        title: '3. Local Performance & Disclaimer of Warranties',
        paragraphs: [
          'The service is provided on an "as is" and "as available" basis. Because all video encoding occurs locally on your machine via WebAssembly, rendering speed and file handling capacity depend directly on your device’s hardware and RAM specifications.'
        ]
      }
    ],
    contactText: 'For inquiries regarding these terms, visit conversordevideo.com.'
  },
  es: {
    title: 'Términos de Uso',
    metaTitle: 'Términos de Uso — Convertidor de Video en el Navegador',
    metaDescription: 'Términos y condiciones de uso de ConversordeVideo.com. Herramienta gratuita de conversión de archivos en el navegador.',
    badge: 'Condiciones Generales',
    updatedDate: 'Agosto de 2026',
    sections: [
      {
        title: '1. Aceptación de los Términos',
        paragraphs: [
          'Al acceder y utilizar ConversordeVideo.com, aceptas estos términos de uso y nuestra política de privacidad. El servicio se ofrece de forma totalmente gratuita para uso personal y profesional.'
        ]
      },
      {
        title: '2. Uso Responsable',
        paragraphs: [
          'El usuario es el único responsable de los archivos que procesa. Está prohibido el uso de la herramienta para infringir derechos de autor o procesar contenido ilícito.'
        ]
      },
      {
        title: '3. Rendimiento Local y Exención de Garantías',
        paragraphs: [
          'La herramienta se proporciona "tal cual". Al ejecutarse en el hardware del usuario mediante WebAssembly, el rendimiento depende directamente de la capacidad del dispositivo.'
        ]
      }
    ],
    contactText: 'Consultas sobre los términos a través de conversordevideo.com.'
  },
  fr: {
    title: 'Conditions d’Utilisation',
    metaTitle: 'Conditions d’Utilisation — Convertisseur Vidéo Gratuit',
    metaDescription: 'Conditions d’utilisation de ConversordeVideo.com. Service gratuit de transcodage multimédia dans le navigateur.',
    badge: 'Conditions Générales',
    updatedDate: 'Août 2026',
    sections: [
      {
        title: '1. Acceptation des Conditions',
        paragraphs: [
          'En accédant à ConversordeVideo.com, vous acceptez les présentes conditions d’utilisation. Le service est fourni gratuitement pour un usage personnel et professionnel.'
        ]
      },
      {
        title: '2. Utilisation Conforme',
        paragraphs: [
          'Vous conservez l’entière responsabilité des fichiers traités. Vous vous engagez à respecter les droits d’auteur et les lois applicables.'
        ]
      },
      {
        title: '3. Performance Locale et Limitation de Responsabilité',
        paragraphs: [
          'Le service est fourni "en l’état". Le traitement étant exécuté sur votre équipement via WebAssembly, la vitesse dépend des capacités de votre processeur et de votre mémoire RAM.'
        ]
      }
    ],
    contactText: 'Pour toute question, contactez-nous via conversordevideo.com.'
  },
  ja: {
    title: '利用規約',
    metaTitle: '利用規約 — 無料オンライン動画変換ツール',
    metaDescription: 'ConversordeVideo.comの利用規約。ブラウザ内で安全に動画変換・圧縮を行う無料サービスの利用条件について。',
    badge: 'ご利用条件',
    updatedDate: '2026年8月',
    sections: [
      {
        title: '1. 規約への同意',
        paragraphs: [
          'ConversordeVideo.com をご利用いただくことで、本利用規約およびプライバシーポリシーに同意したものとみなされます。個人利用・商用利用を問わず完全無料でご利用いただけます。'
        ]
      },
      {
        title: '2. 適切な利用',
        paragraphs: [
          'ユーザーは変換するファイルの内容に関して全責任を負うものとします。著作権を侵害するファイルや違法なコンテンツの処理は禁止されています。'
        ]
      },
      {
        title: '3. ローカル処理と免責事項',
        paragraphs: [
          '本サービスは「現状有姿」で提供されます。すべての変換処理はお使いの端末の WebAssembly 上で実行されるため、変換速度はお使いの端末の CPU およびメモリ性能に依存します。'
        ]
      }
    ],
    contactText: 'ご不明な点は conversordevideo.com よりお問い合わせください。'
  },
  zh: {
    title: '服务条款',
    metaTitle: '服务条款 — 免费浏览器本地视频转换器',
    metaDescription: 'ConversordeVideo.com 服务条款。免费私密在线音视频转码工具的使用协议。',
    badge: '通用条款',
    updatedDate: '2026年8月',
    sections: [
      {
        title: '1. 条款接受',
        paragraphs: [
          '访问并使用 ConversordeVideo.com 即表示您同意本服务条款及隐私政策。本平台完全免费开放，支持个人及商业使用。'
        ]
      },
      {
        title: '2. 合规使用',
        paragraphs: [
          '用户对其转码的媒体文件承担全部责任。严禁利用本工具处理侵犯第三方知识产权或违反法律法规的内容。'
        ]
      },
      {
        title: '3. 本地计算与免责声明',
        paragraphs: [
          '本工具按“现状”提供。由于所有转码均依托 WebAssembly 在用户本地硬件运行，处理性能和速度直接取决于您设备的 CPU 和内存配置。'
        ]
      }
    ],
    contactText: '如有条款疑问，请通过 conversordevideo.com 咨询。'
  },
  no: {
    title: 'Brukervilkår',
    metaTitle: 'Brukervilkår — Gratis Videokonverterer',
    metaDescription: 'Brukervilkår for ConversordeVideo.com. Gratis verktøy for konvertering av video og lyd i nettleseren.',
    badge: 'Generelle Vilkår',
    updatedDate: 'August 2026',
    sections: [
      {
        title: '1. Aksept av Vilkår',
        paragraphs: [
          'Ved å bruke ConversordeVideo.com godtar du disse brukervilkårene. Tjenesten er 100% gratis for både personlig og profesjonell bruk.'
        ]
      },
      {
        title: '2. Ansvarlig Bruk',
        paragraphs: [
          'Du har det fulle ansvaret for filene du behandler. Det er forbudt å bruke verktøyet til opphavsrettsstridig materiale.'
        ]
      },
      {
        title: '3. Lokal Ytelse og Ansvarsfraskrivelse',
        paragraphs: [
          'Tjenesten leveres "som den er". Ettersom all behandling skjer via WebAssembly på din enhet, avhenger ytelsen av maskinvaren din.'
        ]
      }
    ],
    contactText: 'Spørsmål om vilkår rettes til conversordevideo.com.'
  },
  tr: {
    title: 'Kullanım Koşulları',
    metaTitle: 'Kullanım Koşulları — Ücretsiz Video Dönüştürücü',
    metaDescription: 'ConversordeVideo.com kullanım koşulları. Tarayıcı içi ücretsiz video ve ses dönüştürme kuralları.',
    badge: 'Genel Koşullar',
    updatedDate: 'Ağustos 2026',
    sections: [
      {
        title: '1. Koşulların Kabulü',
        paragraphs: [
          'ConversordeVideo.com sitesini kullanarak bu kullanım koşullarını kabul etmiş olursunuz. Hizmet kişisel ve ticari kullanım için tamamen ücretsizdir.'
        ]
      },
      {
        title: '2. Sorumlu Kullanım',
        paragraphs: [
          'Dönüştürülen dosyaların tüm yasal sorumluluğu kullanıcıya aittir. Telif hakkı ihlali oluşturan içeriklerin işlenmesi yasaktır.'
        ]
      },
      {
        title: '3. Yerel Performans ve Sorumluluk Reddi',
        paragraphs: [
          'Hizmet "olduğu gibi" sunulur. İşlemler WebAssembly ile yerel olarak gerçekleştiğinden, dönüştürme hızı cihazınızın donanım kapasitesine bağlıdır.'
        ]
      }
    ],
    contactText: 'Kullanım koşulları ile ilgili sorularınız için conversordevideo.com adresini ziyaret edin.'
  },
  pl: {
    title: 'Regulamin Serwisu',
    metaTitle: 'Regulamin Serwisu — Darmowy Konwerter Wideo',
    metaDescription: 'Regulamin i warunki korzystania z ConversordeVideo.com. Bezpłatne narzędzie do lokalnej konwersji wideo w przeglądarce.',
    badge: 'Warunki Ogólne',
    updatedDate: 'Sierpień 2026',
    sections: [
      {
        title: '1. Akceptacja Regulaminu',
        paragraphs: [
          'Korzystając z ConversordeVideo.com, akceptujesz niniejszy regulamin oraz politykę prywatności. Usługa jest w 100% bezpłatna do użytku prywatnego i komercyjnego.'
        ]
      },
      {
        title: '2. Odpowiedzialność Użytkownika',
        paragraphs: [
          'Użytkownik ponosi wyłączną odpowiedzialność za przetwarzane pliki. Zabronione jest przetwarzanie materiałów naruszających prawa autorskie.'
        ]
      },
      {
        title: '3. Wydajność Lokalna i Brak Gwarancji',
        paragraphs: [
          'Usługa jest świadczona w stanie "takim, w jakim jest". Ponieważ transkodowanie odbywa się w technologii WebAssembly, szybkość zależy od parametrów Twojego urządzenia.'
        ]
      }
    ],
    contactText: 'Pytania dotyczące regulaminu prosimy kierować przez stronę conversordevideo.com.'
  }
};

export const ABOUT_PAGES: Record<SupportedLanguage, LegalPageData> = {
  pt: {
    title: 'Sobre a Ferramenta',
    metaTitle: 'Sobre o Conversor de Vídeo — Tecnologia 100% no Navegador',
    metaDescription: 'Conheça o ConversordeVideo.com: a primeira ferramenta focada em privacidade real, sem upload e sem cadastro.',
    badge: 'Nossa Missão & Tecnologia',
    updatedDate: 'Agosto de 2026',
    sections: [
      {
        title: 'Por que criamos esta ferramenta?',
        paragraphs: [
          'Ao analisar o mercado tradicional de conversores de vídeo (como CloudConvert, Convertio e FreeConvert), notamos barreiras desnecessárias: filas de espera demoradas, limites rígidos de 100MB que bloqueiam vídeos comuns de celular e a exigência de enviar arquivos privados para servidores na nuvem.',
          'Construímos o ConversordeVideo.com para oferecer uma alternativa rápida, segura e sustentável.'
        ]
      },
      {
        title: 'Como funciona a tecnologia WebAssembly?',
        paragraphs: [
          'Utilizamos o FFmpeg WebAssembly (WASM). Em vez de enviar seu vídeo pela internet, o próprio motor de conversão é executado no processador do seu navegador.'
        ],
        listItems: [
          'Zero uso de upload de dados da sua internet;',
          'Velocidade imediata sem filas compartilhadas;',
          'Privacidade absoluta sob a LGPD e GDPR.'
        ]
      }
    ],
    contactText: 'Saiba mais acessando conversordevideo.com.'
  },
  en: {
    title: 'About the Technology',
    metaTitle: 'About In-Browser Video Conversion — WebAssembly Technology',
    metaDescription: 'Learn about ConversordeVideo.com: the privacy-first in-browser video converter powered by WebAssembly with zero uploads.',
    badge: 'Our Mission & Architecture',
    updatedDate: 'August 2026',
    sections: [
      {
        title: 'Why We Built ConversordeVideo.com',
        paragraphs: [
          'Traditional cloud converters impose artificial paywalls, 100MB file limits, slow shared queues, and force users to upload sensitive personal footage to third-party data centers.',
          'We engineered ConversordeVideo.com to prove that browser-local computing is faster, safer, and zero-cost for everyone.'
        ]
      },
      {
        title: 'How WebAssembly (FFmpeg.wasm) Works',
        paragraphs: [
          'By compiling FFmpeg directly into WebAssembly, your browser executes C/C++ video transcoding routines at near-native hardware speed on your device.'
        ],
        listItems: [
          'Zero mobile upload bandwidth consumed;',
          'Instant start with no server queue delays;',
          'Guaranteed privacy — your files stay strictly in device memory.'
        ]
      }
    ],
    contactText: 'Discover more at conversordevideo.com.'
  },
  es: {
    title: 'Sobre la Tecnología',
    metaTitle: 'Acerca de ConversordeVideo.com — Tecnología WebAssembly',
    metaDescription: 'Conozca ConversordeVideo.com: la herramienta de conversión de video local en el navegador sin subidas.',
    badge: 'Nuestra Misión y Tecnología',
    updatedDate: 'Agosto de 2026',
    sections: [
      {
        title: '¿Por qué creamos esta herramienta?',
        paragraphs: [
          'Los convertidores tradicionales en la nube imponen esperas largas y límites de 100MB obligando a subir videos privados a servidores remotos.',
          'ConversordeVideo.com ofrece una solución moderna, gratuita y 100% privada.'
        ]
      },
      {
        title: '¿Cómo funciona WebAssembly?',
        paragraphs: [
          'Compilamos FFmpeg en WebAssembly para que el motor de codificación se ejecute en tu propio dispositivo.'
        ],
        listItems: [
          'Cero consumo de datos de subida;',
          'Velocidad inmediata sin colas de espera;',
          'Privacidad absoluta garantizada.'
        ]
      }
    ],
    contactText: 'Más información en conversordevideo.com.'
  },
  fr: {
    title: 'À Propos de la Technologie',
    metaTitle: 'À Propos de ConversordeVideo.com — Technologie WebAssembly',
    metaDescription: 'Découvrez ConversordeVideo.com : le convertisseur vidéo local dans le navigateur sans aucun téléversement.',
    badge: 'Notre Mission & Technologie',
    updatedDate: 'Août 2026',
    sections: [
      {
        title: 'Pourquoi ce convertisseur a été créé ?',
        paragraphs: [
          'Les services cloud imposent des files d’attente et des limites de 100 Mo nécessitant le téléversement de vos fichiers privés.',
          'ConversordeVideo.com s’exécute localement avec une vitesse maximale et une confidentialité totale.'
        ]
      },
      {
        title: 'Comment fonctionne WebAssembly ?',
        paragraphs: [
          'FFmpeg est exécuté directement dans votre navigateur grâce à la technologie WebAssembly.'
        ],
        listItems: [
          'Aucune bande passante de téléversement requise ;',
          'Démarrage instantané sans files d’attente ;',
          'Confidentialité absolue sous le RGPD.'
        ]
      }
    ],
    contactText: 'En savoir plus sur conversordevideo.com.'
  },
  ja: {
    title: '技術について',
    metaTitle: 'WebAssembly技術について — 完全ブラウザ完結型動画変換',
    metaDescription: 'ConversordeVideo.comの開発方針。ファイルを送信することなくブラウザ内で動画を高速変換するWebAssembly技術について。',
    badge: 'ミッションと技術',
    updatedDate: '2026年8月',
    sections: [
      {
        title: 'なぜこのツールを開発したのか？',
        paragraphs: [
          '従来のクラウド型変換ツールは、順番待ちの発生や100MBの容量制限があり、プライベートな動画を海外サーバーに送信する必要がありました。',
          'ConversordeVideo.com は、誰でも安心して使える完全ローカル処理の動画変換ツールを提供します。'
        ]
      },
      {
        title: 'WebAssembly（FFmpeg WASM）の仕組み',
        paragraphs: [
          'FFmpeg をブラウザ上で動作する WebAssembly にコンパイルすることで、お使いの端末の CPU で直接動画をエンコードします。'
        ],
        listItems: [
          '動画アップロードによる通信量の消費ゼロ；',
          '待ち行列なしの即時変換；',
          '完全なプライバシーとセキュリティ。'
        ]
      }
    ],
    contactText: '詳細は conversordevideo.com をご覧ください。'
  },
  zh: {
    title: '关于技术',
    metaTitle: '关于浏览器本地 WebAssembly 视频转码技术',
    metaDescription: '了解 ConversordeVideo.com：基于 WebAssembly 的私密在线视频转换器，零文件上传。',
    badge: '技术愿景与架构',
    updatedDate: '2026年8月',
    sections: [
      {
        title: '为什么开发这款工具？',
        paragraphs: [
          '传统的云端转换网站普遍存在排队等待、100MB 严苛限制以及要求上传私密视频到远程服务器等痛点。',
          'ConversordeVideo.com 致力于通过前沿的浏览器本地计算解决上述问题。'
        ]
      },
      {
        title: 'WebAssembly (FFmpeg WASM) 如何工作？',
        paragraphs: [
          '通过将 FFmpeg 编译为 WebAssembly 字节码，转码引擎直接在您的浏览器中高速运行。'
        ],
        listItems: [
          '零上传流量消耗；',
          '即点即转，免排队；',
          '绝对私密安全，数据不出设备。'
        ]
      }
    ],
    contactText: '了解更多请访问 conversordevideo.com。'
  },
  no: {
    title: 'Om Teknologien',
    metaTitle: 'Om Teknologien — Nettleserbasert WebAssembly Videokonvertering',
    metaDescription: 'Lær om ConversordeVideo.com: personvernfokusert videokonverterer drevet av WebAssembly uten opplasting.',
    badge: 'Vår Misjon og Teknologi',
    updatedDate: 'August 2026',
    sections: [
      {
        title: 'Hvorfor vi bygget ConversordeVideo.com',
        paragraphs: [
          'Tradisjonelle konvertere krever opplasting av private videoer til eksterne servere og har strenge filgrenser.',
          'Vi utviklet en moderne løsning som kjører 100% på din egen enhet.'
        ]
      },
      {
        title: 'Hvordan WebAssembly fungerer',
        paragraphs: [
          'FFmpeg kjører direkte i nettleseren din for maksimal sikkerhet og fart.'
        ],
        listItems: [
          'Ingen mobildata brukt på opplasting;',
          'Ingen felles ventekøer;',
          'Fullt personvern under GDPR.'
        ]
      }
    ],
    contactText: 'Finn ut mer på conversordevideo.com.'
  },
  tr: {
    title: 'Teknoloji Hakkında',
    metaTitle: 'Teknoloji Hakkında — Tarayıcı İçi WebAssembly Video Dönüştürme',
    metaDescription: 'ConversordeVideo.com hakkında bilgi edinin: WebAssembly ile sunucuya yükleme yapmadan çalışan gizli video dönüştürücü.',
    badge: 'Misyonumuz ve Teknoloji',
    updatedDate: 'Ağustos 2026',
    sections: [
      {
        title: 'Neden Bu Aracı Geliştirdik?',
        paragraphs: [
          'Geleneksel bulut dönüştürücüler dosyalarınızı uzak sunuculara yüklemenizi zorunlu kılar ve bekleme kuyrukları uygular.',
          'ConversordeVideo.com tamamen cihazınızda çalışan güvenli ve ücretsiz bir alternatiftir.'
        ]
      },
      {
        title: 'WebAssembly Nasıl Çalışır?',
        paragraphs: [
          'FFmpeg doğrudan tarayıcınızda çalıştırılarak yerel donanım hızında dönüştürme sağlanır.'
        ],
        listItems: [
          'Yükleme için internet kotası harcanmaz;',
          'Sıra beklemeden anında dönüştürme;',
          '%100 veri gizliliği.'
        ]
      }
    ],
    contactText: 'Daha fazlası için conversordevideo.com adresini ziyaret edin.'
  },
  pl: {
    title: 'O Technologii',
    metaTitle: 'O Technologii — Konwersja Wideo w Przeglądarce z WebAssembly',
    metaDescription: 'Dowiedz się więcej o ConversordeVideo.com: bezpieczny konwerter wideo działający lokalnie bez wysyłania plików.',
    badge: 'Nasza Misja i Technologia',
    updatedDate: 'Sierpień 2026',
    sections: [
      {
        title: 'Dlaczego stworzyliśmy to narzędzie?',
        paragraphs: [
          'Tradycyjne konwertery w chmurze wymagają wysyłania prywatnych nagrań na obce serwery i nakładają limity 100 MB.',
          'ConversordeVideo.com oferuje nowoczesną, w 100% lokalną alternatywę.'
        ]
      },
      {
        title: 'Jak działa WebAssembly?',
        paragraphs: [
          'Silnik FFmpeg jest uruchamiany bezpośrednio w Twojej przeglądarce za pomocą WebAssembly.'
        ],
        listItems: [
          'Zero zużycia transferu internetowego na upload;',
          'Natychmiastowe działanie bez kolejek;',
          'Pełne bezpieczeństwo i zgodność z RODO.'
        ]
      }
    ],
    contactText: 'Więcej informacji na conversordevideo.com.'
  }
};
