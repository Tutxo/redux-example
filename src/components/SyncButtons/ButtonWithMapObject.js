import React from 'react';
import { connect } from 'react-redux';
import { setAtmosphereLayerPosition } from '../../redux/ducks/atmosphere';
import { StyledButton } from '../StyledButton/StyledButton';

const Button = ({ atmosphereLayerPosition, atmosphereLayers, setAtmosphereLayerPosition }) => {
    const topPosition = atmosphereLayers.length - 1;
    let position = atmosphereLayerPosition + 1;

    if (topPosition === atmosphereLayerPosition) {
        position = 0;
    }

    return (
        <StyledButton 
            onClick={() => setAtmosphereLayerPosition(position)}
            label='map dispatch object'
        >
            Next layer (pos: { atmosphereLayerPosition })
        </StyledButton>
    );
};

const mapStateToProps = (state) => {
    const { atmosphereLayerPosition, atmosphereLayers } = state.atmosphereReducer;

    return {
        atmosphereLayerPosition, 
        atmosphereLayers
    }
};

const mapDispatchToProps = { setAtmosphereLayerPosition };

const ConnectedButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export { ConnectedButton as ButtonWithMapObject};