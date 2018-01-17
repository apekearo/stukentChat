import { Picker } from 'emoji-mart';

<Picker set='twitter' />;
<Picker onClick={this.addEmoji} />;
<Picker title='Pick your emoji…' emoji='point_up' />;
<Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />;
<Picker i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }} />;

export default Picker;