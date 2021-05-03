import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent344Component } from './test-component344.component';

describe('TestComponent344Component', () => {
  let component: TestComponent344Component;
  let fixture: ComponentFixture<TestComponent344Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent344Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
