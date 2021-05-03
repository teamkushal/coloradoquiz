import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1441Component } from './test-component1441.component';

describe('TestComponent1441Component', () => {
  let component: TestComponent1441Component;
  let fixture: ComponentFixture<TestComponent1441Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1441Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
