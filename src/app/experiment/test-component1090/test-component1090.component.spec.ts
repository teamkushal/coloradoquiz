import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1090Component } from './test-component1090.component';

describe('TestComponent1090Component', () => {
  let component: TestComponent1090Component;
  let fixture: ComponentFixture<TestComponent1090Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1090Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
