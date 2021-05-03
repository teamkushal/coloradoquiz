import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1418Component } from './test-component1418.component';

describe('TestComponent1418Component', () => {
  let component: TestComponent1418Component;
  let fixture: ComponentFixture<TestComponent1418Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1418Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
