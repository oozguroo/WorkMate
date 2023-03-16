import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { MembersService } from 'src/app/_services/members.service';
import { PresenceService } from 'src/app/_services/presence.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member | undefined;
  constructor(
    private memberService: MembersService,
    private alertifyService: AlertifyService,
    public presenceService: PresenceService
  ) {}

  ngOnInit(): void {}
  addLike(member: Member) {
    this.memberService.addLike(member.userName).subscribe({
      next: () =>
        this.alertifyService.success('You have liked' + member.knownAs),
    });
  }
}
