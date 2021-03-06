import { useAppContext } from '../data/AppContext';

import FunctionDefinitions, {functionTypes} from '../data/FunctionDefinitions';

import {
  buildSequenceString,
  getFunctionOutput,
  parseCipherString,
  parseSequenceString,
  proceed
} from '../functions';


const useAppContextActions = () =>
{
  const [ state, setState ] = useAppContext();

  const handleChange = ({
    input = state.input,
    output = null,
    functions = state.functions,
    sequence = state.sequence
  }) =>
  {
    proceed(input, functions);

    output = output || getFunctionOutput(functions) || input;

    try
    {
      sequence.error = null;
      sequence.value = buildSequenceString(functions);
    }
    catch (e)
    {
      sequence.error = e.message;
    }

    setState({ input, output, functions, sequence });
  };

  return {
    createFunction({
      index = state.functions.length,
      name = '',
      args = FunctionDefinitions.getArgs(name),
      enabled = true
    })
    {
      let functions = [ ...state.functions ];
      functions.splice(index, 0, { name, args, enabled });
      handleChange({ functions });
    },

    updateFunction({ index, name, args, enabled = true })
    {
      let functions = [ ...state.functions ];
      let fn = functions[index];

      if (state.functions[index].name !== name)
      {
        args = FunctionDefinitions.getArgs(name);
      }
      else args = args ?? fn.args;

      functions.splice(index, 1, { name: name ?? fn.name, args, enabled });

      handleChange({ functions });
    },

    deleteFunction({ index })
    {
      let functions = state.functions.filter((_, i) => index !== i);

      handleChange({ functions });
    },

    clearFunctions()
    {
      handleChange({ functions: [] });
    },

    invertFunctions()
    {
      let functions = state.functions
        .map(fn =>
        {
          let definition = FunctionDefinitions.exist(fn.name)
            ? FunctionDefinitions.get(fn.name)
            : {};

          switch (definition.type)
          {
            default:
              return { name: '', args: [], enabled: fn.enabled };

            case functionTypes.involutory:
              return { name: fn.name, args: [], enabled: fn.enabled };

            case functionTypes.involutoryNegatedArgs:
              return {
                name: fn.name,
                args: fn.args.map(arg => arg * -1),
                enabled: fn.enabled
              };

            case functionTypes.involutoryCounterFn:
              // TODO: How to handle arguments?
              return {
                name: definition.counterFn,
                args: [],
                enabled: fn.enabled
              };

            case functionTypes.nonInvolutory:
              return {
                name: fn.name,
                args: fn.args.concat(),
                enabled: false
              };
          }
        })
        .reverse();

      handleChange({
        input: state.output,
        output: state.input,
        functions
      });
    },

    moveFunction(index, direction)
    {
      if ((index + direction < 0)
        || (index + direction > state.functions.length - 1))
      {
        return;
      }

      let functions = state.functions.concat();
      let fn = functions.splice(index, 1);

      functions.splice(index + direction, 0, fn.shift());

      handleChange({ functions });
    },

    setInputString(input)
    {
      handleChange({ input });
    },

    setSequenceString(string)
    {
      let functions = [];
      let sequence = { value: string, error: null };

      try
      {
        if (string.length > 0)
        {
          functions = parseSequenceString(string);
        }
      }
      catch (e)
      {
        sequence.error = e.message;
      }

      proceed(state.input, functions);

      let output = getFunctionOutput(functions) || state.input;

      setState({ output, functions, sequence });
    },

    setCipherString(string)
    {
      const [ input, sequence ] = parseCipherString(string);
      const functions = parseSequenceString(sequence);

      handleChange({ input, functions });
    }
  };
};

export default useAppContextActions;
