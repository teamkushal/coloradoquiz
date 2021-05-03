import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1419Component } from './test-component1419.component';

describe('TestComponent1419Component', () => {
  let component: TestComponent1419Component;
  let fixture: ComponentFixture<TestComponent1419Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1419Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
