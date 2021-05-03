import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3983Component } from './test-component3983.component';

describe('TestComponent3983Component', () => {
  let component: TestComponent3983Component;
  let fixture: ComponentFixture<TestComponent3983Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3983Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
