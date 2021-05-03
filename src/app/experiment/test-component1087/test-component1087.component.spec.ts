import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1087Component } from './test-component1087.component';

describe('TestComponent1087Component', () => {
  let component: TestComponent1087Component;
  let fixture: ComponentFixture<TestComponent1087Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1087Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
