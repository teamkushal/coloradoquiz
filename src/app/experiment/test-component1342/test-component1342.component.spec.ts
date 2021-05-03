import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1342Component } from './test-component1342.component';

describe('TestComponent1342Component', () => {
  let component: TestComponent1342Component;
  let fixture: ComponentFixture<TestComponent1342Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1342Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
