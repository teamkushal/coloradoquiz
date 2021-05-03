import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1629Component } from './test-component1629.component';

describe('TestComponent1629Component', () => {
  let component: TestComponent1629Component;
  let fixture: ComponentFixture<TestComponent1629Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1629Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
