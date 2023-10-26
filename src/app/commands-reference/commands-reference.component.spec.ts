import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsReferenceComponent } from './commands-reference.component';

describe('CommandsReferenceComponent', () => {
  let component: CommandsReferenceComponent;
  let fixture: ComponentFixture<CommandsReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandsReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandsReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
