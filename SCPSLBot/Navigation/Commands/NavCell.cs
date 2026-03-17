using CommandSystem;
using System;
using System.Linq;

namespace SCPSLBot.Navigation.Commands
{
    internal class NavCell : ParentCommand
    {
        public override string Command { get; } = "cell";

        public override string[] Aliases { get; } = new string[] { };

        public override string Description { get; } = "Manipulates navigation mesh cells.";

        public override void LoadGeneratedCommands()
        {
            this.RegisterCommand(new NavCellMakeCommand());
            this.RegisterCommand(new NavCellDissolveCommand());
            this.RegisterCommand(new NavCellCacheCommand());
            this.RegisterCommand(new NavCellEdgeSliceCommand());
            this.RegisterCommand(new NavCellTraceCommand());
            this.RegisterCommand(new NavCellVertexCreateCommand());
        }

        protected override bool ExecuteParent(ArraySegment<string> arguments, ICommandSender sender, out string response)
        {
            var subCommands = Commands.Keys.ToArray();
            response = $"Please specify a valid subcommand. ({string.Join("/", subCommands)})";
            return false;
        }
    }
}
