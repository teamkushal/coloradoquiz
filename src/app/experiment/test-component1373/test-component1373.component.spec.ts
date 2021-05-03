import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1373Component } from './test-component1373.component';

describe('TestComponent1373Component', () => {
  let component: TestComponent1373Component;
  let fixture: ComponentFixture<TestComponent1373Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1373Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
