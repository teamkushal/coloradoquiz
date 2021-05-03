import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1345Component } from './test-component1345.component';

describe('TestComponent1345Component', () => {
  let component: TestComponent1345Component;
  let fixture: ComponentFixture<TestComponent1345Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1345Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
