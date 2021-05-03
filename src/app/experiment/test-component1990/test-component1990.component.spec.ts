import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1990Component } from './test-component1990.component';

describe('TestComponent1990Component', () => {
  let component: TestComponent1990Component;
  let fixture: ComponentFixture<TestComponent1990Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1990Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
