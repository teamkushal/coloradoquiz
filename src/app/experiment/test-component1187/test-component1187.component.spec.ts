import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1187Component } from './test-component1187.component';

describe('TestComponent1187Component', () => {
  let component: TestComponent1187Component;
  let fixture: ComponentFixture<TestComponent1187Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1187Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
