import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1370Component } from './test-component1370.component';

describe('TestComponent1370Component', () => {
  let component: TestComponent1370Component;
  let fixture: ComponentFixture<TestComponent1370Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1370Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
