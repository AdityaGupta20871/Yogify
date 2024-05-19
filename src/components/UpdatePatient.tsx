import { useState } from 'react';
import { Button, TextField, View } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';

const client = generateClient<Schema>();

function UpdatePatient() {
  const [patientId, setPatientId] = useState('');
  const [newCondition, setNewCondition] = useState('');

  const updatePatient = async () => {
    const patientToUpdate = {
      id: patientId,
      condition: newCondition,
    };
    const { data: updatedPatient } = await client.models.Patient.update(patientToUpdate);
    // Handle the updatedPatient data
  };

  return (
    <View>
      <TextField label="Patient ID" value={patientId} onChange={(e) => setPatientId(e.target.value)} />
      <TextField label="New Condition" value={newCondition} onChange={(e) => setNewCondition(e.target.value)} />
      <Button onClick={updatePatient}>Update Patient</Button>
    </View>
  );
}

export default UpdatePatient;
