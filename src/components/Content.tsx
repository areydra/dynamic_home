import React, { useEffect, useState } from 'react';
import {
  FlatList,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Section from './Section';
import { setShouldShowHomeComponent } from '../store/actions/homeActions';
import homeStore from '../store/reducers/homeStore';

const DataComponents = [
  {
    slot: 'twoxtwo',
    components: ['edit', 'reload_instructions'],
  },
  {
    slot: 'twoxtwo',
    components: ['edit', 'debug_instructions'],
  },
  {
    slot: 'onexone',
    components: ['debug_instructions'],
  },
  {
    slot: 'onexone',
    components: ['learn_more'],
  },
];

const Slot = ({ size, components }: { size: string, components: Array<string>}) => {
  switch (size) {
    case 'twoxtwo':
      return (
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
          <View style={{
            width: '50%',
            overflow: 'hidden',
          }}>
            <Components card={components[0]}/>
          </View>
          <View style={{
            width: '50%',
            overflow: 'hidden',
          }}>
            <Components card={components[1]}/>
          </View>
        </View>
      );
    case 'onexone':
      return (
        <View>
          <Components card={components[0]}/>
        </View>
      );
    default:
      return <React.Fragment/>;
  }
};

const Components = ({ card }: { card: string}) => {
  switch (card) {
    case 'edit':
      return (
        <Section title="Step One">
          Edit <Text style={{ fontWeight: '700' }}>App.tsx</Text> to change this
          screen and then come back to see your edits.
        </Section>
      );
    case 'reload_instructions':
      return (
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
      );
    case 'debug_instructions':
      return (
        <Section title="Debug">
          <DebugInstructions />
        </Section>
      );
    case 'learn_more':
      return (
        <React.Fragment>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </React.Fragment>
      );
    default:
      return <React.Fragment/>;
  }
}

const Content = () => {
  const shouldShowHomeComponent = homeStore().homeState.shouldShowHomeComponent;

  const [data, setData] = useState<{slot: string, components: Array<string>}[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData(DataComponents);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {data.length ? (
        <FlatList
          data={DataComponents}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <Slot
              size={item.slot}
              components={item.components}
            />
          )}
          scrollEnabled={false}
          onLayout={(event: LayoutChangeEvent) => {
            if (event.nativeEvent.layout.height && !shouldShowHomeComponent) {
              setShouldShowHomeComponent(true);
            }
          }}
        />
      ) : (
        <React.Fragment/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default Content;
