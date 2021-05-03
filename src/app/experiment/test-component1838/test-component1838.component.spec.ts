import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1838Component } from './test-component1838.component';

describe('TestComponent1838Component', () => {
  let component: TestComponent1838Component;
  let fixture: ComponentFixture<TestComponent1838Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1838Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
