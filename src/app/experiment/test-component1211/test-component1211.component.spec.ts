import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1211Component } from './test-component1211.component';

describe('TestComponent1211Component', () => {
  let component: TestComponent1211Component;
  let fixture: ComponentFixture<TestComponent1211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1211Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
