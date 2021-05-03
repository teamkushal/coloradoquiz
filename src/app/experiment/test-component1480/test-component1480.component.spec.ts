import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1480Component } from './test-component1480.component';

describe('TestComponent1480Component', () => {
  let component: TestComponent1480Component;
  let fixture: ComponentFixture<TestComponent1480Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1480Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
