import { useState } from 'react';
import { Button, TextField, View } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';

const client = generateClient<Schema>();

function CreatePatient() {
  const [name, setName] = useState('');
  const [condition, setCondition] = useState('');
  const [treatment, setTreatment] = useState('');
  const [isAdmitted, setIsAdmitted] = useState(true);

  const createPatient = async () => {
    const { errors, data: newPatient } = await client.models.Patient.create({
      name,
      condition,
      treatment,
      isAdmitted,
    });
    // Handle the newPatient data or errors
  };

  return (
    <View>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Condition" value={condition} onChange={(e) => setCondition(e.target.value)} />
      <TextField label="Treatment" value={treatment} onChange={(e) => setTreatment(e.target.value)} />
      <Button onClick={createPatient}>Create Patient</Button>
    </View>
  );
}

export default CreatePatient;
