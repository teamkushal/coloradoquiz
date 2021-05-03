import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1028Component } from './test-component1028.component';

describe('TestComponent1028Component', () => {
  let component: TestComponent1028Component;
  let fixture: ComponentFixture<TestComponent1028Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1028Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
