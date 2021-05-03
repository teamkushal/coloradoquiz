import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1053Component } from './test-component1053.component';

describe('TestComponent1053Component', () => {
  let component: TestComponent1053Component;
  let fixture: ComponentFixture<TestComponent1053Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1053Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
