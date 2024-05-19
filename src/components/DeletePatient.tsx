import { useState } from 'react';
import { Button, TextField, View } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';

const client = generateClient<Schema>();

function DeletePatient() {
  const [patientId, setPatientId] = useState('');

  const deletePatient = async () => {
    const toBeDeletedPatient = { id: patientId };
    const { data: deletedPatient } = await client.models.Patient.delete(toBeDeletedPatient);
    // Handle the deletedPatient data
  };

  return (
    <View>
      <TextField label="Patient ID" value={patientId} onChange={(e) => setPatientId(e.target.value)} />
      <Button onClick={deletePatient}>Delete Patient</Button>
    </View>
  );
}

export default DeletePatient;
