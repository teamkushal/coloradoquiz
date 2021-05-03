import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent524Component } from './test-component524.component';

describe('TestComponent524Component', () => {
  let component: TestComponent524Component;
  let fixture: ComponentFixture<TestComponent524Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent524Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
