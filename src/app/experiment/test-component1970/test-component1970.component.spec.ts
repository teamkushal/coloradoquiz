import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1970Component } from './test-component1970.component';

describe('TestComponent1970Component', () => {
  let component: TestComponent1970Component;
  let fixture: ComponentFixture<TestComponent1970Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1970Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
