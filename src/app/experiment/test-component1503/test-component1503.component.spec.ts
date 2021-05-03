import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1503Component } from './test-component1503.component';

describe('TestComponent1503Component', () => {
  let component: TestComponent1503Component;
  let fixture: ComponentFixture<TestComponent1503Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1503Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
