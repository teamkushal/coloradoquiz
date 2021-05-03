import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1452Component } from './test-component1452.component';

describe('TestComponent1452Component', () => {
  let component: TestComponent1452Component;
  let fixture: ComponentFixture<TestComponent1452Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1452Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
