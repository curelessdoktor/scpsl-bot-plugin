using CommandSystem;
using System;
using System.Linq;

namespace SCPSLBot.Navigation.Commands
{
    internal class NavVertex : ParentCommand
    {
        public override string Command { get; } = "vertex";

        public override string[] Aliases { get; } = new string[] { };

        public override string Description { get; } = "Manipulates navigation mesh vertices.";

        public override void LoadGeneratedCommands()
        {
            this.RegisterCommand(new NavVertexCreateCommand());
            this.RegisterCommand(new NavVertexDeleteCommand());
            this.RegisterCommand(new NavVertexMoveCommand());
            this.RegisterCommand(new NavVertexSelectAddCommand());
            this.RegisterCommand(new NavVertexSelectClearCommand());
            this.RegisterCommand(new NavVertexSelectRemoveCommand());
            this.RegisterCommand(new NavVertexSelectStartCommand());
            this.RegisterCommand(new NavVertexSelectStopCommand());
        }

        protected override bool ExecuteParent(ArraySegment<string> arguments, ICommandSender sender, out string response)
        {
            var subCommands = Commands.Keys.ToArray();
            response = $"Please specify a valid subcommand. ({string.Join("/", subCommands)})";
            return false;
        }
    }
}
